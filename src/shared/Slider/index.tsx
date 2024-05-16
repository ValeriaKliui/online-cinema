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
  const [currentIndex, setCurrentIndex] = useState(0);

  const onRightClick = () => {
    setCurrentIndex((prev) => prev + itemsAmount);
    setShouldBeReset?.(false);
  };
  const onLeftClick = () => {
    setCurrentIndex((prev) => prev - itemsAmount);
    setShouldBeReset?.(false);
  };

  const isEnd = currentIndex + itemsAmount >= items.length;

  const containerRef = useRef<HTMLDivElement>(null);
  const itemWidth = containerRef.current
    ? containerRef.current?.getBoundingClientRect().width / itemsAmount
    : 0;

  useEffect(() => {
    if (shouldBeReset) {
      setShouldBeReset(false);
      setCurrentIndex(0);
    }
  }, [shouldBeReset, setShouldBeReset]);

  console.log(shouldBeReset);

  return (
    <Container ref={containerRef}>
      {currentIndex != 0 && <LeftArrow onClick={onLeftClick} />}
      {items.slice(currentIndex, currentIndex + itemsAmount).map((item) => (
        <Item $itemWidth={itemWidth}>{renderItem(item)}</Item>
      ))}
      {!isEnd && <Arrow onClick={onRightClick} />}
    </Container>
  );
};