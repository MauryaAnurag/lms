import Razorpay from 'razorpay';
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { auth } from '@/lib/utils';
import nodemailer from 'nodemailer';

const razorpay = new Razorpay({
  key_id: "rzp_test_fBttTZVJm9TsAD",
  key_secret: "nfvZZg9IYHRNCS1Ltprzv5x1",
});

export const dynamic = 'force-dynamic';


// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'anuragma807@gmail.com',
      pass: 'zrapspaypybbkwml',
    },
  });

export async function POST(req: Request, { params }: { params: { sessionId: string } }) {
  const { paymentId, orderId, signature } = await req.json();

  try {
    const { userId } = await auth(req); // Get user info from the auth function

    // Fetch the session by sessionId
    const session = await db.session.findUnique({
      where: { id: params.sessionId },
    });

    if (!session) {
      return NextResponse.json({ message: 'Session not found' }, { status: 404 });
    }

     

    // Save the payment details in the SessionPurchase table
    const payment = await db.sessionPurchase.create({
      data: {
        sessionId: session.id,
        userId: userId!,  // Assuming you have a way to get the current user's ID
        amount: session.price,  // Use the session's price
      },
    });

    // Prepare email data
    const mailOptions = {
        from: 'anuragma807@gmail.com', // Sender email address
        to: 'malikseaukaatmereh@gmail.com', // Replace with the recipient's email (you can get this from the user data)
        subject: 'Session Purchase Successful',
        text: `Hello,
  
        Your payment for the session titled "${session.title}" was successful.
  
        Session Details:
        - Title: ${session.title}
        - Price: ₹${session.price}
        - Purchase Time: ${new Date().toLocaleString()}
      
        You can view your session link here: [View Session](${session.googleMeetLink})
  
        Thank you for your purchase!
  
        Best regards,
        Your Company Name`,
      };
  
      // Send the email
      await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Payment verified successfully', payment });
  } catch (error) {
    console.error('Error verifying payment:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
