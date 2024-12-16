import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/utils"; // Assuming you are using Clerk for authentication
import { getCourses } from "@/actions/get-courses";

export async function GET(req: NextRequest) {
  try {
    // Get the userId from Clerk's auth function
    const { userId } = auth();

    // If there's no userId, return an Unauthorized response
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Fetch categories from the database, ordered by name in ascending order
    const categories = await db.category.findMany({
      orderBy: {
        name: "asc", // Sort categories by name in ascending order
      },
    });

    // If no categories are found, return an empty array
    if (!categories || categories.length === 0) {
      return NextResponse.json({ categories: [], courses: [] });
    }

     const { searchParams } = req.nextUrl;
     const title = searchParams.get("title") || undefined;
     const categoryId = searchParams.get("categoryId") || undefined;
 
    const courses = await getCourses({ userId, title, categoryId });

    // Return both categories and courses
    return NextResponse.json({ categories, courses });
  } catch (error) {
    console.error("[FETCH_CATEGORIES_AND_COURSES_API_ERROR]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
