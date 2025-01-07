"use client";

import useFetchApi from "@/app/_hooks/useFetchApi";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export const SearchListContent = () => {
  const searchParams = useSearchParams();

  // queryParamsをuseMemoでメモ化
  const queryParams = useMemo(
    () => ({
      range: searchParams.get("range"),
      keyword: searchParams.get("keyword"),
      latitude: searchParams.get("latitude"),
      longitude: searchParams.get("longitude"),
    }),
    [searchParams]
  );

  const { data, loading, error } = useFetchApi(queryParams);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const shops = data?.results?.shop || [];

  return (
    <div>
      <h1>検索結果</h1>
      {shops.length > 0 ? (
        <ul>
          {shops.map((shop) => (
            <li key={shop.id}>
              <h2>{shop.name}</h2>
              <p>{shop.address}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>該当するお店が見つかりませんでした。</p>
      )}
    </div>
  );
};
