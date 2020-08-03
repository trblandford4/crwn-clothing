import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";
import CheckoutItem from "./CheckoutItem.component";

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

const CheckoutItemContainer = connect(null, mapDispatchToProps)(CheckoutItem);

export default CheckoutItemContainer;
