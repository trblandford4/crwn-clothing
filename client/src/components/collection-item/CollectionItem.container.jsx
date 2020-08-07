import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";
import CollectionItem from "./CollectionItem.component";

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

const CollectionItemContainer = connect(
  null,
  mapDispatchToProps
)(CollectionItem);

export default CollectionItemContainer;
