import React, { useContext } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { ADD_TO_CART } from "../context/action.types";
import { AppContext } from "../context/AppContext";
import ProductPageWrapper from "../styledComponents/PageWrappers/ProductPageWrapper";

const CarImg = styled.img`
   width: 480px;
`;
const CarInfoContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 24px;
`;
const CarTitle = styled.span`
   font-weight: bold;
   font-size: 36px;
`;
const CarDescription = styled.p``;
const BuyBtn = styled.button`
   width: 121px;
   height: 28px;
   font-size: 18px;
   background-color: black;
   color: white;
   border: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 14px;
   &:hover {
      background-color: gray;
      cursor: pointer;
   }
`;

function ProductPage() {
   const [{ products, navigate }, dispatch] = useContext(AppContext);
   const { carId } = useParams();
   const cars = products;
   return (
      <ProductPageWrapper>
         <CarImg src={cars[carId].image} />
         <CarInfoContainer>
            <CarTitle>{cars[carId].name}</CarTitle>
            <CarDescription>{cars[carId].description}</CarDescription>
            <BuyBtn
               onClick={() => {
                  dispatch({ type: ADD_TO_CART, payload: carId });
                  navigate("/cart");
               }}
            >
               Buy Now
            </BuyBtn>
         </CarInfoContainer>
      </ProductPageWrapper>
   );
}

export default ProductPage;
