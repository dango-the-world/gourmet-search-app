import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get("keyword") || "";
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const apiKey = process.env.HOTPEPPER_API_KEY;

  // ベースURLの作成
  let apiUrl = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${apiKey}&format=json`;

  // 条件を動的に追加
  if (keyword) {
    apiUrl += `&keyword=${encodeURIComponent(keyword)}`;
  }
  if (lat && lng) {
    apiUrl += `&lat=${lat}&lng=${lng}`;
  }

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      console.error("API Error:", response.status, response.statusText);
      return NextResponse.json(
        { error: `API request failed with status ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Fetch Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
