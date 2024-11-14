import styled from "styled-components";


export const Container = styled.div`
z-index: 100;
position: fixed;
top: 0;
display: flex;
flex-direction: column;
background-color: ${(props) =>props.changeBackground ? '#000' : 'transparent'};
border: ${(props) =>props.changeBackground ? '1 px solid #fff' : ''};
height: 130px;
`

export const Menu = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
padding: 5px 50px 0 10px;
 width: 100vw;

  section{
    display: flex;
    align-items: center;
    gap: 5px;

    img{
    height: 50px;
    }
    
    h1{
      color: #ff2800;
      font-size: 35px;
    }
  }

  aside{
   display: flex;
   align-items: center;
   gap: 8px;
    a{
      padding: 10px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #000;
      background-color: #1a1a1a ;

      img{
        height: 23px;
        width: auto;
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
    }
  }
`

export const MenuTwo = styled.ul`
width: 100vw;
display: flex;
justify-content: center;
list-style: none;
gap: 50px;
margin-top: 15px;
`

export const Li= styled.li`
font-weight: 600;
cursor: pointer;
position: relative;



a{
   text-decoration: none;
   color: ${props => props.isActive ? '#FFEB99' : '#fff'};
   font-size: 40px;
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