/* import { Route, Routes } from 'react-router-dom'
import Home from '../containers/Home'
import Movies from '../containers/Movies'
import Series from '../containers/Series'
import DefaultLayout from '../layout/DefaultLayout'
import Detail from '../containers/DetalheMovie'
import Kids from '../containers/Kids'
import Anime from '../containers/Anime'
import Explorar from '../containers/Explorar'
import DetailSeries from '../containers/DetalheSeries'

function Router() {

    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/filmes' element={<Movies />} />
                <Route path='/series' element={<Series />} />
                <Route path='/detalhe/:id' element={<Detail />} />
                <Route path='/detalheSeries/:id' element={<DetailSeries />} />
                <Route path='/kids' element={<Kids />} />
                <Route path='/anime' element={<Anime />} />
                <Route path='/explorar' element={<Explorar />} />
            </Route>
        </Routes>
    )
}

export default Router */
import { ScrollProvider } from './scroll'; 
import { Route, Routes } from 'react-router-dom'
import Home from '../containers/Home'
import Movies from '../containers/Movies'
import Series from '../containers/Series'
import DefaultLayout from '../layout/DefaultLayout'
import Detail from '../containers/DetalheMovie'
import Kids from '../containers/Kids'
import Anime from '../containers/Anime'
import Explorar from '../containers/Explorar'
import DetailSeries from '../containers/DetalheSeries'

function Router() {

  return (
    <ScrollProvider>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/filmes' element={<Movies />} />
          <Route path='/series' element={<Series />} />
          <Route path='/detalhe/:id' element={<Detail />} />
          <Route path='/detalheSeries/:id' element={<DetailSeries />} />
          <Route path='/kids' element={<Kids />} />
          <Route path='/anime' element={<Anime />} />
          <Route path='/explorar' element={<Explorar />} />
        </Route>
      </Routes>
    </ScrollProvider>


  )
}

export default Router




