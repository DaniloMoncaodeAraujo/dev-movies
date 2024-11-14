import CardTwo from "../CardTwo"
import { Container, Swiper, SwiperSlide } from "./styles"


function Slider({ info, title, detail  }) {

    return (
        <Container>
           
            <Swiper>
                {info.map((item, index) => (
                    <SwiperSlide key={index}>
                        <CardTwo item={item} title={title} detail={detail} />
                    </SwiperSlide>
                ))}

            </Swiper>
        </Container>
    )
}

export default Slider