import React from "react";
import HomePageWrapper from "../styledComponents/PageWrappers/HomePageWrapper";
import video from "../assets/videos/homepage-video.mp4";
import styled from "styled-components";
import FerrariLogo from "../assets/svg/FerrariLogoColor.svg";
const HomePageVid = styled.video`
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: -1;
   height: 100vh;
   width: 100vw;
   object-fit: cover;
`;

const LogoImg = styled.img`
   height: 240px;
`;
const StoreBtn = styled.button`
   background: white;
   border: 0;
   height: 48px;
   border-radius: 24px;
   font-size: 18px;
   padding: 0 50px;

   &:hover {
      background-color: gray;
      color: white;
      cursor: pointer;
   }
`;
function HomePage() {
   return (
      <HomePageWrapper>
         <HomePageVid autoplay="" controls="" src={video} loop muted autoPlay />
         <LogoImg src={FerrariLogo} />
         <StoreBtn>Browse Cars</StoreBtn>
      </HomePageWrapper>
   );
}

export default HomePage;
