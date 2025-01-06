// 検索エリアのコンポーネント
"use client";

import React, { useState } from "react";
import style from "../../_styles/search/SearchArea.module.css";
import { useLocation } from "@/app/_hooks/useLocation";
import { useRouter } from "next/navigation";

export const SearchArea = () => {
  const { latitude, longitude, error } = useLocation();
  const [selectedRange, setSelectedRange] = useState("");
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // 検索条件をクエリパラメータとして次のページに遷移
    router.push(`/search-results?range=${selectedRange}&keyword=${keyword}`);
  };

  const options = [
    {
      id: 1,
      range: "300m",
    },
    {
      id: 2,
      range: "500m",
    },
    {
      id: 3,
      range: "1000m",
    },
    {
      id: 4,
      range: "2000m",
    },
    {
      id: 5,
      range: "3000m",
    },
  ];

  return (
    <div className={style.container}>
      <h2 className={style.title}>レストラン検索</h2>

      {error ? (
        <p style={{ color: "red" }}>
          現在地を取得できませんでした。設定を確認してください。: {error}
        </p>
      ) : latitude && longitude ? (
        <p>
          現在地: 緯度 {latitude}, 経度 {longitude}
        </p>
      ) : (
        <p>現在地を取得中...</p>
      )}

      <div className={style.formWrap}>
        <form onSubmit={handleSubmit}>
          <select
            name="position-select"
            className={style.select}
            value={selectedRange}
            required
            onChange={(event) => setSelectedRange(event.target.value)}
          >
            <option value="" disabled>
              検索範囲を選択してください
            </option>
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.range}
              </option>
            ))}
          </select>

          <input
            type="text"
            name="keyword"
            placeholder="キーワードを入力"
            value={keyword}
            className={style.input}
            onChange={(event) => setKeyword(event.target.value)}
          />

          <input type="submit" className={style.submit} value="検索" />
        </form>
      </div>
    </div>
  );
};
