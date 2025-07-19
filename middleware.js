import { NextResponse } from "next/server";

export function middleware(req) {
    const path = req.nextUrl.pathname;
    const token = req.cookies.get("token")?.value || "";
    const isPublicPath = path === "/login" || path === "/signup";

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/admin', req.nextUrl));
    }
    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL("/login", req.nextUrl));
    }

    // Always return NextResponse.next() if no redirect is needed
    return NextResponse.next();
}

export const config = {
    matcher: [
     
        "/login",
        "/signup",
        "/admin",
        "/admin/:path*"
    ]
};
