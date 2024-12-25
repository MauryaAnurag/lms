import Razorpay from 'razorpay';
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { auth } from '@/lib/utils';

const razorpay = new Razorpay({
  key_id: "rzp_test_fBttTZVJm9TsAD",
  key_secret: "nfvZZg9IYHRNCS1Ltprzv5x1",
});

export const dynamic = 'force-dynamic';

export async function POST(req: Request, { params }: { params: { sessionId: string } }) {
  const { couponCode } = await req.json();  // Get coupon code if needed
  const sessionId = params.sessionId;

  try {
    const { userId } = await auth(req); // Get user info from the auth function

    // Fetch the session details
    const session = await db.session.findUnique({
      where: {
        id: sessionId,
      },
    });

    if (!session) {
      return NextResponse.json({ message: 'Session not found' }, { status: 404 });
    }

    // For simplicity, we are using the session price directly.
    // You can add logic to apply couponCode to adjust the price if needed
    const discountedPrice = session.price;

    // Create Razorpay order for the session
    const order = await razorpay.orders.create({
      amount: Math.round(discountedPrice * 100), // Amount in paise
      currency: 'INR',
      receipt: `order_rcptid_${Math.random()}`,
      payment_capture: true,
      notes: {
        sessionId: session.id,
        userId: userId,
      },
    });

    return NextResponse.json({
      orderId: order.id,
      key_id: process.env.RAZORPAY_KEY_ID, // Send Razorpay key to frontend
    });
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
