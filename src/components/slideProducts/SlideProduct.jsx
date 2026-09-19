import React from 'react'
import Product from './Product'
import "./slideProduct.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

function SlideProduct({data, title}) {
  return (
    <div className='slideProducts slide'>
        <div className="container">
            <div className="topSlide">
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <Swiper slidesPerView={5}
            spaceBetween={70}
                 navigation={true} loop ={true}
                 modules={[Navigation, Autoplay]} className="mySwiper">
                    {data.map(item =>{
                        return(
                            <SwiperSlide><Product item= {item}/></SwiperSlide>
                        )
                    })}
            </Swiper>
        </div>
    </div>
  )
}

export default SlideProduct