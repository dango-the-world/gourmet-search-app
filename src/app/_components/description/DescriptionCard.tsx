import React from "react";
import style from "../../_styles/description/DescriptionCard.module.css";

type Props = {
  image: string | undefined;
};

export const DescriptionCard = ({ image }: Props) => {
  return (
    <div className={style.card}>
      <img src={image} alt="" />
    </div>
  );
};
