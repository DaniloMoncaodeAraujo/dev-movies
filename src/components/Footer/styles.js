import styled, { css } from "styled-components";
import breakpoints from "../../styles/breakpoints"

export const ContainerMain = styled.div`
width: 100vw;
height: 40px;
background-color: #FFC300;
margin-top: 10px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 30px;


@media ${breakpoints.sm} {
    padding: 0 30px 0 8px;
}

  @media ${breakpoints.sk} {
    padding: 0 25px 0 5px;
  }



h3{
  font-size: 15px;
  color: #000;

  @media ${breakpoints.xl} {
    font-size: 14px;
  }

  @media ${breakpoints.lg} {
    font-size: 13px;
  }

  @media ${breakpoints.md} {
    font-size: 12px;
  }

  @media ${breakpoints.sm} {
    font-size: 11px;
  }

  @media ${breakpoints.sml} {
    font-size: 9px;
  }

  @media ${breakpoints.sl} {
     font-size: 8px;
  }

  @media ${breakpoints.sl} {
     font-size: 7px;
  }

}

article{
  display: flex;
  gap: 17px;
  align-items: center;

  @media ${breakpoints.md} {
    gap: 10px;
  }

  @media ${breakpoints.sml} {
    gap: 8px;
  }

  @media ${breakpoints.sk} {
    gap: 6px;
  }

  a{

    display: flex;
    justify-content: center;
    align-items: center;

    img{
      height: 29px;

      @media ${breakpoints.lg} {
        height: 25px;
      }

      @media ${breakpoints.md} {
        height: 24px;
      }

      @media ${breakpoints.sm} {
        height: 22px;
      }

      @media ${breakpoints.sml} {
        height: 20px;
      }

      @media ${breakpoints.sk} {
        height: 17px;
      }
      }
    
  }
}

`