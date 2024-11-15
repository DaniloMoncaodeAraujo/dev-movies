import styled, { keyframes } from "styled-components";

const scale = keyframes`
   from{
    transform: scale(0);
}

   to{
    transform: scale(1);
   }
`

export const Background = styled.div`
background-image: url(${(props) => props.image});
height: 60vh;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
position: relative;


&::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
}

&::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
}
`

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
height: 100%;
max-width: 1500px;
margin-top: -100px;

`

export const Cover = styled.div`
padding: 20px;
display: flex;
align-items: flex-start;
height: 100%;
z-index: 99;

img {
    width: 350px;
    border-radius: 30px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.5s linear;

}

`

export const Info = styled.div`
padding: 20px;
width: 50%;
z-index: 99;
display: flex;
flex-direction: column;
align-items: flex-start;

h2{
    font-size: 50px;
    font-weight: 700;
    color: yellow;
}

p{
    font-weight: 700;
    color: #fff;
    margin-top: 20px;
    margin-bottom: 30px;
}
`

export const ContainerMovies = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 20px;
width: 100%;

div {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    width: 70%;
    height: 60%;
    margin: 50px;
}

h4{
    color: yellow;
    font-size:20px;
    font-weight: 700;
    margin-bottom: 10px;
}

iframe{
    width: 100%;
    border: 1px solid #FFEB99;
}
`

export const Margin = styled.div`
margin-bottom: 20px;
`
