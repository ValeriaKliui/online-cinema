export interface UserData {
  email: string;
  password: string;
}
export interface AuthorizeFormProps {
  buttonText: string;
  title: string;
  description: string;
  onSubmit: (userData: UserData) => void;
  block?: boolean;
  authError?: { error?: string | null };
}
export enum AuthorizationErrors {
  EMAIL_EXISTS = "Email already exists",
  BAD_EMAIL = "Email format is invalid",
  NO_USER = "Cannot find user",
  WRONG_PASSWORD = "Incorrect password",
}
