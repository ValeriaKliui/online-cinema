import { useEffect, useRef, useState } from "react";
import { Arrow, LeftArrow, Container, Item } from "./styled";
import { SliderProps } from "./interfaces";

export const Slider = <T,>({
  itemsAmount,
  items,
  renderItem,
  shouldBeReset,
  setShouldBeReset,
}: SliderProps<T>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemMaxWidth, setItemMaxWidth] = useState(0);
  const [mediaItemsAmount, setMediaItemsAmount] = useState(0);
  const screenSize = document.documentElement.clientWidth;

  const isPreviousItems = currentIndex != 0;

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

  const oneItemWidth = containerRef.current
    ? containerRef.current?.getBoundingClientRect()?.width / mediaItemsAmount
    : 0;

  const onRightClick = () => {
    if (!isEnd) {
      setCurrentIndex((prev) => prev + mediaItemsAmount);
      setShouldBeReset?.(false);
    }
  };
  const onLeftClick = () => {
    if (isPreviousItems) {
      setCurrentIndex((prev) => prev - mediaItemsAmount);
      setShouldBeReset?.(false);
    }
  };

  const isEnd = currentIndex + mediaItemsAmount >= items.length;

  useEffect(() => {
    if (shouldBeReset) {
      setShouldBeReset?.(false);
      setCurrentIndex(0);
    }
  }, [shouldBeReset, setShouldBeReset]);

  useEffect(() => {
    setItemMaxWidth(oneItemWidth);
    window.addEventListener("resize", () => setItemMaxWidth(oneItemWidth));
  }, [oneItemWidth]);

  return (
    <Container ref={containerRef}>
      <LeftArrow onClick={onLeftClick} $isDisabled={!isPreviousItems} />
      {items
        .slice(currentIndex, currentIndex + mediaItemsAmount)
        .map((item, index) => (
          <Item key={index} $maxWidth={itemMaxWidth}>
            {renderItem(item)}
          </Item>
        ))}
      <Arrow onClick={onRightClick} $isDisabled={isEnd} />
    </Container>
  );
};
