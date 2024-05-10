import { RefObject, useCallback, useEffect } from "react";

export const useClickOutside = (
  ref: RefObject<HTMLDivElement>,
  handleClickOutside: () => void
) => {
  const onClick = useCallback(
    (e: Event) => {
      if (!ref?.current?.contains(e.target as Node)) handleClickOutside();
    },
    [handleClickOutside, ref]
  );

  useEffect(() => {
    document.addEventListener("click", onClick);
  }, [onClick]);
};
