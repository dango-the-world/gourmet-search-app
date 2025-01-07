"use client";

import style from "../../_styles/search/SearchArea.module.css";
import { useLocation } from "@/app/_hooks/useLocation";
import { useSearchForm } from "@/app/_hooks/useSearch";

export const SearchArea = () => {
  const { latitude, longitude, error } = useLocation();
  const { selectedRange, setSelectedRange, keyword, setKeyword, handleSubmit } =
    useSearchForm({
      latitude,
      longitude,
    });

  const options = [
    { id: 1, range: "現在地から半径300m" },
    { id: 2, range: "現在地から半径500m" },
    { id: 3, range: "現在地から半径1000m" },
    { id: 4, range: "現在地から半径2000m" },
    { id: 5, range: "現在地から半径3000m" },
  ];

  return (
    <div className={style.container}>
      <h2 className={style.title}>レストラン検索</h2>

      {error ? (
        <p>現在地を取得できませんでした: {error || "不明なエラー"}</p>
      ) : (
        ""
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
