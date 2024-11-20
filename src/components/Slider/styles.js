import styled, { keyframes } from "styled-components";
import breakpoints from "../../styles/breakpoints"

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
overflow: hidden;

section{
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 50px 0 20px 20px;
    position: relative;
    
    @media ${breakpoints.sk} {
      position: relative;
      left: -10px;
    }

  h2{
    color: yellow;
    font-size: 24px;

    @media ${breakpoints.md} {
      font-size: 22px;
    }

    @media ${breakpoints.sl} {
      font-size: 19px;
    }

    @media ${breakpoints.sk} {
      font-size: 16px;
    }
  }

  img{
    height: 50px;
    margin: 0;
    padding: 0;
    animation: ${subirDescer} 3s ease-in-out infinite;

    @media ${breakpoints.md} {
      height: 40px;
    }

    @media ${breakpoints.sl} {
      height: 35px;
    }

    @media ${breakpoints.sk} {
      height: 30px;
    }
  }

}
.swiper-wrapper{
    display: flex;
    
}

`
