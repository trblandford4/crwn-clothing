import React, { PureComponent } from "react";
import { Route } from "react-router-dom";

import CollectionsOverviewContainer from "../../components/collections-overview/CollectionsOverview.container";
import CollectionPageContainer from "../collection/Collection.container";

class ShopPage extends PureComponent {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;
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
  }
}

export default ShopPage;
