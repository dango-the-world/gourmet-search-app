// app/api/hotpepper/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const range = searchParams.get("range");
  const keyword = searchParams.get("keyword");
  const latitude = searchParams.get("latitude");
  const longitude = searchParams.get("longitude");

  // ホットペッパーのAPIキーを環境変数から取得
  const apiKey = process.env.HOTPEPPER_API_KEY;

  const apiUrl = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${apiKey}&range=${range}&keyword=${keyword}&lat=${latitude}&lng=${longitude}&format=json`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("APIからデータを取得できませんでした");
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (err: unknown) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
