import Razorpay from "razorpay";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { auth } from "@/lib/utils";

// Initialize Razorpay with your credentials
const razorpay = new Razorpay({
  key_id: "rzp_test_fBttTZVJm9TsAD",
  key_secret: "nfvZZg9IYHRNCS1Ltprzv5x1",
});

export async function POST(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {

    const { userId } = auth();
    const { couponCode } = await req.json();
    // Find the course
    const course = await db.course.findUnique({
      where: {
        id: params.courseId,
        isPublished: true,
      }
    });

    // Check if the user has already purchased the course
    const purchase = await db.purchase.findUnique({
      where: {
        userId_courseId: {
          userId: userId,
          courseId: params.courseId
        }
      }
    });

    if (purchase) {
      return new NextResponse("Already purchased", { status: 400 });
    }

    if (!course) {
      return new NextResponse("Not found", { status: 404 });
    }

    // Calculate the discounted price (if applicable)
    let discountedPrice = course.price!;

    if (couponCode) {
      // Validate coupon and apply discount if valid
      const coupon = await db.coupon.findUnique({
        where: { code: couponCode },
      });

      if (coupon) {
        // Apply discount
        discountedPrice = discountedPrice * (1 - coupon.discountPercentage / 100);
      }
    }

    // Prepare the Razorpay order
    const order = await razorpay.orders.create({
      amount: Math.round(discountedPrice * 100), // Razorpay expects the amount in paise
      currency: "INR",
      receipt: `order_rcptid_${Math.random()}`,
      payment_capture: true,
      notes: {
        courseId: course.id,
        userId: userId,
      },
    });



    // Return the order details to the frontend
    return NextResponse.json({
      orderId: order.id,
      key_id: process.env.RAZORPAY_KEY_ID, // Send Razorpay Key ID to the frontend
    });

  } catch (error) {
    console.error("[COURSE_CHECKOUT_RAZORPAY]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
