"use client";

import React from "react";
import style from "../../_styles/description/DescriptionContent.module.css";
import { DescriptionCard } from "./DescriptionCard";
import { useParams } from "next/navigation";
import useGetDescription from "@/app/_hooks/useGetDescription";

export const DescriptionContent = () => {
  const params = useParams();
  const id = params.id;

  const { data, loading } = useGetDescription(id);

  const shops = data?.results?.shop || [];

  return (
    <div className={style.container}>
      {loading ? (
        <div>読み込み中…</div>
      ) : (
        shops.map((shop) => (
          <DescriptionCard key={shop.id} image={shop.photo.pc?.l} />
        ))
      )}
    </div>
  );
};
