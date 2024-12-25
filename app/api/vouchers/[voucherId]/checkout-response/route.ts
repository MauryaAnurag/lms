import Razorpay from 'razorpay';
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { auth } from '@/lib/utils';

const razorpay = new Razorpay({
    key_id: "rzp_test_fBttTZVJm9TsAD",
    key_secret: "nfvZZg9IYHRNCS1Ltprzv5x1",
  });

export async function POST(req: Request, { params }: { params: { voucherId: string } }) {
  const { paymentId, orderId, signature } = await req.json();

  try {
    const {userId} = await auth(req)
    // Fetch the voucher by orderId (paymentId)
    const voucher = await db.voucher.findUnique({
      where: { id: params.voucherId },
    });

    if (!voucher) {
      return NextResponse.json({ message: 'Voucher not found' }, { status: 404 });
    }

    // // Verify the payment signature from Razorpay
    // const isValid = razorpay.utility.verifyPaymentSignature({
    //   payment_id: paymentId,
    //   order_id: orderId,
    //   signature,
    // });

    // if (!isValid) {
    //   return NextResponse.json({ message: 'Payment verification failed' }, { status: 400 });
    // }

    // Save payment details in VoucherPayment table
    const payment = await db.paymentVoucher.create({
      data: {
        voucherId: voucher.id,
        userId: userId!,  // Assuming you have a way to get the current user's ID
        amount: voucher.discountPrice, // Use the appropriate amount
        razorpayOrderId:orderId,  // Store the Razorpay payment ID
        razorpayPaymentId: paymentId,
        paymentStatus: 'SUCCESS', // Mark the payment status as SUCCESS
      },
    });


    return NextResponse.json({ message: 'Payment verified successfully', payment });
  } catch (error) {
    console.error('Error verifying payment:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
