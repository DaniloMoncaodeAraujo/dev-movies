import styled from "styled-components";

export const Container = styled.div`
display: flex;
margin-top: 30px;
gap: 10px;

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
   cursor: pointer;

   &:hover{
      color: yellow;
      border: 2px solid #fff;
   }
}
`
