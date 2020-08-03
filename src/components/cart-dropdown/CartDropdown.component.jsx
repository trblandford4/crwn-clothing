import React from "react";

import CartItem from "../cart-item/CartItem.component";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
  CartDropdownButton,
} from "./CartDropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const handleCheckoutButtonClick = () => {
    history.push("/checkout");
    dispatch(toggleCartHidden());
  };

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton onClick={handleCheckoutButtonClick}>
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
