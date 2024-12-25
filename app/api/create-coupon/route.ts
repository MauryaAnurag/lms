// pages/api/admin/coupons.ts

import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db"; // Assuming you have a db instance for Prisma
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { code, discountPercentage } = await req.json();

    // Validation
    if (!code || !discountPercentage) {
      return NextResponse.json({ message: "Code and Discount are required" }, { status: 400 });
    }

    const existingCoupon = await db.coupon.findUnique({
      where: { code },
    });

    if (existingCoupon) {
      return NextResponse.json({ message: "Coupon already exists" }, { status: 400 });
    }

    const newCoupon = await db.coupon.create({
      data: {
        code,
        discountPercentage,
      },
    });

    return NextResponse.json(newCoupon, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
