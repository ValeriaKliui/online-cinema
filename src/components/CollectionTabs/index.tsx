import { useEffect, useState } from "react";
import { Tabs, TabType } from "./styled";
import { CollectionType } from "@store/services/entities";

export const CollectionTabs = ({ collectionTabs, onTabChange }) => {
  const [choosenType, setChoosenType] = useState(collectionTabs[0].type);

  const onClick = (type: CollectionType) => {
    setChoosenType(type);
    onTabChange(type);
  };

  useEffect(() => {
    onTabChange(choosenType);
  }, [choosenType, onTabChange]);

  return (
    <Tabs>
      {collectionTabs.map(({ tab, type }) => (
        <TabType
          key={tab}
          onClick={() => onClick(type)}
          $isChoosen={choosenType === type}
        >
          <p>{tab}</p>
        </TabType>
      ))}
    </Tabs>
  );
};
