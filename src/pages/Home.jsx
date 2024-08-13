import React, { useContext, useEffect, useState } from 'react'
import HeaderBottom from '../Components/Page-Comp/HeaderBottom'
import ExploreMenu from '../Components/Page-Comp/ExploreMenu'
import Menu from '../Components/Page-Comp/MenuHome'
import MobileApp from '../Components/Page-Comp/MobileApp'
import { getFoodData } from '../Hooks/GetFoodData'
import { MainContext } from '../context/MainContexts'
import MenuHome from '../Components/Page-Comp/MenuHome'
import AboutHome from '../Components/Page-Comp/AboutHome'
import ServicesHome from '../Components/Page-Comp/ServicesHome'

const Home = () => {
  const { state, dispatch } = useContext(MainContext)
  const url = `https://delivery-data-base.onrender.com/food_list`

  useEffect(() => {
    getFoodData(url, dispatch)
  }, [])
  return (
    <div className='flex flex-col' >
      <HeaderBottom />
      <MenuHome  />
      <AboutHome/>
      <ServicesHome/>
      <MobileApp/>
      
    </div>
  )
}

export default Home