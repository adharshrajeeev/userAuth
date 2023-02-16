import React, { Fragment } from 'react'
import NavBar from '../Components/Headers/NavBar'
import Footer from '../Components/Footers/Footer'
import HomeScreen from '../Components/HomePage/HomeScreen'

function UserHome() {
  return (
    <Fragment>
      <NavBar/>
      <HomeScreen/>
      <Footer/>
    </Fragment>
  )
}

export default UserHome