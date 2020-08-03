import React from "react";

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./Collection.styles";
import CollectionItemContainer from "../../components/collection-item/CollectionItem.container";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItemContainer key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

export default CollectionPage;
