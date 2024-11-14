import SliderTwo from '../../components/SliderTwo/index.jsx'
import { ContainerSecoesFlix } from '../../components/SeçõesFlix/styled.js'
import ViewCine from '../../components/ViewCine/index.jsx'
import SecoesFlix from '../../components/SeçõesFlix/index.jsx'

function Anime() {
  const { topAnimeKids } = SecoesFlix();

  return (

    <ContainerSecoesFlix>

      {topAnimeKids && <ViewCine info={topAnimeKids}  detail={'Series'} />}

      {topAnimeKids && <SliderTwo info={topAnimeKids} title={'movies'} detail={'Series'} />}
    </ContainerSecoesFlix>

  )
}

export default Anime
