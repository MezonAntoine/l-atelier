import { useEffect, useState } from "react";

import { getCats } from "../../helpers/api.helper";

export const useController = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetchCats();
  }, []);

  const fetchCats = async () => {
    const res = await getCats();
    if (res.status === 200) {
      setCats(res.content.data.cats);
    }
    setIsLoading(false);
  };

  return { isLoading, cats };
};
