import { AuthorizationErrors } from '@components/AuthorizeForm/interfaces';

export const getAuthErrorText = (errorEngText?: string | null) => {
  let errorText = errorEngText && errorEngText.replace(/"/g, '');

  switch (errorText) {
    case AuthorizationErrors.EMAIL_EXISTS:
      errorText = 'Пользователь с таким email уже зарегистрирован';
      break;
    case AuthorizationErrors.BAD_EMAIL:
      errorText = 'Некорректный email';
      break;
    case AuthorizationErrors.NO_USER:
      errorText = 'Пользователь с таким email не найден';
      break;
    case AuthorizationErrors.WRONG_PASSWORD:
      errorText = 'Неправильный пароль';
      break;
    default:
      break;
  }

  return errorText;
};
