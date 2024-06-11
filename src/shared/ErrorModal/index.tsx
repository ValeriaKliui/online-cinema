import { Modal } from "@shared/Modal";
import { errorObserver } from "@utils/Observer/Observer";
import { useCallback, useEffect, useState } from "react";

export const ErrorModal = () => {
  const [error, setError] = useState<string | null>(null);

  const errorHappened = useCallback((errorText: string) => {
    setError(errorText);
  }, []);

  const unfollowError = () => {
    errorObserver.unsubscribe(errorHappened);
    setError(null);
  };

  useEffect(() => {
    errorObserver.subscribe(errorHappened);
  }, [errorHappened]);

  return (
    <Modal onClose={unfollowError} isModalOpened={!!error}>
      <p> Похоже, произошла ошибка: {error} </p>
    </Modal>
  );
};
