import styled, { keyframes } from "styled-components";

const subirDescer = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
`

export const Container = styled.div`
background: #000;
padding: 0 20px;

section{
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 50px 0 20px 20px;

  h2{
    color: yellow;
    font-size: 24px;
  }

  img{
    height: 50px;
    margin: 0;
    padding: 0;
    animation: ${subirDescer} 3s ease-in-out infinite;
  }

}
.swiper-wrapper{
    display: flex;
}

`
