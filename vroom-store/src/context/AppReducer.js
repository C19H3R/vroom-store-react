// const initialState = {
//    products: [...data],
//    cart: [],
//    wishlist: [],
//    cartValue: 0,
//    totalCars:0,
//    carsInCart: 0,
//    carsWishlisted: 0,
//    navigate: useNavigate(),
// };

import {
   ADD_TO_CART,
   REMOVE_FROM_CART,
   RESET_PURCHASE,
   TOGGLE_WISHLIST,
} from "./action.types";

export const reducer = (state, { type, payload }) => {
   switch (type) {
      case ADD_TO_CART: {
         const productId = parseInt(payload);

         let { cart, products, carsInCart, cartValue, totalCars } = state;
         const selectedProduct = products.find((item) => item.id === productId);
         const isInCart = cart.find((item) => item.id === productId);
         if (isInCart) {
            cart = cart.map((item) => {
               if (item.id === productId) {
                  console.log("invoked");
                  return {
                     ...item,
                     amount: parseFloat(
                        parseFloat(item.amount) + parseFloat(item.price)
                     ).toFixed(2),
                     quantity: item.quantity + 1,
                  };
               } else {
                  return item;
               }
            });
         } else {
            carsInCart = carsInCart + 1;
            cart = [
               ...cart,
               {
                  ...selectedProduct,
                  amount: parseFloat(selectedProduct.price).toFixed(2),
                  quantity: 1,
               },
            ];
         }
         cartValue = 0;
         totalCars = 0;
         cart.forEach(({ amount, quantity }) => {
            cartValue = parseFloat(cartValue) + parseFloat(amount);
            totalCars = parseInt(totalCars) + parseInt(quantity);
            cartValue = cartValue.toFixed(2);
         });

         return {
            ...state,
            cart,
            carsInCart,
            cartValue,
            totalCars,
         };
      }
      case REMOVE_FROM_CART: {
         const productId = payload;

         let { cart, carsInCart, cartValue, totalCars } = state;
         const isInCart = cart.find((item) => item.id === productId);
         if (isInCart.quantity > 1) {
            cart = cart.map((item) => {
               if (item.id === productId) {
                  return {
                     ...item,
                     amount: parseFloat(
                        parseFloat(item.amount) - parseFloat(item.price)
                     ).toFixed(2),
                     quantity: item.quantity - 1,
                  };
               } else {
                  return item;
               }
            });
         } else if (isInCart.quantity === 1) {
            carsInCart = carsInCart - 1;
            cart = cart.filter((item) => item.id !== productId);
         }
         cartValue = 0;
         totalCars = 0;
         cart.forEach(({ amount, quantity }) => {
            cartValue = parseFloat(cartValue) + parseFloat(amount);
            totalCars = parseInt(totalCars) + parseInt(quantity);
            cartValue = cartValue.toFixed(2);
         });

         return {
            ...state,
            cart,
            carsInCart,
            cartValue,
            totalCars,
         };
      }
      case RESET_PURCHASE: {
         let { cart, carsInCart, cartValue, totalCars } = state;
         cart = [];
         carsInCart = 0;
         cartValue = 0;
         totalCars = 0;
         cart.forEach(({ amount, quantity }) => {
            cartValue = parseFloat(cartValue) + parseFloat(amount);
            totalCars = parseInt(totalCars) + parseInt(quantity);
            cartValue = cartValue.toFixed(2);
         });

         return {
            ...state,
            cart,
            carsInCart,
            cartValue,
            totalCars,
         };
      }
      case TOGGLE_WISHLIST: {
         const productId = payload;
         let { products, carsWishlisted } = state;
         products = products.map((item) => {
            if (item.id === productId) {
               if (!item.isWishlisted) {
                  carsWishlisted = carsWishlisted + 1;
               } else {
                  carsWishlisted = carsWishlisted - 1;
               }
               return { ...item, isWishlisted: !item.isWishlisted };
            } else return item;
         });
         return { ...state, products, carsWishlisted };
      }

      default: {
         break;
      }
   }
};
