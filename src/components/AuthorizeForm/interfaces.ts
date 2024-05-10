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
}
