import styled, { css } from "styled-components";
import breakpoints from "../../styles/breakpoints";



export const Container = styled.div`


`

export const Swiper = styled.div`
width: 100vw;
display: grid;
grid-template-columns: repeat(5, 250px);
justify-content: center;
gap: 12px;

@media ${breakpoints.xllm} {
    grid-template-columns: repeat(5, auto);
}

@media ${breakpoints.sl} {
    grid-template-columns: repeat(4, auto);
}

@media ${breakpoints.sk} {
    grid-template-columns: repeat(3, auto);
}
`

export const SwiperSlide = styled.div`


`
