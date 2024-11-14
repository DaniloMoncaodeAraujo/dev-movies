import { getImages } from "../../utils/get_Images.js"
import { Container } from "./styles.js"
import { useNavigate } from 'react-router-dom'

function CardTwo({ item, title, detail }) {

    const navigate = useNavigate()

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
        </Container>
    )
}

export default CardTwo