import { errorObserver } from "./Observer/Observer";
import { PayloadAction } from "@reduxjs/toolkit";

export const matchRejected = (
  _,
  { payload }: PayloadAction<FetchBaseQueryError | undefined>,
) => {
  const errorText = payload?.data?.message || payload?.error;
  errorObserver.notify(errorText);
};
