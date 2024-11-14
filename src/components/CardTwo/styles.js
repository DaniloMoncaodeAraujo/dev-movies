import styled from "styled-components";

export const Container = styled.div`

    img{
      cursor: pointer;
      border-radius: 5px;
      width: 250px;
      height: 350px;
      border: 2px solid #0f0f0f;
    }

     &:hover{
       img{
        border: none;
         box-shadow: 
          rgba(255, 255, 255, 0.16) 0px 1px 4px, 
          yellow 0px 0px 0px 3px; 
         transform: scale(1.1);
         z-index: 99;
   
       }

     }

` 