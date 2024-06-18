
import { Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react';

// import NavBar from '../NavBar/NavBar';
// import MoviesPage from '../../pages/MoviesPage';
// import NotFoundPage from '../../pages/NotFoundPage';
// import HomePage from '../../pages/HomePage'
// import MovieDetailsPage from '../../pages/MovieDetailsPage';
// import { MovieCast } from '../MovieCast/MovieCast';
// import { MovieReviews } from '../MovieReviews/MovieReviews';

const HomePage = lazy(()=> import('../../pages/HomePage'));
const MoviesPage = lazy(()=> import('../../pages/MoviesPage'));
const NotFoundPage = lazy(()=> import('../../pages/NotFoundPage'));
const MovieDetailsPage = lazy(()=> import('../../pages/MovieDetailsPage'));
const MovieCast = lazy(()=> import('../MovieCast/MovieCast'));
const MovieReviews = lazy(()=> import('../MovieReviews/MovieReviews'));
const NavBar  = lazy(()=>import('../NavBar/NavBar'))

export const App = () => {

  return (
    <div>

<NavBar/>

<Suspense fallback={<b>Loading page...</b>}>
<Routes>
  <Route path="/"   element={<HomePage/>}/>
  <Route path='/movies' element={<MoviesPage/>}/>
  <Route path='/movies/:moviesId' element={<MovieDetailsPage/>}>
    <Route path='movie-cast' element={<MovieCast/>}/>
    <Route path='movie-reviews' element={<MovieReviews/>}/>
  </Route>
  <Route path='*' element={<NotFoundPage/>}/>
</Routes>
</Suspense>

</div>
  )
}

