import { User } from "@store/slices/userSlice/interfaces";

export interface LoginResponse {
  user: User;
  accessToken: string;
}
export type UserInfoResponse = User;

export type RemoveFromFavouriteParams = Pick<User, "id"> & {
  favouriteFilmsIDs: number[];
  userExists?: boolean;
};
