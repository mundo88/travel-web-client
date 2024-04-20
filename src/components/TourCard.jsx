import React from 'react';
import { TbChevronLeft, TbChevronRight, TbStarFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import { SwiperSlide } from 'swiper/react';
import useRound from "../hooks/useRound"
import { Navigation } from 'swiper/modules';
import FavouriteTourButton from './FavouriteTourButton';

const TourCardFull = ({tour,galleryShow}) =>{
    const round = useRound()
    return (
        <div className='w-full flex flex-col' to={"/tours/"+tour.id}>
            <div className="w-full h-auto aspect-square overflow-hidden relative group/tour">
                <div className='absolute top-4 right-4 p-2 bg-teal-950 md:opacity-0 md:group-hover/tour:opacity-100 duration-300 flex items-center justify-center z-10'>
                    <FavouriteTourButton tourId={tour.id}></FavouriteTourButton>
                </div>
            {galleryShow?
                <>
                    <button className={`prev-${tour.id} absolute top-1/2 -translate-y-1/2 left-4 w-10 h-10 backdrop-blur-lg flex items-center justify-center hover:bg-white hover:text-black text-white active:scale-95 duration-300 next md:opacity-0 group-hover/tour:opacity-100 z-20`}>
                        <TbChevronLeft size={24}></TbChevronLeft>
                    </button>
                    <button className={`next-${tour.id} absolute top-1/2 -translate-y-1/2 right-4 w-10 h-10 backdrop-blur-lg flex items-center justify-center hover:bg-white hover:text-black text-white active:scale-95 duration-300 next md:opacity-0 group-hover/tour:opacity-100 z-20`}>
                        <TbChevronRight size={24}></TbChevronRight>
                    </button>
                    
                    <Swiper 
                        className='w-full h-full'
                        modules={[Navigation]}
                        navigation={{
                            nextEl: ".next-"+tour.id,
                            prevEl: '.prev-'+tour.id,
                            disabledClass: "swiper-disabled"
                        }}
                    >
                        <SwiperSlide className='group relative'>
                     
                            <Link>
                                <img src={tour.thumbnail} className='w-full h-full object-cover group-hover:scale-110 duration-300' alt="" />
                            </Link>
                        </SwiperSlide>
                        {tour.attachments.map((attachment,key)=>(
                            <SwiperSlide key={key} className='group'>
                                <Link>
                                    <img src={attachment.file} className='w-full h-full object-cover group-hover:scale-110 duration-300' alt="" />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
                :
                    
                <Link to={"/tours/"+tour.id}>
                    <img src={tour.thumbnail} className='w-full h-full object-cover group-hover:scale-110 duration-300' alt="" />
                </Link>
                }
            </div>
            <div className='mt-2 space-y-1'>
                <div className='flex justify-between w-full items-start gap-4'>
                    <Link to={"/tours/"+tour.id} className="text-gray-100 font-semibold line-clamp-2 hover:underline">
                        {tour.name}
                    </Link>
                    <div className="text-gray-100  flex items-center gap-1">
                        <TbStarFilled size={18}></TbStarFilled>
                        {tour.aggregate_rating ? round(tour.aggregate_rating) : 5}
                    </div>
                </div>
                <div className="text-gray-200">
                    {tour.time}
                </div>
                <div className="text-gray-100 font-semibold">
                    ${tour.price}
                </div>
            </div>
        </div>
    )
}


const TourCard = ({tour})=>{
    return(
        <div className='flex items-end gap-4 w-full aspect-video overflow-hidden group'>
            <div style={{writingMode:"vertical-rl"}} className='rotate-180 uppercase text-gray-500 text-lg md:md:text-3xl font-bold group-hover:text-white duration-300 truncate'>{tour.destination.name}</div>
            <div className='w-full h-full relative'>
                <div className='absolute bg-black/70 p-8 flex flex-col items-center justify-center inset-0 gap-4 opacity-0 group-hover:opacity-100 duration-300'>
                    <div className="text-white text-xl font-semibold truncate max-w-full">
                        {tour.name}
                    </div>
                    <div className='flex items-center justify-center gap-4'>
                        <Link to={"/tours/"+tour.id} className='w-fit text-md md:text-xl font-semibold md:px-8 px-3 md:py-3 py-2 text-white hover:bg-black/60 border-2 border-teal-300 duration-300 text-center active:scale-95'>Detail</Link>
                        <FavouriteTourButton tourId={tour.id} iconSize={28} className='w-fit text-md md:text-xl font-semibold hover:bg-teal-400 md:py-3 px-3 py-2 text-black bg-teal-300 duration-300 text-center active:scale-95 border-2 border-teal-400'/>
                    </div>
                </div>
                <Link to={"/tours/"+tour.id}>
                    <img src={tour.thumbnail} alt="" className='w-full h-full object-cover' />
                </Link>
            </div>
        </div>
    )
}
export {
    TourCardFull,TourCard
};
