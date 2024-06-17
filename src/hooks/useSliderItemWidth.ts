import { useEffect, useMemo, useRef, useState } from "react";

export const useSliderItemWidth = (mediaItemsAmount: number) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemMaxWidth, setItemMaxWidth] = useState(0);

  const oneItemWidth = containerRef.current
    ? containerRef.current?.getBoundingClientRect()?.width / mediaItemsAmount
    : 0;

  useEffect(() => {
    setItemMaxWidth(oneItemWidth);

    window.addEventListener("resize", () => setItemMaxWidth(oneItemWidth));
    return () =>
      window.removeEventListener("resize", () => setItemMaxWidth(oneItemWidth));
  }, [oneItemWidth]);

  const returnedValue = useMemo(
    () => ({
      containerRef,
      itemMaxWidth,
    }),
    [itemMaxWidth]
  );

  return returnedValue;
};
