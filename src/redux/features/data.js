import { createSlice } from "@reduxjs/toolkit";
import Pdata from "../../components/Product/Pdata";

export const counterSlice = createSlice({
  name: "appData",
  initialState: {
    value: { data: Pdata, wishlist: [], cart: [], filterData: [] },
    filters: [
      {
        name: "Men",
        active: false,
      },
      {
        name: "Women",
        active: false,
      },
      {
        name: "Boys",
        active: false,
      },
      {
        name: "Girls",
        active: false,
      },
    ],
    categories: [
      {
        name: "Shirts",
        active: false,
      },
      {
        name: "Sleep Shirts",
        active: false,
      },
      {
        name: "Dog shirts",
        active: false,
      },
    ],
    brands: [
      {
        name: "Zara",
        active: false,
      },
      {
        name: "Parx",
        active: false,
      },
      {
        name: "Roadster",
        active: false,
      },
      {
        name: "Harvard",
        active: false,
      },
      {
        name: "Wrogn",
        active: false,
      },
    ],
    wishlist: [],
    cart: [],
  },
  reducers: {
    filter: (state, action) => {
      
      const { payload } = action;
      console.log(payload);
      debugger;
      switch (payload.type) {
        case "filter":
          const filters = state.value.filterData.length===0 ? state.value.data.map((currData) => {
              console.log(currData);
            if (action.payload.value === currData.filter) {
              return { ...currData, visible: true };
            } else {
              return { ...currData, visible: false };
            }
          }):state.value.filterData.filter(currData => payload === currData.filter);
          console.log(filters,15);
          state.value.data = filters;
          break;
        case "category":
          const categories = state.value.filterData.length === 0 ?state.value.data.map((currData) => {
            if (
              action.payload.value.find(
                (category) => category === currData.category
              )
            ) {
              return { ...currData, visible: true };
            } else {
              return { ...currData, visible: false };
            }
          }): state.value.filterData.filter(currData => payload === currData.category);
          console.log(categories);
          state.value.data = categories;
          break;
        case "brand":
          console.log(state.value.data, "name");
          const brands = state.value.filterData.length === 0 ?state.value.data.map((currData) => {
      
            if (
              action.payload.value.find((brand) => brand === currData.pname)
            ) {
              return { ...currData, visible: true };
            } else {
              return { ...currData, visible: false };
            }

          }): state.value.filterData.filter(currData => payload === currData.pname) ;
          console.log(brands);
          state.value.data = brands;
          break;

        default:
          break;
      }

    },
    addToWishlist: (state, action) => {
    
      const abc = state.value.wishlist;
	  console.log(abc);
	  console.log([...abc,action.payload]);
      state.value.wishlist = [...abc,action.payload];
     
    },
    removeFromWishList: (state, action) => {
      const wishlistedData = state.value.wishlist.filter(
        ({ id }) => id !== action.payload.id
      );
	  console.log(wishlistedData);
      state.value.wishlist = wishlistedData;

    },
    addToCart: (state, action) => {
     
      const abc = state.value.cart;
      state.cart = abc.push(action.payload);
      
    },
    removeFromCart: (state, action) => {
      const cartData = state.value.cart.filter(({ id }) => id !== action.payload.id);
      state.value.cart = cartData;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const {
  incrementByAmount,
  filter,
  addToWishlist,
  removeFromWishList,
  addToCart,
  removeFromCart,
} = counterSlice.actions;

export default counterSlice.reducer;
