import { db } from "@/lib/db";  // Make sure this is where you have your Prisma instance
import { auth } from "@/lib/utils"; // Assuming you have an auth function to check if the user is authenticated
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

// Handle session creation
export async function POST(req: Request) {
  try {
    // Get the userId from authentication (you might have your own auth method)
    const { userId } = await auth(req);

    // If no user is authenticated, return 401 Unauthorized
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Parse request body (assumed format)
    const { title, price, startTime, endTime, googleMeetLink } = await req.json();

    // Validate input fields (basic validation)
    if (!title || !price || !startTime || !endTime || !googleMeetLink) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    // Create the session in the database
    const session = await db.session.create({
      data: {
        title,
        price: parseFloat(price),
        startTime: new Date(startTime), // Convert the string date to a Date object
        endTime: new Date(endTime),     // Convert the string date to a Date object
        googleMeetLink,
      },
    });

    // Return the created session
    return NextResponse.json(session);
  } catch (error) {
    console.error("[SESSION CREATION ERROR]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET(req: Request) {
    try {
      const { searchParams } = new URL(req.url);
      const sessionId = searchParams.get("sessionId");
  
      if (!sessionId) {
        return new NextResponse("Session ID is required", { status: 400 });
      }
  
      // Fetch session details from the database
      const session = await db.session.findUnique({
        where: { id: sessionId },
      });
  
      if (!session) {
        return new NextResponse("Session not found", { status: 404 });
      }
  
      // Return session details
      return NextResponse.json(session);
    } catch (error) {
      console.error("[SESSION FETCH ERROR]", error);
      return new NextResponse("Internal Server Error", { status: 500 });
    }
  }
  