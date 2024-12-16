// File: app/api/sessions/route.ts

import { NextResponse } from "next/server";
import { db } from "@/lib/db"; // Prisma instance

export async function GET() {
  try {
    const sessions = await db.session.findMany({
      orderBy: { startTime: 'asc' }, // Order sessions by start time
    });

    return NextResponse.json(sessions);
  } catch (error) {
    console.error("[ALL SESSIONS FETCH ERROR]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
