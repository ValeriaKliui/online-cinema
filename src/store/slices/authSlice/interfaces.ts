import { UserData } from '@components/AuthorizeForm/interfaces';

export interface AuthState {
  accessToken: string | null;
  user: null | (Pick<UserData, 'email'> & { id: number });
}
