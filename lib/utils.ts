import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// Mock function to simulate Clerk's `auth()` behavior
export function auth() {
  // Custom logic to decide how to fetch or set userId
  // This is where you can manually set the userId
  const customUserId = "user_2oPq03UlW8M87Sp0efcNmfPM4bU"; // Hardcoded or retrieved from some logic

  // Simulating Clerk's auth object with the userId manually set
  return {
    userId: customUserId,
    sessionId: "mock-session-id",
    claims: {}, 
  };
}
