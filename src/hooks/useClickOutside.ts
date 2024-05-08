import { useCallback, useEffect } from "react";

export const useClickOutside = (ref, handleClickOutside) => {
  const onClick = useCallback(
    (e) => {
      if (!ref?.current?.contains(e.target)) handleClickOutside();
    },
    [handleClickOutside, ref],
  );

  useEffect(() => {
    document.addEventListener("click", onClick);
  }, [onClick]);
};
