import { NextRequest, NextResponse } from 'next/server';
import { getAnalytics } from '@/actions/get-analytics'; // Assuming this function is already defined

export async function GET(req: NextRequest,{ params }: { params: { userId: string } }) {
  const { userId } = params; // Get userId from the URL params

  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }

  try {
    // Fetch analytics data for the given userId
    const { data, totalRevenue, totalSales } = await getAnalytics(userId);

    return NextResponse.json({
      data,
      totalRevenue,
      totalSales,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch analytics data' }, { status: 500 });
  }
}
