import React from "react";
import style from "../../_styles/search_list/SearchList.module.css";
import { RestaurantCard } from "./RestaurantCard";

export const SearchListContent = () => {
  return (
    <div className={style.container}>
      <RestaurantCard />
    </div>
  );
};
