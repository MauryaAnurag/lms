import { auth } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

import { db } from "@/lib/db";
import { isTeacher } from "@/lib/teacher";

export const dynamic = 'force-dynamic';

export async function POST(
  req: Request,
) {
  try {
    const { userId } = auth();
    const { title } = await req.json();

    if (!userId || !isTeacher(userId)) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await db.course.create({
      data: {
        userId,
        title,
      }
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log("[COURSES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}


export async function OPTIONS(
  req: Request,
) {
  return NextResponse.json({
    status: 200});
}


// Define the GET API function
export async function GET(req: NextRequest) {
  try {
    // Get the userId from Clerk's auth function
    const { userId } = auth();

    // If there's no userId, return an Unauthorized response
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // Fetch courses for the authenticated user, ordered by creation date
    const courses = await db.course.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: 'desc', // Sort courses by created date in descending order
      },
    });

    // If no courses are found, return an empty array
    if (!courses || courses.length === 0) {
      return NextResponse.json([]);
    }

    // Return the list of courses
    return NextResponse.json(courses);
  } catch (error) {
    console.error('[FETCH_COURSES_API_ERROR]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}