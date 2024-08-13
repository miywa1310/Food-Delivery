import React, { useReducer } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import "./App.css"
import Home from './pages/Home'
import Cart from './pages/Cart'
import Order from './pages/Order'
import { initialState, reducer } from './context/reducer'
import { MainContext } from './context/MainContexts'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const roots = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='/menu' element={<Menu/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<Cart />} />
      <Route path='/order' element={<Order />} />
  
    </Route>
  )
)

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
      <MainContext.Provider value={{state, dispatch}}>
        <RouterProvider router={roots}/>
      </MainContext.Provider>
  )
}

export default App