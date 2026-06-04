import React from 'react'
import Banner from '../banner/Banner'
import Works from '../works/Works'
import Services from '../services/Services'
import Brands from '../brands/Brands'
import Feature from '../feature/Feature'
import Reviews from '../reviews/Reviews'

const reviewsPromise=fetch('/reviews.json').then((res)=>res.json())
const Home = () => {
  return (
    <div>
      <Banner />
      <Works />
      <Services />
      <Brands />
      <Feature />
      <Reviews reviewsPromise={ reviewsPromise} />
    </div>
  )
}

export default Home