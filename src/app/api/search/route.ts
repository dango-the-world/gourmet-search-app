import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get("keyword") || "";
  const apiKey = process.env.HOTPEPPER_API_KEY;

  const apiUrl = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${apiKey}&keyword=${encodeURIComponent(
    keyword
  )}&format=json`;

  console.log(`Requesting URL: ${apiUrl}`);

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    console.log(`Requesting URL: ${apiUrl}`);

    return NextResponse.json(data);
  } catch (error: unknown) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
