import { useEffect, useState } from "react"
import { Container, Background } from "./styles"

import Delete from "../../assets/delete.png"
import { getMovieVideos } from "../../services/getData"

function Modal({ moveId, setShowModal }) {
    const [movie, setMovie] = useState()

    useEffect(() => {

        async function getMovies() {
          setMovie(await getMovieVideos(moveId))  
          
        }

        getMovies()
    }, [])


    return (
        <Background onClick={() => setShowModal(false)}>
           {movie && (
                <Container>
                    <button onClick={() => setShowModal(false)}>
                        <img src={Delete} alt="" />
                    </button>
                    <iframe
                        src={`https://www.youtube.com/embed/${movie[0].key}`}
                        title='Youtube Video Player'
                        height='500px'
                        width='100%'>
                    </iframe>
                </Container>
            )}

        </Background >
    )
}

export default Modal