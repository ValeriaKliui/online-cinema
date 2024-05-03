import { useCallback, useState } from "react";

export const useDebounce = (func) => {
  const [timerID, setTimerID] = useState<NodeJS.Timeout | null>(null);

  const debouncedFunc = useCallback(
    (args) => {
      timerID && clearTimeout(timerID);
      setTimerID(setTimeout(() => func(args), 1000));
    },
    [timerID, func],
  );

  return debouncedFunc;
};
