import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'swiper/swiper-bundle.css';
import OneMovie from './pages/OneMovie';
import { Outlet, Route, Routes } from 'react-router-dom';
import MovieList from './pages/MoviesList';


function App() {
  return (

    <Routes>
      {/* <Route path='/' element={<Home/>} /> */}
      {/* <Route path='/Navbar' element={<Navbar />} /> */}
      <Route path='/' element={<MainlayOut/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/movielist' element={<MovieList/>} />
      </Route>
    </Routes>

  );
}
export default App;
 
function MainlayOut(){
  <>
  <Navbar/>
  <Outlet/>
  <Footer/>
  </>
}