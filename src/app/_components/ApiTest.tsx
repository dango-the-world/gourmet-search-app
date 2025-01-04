"use client";

import { useState } from "react";

export default function ApiTest() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = async () => {
    const response = await fetch(
      `/api/search?keyword=${encodeURIComponent(keyword)}`
    );
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
      <button onClick={handleSearch}>検索</button>

      <ul>
        {results.map((shop) => (
          <li key={shop.id}>{shop.name}</li>
        ))}
      </ul>
    </div>
  );
}
