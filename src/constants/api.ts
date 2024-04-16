export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";
export const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION || "";

export const ENDPOINTS = {
  AUTH: {
    REGISTER: "/auth/register",
    LOGIN: "/auth/login",
    REFRESH: "/auth/refresh-tokens",
    LOGOUT: "/auth/logout",
  },
  POST: {
    DEFAULT: "/posts",
    DETAIL: "/posts/:id",
  },
};
