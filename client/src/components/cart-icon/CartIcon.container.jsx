import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "./CartIcon.component";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const CartIconContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);

export default CartIconContainer;
