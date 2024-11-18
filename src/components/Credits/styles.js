import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const Container = styled.div`
display: flex;
margin-top: 30px;
gap: 10px;

@media ${breakpoints.lg} {
     gap: 5px;
}

@media ${breakpoints.sj} {
   gap: 3px;
}

@media ${breakpoints.md} {
      margin-top: 20px;
   }

div{
display: flex;
flex-direction: column;
}

p{
   margin-top: 10px;
   font-size: 15px;
   color: #FFEB99;

   @media ${breakpoints.xllm} {
      font-size: 12px;
   }

   @media ${breakpoints.xl} {
      font-size: 10px;
   }

   @media ${breakpoints.lg} {
      font-size: 8px;
   }

   @media ${breakpoints.md} {
      width: 7px;
   }

   @media ${breakpoints.sm} {
      font-size: 7px;
   }

   @media ${breakpoints.sml} {
      font-size: 6px;
   }


}

img{
   width: 140px;

   @media ${breakpoints.xllm} {
      width: 100px;
   }

   @media ${breakpoints.xll} {
      width: 85px;
   }

   @media ${breakpoints.xlk} {
      width: 80px;
   }

   @media ${breakpoints.xlj} {
      width: 70px;
   }

   @media ${breakpoints.xl} {
      width: 60px;
   }

   @media ${breakpoints.lg} {
      width: 50px;
   }

   @media ${breakpoints.md} {
      width: 40px;
   }

   @media ${breakpoints.sl} {
      width: 32px;
   }

   @media ${breakpoints.sk} {
     width: 29px;
   }


   &:hover{
      box-shadow: 
    rgba(255, 255, 255, 0.16) 0px 1px 4px, 
    yellow 0px 0px 0px 2px;
    border-radius: 5px;
   }
}
`

export const Title = styled.h4`
color: yellow;
font-size: 28px;
font-weight: 700;

@media ${breakpoints.sl} {
   font-size: 20px;
}

@media ${breakpoints.sk} {
     font-size: 15px;
}

`