import {
  selectCartItems,
  selectCartTotalAmount,
  selectCartTotalQuantity,
  ADD_TO_CART,
  DECREASE_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  CALCULATE_SUBTOTAL,
  CALCULATE_TOTAL_QUANTITY,
  SAVE_URL,
} from "@/redux/slice/cartSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

function CartClient() {
  const cartItems = useSelector(selectCartItems);
  const cartTotalAmount = useSelector(selectCartTotalAmount);
  const cartTotalQuantity = useSelector(selectCartTotalQuantity);

  const dispatch = useDispatch();
  const router = useRouter();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const increaseCart = (cartItem) => {
    dispatch(ADD_TO_CART(cartItem));
  };

  const decreaseCart = (cartItem) => {
    dispatch(DECREASE_CART(cartItem));
  };

  const removeFromCart = (cartItem) => {
    dispatch(REMOVE_FROM_CART(cartItem));
  };

  const clearCart = () => {
    dispatch(CLEAR_CART());
  };

  useEffect(() => {
    dispatch(CALCULATE_SUBTOTAL());
    dispatch(CALCULATE_TOTAL_QUANTITY());
    dispatch(SAVE_URL(""));
  }, [dispatch, cartItems]);

  return <div>CartClient</div>;
}

export default CartClient;
