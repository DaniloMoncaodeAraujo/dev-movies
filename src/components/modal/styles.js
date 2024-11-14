import styled from "styled-components";

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

iframe{
   border: none;
   height: 100%;
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