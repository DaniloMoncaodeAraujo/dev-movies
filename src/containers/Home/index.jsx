/*
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/index.jsx'
import Modal from '../../components/modal/index.jsx'
import Slider from '../../components/Slider/index.jsx'
import { getImages } from '../../utils/get_Images.js'
import { Background, Info, Poster, Container, ContainerButtons } from './styled.js'
import { useState } from 'react'
import SecoesFlix from '../../components/SeçõesFlix/index.jsx'
import { popularSeriesImg, topSeriesImg, topFilmesImg, peopleImg } from '../../assets/zimages.js'

function Home() {
    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate()
    const { movie, topMovies, topSeries, popularSeries, topPeople  } = SecoesFlix();
    
    return (
        <>
            {movie && (
                <Background img={getImages(movie.backdrop_path)}>
                    {showModal && <Modal moveId={movie.id} setShowModal={setShowModal} />}
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button onClick={() => navigate(`/detalhe/${movie.id}`)} red={true}>Assista Agora</Button>
                                <Button onClick={() => setShowModal(true)} red={false}>Assista ao Trailer</Button>
                            </ContainerButtons>
                        </Info>

                        <Poster>
                            <img src={getImages(movie.poster_path)} alt="capa-do-filme" />
                        </Poster>
                    </Container>
                </Background>
            )}
            
            {topMovies && <Slider info={topMovies} title={'Top Filmes'} img={topFilmesImg} detail={'Filmes'} />}
            {topSeries && <Slider info={topSeries} title={'Top Séries'} img={topSeriesImg} detail={'Series'} />}
            {popularSeries && <Slider info={popularSeries} title={'Series Populares'} img={popularSeriesImg} detail={'Series'} />}
            {topPeople && <Slider info={topPeople} title={'Artistas Populares'} img={peopleImg} detail={'Artistas'} />}
        </>
    )
}

export default Home
*/
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/index.jsx';
import Modal from '../../components/modal/index.jsx';
import Slider from '../../components/Slider/index.jsx';
import { getImages } from '../../utils/get_Images.js';
import { Background, Info, Poster, Container, ContainerButtons } from './styled.js';
import { useState } from 'react';
import SecoesFlix from '../../components/SeçõesFlix/index.jsx';
import { popularSeriesImg, topSeriesImg, topFilmesImg, peopleImg } from '../../assets/zimages.js';
import { useScroll } from '../../routes/scroll.jsx';

function Home() {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const { movie, topMovies, topSeries, popularSeries, topPeople } = SecoesFlix();

    const location = useLocation();
    const { scrollPositions, setScrollPositions } = useScroll();

    useEffect(() => {
        if (scrollPositions[location.pathname]) {
            window.scrollTo(0, scrollPositions[location.pathname]);
        }

        return () => {
            setScrollPositions(prev => ({
                ...prev,
                [location.pathname]: window.scrollY
            }));
        };
    }, [location, scrollPositions, setScrollPositions]);

    return (
        <>
            {movie && (
                <Background img={getImages(movie.backdrop_path)}>
                    {showModal && <Modal moveId={movie.id} setShowModal={setShowModal} />}
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button onClick={() => navigate(`/detalhe/${movie.id}`)} red={true}>Assista Agora</Button>
                                <Button onClick={() => setShowModal(true)} red={false}>Assista ao Trailer</Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img src={getImages(movie.poster_path)} alt="capa-do-filme" />
                        </Poster>
                    </Container>
                </Background>
            )}
            
            {topMovies && <Slider info={topMovies} title={'Top Filmes'} img={topFilmesImg} detail={'Filmes'} />}
            {topSeries && <Slider info={topSeries} title={'Top Séries'} img={topSeriesImg} detail={'Series'} />}
            {popularSeries && <Slider info={popularSeries} title={'Series Populares'} img={popularSeriesImg} detail={'Series'} />}
            {topPeople && <Slider info={topPeople} title={'Artistas Populares'} img={peopleImg} detail={'Artistas'} />}
        </>
    );
}

export default Home;
