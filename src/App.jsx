import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import PrivateRoutes from './components/PrivateRoutes'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import Home from './components/pages/Home'



function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route 
        path='/' 
        element={
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        } 
        index/>
         <Route path='/signin' element={<Login />}/>
         <Route path='/signup' element={<Signup />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
