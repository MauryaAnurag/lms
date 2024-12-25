import Razorpay from 'razorpay';
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { auth } from '@/lib/utils';
export const dynamic = 'force-dynamic';

const razorpay = new Razorpay({
    key_id: "rzp_test_fBttTZVJm9TsAD",
    key_secret: "nfvZZg9IYHRNCS1Ltprzv5x1",
  });

export async function POST(req: Request, { params }: { params: { voucherId: string } }) {
  const { couponCode } = await req.json();
  const voucherId = params.voucherId;

  try {
    const { userId } = await auth(req);

    const voucher = await db.voucher.findUnique({
      where: {
        id: voucherId,
      },
    });

    if (!voucher) {
      return NextResponse.json({ message: 'Voucher not found' }, { status: 404 });
    }

    let discountedPrice = voucher.discountPrice;

  

    const order = await razorpay.orders.create({
      amount: Math.round(discountedPrice * 100),
      currency: 'INR',
      receipt: `order_rcptid_${Math.random()}`,
      payment_capture: true,
      notes: {
        voucherId: voucher.id,
        userId: userId,
      },
    });

    return NextResponse.json({
      orderId: order.id,
      key_id: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
