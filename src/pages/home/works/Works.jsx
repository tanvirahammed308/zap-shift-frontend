import React from 'react'
import work from '../../../assets/work-icon.png'
const Works = () => {
    const contents = [
        {
            title: 'Booking Pick & Drop',
            des: 'From personal packages to business shipments — we deliver on time, every time.',
            img: work
        },
        {
            title: 'Cash On Delivery',
            des: 'From personal packages to business shipments — we deliver on time, every time.',
            img: work
        },
        {
            title: 'Delivery Hub',
            des: 'From personal packages to business shipments — we deliver on time, every time.',
            img: work
        },
        {
            title: 'Booking SME & Corporate',
            des: 'From personal packages to business shipments — we deliver on time, every time.',
            img: work
        },
    ]
  return (
      <div className='mt-14 '>
          <h2 className='text-secondary font-black  pl-5 md:pl-0'>How it Works</h2>
          <div className='grid grid-cols-1 md:grid-cols-4 mt-5 '>
              {
                  contents.map((content,index)=><div key={index} className="card w-full md:w-72 bg-base-100 card-xs shadow-md p-4">
                      <div className="card-body">
                          <img src={content.img} alt="" className='w-10' />
                          <h2 className="card-title text-secondary">{ content.title}</h2>
                          <p>{ content.des }</p>
    
  </div>
</div>)
              }
          </div>
    </div>
  )
}

export default Works