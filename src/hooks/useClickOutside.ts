import { RefObject, useEffect } from "react";

export const useClickOutside = (
  ref: RefObject<HTMLDivElement>,
  handleClickOutside: () => void,
) => {
  useEffect(() => {
    const onClick = (e: Event) => {
      if (!ref?.current?.contains(e.target as Node)) handleClickOutside();
    };

    document.addEventListener("click", onClick);
  }, [handleClickOutside, ref]);
};
