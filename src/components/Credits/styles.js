import styled from "styled-components";

export const Container = styled.div`
display: flex;
margin-top: 30px;
gap: 10px;

div{
display: flex;
flex-direction: column;
}

p{
   margin-top: 10px;
   font-size: 15px;
   color: #FFEB99;
}

img{
   width: 140px;

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
`