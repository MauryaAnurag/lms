import { getProgress } from "@/actions/get-progress";
import { db } from "@/lib/db";
import { auth } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";
export const dynamic = 'force-dynamic';


export async function GET(req: NextRequest, { params }: { params: { courseId: string } }) {
    try {
      const { userId } = auth();
      if (!userId) {
        return new NextResponse("Unauthorized", { status: 401 });
      }
  
      // Fetch the course by ID along with chapters and user progress
      const course = await db.course.findUnique({
        where: {
          id: params.courseId,
        },
        include: {
          chapters: {
            where: {
              isPublished: true,
            },
            include: {
              userProgress: {
                where: {
                  userId,
                },
              },
            },
            orderBy: {
              position: "asc",
            },
          },
        },
      });
  
      if (!course) {
        return new NextResponse("Course not found", { status: 404 });
      }
  
      // Calculate the overall progress of the course
      const progressCount = await getProgress(userId, course.id);
  
      // Include the overall progress count in the response
      return NextResponse.json({ ...course, progress: progressCount });
    } catch (error) {
      console.log("[FETCH_COURSE_ERROR]", error);
      return new NextResponse("Internal Server Error", { status: 500 });
    }
  }