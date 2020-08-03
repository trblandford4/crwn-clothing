import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import {
  selectIsCollectionsLoaded,
  selectCollection,
} from "../../redux/shop/shop.selectors";
import CollectionPage from "./Collection.component";
import withSpinner from "../../components/with-spinner/withSpinner.component";

const mapStateToProps = createStructuredSelector({
  collection: (state, ownProps) =>
    selectCollection(ownProps.match.params.collectionId)(state),
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPage);

export default CollectionPageContainer;
