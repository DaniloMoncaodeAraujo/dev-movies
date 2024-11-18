import styled from "styled-components";
import breakpoints from "../../styles/breakpoints"

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

&:hover{
   img{
      box-shadow: 
    rgba(255, 255, 255, 0.16) 0px 1px 4px, 
    yellow 0px 0px 0px 3px;  

   }

   h3{
      color: #fff;
   }
}

img{
   border-radius: 10px;
   width: 300px;
   height: 100%;
   margin-bottom: 5px;

   @media ${breakpoints.xll} {
      width: 280px;
   }

   @media ${breakpoints.xlk} {
      width: 260px;
   }

   @media ${breakpoints.lg} {
      width: 240px;
   }

   @media ${breakpoints.md} {
      width: 200px;
   }

   @media ${breakpoints.sm} {
      width: 180px;
   }

   @media ${breakpoints.sml} {
      width: 165px;
   }

   @media ${breakpoints.sk} {
      width: 120px;
   }
}

h3{
   color: #fff;
   margin-top: 15px;
}
`