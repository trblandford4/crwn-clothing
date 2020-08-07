import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutPage from "./Checkout.component";

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

const CheckoutPageContainer = connect(mapStateToProps)(CheckoutPage);

export default CheckoutPageContainer;
