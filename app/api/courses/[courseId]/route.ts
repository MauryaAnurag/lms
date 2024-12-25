import Mux from "@mux/mux-node";
import { auth } from "@/lib/utils";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";

const { Video } = new Mux(
  process.env.MUX_TOKEN_ID!,
  process.env.MUX_TOKEN_SECRET!,
);
export const dynamic = 'force-dynamic';

export async function DELETE(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId: userId,
      },
      include: {
        chapters: {
          include: {
            muxData: true,
          }
        }
      }
    });

    if (!course) {
      return new NextResponse("Not found", { status: 404 });
    }

    for (const chapter of course.chapters) {
      if (chapter.muxData?.assetId) {
        await Video.Assets.del(chapter.muxData.assetId);
      }
    }

    const deletedCourse = await db.course.delete({
      where: {
        id: params.courseId,
      },
    });

    return NextResponse.json(deletedCourse);
  } catch (error) {
    console.log("[COURSE_ID_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const { userId } = auth();
    const { courseId } = params;
    const values = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await db.course.update({
      where: {
        id: courseId,
        userId
      },
      data: {
        ...values,
      }
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log("[COURSE_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  const { courseId } = params;  // Extract courseId from params
  const { userId } = auth();    // Get the authenticated user's ID
  
  // If no userId is found, return Unauthorized
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    // Fetch course details, including chapters and attachments, ordered by position and creation date
    const course = await db.course.findUnique({
      where: {
        id: courseId,
        userId,  // Ensure the course belongs to the authenticated user
      },
      include: {
        chapters: {
          orderBy: {
            position: 'asc',  // Order chapters by position
          },
        },
        attachments: {
          orderBy: {
            createdAt: 'desc',  // Order attachments by creation date
          },
        },
      },
    });

    if (!course) {
      return new NextResponse("Course not found", { status: 404 });
    }

    // Fetch categories, ordered by name
    const categories = await db.category.findMany({
      orderBy: {
        name: 'asc',  // Order categories by name
      },
    });

    // Respond with the course and categories
    return NextResponse.json({
      course,        // Return the course with its chapters and attachments
      categories,    // Return the categories list
    });
  } catch (error) {
    console.error("Error fetching course details:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}