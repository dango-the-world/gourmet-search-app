// 受けとったKeyword,range,緯度経度を元にAPIの検索を行うHooks
import { useEffect, useState } from "react";
import { hotpepperGetData } from "../_interfaces/hotpepperGetDataInterface";

/**
 * urlから受け取った値を元にAPIとやり取りする関数
 * @param queryParams urlから取得したrange,keyword,latitude,longitudeの値
 * @returns 取得したデータとローディングフラグを返す
 */
const useFetchApi = (queryParams: {
  range: string | null;
  keyword: string | null;
  latitude: string | null;
  longitude: string | null;
}) => {
  const [data, setData] = useState<hotpepperGetData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { range, keyword, latitude, longitude } = queryParams;

    /**
     * データを取得する関数
     */
    const fetchData = async () => {
      setLoading(true);
      try {
        // 受け取った値を元にNext.jsのAPIを叩く
        const res = await fetch(
          `/api/hotpepper/search_list?range=${range}&keyword=${keyword}&latitude=${latitude}&longitude=${longitude}`
        );

        if (!res.ok) {
          throw new Error("データの取得に失敗しました。");
        }

        const json = await res.json();
        setData(json);
      } catch (err: unknown) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [queryParams]);
  return { data, loading };
};

export default useFetchApi;
