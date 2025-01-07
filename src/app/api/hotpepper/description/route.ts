import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  console.log("アクセスしています");

  const apiKey = process.env.HOTPEPPER_API_KEY;

  const apiUrl = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${apiKey}&id=${id}&format=json`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("APIからデータを取得できませんでした");
    }
    const data = await response.json();
    console.log("Hot Pepper APIレスポンス:", data);
    return NextResponse.json(data);
  } catch (err: unknown) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
