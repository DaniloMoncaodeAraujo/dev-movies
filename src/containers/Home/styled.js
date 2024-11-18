import styled, { keyframes } from 'styled-components'
import breakpoints from "../../styles/breakpoints"

const scale = keyframes`
from{
    transform: scale(0);
}

   to{
    transform: scale(1);
   }
`

export const Background = styled.div`
background-image: url( ${(props) => props.img});
height: 110vh;
background-position: center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
position: relative;

@media ${breakpoints.sl} {
    height: 90vh;
}

@media ${breakpoints.sk} {
    height: 80vh;
}


&::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 110vh;
    background-color: rgba(0, 0, 0, 0.5);
}

&::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 15%;
    background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
}
`

export const Container = styled.div`
padding: 4rem;
display: flex;
justify-content: space-around;
align-items: center;
height: 100%;
max-width: 1500px;
margin-top: 5rem;

@media ${breakpoints.xl} {
    padding: 2rem;
}

@media ${breakpoints.lg} {
    padding: 1rem;
}

@media ${breakpoints.md} {
    gap: 3rem;
}

@media ${breakpoints.sm} {
    gap: 0.5rem;
}


`

export const Info = styled.div`
 z-index: 2;
 padding: 20px;
 width: 50%;
 display: flex;
flex-direction: column;
align-items: flex-start;

  h1{
   font-size: 4rem;
   font-weight: 700;
   color: yellow;

   @media ${breakpoints.xll} {
    font-size: 3rem;
   }

   @media ${breakpoints.xlk} {
    font-size: 2.7rem;
   }

   @media ${breakpoints.xl} {
    font-size: 2.3rem;
   }

   @media ${breakpoints.lg} {
    font-size: 2.2rem;
   }

   @media ${breakpoints.md} {
    font-size: 1.8rem;
   }

   @media ${breakpoints.sm} {
    font-size: 1.6rem;
   }

   @media ${breakpoints.sml} {
    font-size: 1.4rem;
   }

   @media ${breakpoints.sl} {
    font-size: 1.2rem;
   }

   @media ${breakpoints.sk} {
    font-size: 0.8rem;
   }
 }

 p{
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
    margin-top: 30px;
    margin-bottom: 20px;

    @media ${breakpoints.xl} {
        font-size: 0.9rem;
    }

    @media ${breakpoints.lg} {
        font-size: 0.8rem;
    }

    @media ${breakpoints.sml} {
        font-size: 0.7rem;
    }

    @media ${breakpoints.sk} {
        font-size: 0.5rem;
    }
}

`
export const Poster = styled.div`
z-index: 2;
img{
    width: 330px;
    border-radius: 30px;
    animation: ${scale} 0.5s linear;

    @media ${breakpoints.xlk} {
        width: 300px;
    }

    @media ${breakpoints.xl} {
        width: 280px;
    }

    @media ${breakpoints.lg} {
        width: 250px;
    }

    @media ${breakpoints.md} {
        width: 220px;
    }

    @media ${breakpoints.sm} {
        width: 190px;
    }

    @media ${breakpoints.sml} {
        width: 170px;
    }

    @media ${breakpoints.sk} {
        width: 145px;
    }
    
}
`
export const ContainerButtons = styled.div`
display: flex;
gap: 15px;
margin-top: 30px;

@media ${breakpoints.md} {
    gap: 10px;
}

@media ${breakpoints.sm} {
    position: relative;
    left: -5px;
}
`
