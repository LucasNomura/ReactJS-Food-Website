import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isCartVisible: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const isProductInCart = state.products.some(
        (e) => e.id === action.payload.id
      );

      if (isProductInCart) {
        state.products = state.products.map((currentProduct) => {
          if (currentProduct.id === action.payload.id) {
            return { ...currentProduct, quantity: currentProduct.quantity + 1 };
          }

          return currentProduct;
        });

        return;
      }

      state.products = [...state.products, { ...action.payload, quantity: 1 }];
    },
    toggleCart: (state) => {
      state.isCartVisible = !state.isCartVisible;
    },
    decreaseProductQuantity: (state, action) => {
      if (action.payload.quantity < 2) {
        state.products = state.products.filter(
          (e) => e.id !== action.payload.id
        );

        return;
      }

      state.products = state.products.map((currentProduct) => {
        if (currentProduct.id === action.payload.id) {
          return { ...currentProduct, quantity: currentProduct.quantity - 1 };
        }

        return currentProduct;
      });
    },
    increaseProductQuantity: (state, action) => {
      state.products = state.products.map((currentProduct) => {
        if (currentProduct.id === action.payload.id) {
          return { ...currentProduct, quantity: currentProduct.quantity + 1 };
        }

        return currentProduct;
      });
    },
  },
});

export const {
  addProduct,
  toggleCart,
  decreaseProductQuantity,
  increaseProductQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
