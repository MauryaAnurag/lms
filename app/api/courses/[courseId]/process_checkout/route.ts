// /app/api/courses/[courseId]/verify-payment/route.ts

import Razorpay from "razorpay";
import { NextResponse } from "next/server";
import { db } from "@/lib/db"; // Assuming you're using Prisma for DB management
import { auth } from "@/lib/utils";

// Initialize Razorpay with your credentials
const razorpay = new Razorpay({
    key_id: "rzp_test_fBttTZVJm9TsAD",
    key_secret: "nfvZZg9IYHRNCS1Ltprzv5x1",
});


export const dynamic = 'force-dynamic';


export async function POST(req: Request, { params }: { params: { courseId: string } }) {
    try {
        // Get the payment details from the request body
        const { razorpayPaymentId, razorpayOrderId, razorpaySignature } = await req.json();
        const { userId } = await auth(req);
        if (!userId) {
            return new NextResponse("User not authenticated", { status: 401 });
        }
        // Fetch the order from Razorpay using the orderId
        const order = await razorpay.orders.fetch(razorpayOrderId);

        // Verify the Razorpay signature
        const isValidSignature = Razorpay.validateWebhookSignature(
            `${razorpayOrderId}|${razorpayPaymentId}`,
            razorpaySignature,
            "nfvZZg9IYHRNCS1Ltprzv5x1"
        );

        if (!isValidSignature) {
            return new NextResponse("Invalid payment signature", { status: 400 });
        }

        // If payment is valid, update the database
        await db.purchase.create({
            data: {
                userId: userId, // You need to handle user information
                courseId: params.courseId,
                // paymentId: razorpayPaymentId,
                // orderId: razorpayOrderId,
                // status: "completed", // Mark as completed
            },
        });

        // Return success response
        return new NextResponse("Payment verified and updated", { status: 200 });
    } catch (error) {
        console.error("Error verifying payment:", error);
        return new NextResponse("Internal server error", { status: 500 });
    }
}
