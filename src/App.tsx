import './App.css'
import { Login } from './pages/login/login';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './pages/home/home';

import { Signup } from './pages/signup/signup';

import { Registerpet } from './pages/registerpet/registerpet';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='home' element={<Home/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='registerpet' element={<Registerpet/>}/>
      </Routes>
    </BrowserRouter>
  )
}