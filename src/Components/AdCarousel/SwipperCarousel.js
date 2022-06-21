import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './_swiperCarousel.scss';


// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import {addDetails} from "../../Assets/data/data";
import CardAds from "../CardAds/CardAds";

export default function SwipperCarousel() {
    return (
        <>
            <h2 className='header'> Recent posts </h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={false}
                modules={[ Navigation]}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }}
                className="mySwiper"
            >
                {
                    addDetails.map(data => {
                        return(
                            <SwiperSlide>
                                <CardAds
                                    id={data.id}
                                    description={data.description}
                                    area={data.area}
                                    location={data.location}
                                    specification={data.specification}
                                    price={data.price}
                                    available={data.available}
                                    contact={data.contact}
                                    verified={data.verified}
                                    img={data.img}
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    );
}
