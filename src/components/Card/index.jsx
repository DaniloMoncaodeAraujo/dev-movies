import { getImages } from "../../utils/get_Images"
import {Container, } from "./styles.js"
import { useNavigate } from 'react-router-dom'

function Card ({item, detail}) {
    const navigate = useNavigate()
//

function movieSerieDetail(item, detail){

    if(detail === 'Filmes'){
        navigate(`/detalhe/${item.id}`)
    }else if (detail === 'Series') {
        navigate(`/detalheSeries/${item.id}`)
    } else{
        return;
    }
   
}
    return (
        <Container>
            <img onClick={() => movieSerieDetail(item, detail)} src={getImages(item.poster_path || item.profile_path || '')} />
            {/*   <h3>{item.title || item.name}</h3>  */ }
        </Container>
    )
}

export default Card