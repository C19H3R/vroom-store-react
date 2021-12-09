import React, { useContext } from "react";
import styled from "styled-components";
import CartPageWrapper from "../styledComponents/PageWrappers/CartPageWrapper";
import CartProduct from "../components/CartProduct";
import CartPriceInfo from "../components/CartPriceInfo";
import { AppContext } from "../context/AppContext";
const CartTitle = styled.span`
   font-size: 42px;
   font-weight: 700px;
   align-self: flex-start;
   justify-self: flex-start;
`;
const CartInfo = styled.div`
   display: flex;
`;
const CartProductContainer = styled.div`
   display: flex;
   width: 100%;
   flex-direction: column;
   align-items: center;
`;

function CartPage() {
   const [{ cart, carsInCart }] = useContext(AppContext);

   const carsList = cart.map((val) => {
      return <CartProduct id={val.id} key={val.id} />;
   });
   return (
      <CartPageWrapper>
         <CartTitle>CART</CartTitle>
         <CartInfo>
            <CartProductContainer>{carsList}</CartProductContainer>
            {carsInCart > 0 ? <CartPriceInfo /> : <></>}
         </CartInfo>
      </CartPageWrapper>
   );
}

export default CartPage;
