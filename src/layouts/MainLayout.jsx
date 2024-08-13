import React, { useState } from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import LoginAndSingUp from '../Components/LoginAndSingUp'
import Content from '../Components/Content'

const MainLayout = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
    {showLogin ? <LoginAndSingUp setShowLogin={setShowLogin} /> : <></>}
    <div className={` relative ${showLogin && "max-h-[100vh] overflow-hidden"}`}>
        <Header  setShowLogin={setShowLogin} showLogin={showLogin}/>
        <Content className="realtive"><Outlet/></Content>
        <Footer/>
    </div>
    </>
  )
}

export default MainLayout