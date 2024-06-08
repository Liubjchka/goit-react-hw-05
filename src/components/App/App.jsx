
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/HomePage';
import MoviesPage from '../../pages/MoviesPage';
import NotFoundPage from '../../pages/NotFoundPage';
import NavBar from '../NavBar/NavBar';

// http://localhost:5173/ - початкова сторінка/home
// http://localhost:5173/about 
// http://localhost:5173/profile



export const App = () => {

  return (
    <div>
    <h1>Ruting is React</h1>

<NavBar/>

<Routes>
  <Route path='/' element={<HomePage/>} />
  <Route path='/movies' element={<MoviesPage/>}/>
  <Route path='*' element={<NotFoundPage/>}/>
</Routes>
</div>
  )
}

