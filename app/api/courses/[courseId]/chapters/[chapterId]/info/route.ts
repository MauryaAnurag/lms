// app/api/chapter/[courseId]/[chapterId]/route.ts

import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/utils"; // Assuming you're using Clerk or another auth solution
import { Attachment } from "@prisma/client"; // Assuming you have Attachment model in Prisma

// API route to fetch chapter details
export async function GET(req: NextRequest, { params }: { params: { courseId: string; chapterId: string } }) {
  try {
    const { userId } = auth(); // Retrieve userId from authentication system

    // If there's no userId, return an Unauthorized response
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { courseId, chapterId } = params; // Extract courseId and chapterId from URL parameters

    // Fetch the purchase status for the user for this course
    const purchase = await db.purchase.findUnique({
      where: {
        userId_courseId: { userId, courseId },
      },
    });

    // Fetch course details, only if it is published
    const course = await db.course.findUnique({
      where: { id: courseId, isPublished: true },
      select: { price: true },
    });

    // Fetch chapter details, only if it is published
    const chapter = await db.chapter.findUnique({
      where: { id: chapterId, isPublished: true },
    });

    // If chapter or course is not found, return a 404
    if (!chapter || !course) {
      return new NextResponse("Chapter or Course not found", { status: 404 });
    }

    let muxData = null;
    let attachments: Attachment[] = []; // Explicitly typed as Attachment[]
    let nextChapter = null;

    // If the chapter is free or user has purchased the course, fetch additional data
    if (purchase || chapter.isFree) {
      attachments = await db.attachment.findMany({
        where: { courseId },
      });

      muxData = await db.muxData.findUnique({
        where: { chapterId },
      });

      // Fetch the next chapter based on position in the course
      nextChapter = await db.chapter.findFirst({
        where: {
          courseId,
          isPublished: true,
          position: { gt: chapter.position },
        },
        orderBy: { position: "asc" },
      });
    }

    // Fetch user progress for this chapter
    const userProgress = await db.userProgress.findUnique({
      where: { userId_chapterId: { userId, chapterId } },
    });

    // Return the data in JSON format
    return NextResponse.json({
      chapter,
      course,
      muxData,
      attachments,
      nextChapter,
      userProgress,
      purchase,
    });

  } catch (error) {
    console.error("[GET_CHAPTER_API_ERROR]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
