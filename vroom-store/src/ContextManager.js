import React, { useReducer } from "react";
import { useNavigate } from "react-router";
import FooterSection from "./layout/FooterSection";
import HeaderSection from "./layout/HeaderSection";
import { reducer } from "./context/AppReducer";
import { AppContext } from "./context/AppContext";
import { cars } from "./data/CarsData.json";
import faker from "faker";

const ContextManager = ({ page }) => {
   const data = cars.map((value) => {
      return {
         id: value.id,
         name: value.name,
         description: value.description,
         isWishlisted: false,
         image: value.image,
         price: faker.commerce.price(10000),
      };
   });
   const initialState = {
      products: [...data],
      cart: [],
      wishlist: [],
      cartValue: 0,
      totalCars: 0,
      carsInCart: 0,
      carsWishlisted: 0,
      navigate: useNavigate(),
   };

   const [state, dispatch] = useReducer(reducer, initialState);
   return (
      <AppContext.Provider value={[state, dispatch]}>
         <HeaderSection />
         {page}
         <FooterSection />
      </AppContext.Provider>
   );
};

export default ContextManager;
