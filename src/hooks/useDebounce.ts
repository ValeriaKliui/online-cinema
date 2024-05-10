import { useCallback, useState } from "react";

export const useDebounce = <T>(func: (args: T) => void) => {
  const [timerID, setTimerID] = useState<NodeJS.Timeout | null>(null);

  const debouncedFunc = useCallback(
    (args: T) => {
      timerID && clearTimeout(timerID);
      setTimerID(setTimeout(() => func(args), 1000));
    },
    [timerID, func]
  );

  return debouncedFunc;
};
