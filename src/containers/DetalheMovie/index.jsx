
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { Container, Background, Cover, Info, ContainerMovies, Margin } from "./styles"
import { getImages } from '../../utils/get_Images'
import { getMovieById, getMovieCredits, getMovieSimilar, getMovieVideos } from "../../services/getData"
import SpanGenres from "../../components/SpanGenres"
import Credits from "../../components/Credits"
import Slider from "../../components/Slider"
import { similarMoviesSeries } from "../../assets/zimages"

function Detail() {
    const { id } = useParams()
    const [movie, setMovie] = useState()
    const [movieVideos, setMovieVideos] = useState()
    const [movieCredits, setMovieCredits] = useState()
    const [movieSimilar, setMovieSimilar] = useState()
    console.log('filmes', movieVideos)
    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getMovieById(id),
                getMovieVideos(id),
                getMovieCredits(id),
                getMovieSimilar(id),
            ])
                .then(([movie, videos, credits, similar]) => {

                    setMovie(movie)
                    setMovieVideos(videos)
                    setMovieCredits(credits)
                    setMovieSimilar(similar)
                })
                .catch() //error => console.log(error)
        }

        getAllData()

    }, [id])

    return (
        <>
            {movie &&
                <>
                    <Background image={getImages(movie?.backdrop_path)} />
                    <Container>
                        <Cover>
                            <img src={getImages(movie.poster_path)} alt="" />
                        </Cover>
                        <Info>
                            <h2>{movie.title} </h2>
                            <SpanGenres genres={movie.genres} />
                            <p>{movie.overview} </p>
                            <div>
                                <Credits credits={movieCredits} />
                            </div>

                        </Info>
                    </Container>

                    <ContainerMovies>
                        {movieVideos && movieVideos.map(video => (
                            <div key={video.id}>
                                <h4>{video.name} </h4>
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.key}`}
                                    title='Youtube Video Player'
                                    height='500px'
                                    width='100%'>
                                </iframe>
                            </div>
                        ))}
                    </ContainerMovies>
                    <Margin>
                    {movieSimilar && <Slider info={movieSimilar} title={'Filmes Similares'} img={similarMoviesSeries} detail={'Filmes'} />}
                    </Margin>
                </>
            }
        </>
    )
}

export default Detail