import React from "react";
import style from "../../_styles/description/DescriptionCard.module.css";

type Props = {
  name: string | undefined;
  image: string | undefined;
  catch_copy: string | undefined;
  address: string | undefined;
  open: string | undefined;
};

export const DescriptionCard = ({
  name,
  image,
  catch_copy,
  address,
  open,
}: Props) => {
  return (
    <div className={style.card}>
      <div className={style.cardLayout}>
        <div>
          <div className={style.cardTop}>
            <p className={style.catchCopy}>{catch_copy}</p>
            <h2 className={style.shopName}>{name}</h2>
          </div>
          <p className={style.text}>所在地:{address}</p>
          <p className={style.text}>{open}</p>
        </div>
        <figure>
          <img src={image} alt={name} />
        </figure>
      </div>
    </div>
  );
};
