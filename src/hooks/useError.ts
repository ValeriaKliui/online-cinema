import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useEffect, useState } from "react";

export const useError = (
  error: FetchBaseQueryError | SerializedError | undefined,
) => {
  const [errorText, setErrorText] = useState<null | string | undefined>(null);

  useEffect(() => {
    if (error) {
      if ("status" in error) {
        const errMsg =
          "error" in error ? error.error : JSON.stringify(error.data);

        setErrorText(errMsg);
      } else setErrorText(error.message);
    }
  }, [error]);
  return errorText;
};
