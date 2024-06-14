import { ForwardedRef, RefObject, useEffect } from "react";

export const useClickOutside = (
  ref: RefObject<HTMLDivElement> | ForwardedRef<HTMLDivElement> | null,
  handleClickOutside: () => void,
) => {
  useEffect(() => {
    const onClick = (e: Event) => {
      const target = e.target as Node;
      if (typeof ref !== "function") {
        const trackableElement = ref?.current;
        const clickIsOutside =
          trackableElement && !trackableElement?.contains(target);

        if (clickIsOutside) handleClickOutside();
      }
    };

    document.addEventListener("click", onClick);

    return () => document.removeEventListener("click", onClick);
  }, [handleClickOutside, ref]);
};
