import React from 'react'
import { BsArrowUpRightCircleFill } from 'react-icons/bs'

const BannerBtn = () => {
  return (
      <div className='flex justify-center items-center absolute bottom-6 md:bottom-20 md:left-20 left-7 gap-4 '>
          <div className='flex justify-center items-center '>
              <button className="btn bg-secondary text-white btn-xs md:btn-lg">Track Your Parcel</button>
              <BsArrowUpRightCircleFill size={30}/>

          </div>
          <div>
               <button className="btn bg-white btn-xs md:btn-lg">Be A Rider</button>
          </div>
    </div>
  )
}

export default BannerBtn