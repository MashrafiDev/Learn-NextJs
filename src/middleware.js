import { NextResponse } from "next/server";

export function middleware(request) {
  let cookie = request?.cookies?.get("nextjs-cookie");
  console.log(cookie?.value);

  const featuresPage = request.nextUrl.pathname.startsWith("/features");
  const aboutPage = request.nextUrl.pathname.startsWith("/About:/path");

  const isAdmin = true;
  const isEmail = true;

  if (featuresPage && !isEmail) {
    return NextResponse.rewrite(new URL("/login", request.url));
  }

  if (aboutPage && !isAdmin) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
