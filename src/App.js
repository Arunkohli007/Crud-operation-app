import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './comman/Header'
import Menu from './comman/Menu'
import Home from './pages/Home'
import UserRead from './pages/UserRead'
import UserCreate from './pages/UserCreate'


export default function App() {
  return (
    <>
   <BrowserRouter>
   <Header/>
   <Menu/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/read' element={<UserRead/>}/>
    <Route path='/create' element={<UserCreate/>}/>
    {/* <Route path='/update' element={<Userupdate/>}/>
    <Route path='/search' element={<Usersearch/>}/>   */}
   </Routes>
   
   </BrowserRouter>
    </>
  )
}


