import styled, { keyframes } from "styled-components";
import breakpoints from "../../styles/breakpoints";

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

@media ${breakpoints.sm} {
   margin-top: -190px;
}

`

export const Cover = styled.div`
padding: 20px;
display: flex;
align-items: flex-start;
height: 100%;
z-index: 99;

@media ${breakpoints.sml} {
      padding: 20px 0px 20px 20px;
}

@media ${breakpoints.sk} {
     padding: 20px 0px 20px 5px;
}

img {
    width: 350px;
    border-radius: 30px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.5s linear;

    @media ${breakpoints.xlj} {
        width: 320px;
    }

    @media ${breakpoints.xl} {
      width: 300px;
   }

   @media ${breakpoints.lg} {
        width: 280px;
    }

    @media ${breakpoints.md} {
      width: 240px;
   }

   @media ${breakpoints.sm} {
      width: 220px;
   }

   @media ${breakpoints.sml} {
      width: 195px;
   }

   @media ${breakpoints.sl} {
      width: 180px;
   }

   @media ${breakpoints.sj} {
      margin-top: 15px;
      width: 170px;
   }

   @media ${breakpoints.sk} {
     width: 150px;
   }

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

    @media ${breakpoints.xlj} {
        font-size: 40px;
    }

    @media ${breakpoints.lg} {
        font-size: 35px;
    }

    @media ${breakpoints.md} {
      font-size: 30px;
   }

   @media ${breakpoints.sm} {
      font-size: 25px;
   }

   @media ${breakpoints.sl} {
      font-size: 20px;
   }

   @media ${breakpoints.sk} {
     font-size: 16px;
   }
}

.paragrafoOverView{
    font-weight: 700;
    color: #fff;
    margin-top: 20px;
    margin-bottom: 30px;

    @media ${breakpoints.xlj} {
        font-size: 15px;
    }

    @media ${breakpoints.lg} {
        font-size: 12px;
    }

    @media ${breakpoints.md} {
      font-size: 11px;
   }

   @media ${breakpoints.sm} {
      font-size: 10px;
   }

   @media ${breakpoints.sj} {
     margin-bottom: 15px;
   } 

   @media ${breakpoints.sk} {
     font-size: 8px;
   }
}
`

export const ContainerNoInformations = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

 p{
    font-size: 50px;
    text-align: center;
    color: yellow;

    @media ${breakpoints.xlj} {
      font-size: 40px;
    }

    @media ${breakpoints.xlj} {
      font-size: 30px;
    }

    @media ${breakpoints.sml} {
      font-size: 25px;
    }

    @media ${breakpoints.sk} {
      font-size: 20px;
    }
 }
`


