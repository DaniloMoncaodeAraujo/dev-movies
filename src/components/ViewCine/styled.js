import styled, { keyframes } from "styled-components"
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

export const ContainerMain = styled.div`
display: flex;
flex-direction: column;
gap: 80px;


.titles { 
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 50px;

  @media ${breakpoints.xllm} {
  justify-content: flex-start; 
  align-items: flex-start; 
  }

   h4{
    font-size: 40px;
    font-weight: 500;
    color: yellow;

    @media ${breakpoints.xllm} {
      font-size: 35px;
    }

    @media ${breakpoints.xll} {
      font-size: 32px;
    }

    @media ${breakpoints.xlk} {
      font-size: 30px;
    }

    @media ${breakpoints.xl} {
      font-size: 25px;
    }

    @media ${breakpoints.lg} {
      font-size: 23px;
    }

    @media ${breakpoints.md} {
      font-size: 20px;
    }

    @media ${breakpoints.sm} {
      font-size: 18px;
    }

    @media ${breakpoints.sl} {
      font-size: 16px;
    }

    @media ${breakpoints.sk} {
      font-size: 13px;
    }

   }

  .imgPopcorn{
    height: 60px;
    animation: ${subirDescer} 2s ease-in-out infinite;

    @media ${breakpoints.xllm} {
      height: 60px;
    }

    @media ${breakpoints.xlk} {
      height: 55px;
    }

    @media ${breakpoints.xl} {
      height: 47px;
    }

    @media ${breakpoints.lg} {
      height: 45px;
    }

    @media ${breakpoints.lg} {
      height: 40px;
    }

    @media ${breakpoints.sm} {
      height: 35px;
    }

    @media ${breakpoints.sl} {
      height: 30px;
    }
  }


}

`

export const ContainerMovies = styled.div`
  display: grid;
  grid-template-areas: 
  'section  aside-one aside-two'
  'section  aside-one aside-two';
  grid-template-columns: 600px 300px 300px;
  grid-template-rows: 250px 250px;
  gap: 10px;

  @media ${breakpoints.xllm} {
    grid-template-columns: 500px 250px 250px;
    grid-template-rows: 250px 250px;
  }

  @media ${breakpoints.xll} {
    grid-template-columns: 400px 200px 200px;
    grid-template-rows: 215px 215px;
  }

  @media ${breakpoints.xl} {
    justify-content: center;
    grid-template-columns: 320px 170px 170px;
    grid-template-rows: 183px 183px;
  }

  @media ${breakpoints.lg} {
    grid-template-columns: 260px 140px 140px;
    grid-template-rows: 160px 160px;
  }

  @media ${breakpoints.sm} {
    grid-template-columns: 200px 100px 100px;
    grid-template-rows: 120px 120px;
  }

  @media ${breakpoints.sl} {
    grid-template-columns: 183px 83px 83px;
    grid-template-rows: 108px 108px;
  }

  @media ${breakpoints.sk} {
    grid-template-columns: 170px 70px 70px;
    grid-template-rows: 101px 101px;
  }

  img:hover{
    box-shadow: rgba(255, 255, 0, 0.16) 0px 1px 4px, rgb(255, 255, 0) 0px 0px 0px 3px;
    border-radius: 10px;
  }


  img{
      width: 100%;
      height: 100%;
      
    }

 section{
  grid-area: section;
  display: flex;
  flex-direction: column;
  gap: 10px;
  


  article{ 
    position: relative;
    img{
       width: 100%;
       height: 100%;  
       
       @media ${breakpoints.xllm} {
        height: 125%;
       }

       @media ${breakpoints.xll} {
        height: 140%;
       }

       @media ${breakpoints.xl} {
        height: 150%;
       }

       @media ${breakpoints.lg} {
        height: 160%;
       }

      } 

    
    div{
      z-index: 2;
      position: absolute;
      top: 310px;
      right: 20px;

      @media ${breakpoints.xllm} {
        top: 330px;
      }

      @media ${breakpoints.xll} {
        top: 295px;
      }

      @media ${breakpoints.xl} {
        top: 252px;
      }

      @media ${breakpoints.lg} {
        top: 218px;
      }

      @media ${breakpoints.sm} {
        top: 162px;
        right: 5px;
      }

      @media ${breakpoints.sl} {
        top: 150px;
      }

      @media ${breakpoints.sk} {
        top: 139px;
      }

      button{
        margin-left: 15px;
        width: 15px;
        height: 15px;
        background-color: #ff2800;
        border: 2px solid #ff2800;
        border-radius: 50%;
        
      }
    }
    }

  aside{
    display: flex;
    gap: 10px;
    
    @media ${breakpoints.xllm} {
      position: relative;
      bottom: -65px;
    }

    @media ${breakpoints.xll} {
      bottom: -80px;
    }

    @media ${breakpoints.sm} {
      bottom: -52px;
    }

    @media ${breakpoints.lg} {
      gap: 5px;
    }

    @media ${breakpoints.sl} {
      bottom: -46px;
      gap: 2px;
    }

    @media ${breakpoints.sk} {
      bottom: -40px;
    }
  
    img{
      width: 40%;
      height: 44%;
      border: 2px solid transparent;
      border-radius: 5px;

      @media ${breakpoints.xllm} {
      position: relative;
      bottom: -15px;
      }

      @media ${breakpoints.lg} {
        width: 42%;
      }

      &:hover{
        border: 2px solid yellow;
        box-shadow: none;
        border-radius: 10px;
        transform: scale(1.1);

        @media ${breakpoints.lg} {
          border-radius: 5px;
        }

        @media ${breakpoints.sm} {
          border: 1px solid yellow;
        }
      }
    }
  }  
 }

.aside-one{
    grid-area: aside-one;
}

.aside-two{
    grid-area: aside-two;
}
`



