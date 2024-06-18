
import { Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react';
import Loader from '../Loader/Loader';

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

<Suspense fallback={<Loader/>}>
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

