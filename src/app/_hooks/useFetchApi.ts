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
  // ページング実装用
  start: number;
}) => {
  const [data, setData] = useState<hotpepperGetData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 分割代入でqueryParamsオブジェクトから値を取得
    const { range, keyword, latitude, longitude, start } = queryParams;

    /**
     * データを取得する関数
     */
    const fetchData = async () => {
      setLoading(true);
      try {
        // 受け取った値を元にNext.jsのAPIを叩く
        const res = await fetch(
          `/api/hotpepper/search_list?range=${range}&keyword=${keyword}&latitude=${latitude}&longitude=${longitude}&start=${start}`
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

    // urlが更新された場合に再実行
  }, [queryParams]);
  return { data, loading };
};

export default useFetchApi;
