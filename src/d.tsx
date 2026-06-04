import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";

const ReviewsCard = ({ review }) => {
  const { userName,review:testimonial,user_photoURL}=review
  return (
    <div className="w-65 bg-base-100 shadow-md rounded-2xl p-6 border border-gray-100">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-4xl text-[#03373D]/50 mb-4" />

      {/* Description */}
      <p className="text-sm text-gray-500 leading-6 border-b border-dashed border-gray-300 pb-5">
        {
          testimonial
        }
      </p>

      {/* User Info */}
      <div className="flex items-center gap-3 pt-5">
        <div className="w-12 h-12 rounded-full ">
          <img src={user_photoURL} alt="" className='rounded-full'/>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800">{ userName}</h3>
          <p className="text-sm text-gray-400">Senior Product Designer</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewsCard