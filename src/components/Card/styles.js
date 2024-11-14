import styled from "styled-components";

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
}

h3{
   color: #fff;
   margin-top: 15px;
}
`