import React, { useContext } from "react";
import styled from "styled-components";
import CartProductWrapper from "../styledComponents/componentWrappers/CartProductWrapper";

import leftArrowIcon from "../assets/svg/LeftArrow.svg";
import RightArrowIcon from "../assets/svg/RightArrow.svg";

import infoIcon from "../assets/svg/Info.svg";
import { AppContext } from "../context/AppContext";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../context/action.types";

const CarImg = styled.img`
   width: 144px;
`;
const CarName = styled.span`
   font-weight: 600;
   font-size: 16px;
   white-space: nowrap;
`;
const CarQuan = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;

   span {
      padding: 5px;
      background-color: black;
      color: white;
      border-radius: 5px;
   }
`;
const QuanBtn = styled.button`
   display: flex;
   padding: 0px;
   background-color: transparent;
   border: 0;
   cursor: pointer;

   img {
      height: 36px;
   }
`;
const CarInfoBtn = styled.img`
   &:hover {
      cursor: pointer;
   }
`;

const CarPrice = styled.span``;

const CartProduct = ({ id }) => {
   const [{ cart, navigate }, dispatch] = useContext(AppContext);
   const { name, amount, quantity, image } = cart.find(
      (item) => item.id === id
   );
   return (
      <CartProductWrapper>
         <CarImg src={image} />
         <CarName>{name}</CarName>
         <CarQuan>
            <QuanBtn
               onClick={() => dispatch({ type: REMOVE_FROM_CART, payload: id })}
            >
               <img src={leftArrowIcon} alt="left_arrow" />
            </QuanBtn>
            <span>{quantity}</span>
            <QuanBtn
               onClick={() => dispatch({ type: ADD_TO_CART, payload: id })}
            >
               <img src={RightArrowIcon} alt="right_Arrow" />
            </QuanBtn>
         </CarQuan>
         <CarPrice>${amount}</CarPrice>
         <CarInfoBtn
            src={infoIcon}
            onClick={() => {
               navigate(`/product/${id}`);
            }}
         />
      </CartProductWrapper>
   );
};

export default CartProduct;
