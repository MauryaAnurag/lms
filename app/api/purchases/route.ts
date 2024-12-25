import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { auth } from '@/lib/utils';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  try {
    const { userId } = await auth(req); // User ID from URL parameters
    if (!userId) {
      return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
    }

    // Fetch session purchases, payment vouchers, and course purchases for the user
    const sessionPurchases = await db.sessionPurchase.findMany({
      where: { userId },
      include: {
        Session: true,  // Include session details
      },
      orderBy: { purchaseTime: 'desc' },  // Order by purchase time
    });

    const paymentVouchers = await db.paymentVoucher.findMany({
      where: { userId },
      include: {
        voucher: true,  // Include voucher details
      },
      orderBy: { paymentTime: 'desc' },
    });

    const coursePurchases = await db.purchase.findMany({
      where: { userId },
      include: {
        course: true,  // Include course details
      },
      orderBy: { createdAt: 'desc' },
    });

    // Combine all data into a single response
    const allPurchases = [
      ...sessionPurchases.map((purchase) => ({
        type: 'Session',
        amount: purchase.amount,
        time: purchase.purchaseTime,
        sessionId: purchase.sessionId,
        sessionTitle: purchase.Session.title,  // Assuming there's a title field
      })),
      ...paymentVouchers.map((purchase) => ({
        type: 'Voucher',
        amount: purchase.amount,
        time: purchase.paymentTime,
        voucherId: purchase.voucherId,
        voucherTitle: purchase.voucher.title,  // Assuming there's a title field
      })),
      ...coursePurchases.map((purchase) => ({
        type: 'Course',
        amount: purchase.course.price,
        time: purchase.createdAt,
        courseId: purchase.courseId,
        courseTitle: purchase.course.title,  // Assuming there's a title field
      })),
    ];

    return NextResponse.json(allPurchases, { status: 200 });
  } catch (error) {
    console.error('Error fetching purchases:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
