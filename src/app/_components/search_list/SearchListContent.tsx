// 検索表示コンポーネント
"use client";

import useFetchApi from "@/app/_hooks/useFetchApi";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { RestaurantCard } from "./RestaurantCard";
import style from "../../_styles/search_list/SearchList.module.css";
import useCurrentPage from "@/app/_hooks/useCurrentPage";
import Link from "next/link";

export const SearchListContent = () => {
  const searchParams = useSearchParams();
  const { currentPage, setCurrentPage } = useCurrentPage();

  // ページを移動する関数
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 無限ループが発生してしまったため、useMemoを使用し防止
  const queryParams = useMemo(
    () => ({
      range: searchParams.get("range"),
      keyword: searchParams.get("keyword"),
      latitude: searchParams.get("latitude"),
      longitude: searchParams.get("longitude"),
      start: (currentPage - 1) * 10 + 1,
    }),
    [searchParams, currentPage]
  );

  // queryParams元にAPIの検索を行い、データを取得
  const { data, loading } = useFetchApi(queryParams);
  const shops = data?.results?.shop || [];

  // 表示用にkeyword取得
  const keyword = searchParams.get("keyword");

  // ページネーション用
  // totalResultsには取得したデータの件数が入る
  // 1ページ10件の表示として、Math.ceilを使用してページ数を決定する
  const totalResults = data?.results?.results_available || 0;
  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className={style.container}>
      <div className={style.listWrap}>
        <Link href={"/"}>
          <button className={style.backButton}>戻る</button>
        </Link>
        <h1 className={style.caption}>検索結果:{keyword}</h1>
        {loading ? (
          <div>検索しています…</div>
        ) : (
          <div>
            {shops.length > 0 ? (
              <div>
                {shops.map((shop) => (
                  <a
                    href={`search_list/description/${shop.id}`}
                    key={shop.id}
                    className={style.link}
                  >
                    <RestaurantCard
                      name={shop.name}
                      access={shop.access}
                      thumbnail={shop.logo_image}
                      average={shop.budget.average}
                    />
                  </a>
                ))}
                <div className={style.pagination}>
                  {/* 長さがtotalPageの配列を作成し、mapで回す */}
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handlePageChange(index + 1)}
                      disabled={currentPage === index + 1}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <p>該当する店が見つかりませんでした。</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
