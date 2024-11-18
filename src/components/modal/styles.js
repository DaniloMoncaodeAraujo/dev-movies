import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const Background = styled.div`
height: 110vh;
width: 100vw;
z-index: 100;
background-color: rgba(0, 0, 0, 0.6);
position: absolute;
display: flex;
align-items: center;
justify-content: center;
`

export const Container = styled.div`
background-color: #000;
width: 60%;
height: 80%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 30px;
max-width: 1200px;
position: fixed;
border-radius: 15px;
border: 1px solid yellow;
border-bottom: 5px solid #FFEB99;
gap: 10px;

  @media ${breakpoints.lg} {
      width: 600px;
      
   }

   @media ${breakpoints.md} {
      width: 530px;
      
   }

   @media ${breakpoints.sm} {
      width: 500px;
   }
   
   @media ${breakpoints.sml} {
      width: 400px;
      margin-top: 20px;
   }

   @media ${breakpoints.sl} {
      margin-top: 120px;
   }

   @media ${breakpoints.sj} {
      width: 390px;
      margin-top: 150px;
   }

   @media ${breakpoints.sk} {
      width: 330px;
      height: 70%;
      margin-top: 150px;
   }

iframe{
   border: none;
   height: 100%;

   @media ${breakpoints.sm} {
      width: 400px;
   }

   @media ${breakpoints.sml} {
      width: 350px;
   }

   @media ${breakpoints.sj} {
      width: 340px;
   }

   @media ${breakpoints.sk} {
      width: 320px;
   }

}

button{
   align-self: flex-end;
   background: none;
   border: none;
   cursor: no-drop;

   img{
      width: 30px;
   }
}

`