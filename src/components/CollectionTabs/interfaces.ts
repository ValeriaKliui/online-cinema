import { CollectionType } from "@store/services/entities";

export interface CollectionTab {
  tab: string;
  type: CollectionType;
}
export interface CollectionTabsProps {
  collectionTabs: CollectionTab[];
  onTabChange: (tab: CollectionType) => void;
}
