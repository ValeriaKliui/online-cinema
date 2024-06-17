import { useEffect, useState } from "react";

export type ItemsAmount =
  | number
  | {
      [key: string]: number;
    };

export const useMediaItemsAmount = (itemsAmount: ItemsAmount) => {
  const [mediaItemsAmount, setMediaItemsAmount] = useState(0);
  const screenSize = document.documentElement.clientWidth;

  useEffect(() => {
    const isBreakpointsObjects = Number.isNaN(Number(itemsAmount));

    if (isBreakpointsObjects) {
      const sortedBreakpoints = Object.entries(itemsAmount)
        .sort((a, b) => Number(b[0]) - Number(a[0]))
        .map((breakpoint) => [Number(breakpoint[0]), breakpoint[1]]);

      sortedBreakpoints.map((breakpointArr) => {
        const [breakpoint, itemsAmount] = breakpointArr;

        if (screenSize < breakpoint) setMediaItemsAmount(itemsAmount);
      });
    } else setMediaItemsAmount(itemsAmount as number);
  }, [itemsAmount, screenSize]);

  return mediaItemsAmount;
};
