import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredProducts: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    FILTER_BY_CATEGORY: (state, action) => {
      const { products, category } = action.payload;
      let tempProducts = [];
      if (category == "All") {
        tempProducts = products;
      } else {
        tempProducts = products.filter(
          (product) => product.category === category
        );
      }
      state.filteredProducts = tempProducts;
    },
    FILTER_BY_BRAND: (state, action) => {
      const { products, brand } = action.payload;
      let tempProducts = [];
      if (brand == "All") {
        tempProducts = products;
      } else {
        tempProducts = products.filter((product) => product.brand === brand);
      }
      state.filteredProducts = tempProducts;
    },
    FILTER_BY_PRICE: (state, action) => {
      const { products, price } = action.payload;
      let tempProducts = [];
      tempProducts = products.filter(
        (product) => Number(product.price) <= Number(price)
      );
      state.filteredProducts = tempProducts;
    },
    FILTER_BY_SEARCH: (state, action) => {
      const { products, search } = action.payload;

      const tempProducts = products.filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase())
      );
      state.filteredProducts = tempProducts;
    },
    FILTER_BY: (state, action) => {
      const { products, price, category, brand, search } = action.payload;
      let tempProducts = [];

      if (category == "All") {
        tempProducts = products;
      } else {
        tempProducts = products.filter(
          (product) => product.category === category
        );
      }

      if (brand == "All") {
        tempProducts = tempProducts;
      } else {
        tempProducts = tempProducts.filter(
          (product) => product.brand === brand
        );
      }

      if (search !== "") {
        tempProducts = tempProducts.filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
        );
      }
      state.filteredProducts = tempProducts;
    },
    SORT_PRODUCTS: (state, action) => {
      const { products, sort } = action.payload;
      let tempProducts = [...products];

      if (sort === "latest") {
        // createdAt 기준으로 최신순 정렬 (ISO 문자열)
        tempProducts = tempProducts.sort((a, b) => {
          const dateA = new Date(a.createdAt || 0);
          const dateB = new Date(b.createdAt || 0);
          return dateB - dateA;
        });
      }
      if (sort === "lowest-price") {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }
      if (sort === "highest-price") {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }
      state.filteredProducts = tempProducts;
    },
  },
});

export const {
  FILTER_BY_CATEGORY,
  FILTER_BY_BRAND,
  FILTER_BY_PRICE,
  FILTER_BY_SEARCH,
  FILTER_BY,
  SORT_PRODUCTS,
} = filterSlice.actions;

export const selectFilteredProducts = (state) => state.filter.filteredProducts;

export default filterSlice.reducer;
