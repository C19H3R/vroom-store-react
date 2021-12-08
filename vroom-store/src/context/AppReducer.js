import {
   ADD_TO_CART,
   ADD_TO_WISHLIST,
   REMOVE_FROM_CART,
   REMOVE_FROM_WISHLIST,
} from "./action.types";

export const initialState = { products: [], cart: [], wishlist: [] };

export const reducer = (action, type) => {
   switch (action) {
      case ADD_TO_CART: {
         break;
      }
      case REMOVE_FROM_CART: {
         break;
      }
      case ADD_TO_WISHLIST: {
         break;
      }
      case REMOVE_FROM_WISHLIST: {
         break;
      }
      default: {
         break;
      }
   }
};
