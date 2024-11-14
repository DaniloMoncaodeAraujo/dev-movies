import { /*Movies*/ getAllMovies, getMovies, getTopMovies, getDiscoverMovies, getNowPlayingMovies, getUpcomingMovies,
         /*Series*/ getAiringTodaySeries, getOnTheAirSeries, getPopularSeries,
         /*People*/ getTopPeople,
         /*Anime*/  getTopSeries,
} 
from '../../services/getData.js'
import { useState, useEffect } from 'react'

function SecoesFlix() {
    ////Filmes////
    const [movie, setMovie] = useState()
    const [allMovies, setAllMovies] = useState()
    const [topMovies, setTopMovies] = useState()
    const [discoverMovies, setdiscoverMovies] = useState()
    const [nowPlayingMovies, setnowPlayingMovies] = useState()
    const [upcomingMovies, setupcomingMovies] = useState()
    ////Series////
    const [airingTodaySeries, setAiringTodaySeries] = useState()
    const [onTheAirSeries, setOnTheAirSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    ////People////
    const [topPeople, setTopPeople] = useState()
    ////Anime////////Kids////
    const [topAnimeKids, setTopAnimeKids] = useState()



    useEffect(() => {
        async function getAllData() {
            Promise.all([
                ////Filmes////
                getMovies(),
                getAllMovies(),
                getTopMovies(),
                getDiscoverMovies(),
                getNowPlayingMovies(),
                getUpcomingMovies(),
                ////Series////
                getAiringTodaySeries(),
                getOnTheAirSeries(),
                getPopularSeries(),
                ////People////
                getTopPeople(),
                ////Anime////////Kids////
                getTopSeries(),

            ])
                .then(([/*Filmes*/movie, allMovies, topMovie, discoverMovies, nowPlayingMovies, upcomingMovies,
                        /*Series*/airingTodaySeries, onTheAirSeries, popularSeries, 
                        /*People*/topPeople,
                        /*Anime||Kids*/topAnimeKids,
                ]) => {
                    ////Filmes////
                    setMovie(movie),
                        setAllMovies(allMovies),
                        setTopMovies(topMovie),
                        setdiscoverMovies(discoverMovies),
                        setnowPlayingMovies(nowPlayingMovies),
                        setupcomingMovies(upcomingMovies),
                        ////Series////
                        setAiringTodaySeries(airingTodaySeries),
                        setOnTheAirSeries(onTheAirSeries),
                        setPopularSeries(popularSeries),
                    ////People//// 
                    setTopPeople(topPeople)
                    ////Anime////////Kids////
                    setTopAnimeKids(topAnimeKids)


                })
                .catch() //error => console.log(error)
        }

        getAllData()

    }, [])

    return { /*Filmes*/ movie, allMovies, topMovies, discoverMovies, nowPlayingMovies, upcomingMovies,
             /*Series*/ airingTodaySeries, onTheAirSeries, popularSeries,
             /*People*/ topPeople,
             /*Anime||Kids*/topAnimeKids
    };
}

export default SecoesFlix