import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  maxPrice: 100000,
  minPrice: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    STORE_PRODUCTS: (state, action) => {
      state.products = action.payload.products;
    },
    GET_PRICE_RANGE: (state, action) => {
      const { products } = action.payload;

      const array = [];
      products.map((product) => {
        const price = product.price;
        return array.push(price);
      });
      const max = Math.max(...array);
      const min = Math.min(...array);

      state.maxPrice = max;
      state.minPrice = min;
    },
  },
});

export const { STORE_PRODUCTS, GET_PRICE_RANGE } = productSlice.actions;

export const selectProducts = (state) => state.product.products;
export const selectMaxPrice = (state) => state.product.maxPrice;
export const selectMinPrice = (state) => state.product.minPrice;

export default productSlice.reducer;
