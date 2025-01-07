// idを元にAPIからデータを取得するHooks
import { useEffect, useState } from "react";
import { getDescriptionData } from "../_interfaces/getDescriptiondataInterface";

/**
 * 店舗のidを元に、Next.jsのAPIとやり取りをする関数
 * @param id 店舗のidを受け取る
 * @returns 取得したデータとローディングフラグを返す
 */
const useGetDescription = (id?: string | string[] | undefined | null) => {
  const [data, setData] = useState<getDescriptionData | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /**
     * データを取得する関数
     */
    const fetchData = async () => {
      setLoading(true);
      try {
        // Next.jsのAPIと通信
        const res = await fetch(`/api/hotpepper/description?id=${id}`);

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
  }, [id]);
  return { data, loading };
};

export default useGetDescription;
