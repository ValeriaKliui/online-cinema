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
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemMaxWidth, setItemMaxWidth] = useState(0);

  const oneItemWidth =
    containerRef.current?.getBoundingClientRect()?.width / itemsAmount;

  const onRightClick = () => {
    setCurrentIndex((prev) => prev + itemsAmount);
    setShouldBeReset?.(false);
  };
  const onLeftClick = () => {
    setCurrentIndex((prev) => prev - itemsAmount);
    setShouldBeReset?.(false);
  };

  const isEnd = currentIndex + itemsAmount >= items.length;

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
      {currentIndex != 0 && <LeftArrow onClick={onLeftClick} />}
      {items
        .slice(currentIndex, currentIndex + itemsAmount)
        .map((item, index) => (
          <Item key={index} $maxWidth={itemMaxWidth}>
            {renderItem(item)}
          </Item>
        ))}
      {!isEnd && <Arrow onClick={onRightClick} />}
    </Container>
  );
};
