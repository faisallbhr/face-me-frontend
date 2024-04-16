import { cookies } from "next/headers";
import { API_VERSION, BASE_URL, ENDPOINTS } from "../constants/api";
import { LoginParams } from "../types/request/auth";
import axios from "axios";

export const login = () => {
  return {
    mutationKey: ["auth.login"],
    mutationFn: async ({ email, password }: LoginParams) => {
      return await axios.post(BASE_URL + API_VERSION + ENDPOINTS.AUTH.LOGIN, {
        email,
        password,
      });
    },
  };
};

export const logout = () => {
  return {
    mutationKey: ["auth.logout"],
    mutationFn: async () => {
      return await axios.post(BASE_URL + API_VERSION + ENDPOINTS.AUTH.LOGOUT);
    },
  };
};
