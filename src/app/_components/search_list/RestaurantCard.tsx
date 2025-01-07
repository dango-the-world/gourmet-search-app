import React from "react";
import style from "../../_styles/search_list/RestaurantCard.module.css";

type Props = {
  name: string;
  access: string;
  thumbnail: string;
  average: string;
};

export const RestaurantCard = ({ name, access, thumbnail, average }: Props) => {
  return (
    <div className={style.card}>
      <div className={style.cardLayout}>
        <figure>
          <img src={thumbnail} alt={name} width={"80px"} />
        </figure>
        <div>
          <h2 className={style.shopName}>{name}</h2>
          <p className={style.cardText}>
            価格帯:{average ? average : "記載なし"}
          </p>
          <p className={style.cardText}>{access}</p>
        </div>
      </div>
    </div>
  );
};
