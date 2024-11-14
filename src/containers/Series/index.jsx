import SecoesFlix from '../../components/SeçõesFlix/index.jsx'
import SliderTwo from '../../components/SliderTwo/index.jsx'
import { ContainerSecoesFlix } from '../../components/SeçõesFlix/styled.js'
import ViewCine from '../../components/ViewCine'

function Series() {

    const { airingTodaySeries, onTheAirSeries, popularSeries, } = SecoesFlix()

    return (
        <ContainerSecoesFlix>

           {onTheAirSeries && <ViewCine info={onTheAirSeries} detail={'Series'} /> }

            {airingTodaySeries && <SliderTwo info={airingTodaySeries} title={''} detail={'Series'} />}
            {onTheAirSeries && <SliderTwo info={onTheAirSeries} title={''} detail={'Series'} />}
            {popularSeries && <SliderTwo info={popularSeries} title={''} detail={'Series'} />}

        </ContainerSecoesFlix>
    )
}

export default Series