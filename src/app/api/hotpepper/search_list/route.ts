// ホットペッパーのAPIと通信するエンドポイント
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  // 受け取ったリクエストからrange,keyword,latitude,longitudeを取得
  const { searchParams } = new URL(req.url);
  const range = searchParams.get("range");
  const keyword = searchParams.get("keyword");
  const latitude = searchParams.get("latitude");
  const longitude = searchParams.get("longitude");

  // ホットペッパーのAPIキーを環境変数から取得
  const apiKey = process.env.HOTPEPPER_API_KEY;

  // 取得した値を元にデータを取得するurl
  const apiUrl = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${apiKey}&range=${range}&keyword=${keyword}&lat=${latitude}&lng=${longitude}&format=json`;

  try {
    // データ取得
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
