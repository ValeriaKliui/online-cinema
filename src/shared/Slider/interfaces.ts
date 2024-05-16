import { ReactNode } from "react";

export interface SliderProps<T> {
  itemsAmount: number;
  items: T[];
  renderItem: (item: T) => ReactNode;
  shouldBeReset?: boolean;
  setShouldBeReset?: (shouldBeReset: boolean) => void;
}
