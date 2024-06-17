import { useState } from "react";
import { Arrow, LeftArrow, Container, Item } from "./styled";
import { SliderProps } from "./interfaces";
import { useSliderItemWidth } from "@hooks/useSliderItemWidth";
import { useMediaItemsAmount } from "@hooks/useMediaItemsAmount";

export const Slider = <T,>({
  itemsAmount,
  items,
  renderItem,
}: SliderProps<T>) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mediaItemsAmount = useMediaItemsAmount(itemsAmount);
  const { containerRef, itemMaxWidth } = useSliderItemWidth(mediaItemsAmount);

  const isSmallAmountOfItems = items.length <= mediaItemsAmount;
  const isPreviousItems = currentIndex != 0;

  const onRightClick = () => {
    if (!isEnd) {
      setCurrentIndex((prev) => prev + mediaItemsAmount);
    }
  };
  const onLeftClick = () => {
    if (isPreviousItems) {
      setCurrentIndex((prev) => prev - mediaItemsAmount);
    }
  };

  const isEnd = currentIndex + mediaItemsAmount >= items.length;

  return (
    <Container ref={containerRef}>
      {!isSmallAmountOfItems && (
        <LeftArrow onClick={onLeftClick} $isDisabled={!isPreviousItems} />
      )}
      {items
        .slice(currentIndex, currentIndex + mediaItemsAmount)
        .map((item, index) => (
          <Item key={index} $maxWidth={itemMaxWidth}>
            {renderItem(item)}
          </Item>
        ))}
      {!isSmallAmountOfItems && (
        <Arrow onClick={onRightClick} $isDisabled={isEnd} />
      )}
    </Container>
  );
};
