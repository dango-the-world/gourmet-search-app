import { useEffect, useState } from "react";
import { getDescriptionData } from "../_interfaces/getDescriptiondataInterface";

const useGetDescription = (id: string | null) => {
  const [data, setData] = useState<getDescriptionData | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`api/hotpepper/description?id=${id}`);

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
