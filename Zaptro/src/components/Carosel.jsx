import { useContext, useEffect } from "react"
import { DataContext } from "../context/DataContext"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Carousel = () => {
  const { data, fetchAllProducts } = useContext(DataContext)

  useEffect(() => {
    fetchAllProducts()
  }, [fetchAllProducts]);

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper"
        style={{ height: "500px" }}
      >
        {data?.slice(0, 7).map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10">
              <div className="flex gap-10 justify-center h-full items-center px-4">
                <div className="space-y-6">
                  <h3 className="text-red-500 font-semibold font-sans text-sm">✨ Shop the Most Loved Products
                  </h3>
                  <h1 className="text-4xl font-bold uppercase line-clamp-3 w-[500] text-white">
                    {item.title}
                  </h1>
                  <p className="md:w-[500px]  line-clamp-3 text-gray-400 pr-7">{item.description}</p>
                  <button className="bg-gradient-to-r from-red-500 to-purple-500
                  text-white px-3 py-2 rounded-md cursor-pointer mt-2">Shop Now</button>
                </div>
                <div className="">
                   <img className="rounded-full w-[500px] hover:scale-105 transition-all bg-white shadow-2xl shadow-red-400"  src={item.image} alt={item.title} />
                </div>
              </div>
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carousel