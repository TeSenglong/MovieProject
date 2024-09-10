
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'swiper/swiper-bundle.css';
import OneMovie from './pages/OneMovie';
import { Outlet, Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense, useEffect } from 'react';
// import { ScrollToTop, Wrapper } from './style.js/style';
import Popularpeople from './pages/Popularpeople';

import PopularList from './pages/PopularList';
import CreditsActor from './pages/CreditsActor';
import Dashboard from './pages/Dashboard';
import { Nowplayinglist } from './pages/Nowplayinglist';
import { Topratelist } from './pages/Topratelist';
import { Upcominglist } from './pages/Upcominglist';
import { Trendinglist } from './pages/Tredinglist';
import About from './pages/About';
import Contact from './components/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import SearchMovie from './pages/SearchMovie';
function App() {
  useEffect(() => {
    Aos.init();
  }, [])
  return (

    <Routes>
      <Route path='/' element={<MainlayOut />} >
        <Route path='/' element={<Home />} />
        <Route path='/popularlist' element={<PopularList />} />
        <Route path='/topratelist' element={<Topratelist />} />
        <Route path='/nowplayinglist' element={<Nowplayinglist />} />
        <Route path='/upcominglist' element={<Upcominglist />} />
        <Route path='/onemovie/:id' element={<OneMovie />} />
        <Route path='/person' element={<Popularpeople />} />
        <Route path='/trendinglist' element={<Trendinglist />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/creditsactor/:id' element={<CreditsActor />} />
        <Route path='/about' element={<About/>} />
        <Route path='/search' element={<SearchMovie />} />
      </Route>
      <Route path='/contact' element={<Contact />} />
    </Routes>

  );
}
export default App;

function MainlayOut() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}