
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { Container, Background, Cover, Info, ContainerNoInformations } from "./styles"
import { getImages } from '../../utils/get_Images'
import { getSeriesById, getSeriesCredits, getSeriesimilar, getSeriesVideos } from "../../services/getData"
import SpanGenres from "../../components/SpanGenres"
import Credits from "../../components/Credits"

function DetailSeries() {
    const { id } = useParams()
    const [series, setSeries] = useState()
    const [seriesCredits, setSeriesCredits] = useState()
    const [seriesVideos, setSeriesVideos] = useState()
    const [seriesSimilar, setSeriesSimilar] = useState()

    seriesVideos && console.log('series', series)
    seriesVideos && console.log('seriesCreditis', seriesCredits)


    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getSeriesById(id),
                getSeriesVideos(id),
                getSeriesCredits(id),
                getSeriesimilar(id),
            ])
                .then(([series, videos, credits, similar]) => {

                    setSeries(series)
                    setSeriesVideos(videos)
                    setSeriesCredits(credits)
                    setSeriesSimilar(similar)
                })
                .catch() //error => console.log(error)
        }

        getAllData()

    }, [])

    return (
        <>
            {series && series.backdrop_path && series.overview ? (
                <>
                    <Background image={getImages(series?.backdrop_path)} />
                    <Container>
                        <Cover>
                            <img src={getImages(series.poster_path)} alt="" />
                        </Cover>
                        <Info>
                            <h2>{series.name} </h2>
                            <SpanGenres genres={series.genres} />
                            <p className="paragrafoOverView" >{series.overview} </p>
                             <div>
                                <Credits credits={seriesCredits} />
                            </div> 

                        </Info>
                    </Container>

                </>
            ) : (
                <ContainerNoInformations>
                    <p>
                        Ops..., Infelizmente Não temos mais
                        <br />
                        Informações Sobre está Série!😁 
                    </p>
                </ContainerNoInformations>
            )}
        </>
    )
}

export default DetailSeries