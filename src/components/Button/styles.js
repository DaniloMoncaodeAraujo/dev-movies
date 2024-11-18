import styled, { css } from "styled-components";
import breakpoints from "../../styles/breakpoints"

const buttonStyles = css`
border: 3px solid #fff;
 background: transparent;
 color: yellow;
 border-radius: 30px;
 padding: 10px 20px;
 cursor: pointer;
 font-size: 1rem;
 font-weight: 500;
 white-space: nowrap;

 @media ${breakpoints.xl} {
   font-size: 0.8rem;
 }

 @media ${breakpoints.lg} {
   padding: 10px 12px;
 }

 @media ${breakpoints.md} {
   padding: 6px 9px;
 }

 @media ${breakpoints.sm} {
   font-size: 0.7rem;
   padding: 6px 7px;
 }

 @media ${breakpoints.sml} {
   font-size: 0.6rem;
   padding: 6px 3px;
 }

 @media ${breakpoints.sk} {
   font-size: 0.4rem;
   border: 1px solid #fff;
 }

 &:hover{
color: #000;
background: #fff;
border: 3px solid yellow;

@media ${breakpoints.sk} {
   border: 1px solid yellow;
}
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

 @media ${breakpoints.sk} {
   border: 1px solid transparent;
 }

 &:hover{
    background: #ff0000;
    box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%);
    color: #000;
    border: 4px solid transparent;

    @media ${breakpoints.sk} {
      border: 1px solid transparent;
    }
 }

`