export interface UserState {
  user: null | User;
  accessToken: string | null;
}

export interface User {
  email: string;
  id: number;
}
