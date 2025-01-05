import React from "react";
import { SearchArea } from "./SearchArea";
import style from "../../_styles/search/SearchContent.module.css";

export const SearchContent = () => {
  return (
    <div className={style.container}>
      <SearchArea />
    </div>
  );
};
