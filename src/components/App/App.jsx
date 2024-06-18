
import { Route, Routes } from 'react-router-dom'
import MoviesPage from '../../pages/MoviesPage';
import NotFoundPage from '../../pages/NotFoundPage';
import HomePage from '../../pages/HomePage'
import NavBar from '../NavBar/NavBar';
import MovieDetailsPage from '../../pages/MovieDetailsPage';
import { MovieCast } from '../MovieCast/MovieCast';
import { MovieReviews } from '../MovieReviews/MovieReviews';
// import { lazy } from 'react';

// http://localhost:5173/ - початкова сторінка/home
// http://localhost:5173/about 
// http://localhost:5173/profile

// const Home = lazy(()=> import('../../pages/HomePage').then((module)=>({default:module.Home})))
//Не потрібно в pages default


export const App = () => {

  return (
    <div>

<NavBar/>

<Routes>
  <Route path="/"   element={<HomePage/>}>
    
  </Route>
  <Route path='/movies' element={<MoviesPage/>}/>
  <Route path='/movies/:moviesId' element={<MovieDetailsPage/>}>
    <Route path='movie-cast' element={<MovieCast/>}/>
    <Route path='movie-reviews' element={<MovieReviews/>}/>
  </Route>
  <Route path='*' element={<NotFoundPage/>}/>
</Routes>

{/* <h1>Ruting is React</h1> */}

</div>
  )
}

