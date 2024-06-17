import { ReactNode } from "react";

export interface SliderProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  itemsAmount:
    | number
    | {
        [key: string]: number;
      };
}
