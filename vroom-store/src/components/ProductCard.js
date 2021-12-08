//#region local imports
import React from "react";
import styled from "styled-components";
//#endregion package imports

//#region local imports
import { cars } from "../data/CarsData.json";
import infoIcon from "../assets/svg/Info.svg";
import cartIcon from "../assets/svg/CartIcon.svg";
import wishlistFilledIcon from "../assets/svg/WishlistFilled.svg";
import CardWrapper from "../styledComponents/componentWrappers/CardWrapper";
//#endregion

//#region styled Elements
const InfoDiv = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
`;
const ProductImg = styled.img`
   width: 240px;
`;
const ProductTitle = styled.span`
   font-weight: bold;
   font-size: 24px;
`;
const ProductDesc = styled.p``;
const ProductPrice = styled.span`
   margin-bottom: 22px;
   background-color: black;
   color: white;
   width: fit-content;
   display: block;
   padding: 5px;
   border-radius: 10px;
`;
const CardButtonsContainer = styled.div`
   display: flex;
   gap: 20px;
`;
const CardBtn = styled.div`
   height: 36px;
   display: flex;
   justify-content: center;
   align-items: center;
   &:hover {
      background-color: red;
   }
   &:hover img {
      background-color: gold;
      border-radius: 50%;
   }
   &:hover span {
      width: auto;
   }
`;
const BtnLabel = styled.span`
   margin-left: 5px;

   width: 0px;
   transition: width 2s linear;
`;

const CardBtnIcon = styled.img`
   padding: 5px;
`;
//#endregion

function ProductCard({ id }) {
   return (
      <CardWrapper>
         <ProductImg src={cars[id].image} />
         <InfoDiv>
            <ProductTitle>{cars[id].name}</ProductTitle>
            <ProductDesc>
               {cars[id].description.substring(0, 150) + "..."}
            </ProductDesc>
            <ProductPrice>${100}</ProductPrice>
            <CardButtonsContainer>
               <CardBtn>
                  <CardBtnIcon src={infoIcon} />
                  {/* <BtnLabel>Info</BtnLabel> */}
               </CardBtn>
               <CardBtn>
                  <CardBtnIcon src={cartIcon} />
                  {/* <BtnLabel>Add To Cart</BtnLabel> */}
               </CardBtn>
               <CardBtn>
                  <CardBtnIcon src={wishlistFilledIcon} />
                  {/* <BtnLabel>Wishlist</BtnLabel> */}
               </CardBtn>
            </CardButtonsContainer>
         </InfoDiv>
      </CardWrapper>
   );
}
export default ProductCard;
