import React from 'react'
import img1 from '../../../assets/features/feature1.png'
import img2 from '../../../assets/features/illustration.png'
const items = [
    {
        id: 1,
        title: "Live Parcel Tracking",
        des: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
        img: img2
    },
    {
        id: 2,
        title: "100% Safe Delivery",
        des: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
        img: img1
    },
    {
        id: 3,
        title: "24/7 Call Center Support",
        des: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
        img: img1
    },
]
const Feature = () => {
  return (
      <div className='py-20 border-y border-[#03373D] border-dotted my-16 max-w-6xl mx-auto px-5 md:px-0'>
          <div className='space-y-10'>
              {
                  items.map((item) => (
                      <div key={item.id} className='flex items-center justify-between bg-white shadow-md p-5 gap-10'>
                          <div>
                          <img src={item.img} alt={item.title} />
                              
                          </div>
                          <div className='border-r border-dotted border-[#03373D] h-28'></div>
                          <div>
                          <h3 className='font-bold text-[#03373D] my-2'>{item.title}</h3>
                          <p className='text-gray-400 text-sm'>{item.des}</p>
                              
                          </div>
                      </div>
                  ))
              }
          </div>
    </div>
  )
}

export default Feature