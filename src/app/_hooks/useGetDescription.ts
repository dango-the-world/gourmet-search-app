import { useEffect, useState } from "react";
import { getDescriptionData } from "../_interfaces/getDescriptiondataInterface";

const useGetDescription = (id: string | null) => {
  const [data, setData] = useState<getDescriptionData | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
    };
  }, []);
};
