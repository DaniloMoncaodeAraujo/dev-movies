import styled, { css } from "styled-components";

const buttonStyles = css`
border: 3px solid #fff;
 background: transparent;
 color: yellow;
 border-radius: 30px;
 padding: 10px 20px;
 cursor: pointer;
 font-size: 1rem;
 font-weight: 500;

 &:hover{
color: #000;
background: #fff;
border: 3px solid yellow;
 }
`

export const ButtonWhite = styled.button`
${buttonStyles}
`

export const ButtonRed = styled.button`
 ${buttonStyles}
color: #fff;
 background: #ff0000;
 border: 4px solid transparent;
 box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

 &:hover{
    background: #ff0000;
    box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%);
    color: #000;
    border: 4px solid transparent;
 }

`