import React from "react";
import { withRouter } from "react-router-dom";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./CollectionPreview.styles";
import CollectionItemContainer from "../collection-item/CollectionItem.container";

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItemContainer key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
