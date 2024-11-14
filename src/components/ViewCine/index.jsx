import { getImages } from '../../utils/get_Images.js'
import { ContainerMovies, ContainerMain } from './styled.js'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { popcorn } from '../../assets/zimages.js';

function ViewCine({ info, detail }) {

    const navigate = useNavigate()
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3); // altera entre 0, 1, e 2
        }, 3000);

        return () => clearInterval(interval); 3
    }, [info]);


    function movieDetail(item, detail){

        if(detail === 'Filmes'){
            navigate(`/detalhe/${item.id}`)
        }else {
            navigate(`/detalheSeries/${item.id}`)
        }
       
    }



    return (
        <ContainerMain>
            <ContainerMovies>
                {info && (<section>
                    <article>
                        <img src={getImages(info[currentImageIndex].backdrop_path)} onClick={() => movieDetail(info[currentImageIndex], detail)} />
                        <div>
                            {[0, 1, 2].map((index) => (
                                <button
                                    key={index}
                                    style={{
                                        borderColor: currentImageIndex === index ? 'yellow' : '#ff2800',
                                        width: currentImageIndex === index ? '18px' : '15px',
                                        height: currentImageIndex === index ? '18px' : '15px',
                                        transition: 'width 0.7s ease, height 0.7s ease, border-color 0.7s ease',
                                    }}
                                />
                            ))}
                        </div>
                    </article>
                    <aside>
                        {info.slice(4, 9).map((item, index) => (
                            <img
                                key={index}
                                onClick={() => movieDetail(item, detail)}
                                src={getImages(item.poster_path)}
                                alt=""
                            />
                        ))}
                    </aside>
                </section>)}
                {info && info[2] && (<aside className='aside-one' > <img onClick={() => movieDetail(info[2], detail)} src={getImages(info[2].poster_path)} /> </aside>)}
                {info && info[3] && (<aside className='aside-two' > <img onClick={() => movieDetail(info[3], detail)} src={getImages(info[3].poster_path)} /> </aside>)}
            </ContainerMovies>

            <section>
                <h4>Prepare a pipoca e venha Maratonar</h4> 
                <img className='imgPopcorn' src={popcorn} />
            </section>
        </ContainerMain>
    )
}

export default ViewCine