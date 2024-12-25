import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { verifyToken } from "@clerk/clerk-sdk-node"
import { NextRequest } from "next/server";
import { NextResponse } from 'next/server';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// Mock function to simulate Clerk's `await auth(req)` behavior
export function auth2() {
 
  const customUserId = "user_2oPq03UlW8M87Sp0efcNmfPM4bU"; // Hardcoded or retrieved from some logic

  // Simulating Clerk's auth object with the userId manually set
  return {
    userId: customUserId,
    sessionId: "mock-session-id",
    claims: {},
  };
}

export async function auth(req: Request) {
  const options = {
    jwtKey: `-----BEGIN PUBLIC KEY-----
  MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2OOVqxwzb1ahi4g7/nNH
  quFvNCkAjODMJEwjTEJHkneCXXHA7oy8wptoS3vbOtMbOYMhUM5qgB3uycTaqPn2
  vdCEe9ZqOxCYG6WKdeSRu1ox/w9epPZpz2GfcWSGMi9aVugaacocA5me86P5eHLB
  gZ4VQF7pwXJL6ReM8cCo2EtUZG+ZN+4EWxiUSU5nlMR068ZWESQ90g7l0clDTF2S
  pQNV3cnjqNr319H8XoW51LKs4Yto0saRfoL96U7PqVnD1fUfkwEtRau/QKLapmlm
  KUnwwkVodQxWJQAWybGUEa2PySAgn7lIjIBzsh8G8O8Z7OJ4ddavo6MyLxMWsKkm
  SQIDAQAB
  -----END PUBLIC KEY-----
  `,
    issuer: "https://cool-piranha-0.clerk.accounts.dev", // Add the issuer property
  };

  try {
    const token = req.headers.get('authorization')?.split(' ')[1];
    if (!token) {
      return {
        userId: null,
        sessionId: null,
        claims: {},
      };
    }
    // Verify the session token dynamically with Clerk
    const user = await verifyToken(token, options);
    console.log(user);

    return {
      userId: user.sub,  // Dynamic user ID from Clerk
      sessionId: user.sid,
      claims: user.sid,  // Access user claims if needed
    };
  } catch (error) {
    console.error("Authentication error:", error);
    const userid = req.headers.get('userid');
      console.log(userid);
      
    return {
      userId: userid,
      sessionId: null,
      claims: {},
    };
  }
}
