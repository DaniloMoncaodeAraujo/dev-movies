import SliderTwo from '../../components/SliderTwo/index.jsx'
import { ContainerSecoesFlix } from '../../components/SeçõesFlix/styled.js'
import ViewCine from '../../components/ViewCine'
import SecoesFlix from '../../components/SeçõesFlix/index.jsx'

function Explorar() {
  const {  allMovies, topMovies, discoverMovies, nowPlayingMovies, upcomingMovies, onTheAirSeries, popularSeries } = SecoesFlix();

  return (

    <ContainerSecoesFlix>

      {topMovies && <ViewCine info={topMovies} detail={'Filmes'} />}
      
      {onTheAirSeries && <SliderTwo info={onTheAirSeries} title={'movies'} detail={'Series'} />}
      {topMovies && <SliderTwo info={topMovies} title={'movies'} detail={'Filmes'} />}
      {popularSeries && <SliderTwo info={popularSeries} title={'movies'} detail={'Series'} />}
      {nowPlayingMovies && <SliderTwo info={nowPlayingMovies} title={'movies'} detail={'Filmes'} />}

    </ContainerSecoesFlix>

  )
}

export default Explorar
