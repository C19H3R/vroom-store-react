import React from "react";
import styled from "styled-components";
import { cars } from "../data/CarsData.json";
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
   return (
      <ProductPageWrapper>
         <CarImg src={cars[0].image} />
         <CarInfoContainer>
            <CarTitle>{cars[0].name}</CarTitle>
            <CarDescription>{cars[0].description}</CarDescription>
            <BuyBtn>Buy Now</BuyBtn>
         </CarInfoContainer>
      </ProductPageWrapper>
   );
}

export default ProductPage;
