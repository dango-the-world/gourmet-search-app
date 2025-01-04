"use client";

import { useState } from "react";

export default function SearchPage() {
  const [keyword, setKeyword] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = async () => {
    const params = new URLSearchParams();
    if (keyword) params.append("keyword", keyword);
    if (lat && lng) {
      params.append("lat", lat);
      params.append("lng", lng);
    }

    const response = await fetch(`/api/search?${params.toString()}`);
    const data = await response.json();

    if (data.results) {
      setResults(data.results.shop);
    }
  };

  return (
    <div>
      <h1>ホットペッパーグルメ検索</h1>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="キーワードを入力"
      />
      <input
        type="text"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
        placeholder="緯度 (lat)"
      />
      <input
        type="text"
        value={lng}
        onChange={(e) => setLng(e.target.value)}
        placeholder="経度 (lng)"
      />
      <button onClick={handleSearch}>検索</button>

      <ul>
        {results.map((shop) => (
          <li key={shop.id}>{shop.name}</li>
        ))}
      </ul>
    </div>
  );
}
