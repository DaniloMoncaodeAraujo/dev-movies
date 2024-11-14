import SliderTwo from '../../components/SliderTwo/index.jsx'
import { ContainerSecoesFlix } from '../../components/SeçõesFlix/styled.js'
import ViewCine from '../../components/ViewCine'
import SecoesFlix from '../../components/SeçõesFlix/index.jsx'

function Movies() {
  const { movie, allMovies, topMovies, discoverMovies, nowPlayingMovies, upcomingMovies } = SecoesFlix();

  return (

    <ContainerSecoesFlix>

      {allMovies && <ViewCine info={allMovies} detail={'Filmes'} />}

      {topMovies && <SliderTwo info={topMovies} title={'movies'} detail={'Filmes'} />}
      {discoverMovies && <SliderTwo info={discoverMovies} title={'movies'} detail={'Filmes'} />}
      {nowPlayingMovies && <SliderTwo info={nowPlayingMovies} title={'movies'}  detail={'Filmes'} />}
      {upcomingMovies && <SliderTwo info={upcomingMovies} title={'movies'} detail={'Filmes'} />}

    </ContainerSecoesFlix>

  )
}

export default Movies
