import { NextResponse, NextRequest } from 'next/server';
import { getDashboardCourses } from "@/actions/get-dashboard-courses";
import { auth, auth2 } from '@/lib/utils';


// GET method to fetch the dashboard courses for a specific user
export async function GET(req: NextRequest) {
  try {
   
    // const {userId} = await auth2(req);
    const {userId} = await auth();
    console.log(userId);
    
    // Get the userId from query parameters, session, or any authentication method
    const url = new URL(req.url);
    // const userId = url.searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
    }

    // Call the function to get the dashboard courses data
    const dashboardCourses = await getDashboardCourses(userId);

    return NextResponse.json(dashboardCourses);
  } catch (error) {
    console.log("[GET_DASHBOARD_COURSES_API]", error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
