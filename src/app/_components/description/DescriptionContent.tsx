"use client";

import React from "react";
import style from "../../_styles/description/DescriptionContent.module.css";
import { DescriptionCard } from "./DescriptionCard";
import { useParams, useRouter } from "next/navigation";
import useGetDescription from "@/app/_hooks/useGetDescription";

export const DescriptionContent = () => {
  // useParamsを使用し、urlから店舗idを取得
  const params = useParams();
  const id = params.id;

  // 戻るbutton実装用
  const router = useRouter();

  // Hooksを使用
  // 引数にidを設定し、APIからデータを取得
  const { data, loading } = useGetDescription(id);
  const shops = data?.results?.shop || [];

  return (
    <div className={style.container}>
      {/* router.back()を使うことで、ブラウザの戻るボタンと同じ動作をするように */}
      <button className={style.backButton} onClick={() => router.back()}>
        戻る
      </button>
      {loading ? (
        <div>読み込み中…</div>
      ) : (
        shops.map((shop) => (
          <DescriptionCard
            key={shop.id}
            name={shop.name}
            image={shop.photo.pc?.l}
            catch_copy={shop.catch}
            address={shop.address}
            open={shop.open}
          />
        ))
      )}
    </div>
  );
};
