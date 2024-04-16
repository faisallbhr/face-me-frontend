import { CommonResponse } from "../common";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  image?: string;
}

interface AccessToken {
  token: string;
  expires: Date;
}

interface RefreshToken {
  token: string;
  expires: Date;
}

export interface Tokens {
  access: AccessToken;
  refresh: RefreshToken;
}

interface UserAuthData {
  user: User;
  tokens: Tokens;
}

export type LoginResponse = CommonResponse<UserAuthData>;
