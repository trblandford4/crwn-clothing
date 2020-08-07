import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import CollectionsOverviewContainer from "../../components/collections-overview/CollectionsOverview.container";
import CollectionPageContainer from "../collection/Collection.container";

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

export default ShopPage;
