import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getNextDuel, getCats } from "../../helpers/api.helper";
export const useController = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [animate, setAnimate] = useState(false);
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
