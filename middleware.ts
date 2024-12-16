import { authMiddleware } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: ["/api/webhook","/api/uploadthing"]
});
// export function middleware(req: NextRequest) {
//   const url = req.nextUrl.clone();

   

//   // Proceed with the request if the user is authenticated
//   return NextResponse.next();
// }


export const config = {
  matcher: [
    "/((?!api|trpc|_next).*)",  // Exclude /api and /trpc paths
    "/",  // Include the root path
  ],
};
 