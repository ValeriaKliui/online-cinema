export interface AppState {
  isFilmsError: boolean;
  authorizationError: AuthorizationErrors | null;
}
export interface Errors {
  data: AuthorizationErrors;
}
export enum AuthorizationErrors {
  EMAIL_EXISTS = "Email already exists",
}
