import styled from "styled-components";
import breakpoints from "../../styles/breakpoints"

export const Container = styled.div`

    img{
      cursor: pointer;
      border-radius: 5px;
      width: 250px;
      height: 350px;
      border: 2px solid #0f0f0f;

     @media ${breakpoints.xllm} {
      width: 200px;
      height: 280px;
     }

     @media ${breakpoints.xll} {
      width: 180px;
      height: 250px;
     }

     @media ${breakpoints.xlk} {
      width: 160px;
      height: 250px;
     }

     @media ${breakpoints.xl} {
      width: 135px;
      height: 220px;
     }

     @media ${breakpoints.lg} {
      width: 115px;
      height: 200px;
     }

     @media ${breakpoints.md} {
      width: 100px;
      height: 180px;
     }

     @media ${breakpoints.sm} {
      width: 90px;
      height: 170px;
     }

     @media ${breakpoints.sml} {
      width: 80px;
      height: 140px;
     }

     @media ${breakpoints.sl} {
      width: 87px;
      height: 140px;
     }

    }

     &:hover{
       img{
        border: none;
         box-shadow: 
          rgba(255, 255, 255, 0.16) 0px 1px 4px, 
          yellow 0px 0px 0px 3px; 
         transform: scale(1.1);
         z-index: 99;

         @media ${breakpoints.sl} {
          box-shadow: 
          rgba(255, 255, 255, 0.16) 0px 1px 1px, 
          yellow 0px 0px 0px 1px; 
     }
   
       }

     }

` 