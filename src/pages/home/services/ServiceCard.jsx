import React from 'react'
import serviceImg from '../../../assets/service.png'

const ServiceCard = () => {
  const items = [
    {
      id: 1,
      title: "Express & Standard Delivery",
      des: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours.",
      img: serviceImg
    },
    {
      id: 2,
      title: "Nationwide Delivery",
      des: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
      img: serviceImg
    },
    {
      id: 3,
      title: "Fulfillment Solution",
      des: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
      img: serviceImg
    },
    {
      id: 4,
      title: "Cash on Home Delivery",
      des: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      img: serviceImg
    },
    {
      id: 5,
      title: "Corporate Service / Contract In Logistics ",
      des: "Customized corporate services which includes warehouse and inventory management support.",
      img: serviceImg
    },
    {
      id: 6,
      title: "Parcel Return",
      des: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
      img: serviceImg
    }
  ]

  return (
    <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="card w-64 bg-base-100 hover:bg-[#CAEB66] shadow-sm p-5 flex justify-center items-center"
        >
          <div className="card-body ">

            <div className="flex justify-center items-center">
              <img
                src={item.img}
                alt="service"
                className="w-10 bg-gray-200 rounded-full p-1"
              />
            </div>

            <h2 className="text-center mt-2 font-bold text-xs text-secondary">
              {item.title}
            </h2>

            <p className="text-gray-500 text-xs text-center">
              {item.des}
            </p>

          </div>
        </div>
      ))}
    </div>
  )
}

export default ServiceCard