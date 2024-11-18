import styled from "styled-components";
import breakpoints from "../../styles/breakpoints"


export const Container = styled.div`
z-index: 100;
position: fixed;
top: 0;
display: flex;
flex-direction: column;
background-color: ${(props) => props.changeBackground ? '#000' : 'transparent'};
border: ${(props) => props.changeBackground ? '1 px solid #fff' : ''};
height: 130px;

`

export const Menu = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 5px 50px 0 10px;
 width: 100vw;

 @media ${breakpoints.xl} {
  padding: 5px 30px 0 10px;
  
 }

  section{
    display: flex;
    align-items: center;
    gap: 5px;

    img{
    height: 50px;

    @media ${breakpoints.sm} {
      height: 45px;
    }

    @media ${breakpoints.sl} {
     height: 40px;
    }

    @media ${breakpoints.sk} {
      height: 35px;
    }

    }
    
    h1{
      color: #ff2800;
      font-size: 35px;

      @media ${breakpoints.lg} {
        font-size: 30px;
      }

      @media ${breakpoints.sm} {
        font-size: 25px;
      }

      @media ${breakpoints.sl} {
        font-size: 23px;
      }

      @media ${breakpoints.sk} {
        font-size: 19px;
      }
    }
  }

  aside{
   display: flex;
   align-items: center;
   gap: 8px;

   @media ${breakpoints.sm} {
    gap: 6px;
   }

   @media ${breakpoints.sk} {
    gap: 4px;
   }

    a{
      padding: 10px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #000;
      background-color: #1a1a1a ;

      @media ${breakpoints.sm} {
        padding: 8px;
      }

      @media ${breakpoints.sl} {
        padding: 5px;
      }

      @media ${breakpoints.sl} {
        padding: 4px;
      }

      img{
        height: 23px;
        width: auto;

        @media ${breakpoints.xl} {
          height: 17px;
        }

        @media ${breakpoints.sm} {
          height: 13px;
        }

        @media ${breakpoints.sk} {
          height: 10px;
        }
      }

      &:hover{
        border: 1px solid #fff;
      }
    }

    .link-wifi{
      background-color: transparent;
      border: none;

      &:hover{
        border: none;
      }
    }

    h5{
      color: yellow;
      font-size: 15px;

      @media ${breakpoints.sm} {
        font-size: 12px;
      }

      @media ${breakpoints.sl} {
        font-size: 10px;
      }

      @media ${breakpoints.sk} {
        font-size: 8px;
      }
    }
  }
`

export const MenuTwo = styled.div`

.swiper-wrapper{
  width: 100vw;
 display: flex;
 gap: 50px;
 justify-content: center;
 align-items: center;
 margin-top: 15px;
 list-style: none;

 @media ${breakpoints.xll} {
  gap: 30px;
 }

 @media ${breakpoints.xl} {
  gap: 25px;
 }


@media ${breakpoints.lg} {
  gap: 20px;
}

@media ${breakpoints.md} {
  gap: 15px;
}

@media ${breakpoints.sm} {
  gap: 10px;
}

@media ${breakpoints.sk} {
  padding-right: 16px;
}

}

`

export const Li = styled.li`
font-weight: 600;
cursor: pointer;
position: relative;

a{
   text-decoration: none;
   color: ${props => props.isActive ? '#FFEB99' : '#fff'};
   font-size: 40px;

   @media ${breakpoints.xll} {
    font-size: 35px;
   }
   
   @media ${breakpoints.xl} {
    font-size: 30px;
   }

   @media ${breakpoints.lg} {
    font-size: 25px;
   }

   @media ${breakpoints.md} {
    font-size: 22px;
   }

   @media ${breakpoints.sm} {
    font-size: 18px;
   }

   @media ${breakpoints.sl} {
    font-size: 16px;
   }

   @media ${breakpoints.sk} {
    font-size: 14px;
   }

}


    &::after{
      content: '';
      height: 2px;
      width: ${props => props.isActive ? '100%' : 0};
      background-color: yellow;
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      transition: 0.7s linear;
    }

    &:hover::after{
      width: 100%;
    }

` 