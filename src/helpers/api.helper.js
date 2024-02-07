import { request } from "../services/axios.service";

export const getCats = async () => {
  return await request({
    service: "api",
    method: "GET",
    needAuth: false,
    route: "/cats",
  });
};

export const getNextDuel = async () => {
  return await request({
    service: "api",
    method: "GET",
    needAuth: false,
    route: "/cats/duels",
  });
};

export const postDuel = async (winnerId, loserId) => {
  return await request({
    service: "api",
    method: "POST",
    needAuth: false,
    route: "/cats/duels",
    body: {
      winnerId,
      loserId,
    },
  });
};
