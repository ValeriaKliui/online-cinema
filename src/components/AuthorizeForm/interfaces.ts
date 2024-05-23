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
  errorText?: string | null;
}
export enum AuthorizationErrors {
  EMAIL_EXISTS = "Email already exists",
  BAD_EMAIL = "Email format is invalid",
}
