import Card from "../Card"
import { Container } from "./styles"
import { Swiper, SwiperSlide } from 'swiper/react'


function Slider({ info, title, img, detail  }) {

    return (
        <Container>

            <section>
                <h2>{title}</h2>
                <img src={img} alt="" />
            </section>
            <Swiper grabCursor
                spaceBetween={10}
                slidesPerView={'auto'}
                className='swiper'>
                {info.map((item, index) => (
                    <SwiperSlide className="swiperslide" key={index}>
                        <Card item={item} title={title} detail={detail} />
                    </SwiperSlide>
                ))}

            </Swiper>
        </Container>
    )
}

export default Slider