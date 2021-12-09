import React, { useContext } from "react";
import styled from "styled-components";
import { RESET_PURCHASE } from "../context/action.types";
import { AppContext } from "../context/AppContext";
import CartPriceInfoWrapper from "../styledComponents/componentWrappers/CartPriceInfoWrapper";

const InfoLabel = styled.span`
   white-space: nowrap;
`;

const InfoValue = styled.span`
   text-align: center;

   white-space: nowrap;
   background-color: black;
   color: white;
   display: block;
   padding: 10px;
   border-radius: 10px;
`;
const CheckoutBtn = styled.button`
   background-color: green;
   padding: 10px;
   border: 0;
   border-radius: 10px;
   font-weight: 700;

   &:hover {
      cursor: pointer;
      background-color: #98fb98;
   }
`;
function CartPriceInfo() {
   const [{ cartValue, totalCars, navigate }, dispatch] =
      useContext(AppContext);
   return (
      <CartPriceInfoWrapper>
         <InfoLabel>Total</InfoLabel>
         <InfoValue>${cartValue}</InfoValue>

         <InfoLabel>Number of cars</InfoLabel>
         <InfoValue>{totalCars}</InfoValue>

         <CheckoutBtn
            onClick={() => {
               alert("Thanks for shopping");
               dispatch({ type: RESET_PURCHASE });
               navigate("/home");
            }}
         >
            Checkout
         </CheckoutBtn>
      </CartPriceInfoWrapper>
   );
}

export default CartPriceInfo;
