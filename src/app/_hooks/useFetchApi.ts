import { useEffect, useState } from "react";

interface HotpepperData {
  results: {
    shop: {
      id: string;
      name: string;
      address: string;
    }[];
  };
}

const useFetchApi = (queryParams: {
  range: string | null;
  keyword: string | null;
  latitude: string | null;
  longitude: string | null;
}) => {
  const [data, setData] = useState<HotpepperData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const { range, keyword, latitude, longitude } = queryParams;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `/api/hotpepper?range=${range}&keyword=${keyword}&latitude=${latitude}&longitude=${longitude}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch search results");
        }

        const json = await res.json();
        setData(json);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [queryParams]);
  return { data, loading, error };
};

export default useFetchApi;
