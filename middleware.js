// middleware.ts or middleware.js
import {  NextResponse } from 'next/server';

export function middleware(req) {
  const path = req.nextUrl.pathname;
  const token = req.cookies.get("token")?.value;

  const isPublicPath = path === "/login" || path === "/signup";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  const isProtectedPath = path.startsWith("/admin");

  if (isProtectedPath && !token) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/signup", "/admin/:path*"],
};
