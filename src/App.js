import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'swiper/swiper-bundle.css';
import OneMovie  from './pages/OneMovie';
import { Outlet, Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense, useEffect } from 'react';
import Actor from './components/Actor';
import { ScrollToTop, Wrapper } from './style.js/style';
import Popularpeople from './pages/Popularpeople';
import { TopRateMovieslist } from './components/ToprateMovie';
import { NowPlayinglist } from './components/NowPlaying';
import { UpCominglist } from './components/UpComing';
import PopularList from './pages/PopularList';
import Search from './components/Search';
import { Trendinglist } from './components/Trending';
import CreditsActor from './pages/CreditsActor';
import Dashboard from './pages/Dashboard';
const Lazypopular = React.lazy(()=> import('./pages/PopularList'))


function App() {
  return (

    <Routes>
      <Route path='/' element={<MainlayOut/>} >
        <Route path='/' element={<Home/>}/>
        <Route path='/popularlist' element=
            {<React.Suspense fallback='loading....'>
              <Lazypopular/>
            </React.Suspense>}/>
        <Route path='/topratelist' element={<TopRateMovieslist/>}/>
        <Route path='/nowplayinglist' element={<NowPlayinglist/>} />
        <Route path='/upcominglist' element={<UpCominglist/>} />
        <Route path='/onemovie/:id' element={<OneMovie/>} />
        <Route path='/person' element={<Popularpeople/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/trendinglist' element={<Trendinglist/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/creditsactor/:id' element={<CreditsActor/>} />
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