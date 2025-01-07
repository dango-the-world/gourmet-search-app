"use client";

import useFetchApi from "@/app/_hooks/useFetchApi";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { RestaurantCard } from "./RestaurantCard";
import style from "../../_styles/search_list/SearchList.module.css";

export const SearchListContent = () => {
  const searchParams = useSearchParams();

  // 表示用にkeyword取得
  const keyword = searchParams.get("keyword");

  // 無限ループが発生してしまったため、useMemoを使用し防止
  const queryParams = useMemo(
    () => ({
      range: searchParams.get("range"),
      keyword: searchParams.get("keyword"),
      latitude: searchParams.get("latitude"),
      longitude: searchParams.get("longitude"),
    }),
    [searchParams]
  );

  const { data, loading } = useFetchApi(queryParams);

  const shops = data?.results?.shop || [];

  console.log(shops);

  return (
    <div className={style.container}>
      <div className={style.listWrap}>
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
              </div>
            ) : (
              <p>該当するお店が見つかりませんでした。</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
