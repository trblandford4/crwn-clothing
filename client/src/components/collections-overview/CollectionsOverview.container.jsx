import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import {
  selectIsCollectionFetching,
  selectCollectionsForPreview,
} from "../../redux/shop/shop.selectors";
import CollectionsOverview from "./CollectionsOverview.component";
import withSpinner from "../with-spinner/withSpinner.component";

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
