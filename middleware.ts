import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token");

  console.log("Token:", token);

  if (pathname.startsWith("/admin")) {
    return NextResponse.rewrite(new URL("/forbidden", request.url));
  }
  // if (pathname.startsWith("/about")) {
  //   return NextResponse.redirect(new URL("/forbidden", request.url));
  // }
}