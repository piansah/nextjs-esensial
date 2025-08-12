import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin")) {
    // return NextResponse.rewrite(new URL("/forbidden", request.url));
    return NextResponse.redirect(new URL("/forbidden", request.url));

  }
}