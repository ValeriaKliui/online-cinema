import { UserData } from "@components/AuthorizeForm/interfaces";

export type User = Pick<UserData, "email"> & { id: number };
export interface UserState {
  accessToken: string | null;
  user: null | User;
  favouriteFilmsIDs: number[];
}
