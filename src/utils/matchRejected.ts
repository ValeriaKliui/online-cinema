import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { errorObserver } from "./Observer/Observer";
import { PayloadAction } from "@reduxjs/toolkit";

export const matchRejected = (
  // @ts-expect-error eslint doesnt ignore unused var
  _,
  { payload }: PayloadAction<FetchBaseQueryError | undefined>
) => {
  // @ts-expect-error unknown error
  const errorText = payload?.data?.message || payload?.error;
  errorObserver.notify(errorText);
};
