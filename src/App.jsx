
import { Route, Routes } from 'react-router-dom'
import './App.css'

// http://localhost:5173/ - початкова сторінка/home
// http://localhost:5173/about 
// http://localhost:5173/profile


export const App = () => {

  return (
    <div>
    <h1>Ruting is React</h1>
    <Routes>
      <Route path='/' element={<div>Home page</div>} />
      <Route path='/about' element={<div>About</div>}/>
      <Route path='/profile' element={<div>Profile</div>}/>
    </Routes>
    </div>
  )
  
}

