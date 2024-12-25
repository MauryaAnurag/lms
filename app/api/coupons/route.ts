// pages/api/admin/coupons.ts

import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db"; // Assuming you have a db instance for Prisma

export const dynamic = 'force-dynamic';


export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { couponCode } = await req.json();
        console.log( req.body)
        // Validate if couponCode is provided
        if (!couponCode) {
            return NextResponse.json({ message: "Coupon code is required" }, { status: 400 });
        }

        // Fetch the coupon from the database
        const coupon = await db.coupon.findUnique({
            where: { code: couponCode }
        });

        // If the coupon doesn't exist
        if (!coupon) {
            return NextResponse.json({ valid: false }, { status: 200 });
        }

        // If coupon is found, return discount percentage
        return NextResponse.json({
            valid: true,
            discountPercentage: coupon.discountPercentage,
        }, { status: 200 });
    } catch (error) {
        console.error("Error applying coupon:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 200 });
    }
}


export async function GET(req: NextRequest) {
    try {
        // Fetch all coupons from the database
        const coupons = await db.coupon.findMany();

        // If no coupons exist, return an empty array
        if (!coupons || coupons.length === 0) {
            return NextResponse.json({ message: "No coupons found" }, { status: 200 });
        }

        // Return the list of coupons
        return NextResponse.json(coupons, { status: 200 });
    } catch (error) {
        console.error("Error fetching coupons:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

// Update Coupon
export async function PUT(req: NextRequest, res: NextResponse) {
    try {
      const { id, code, discountPercentage } = await req.json();
  
      // Validation
      if (!code || !discountPercentage) {
        return NextResponse.json({ message: "Code and Discount are required" }, { status: 400 });
      }
  
      const updatedCoupon = await db.coupon.update({
        where: { id },
        data: {
          code,
          discountPercentage,
        },
      });
  
      return NextResponse.json(updatedCoupon, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
  }
  
  // Delete Coupon
  export async function DELETE(req: NextRequest, res: NextResponse) {
    try {
      const { id } = await req.json();
  
      const deletedCoupon = await db.coupon.delete({
        where: { id },
      });
  
      return NextResponse.json(deletedCoupon, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
  }