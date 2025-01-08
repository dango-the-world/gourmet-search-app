import React from "react";
import { SearchArea } from "./SearchArea";
import style from "../../_styles/search/SearchContent.module.css";

export const SearchContent = () => {
  return (
    <div>
      <div className={style.container}>
        <SearchArea />
      </div>
      <p className={style.credit}>
        Powered by
        <a href="http://webservice.recruit.co.jp/">
          ホットペッパーグルメ Webサービス
        </a>
      </p>
    </div>
  );
};
