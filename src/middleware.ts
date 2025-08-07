import { NextRequest, NextResponse } from "next/server";

function cleanHostname(hostname: string): string {
  if (!hostname) return "";
  const hostnameWithoutPort = hostname.split(":")[0];
  const cleaned = hostnameWithoutPort.replace(/^www\./, "");

  if (
    cleaned === "localhost" ||
    cleaned === "127.0.0.1" ||
    cleaned.endsWith("vercel.app") ||
    cleaned === "r10magicfootball.com" ||
    cleaned === "www.r10magicfootball.com"
  ) {
    return cleaned;
  }

  return "";
}

export function middleware(req: NextRequest) {
  try {
    const host = req.headers.get("host") || "";
    const hostname = cleanHostname(host);

    if (!hostname) {
      return new NextResponse("Invalid hostname", { status: 400 });
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
