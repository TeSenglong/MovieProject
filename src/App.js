import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'swiper/swiper-bundle.css';
import OneMovie  from './pages/OneMovie';
import { Outlet, Route, Routes } from 'react-router-dom';
import MovieList from './pages/MoviesList';
import { Suspense } from 'react';
import Actor from './components/Actor';
import { ScrollToTop, Wrapper } from './style.js/style';
import Popularpeople from './pages/Popularpeople';
import { TopRateMovieslist } from './components/ToprateMovie';
import { NowPlayinglist } from './components/NowPlaying';
import { UpCominglist } from './components/UpComing';


function App() {


  return (

    <Routes>
      <Route path='/' element={<MainlayOut/>} >
        <Route path='/' element={<Home/>}/>
        <Route path='/movielist' element={<MovieList/>} />
        <Route path='/topratelist' element={<TopRateMovieslist/>}/>
        <Route path='/nowplayinglist' element={<NowPlayinglist/>} />
        <Route path='/upcominglist' element={<UpCominglist/>} />
        <Route path='/onemovie/:id' element={<OneMovie/>} />
        <Route path='/person' element={<Popularpeople/>} />
      </Route>
    </Routes>

  );
}
export default App;
 
function MainlayOut(){
  return(
 <>
  <Navbar/>
  <Wrapper>
  <Outlet/>
  </Wrapper>
  <Footer/>
 </>
  )
}