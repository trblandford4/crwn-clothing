import React from "react";

import { CollectionsOverviewContainer } from "./CollectionsOverview.styles";
import CollectionPreview from "../collection-preview/CollectionPreview.component";

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
);

export default CollectionsOverview;
