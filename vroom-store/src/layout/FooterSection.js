import React from "react";
import styled from "styled-components";
import FooterWrapper from "../styledComponents/FooterWrapper";

const FooterText = styled.div`
   display: flex;
   justify-content: center;
   font-size: 18px;
   font-weight: 700;
   word-spacing: 5px;

   a {
      padding: 0px 10px;
   }
`;

function FooterSection() {
   return (
      <FooterWrapper>
         <FooterText>
            Made By :{" "}
            <a href="https://www.github.com/c19h3r"> @github/c19h3r</a>
         </FooterText>
      </FooterWrapper>
   );
}

export default FooterSection;
