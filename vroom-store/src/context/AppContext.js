import { createContext } from "react";
export const AppContext = createContext({
   products: [],
   cart: [],
   wishlist: [],
   dispatch: () => {},
});
