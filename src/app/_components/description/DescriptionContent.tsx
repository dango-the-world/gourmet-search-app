"use client";

import React from "react";
import style from "../../_styles/description/DescriptionContent.module.css";
import { DescriptionCard } from "./DescriptionCard";
import { useParams } from "next/navigation";

export const DescriptionContent = () => {
  const params = useParams();
  const restId = params.id;

  return (
    <div className={style.container}>
      <DescriptionCard />
    </div>
  );
};
