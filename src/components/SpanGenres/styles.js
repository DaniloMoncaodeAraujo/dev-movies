import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const Container = styled.div`
display: grid;
grid-template-columns: repeat(3,auto);
margin-top: 30px;
gap: 10px;

@media ${breakpoints.sj} {
   gap: 5px;
}

@media ${breakpoints.sk} {
     margin-top: 20px;
}

span{
   padding: 8px 18px;
   border: 2px solid yellow;
   border-radius: 30px;
   font-size: 12px;
   font-weight: 600;
   background-color: #0f0f0f;
   color: #FFEB99;
   display: flex;
   justify-content: center;
   align-items: center;
   white-space: nowrap;
   cursor: pointer;

   @media ${breakpoints.xl} {
      padding: 8px 13px;
   }

   @media ${breakpoints.lg} {
      font-size: 10px;
      padding: 8px 11px;
   }

   @media ${breakpoints.md} {
      font-size: 9px;
      padding: 5px 8px;
   }

   @media ${breakpoints.sm} {
      font-size: 8px;
      padding: 4px 7px;
   }

   @media ${breakpoints.sml} {
      font-size: 7px;
      padding: 2px 5px;
      border: 1px solid yellow;
   }

   @media ${breakpoints.sj} {
      padding: 2px 3px;
   }

   @media ${breakpoints.sk} {
     font-size: 6px;
     white-space: nowrap;
   }


   &:hover{
      color: yellow;
      border: 2px solid #fff;

      @media ${breakpoints.sml} {
         border: 1px solid yellow;   
      }
   }
}
`
