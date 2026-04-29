import React from 'react'
import Banner from '../banner/Banner'
import Works from '../works/Works'
import Services from '../services/Services'
import Brands from '../brands/Brands'
import Feature from '../feature/Feature'

const Home = () => {
  return (
    <div>
      <Banner />
      <Works />
      <Services />
      <Brands />
      <Feature/>
    </div>
  )
}

export default Home