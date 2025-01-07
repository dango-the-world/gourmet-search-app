// ホットペッパーのAPIと通信するエンドポイント
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  // 受け取ったURLからidの値を取得
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  // .envに保存されているAPIKeyを取得
  const apiKey = process.env.HOTPEPPER_API_KEY;

  // idを元にデータ取得するurl
  const apiUrl = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${apiKey}&id=${id}&format=json`;

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
