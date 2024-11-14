import styled, { keyframes } from "styled-components"

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


section { 
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 50px;

   h4{
    font-size: 40px;
    font-weight: 500;
    color: yellow;
    margin-left: -35px;
  }

  .imgPopcorn{
    height: 60px;
    animation: ${subirDescer} 2s ease-in-out infinite;
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

      } 

    
    div{
      z-index: 2;
      position: absolute;
      top: 320px;
      right: 20px;

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
    
  
    img{
      width: 40%;
      height: 44%;
      border: 2px solid transparent;
      border-radius: 5px;

      &:hover{
        border: 2px solid yellow;
        box-shadow: none;
        border-radius: 10px;
        transform: scale(1.1);
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



