//#region local imports
import React, { useContext } from "react";
import styled from "styled-components";
//#endregion package imports

//#region local imports
import infoIcon from "../assets/svg/Info.svg";
import cartIcon from "../assets/svg/CartIcon.svg";
import wishlistFilledIcon from "../assets/svg/WishlistFilled.svg";
import wishlistBorderIcon from "../assets/svg/WishlistBorder.svg";

import CardWrapper from "../styledComponents/componentWrappers/CardWrapper";
import { AppContext } from "../context/AppContext";
import { ADD_TO_CART, TOGGLE_WISHLIST } from "../context/action.types";
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
      background-color: black;
      border-radius: 18px;
      cursor: pointer;
   }
   &:hover img {
      background-color: white;
      border-radius: 18px;
      filter: invert(100);
   }
   &:hover span {
      visibility: visible;
   }
   &:hover > span {
      width: 125px;
   }
`;
const BtnLabel = styled.span`
   margin-left: 5px;
   width: 0px;
   white-space: nowrap;
   visibility: hidden;
   transition: width 200ms linear;
   color: white;
`;

const CardBtnIcon = styled.img`
   padding: 5px;
`;
//#endregion

function ProductCard({ id }) {
   const [{ navigate, products }, dispatch] = useContext(AppContext);
   const { name, description, price, isWishlisted, image } = products.find(
      (item) => item.id === id
   );
   return (
      <CardWrapper>
         <ProductImg src={image} />
         <InfoDiv>
            <ProductTitle>{name}</ProductTitle>
            <ProductDesc>{description.substring(0, 150) + "..."}</ProductDesc>
            <ProductPrice>${price}</ProductPrice>
            <CardButtonsContainer>
               <CardBtn onClick={() => navigate(`/product/${id}`)}>
                  <CardBtnIcon src={infoIcon} />
                  <BtnLabel>Info</BtnLabel>
               </CardBtn>
               <CardBtn
                  onClick={() => {
                     dispatch({ type: ADD_TO_CART, payload: id });
                  }}
               >
                  <CardBtnIcon src={cartIcon} />
                  <BtnLabel>Add To Cart</BtnLabel>
               </CardBtn>
               <CardBtn
                  onClick={() => {
                     dispatch({ type: TOGGLE_WISHLIST, payload: id });
                  }}
               >
                  <CardBtnIcon
                     src={
                        isWishlisted ? wishlistFilledIcon : wishlistBorderIcon
                     }
                  />
                  <BtnLabel>Wishlist</BtnLabel>
               </CardBtn>
            </CardButtonsContainer>
         </InfoDiv>
      </CardWrapper>
   );
}
export default ProductCard;
