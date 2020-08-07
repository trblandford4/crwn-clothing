import React from "react";

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from "./CartIcon.styles.jsx";

const CartIcon = ({ itemCount, toggleCartHidden }) => (
  <CartContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);

export default CartIcon;
