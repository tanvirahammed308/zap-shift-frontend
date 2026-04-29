import React from 'react'
import img from '../../../assets/service.png'
import ServiceCard from './ServiceCard'

const Services = () => {
    const data = [
        {
            id: 1,
            title: 'Express  & Standard Delivery',
            des: 'We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.',
            image:img
        },
        {
            id: 1,
            title: 'Express  & Standard Delivery',
            des: 'We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.',
            image:img
        },
        {
            id: 1,
            title: 'Express  & Standard Delivery',
            des: 'We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.',
            image:img
        },
        {
            id: 1,
            title: 'Express  & Standard Delivery',
            des: 'We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.',
            image:img
        },
        {
            id: 1,
            title: 'Express  & Standard Delivery',
            des: 'We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.',
            image:img
        },
        {
            id: 1,
            title: 'Express  & Standard Delivery',
            des: 'We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.',
            image:img
        },
    ]
  return (
      <div className='mt-20 bg-[#03373D] p-10 rounded '>
          <div className='text-center flex flex-col justify-center items-center  '>
              <div className='max-w-2xl'>
                 <h1 className='text-white text-xl font-bold'>Our Services</h1>
              <p className='text-gray-400 text-xs mt-2'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p> 
              </div>
              <ServiceCard></ServiceCard>
             
              
          </div>
         
    </div>
  )
}

export default Services