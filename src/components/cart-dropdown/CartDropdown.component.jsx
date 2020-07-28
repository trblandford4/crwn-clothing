import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./CartDropdown.styles.scss";

import CustomButton from "../custom-button/CustomButton.component";
import CartItem from "../cart-item/CartItem.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const handleCheckoutButtonClick = () => {
    history.push("/checkout");
    dispatch(toggleCartHidden());
  };

  return (
    <div className="cart-dropdown">
      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </div>
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
      <CustomButton onClick={handleCheckoutButtonClick}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
