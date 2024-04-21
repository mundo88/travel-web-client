
import React, {  useEffect, useState } from 'react';
import { TbCalendarEvent, TbChevronDown, TbChevronLeft, TbChevronRight, TbMapPin, TbSend } from "react-icons/tb";
import { MdOutlineAttachMoney } from "react-icons/md";
import ArrowHeader from "../assets/images/arrow-header.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-fade';
import "swiper/css/navigation"
// import requiteal modules
import { Autoplay, Controller, EffectCube,EffectFade, Navigation} from 'swiper/modules';
import { axiosInstance } from '../service/axiosInstance';
import { Link } from 'react-router-dom';


const Header = () => {
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);
    const [tours,setTours]= useState([])
    useEffect(() => {
        axiosInstance.get('tours/?featured=true').then(res=>{
            setTours(res.data.results)
        })
        return ()=>{
        }
    }, []);
    return (
        <div className='min-h-screen bg-main mb-16 md:mb-0'>
            <div className='absolute inset-0'>
                <div className='absolute inset-0'>
                    <div className='container m-auto pt-28 md:pt-44 flex flex-col h-full'>
                        <div className='text-white font-bold text-3xl md:text-8xl flex flex-col items-center'>
                            <div className='relative'>
                                <img src={ArrowHeader} className='absolute md:-right-24 top-4 -rotate-12 md:w-auto -right-10 w-12 h-auto' alt="" />
                                Your next <span className='text-teal-300'>travel </span>
                            </div>
                            <div className='md:flex md:items-end md:flex-row gap-4 md:gap-6 flex flex-col items-center justify-center'>
                                <span><span className='text-teal-300'>destination</span> is </span>
                                <div className='md:max-h-[88px] md:h-[88px] md:w-[330px] w-[240px] overflow-hidden max-h-12'>
                                    <Swiper
                                        slidesPerView={1}
                                        effect={'cube'}
                                        grabCursor={true}
                                        direction={'vertical'}
                                        modules={[EffectCube,Controller]}
                                        loop={true}
                                        onSwiper={setFirstSwiper}
                                        controller={{ control: secondSwiper }}
                                        className='h-full w-full'
                                    >
                                        
                                        {tours && tours.map((tour)=>(
                                            <SwiperSlide key={tour.id}>
                                                <div className='flex items-center justify-between gap-16 border-2 bg-black border-emerald-500 md:px-4 h-full w-full text-lg md:text-3xl px-3 py-2 font-normal'>
                                                    <span className="whitespace-nowrap">{tour.destination.name}</span>
                                                    <TbChevronDown size={36}></TbChevronDown>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className='overflow-hidden h-full md:mt-12 mt-8 relative flex items-center justify-center group'>
                            <Swiper 
                                className='h-full w-full'
                                modules={[Controller,EffectFade,Autoplay,Navigation]}
                                onSwiper={setSecondSwiper}
                                controller={{ control: firstSwiper }}
                                loop={true}
                                effect={'fade'}
                                autoplay={{
                                    delay: 4000,
                                    pauseOnMouseEnter:true
                                }}
                                navigation={{
                                    nextEl: ".next",
                                    prevEl: ".prev",
                                    disabledClass: "swiper-disabled"
                                }}
                            >
                                {tours && tours.map((tour,key)=>(
                                    <SwiperSlide key={key}>
                                        <div className='h-full relative'>
                                   
                                            <div className='absolute inset-0 bg-gradient-to-t w-full h-full from-[#051214] via-[#051214]/40 to-transparent z-20 flex items-end justify-center'>
                                            
                                            </div>
                                            <img className='h-full w-full object-cover' alt='' src={tour.thumbnail}/>
                                            <div className=" absolute inset-0">
                                                <div className=' md:opacity-0 md:group-hover:opacity-100 duration-300 transition-opacity absolute bottom-0 left-0 right-0 rounded-lg py-4 px-4 backdrop-blur-xl flex justify-between items-center gap-4 z-40'>
                                                    <div className='flex items-center gap-4 p-2 text-white hover:bg-white/15 duration-300 w-full'>
                                                        <TbMapPin size={'36'}></TbMapPin> 
                                                        <div className='flex flex-col'>
                                                            <span className='text-sm'>Destination</span>
                                                            <span className='text-lg truncate'>{tour.destination.name}</span>
                                                        </div>
                                                    </div>
                                                    <div className='md:block hidden h-8 w-0.5 bg-gray-400'></div>
                                                    <div className='md:flex hidden items-center gap-4 p-2 text-white hover:bg-white/15 duration-300 w-full'>
                                                        <TbSend size={'36'}></TbSend> 
                                                        <div className='flex flex-col'>
                                                            <span className='text-sm'>Type</span>
                                                            <span className='text-lg truncate'>{tour.transport}</span>
                                                        </div>
                                                    </div>
                                                    <div className='md:block hidden h-8 w-0.5 bg-gray-400'></div>
                                                    <div className='md:flex hidden items-center gap-4 p-2 text-white hover:bg-white/15 duration-300 w-full'>
                                                        <MdOutlineAttachMoney size={'36'}></MdOutlineAttachMoney> 
                                                        <div className='flex flex-col'>
                                                            <span className='text-sm'>Price</span>
                                                            <span className='text-lg'>${tour.price}</span>
                                                        </div>
                                                    </div>
                                                    <div className='md:block hidden h-8 w-0.5 bg-gray-400'></div>
                                                    <div className='md:flex hidden items-center gap-4 p-2 text-white hover:bg-white/15 duration-300 w-full'>
                                                        <TbCalendarEvent size={'36'}></TbCalendarEvent> 
                                                        <div className='flex flex-col'>
                                                            <span className='text-sm'>Time</span>
                                                            <span className='text-lg'>{tour.time}</span>
                                                        </div>
                                                    </div>
                                                    <div className='h-8 w-0.5 bg-gray-400'></div>
                                                    <Link to={"/tours/"+tour.id} className='ml-2 text-lg md:text-2xl font-semibold hover:bg-teal-400 px-4 py-4 text-black bg-teal-300 duration-300 w-full text-center active:scale-95'>
                                                        <span>View Detail</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <button  className='absolute top-1/2 -translate-y-1/2 left-4 w-12 h-12 backdrop-blur-lg  flex items-center justify-center hover:bg-white hover:text-black text-white active:scale-95 duration-300 prev opacity-0 group-hover:opacity-100 z-20'>
                                <TbChevronLeft size={26}></TbChevronLeft>
                            </button>
                            <button  className='absolute top-1/2 -translate-y-1/2 right-4 w-12 h-12 backdrop-blur-lg  flex items-center justify-center hover:bg-white hover:text-black text-white active:scale-95 duration-300 next opacity-0 group-hover:opacity-100 z-20'>
                                <TbChevronRight size={26}></TbChevronRight>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
      
        </div>
    );
}

export default Header;
