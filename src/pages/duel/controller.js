import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getNextDuel, postDuel } from "../../helpers/api.helper";
export const useController = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [animate, setAnimate] = useState(false);
  const [duel, setDuel] = useState([]);

  useEffect(() => {
    fetchNewDuel();
  }, []);

  const fetchNewDuel = async () => {
    const res = await getNextDuel();
    if (res.status === 200) {
      setDuel(res.content.data.nextDuel);
    }
    setIsLoading(false);
  };

  const onVote = async (winnerId, loserId) => {
    // setAnimate(true);
    // setAnimate(false);
    const res = await postDuel(winnerId, loserId);
    if (res.status === 200) {
      setDuel(res.content.data.nextDuel);
    }
  };

  const onRanking = async () => {
    navigate("/ranking");
  };

  return { isLoading, duel, onVote, animate, onRanking };
};
