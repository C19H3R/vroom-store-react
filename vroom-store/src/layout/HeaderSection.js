import React, { useContext } from "react";
import "styled-components";
import styled from "styled-components";
import HeaderWrapper from "../styledComponents/HeaderWrapper";

import logoIcon from "../assets/svg/Logo.svg";
import cartIcon from "../assets/svg/CartIcon.svg";
import wishlistIcon from "../assets/svg/WishlistFilled.svg";
import shoppingIcon from "../assets/svg/ShoppingBag.svg";
import { AppContext } from "../context/AppContext";

//#region
const HeaderText = styled.span`
   font-size: xx-large;
   color: white;
   font-family: header font;
`;
const LogoIcon = styled.img`
   filter: invert(100);
   height: 64px;
   margin: auto;
   cursor: pointer;
`;
const BtnsWrapper = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   gap: 24px;
`;
const Btn = styled.button`
   background: transparent;
   border: 0;
   border-radius: 50%;
   height: 50px;
   width: 50px;
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   &:hover {
      background: white;
      cursor: pointer;
   }
   &:hover img {
      filter: invert(0);
   }
`;
const Icon = styled.img`
   filter: invert(100);
   height: 32px;
`;
const BtnSuperScript = styled.div`
   position: absolute;
   top: 0;
   right: 0;
   background-color: #ff7f7f;
   height: 22px;
   width: 22px;
   z-index: 1;
   font-size: 14px;
   border-radius: 50%;
`;
//#endregion

function HeaderSection() {
   const [{ navigate, carsWishlisted, carsInCart }] = useContext(AppContext);
   return (
      <HeaderWrapper>
         <HeaderText>Ferrari</HeaderText>
         <LogoIcon
            src={logoIcon}
            onClick={() => {
               navigate("/home");
            }}
         />
         <BtnsWrapper>
            <Btn
               onClick={() => {
                  navigate("/products");
               }}
            >
               <Icon src={shoppingIcon} />
            </Btn>
            <Btn
               onClick={() => {
                  navigate("/wishlist");
               }}
            >
               {carsWishlisted > 0 ? (
                  <BtnSuperScript>{carsWishlisted}</BtnSuperScript>
               ) : (
                  ""
               )}
               <Icon src={wishlistIcon} />
            </Btn>
            <Btn
               onClick={() => {
                  navigate("/cart");
               }}
            >
               {carsInCart > 0 ? (
                  <BtnSuperScript>{carsInCart}</BtnSuperScript>
               ) : (
                  ""
               )}
               <Icon src={cartIcon} />
            </Btn>
         </BtnsWrapper>
      </HeaderWrapper>
   );
}

export default HeaderSection;
