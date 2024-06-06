import { ReactNode } from "react";

export interface SliderProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  shouldBeReset?: boolean;
  setShouldBeReset?: (shouldBeReset: boolean) => void;
  itemsAmount:
    | number
    | {
        [key: string]: number;
      };
}
