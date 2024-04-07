
import React, {  useState } from 'react';
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


const Header = () => {
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);
    return (
        <div className='min-h-screen bg-main'>
            <div className='absolute inset-0'>
                <div className='absolute inset-0'>
                    <div className='container m-auto pt-44 flex flex-col h-full'>
                        <div className='text-white font-bold text-8xl flex flex-col items-center'>
                            <div className='relative'>
                                <img src={ArrowHeader} className='absolute -right-24 top-4 -rotate-12' alt="" />
                                Your next <span className='text-teal-300'>travel </span>
                            </div>
                            <div className='flex items-end '>
                                <span><span className='text-teal-300'>destination</span> is </span>
                                <div className=''>
                                    <Swiper
                                        slidesPerView={1}
                                        effect={'cube'}
                                        grabCursor={true}
                                        direction={'vertical'}
                                        modules={[EffectCube,Controller]}
                                        loop={true}
                                        onSwiper={setFirstSwiper}
                                        controller={{ control: secondSwiper }}
                                        className='h-[88px] w-[330px]'
                                    >
                                        <SwiperSlide>
                                            <div className='flex items-center justify-between gap-16 border-2 bg-black border-emerald-500 px-4 py-6 text-3xl font-normal  ml-8'>
                                                <span className="whitespace-nowrap">Ha Long Bay</span>
                                                <TbChevronDown size={36}></TbChevronDown>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='flex items-center justify-between gap-16 border-2 bg-black border-emerald-500 px-4 py-6 text-3xl font-normal  ml-8'>
                                                <span className="whitespace-nowrap">Phu Quoc</span>
                                                <TbChevronDown size={36}></TbChevronDown>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='flex items-center justify-between gap-16 border-2 bg-black border-emerald-500 px-4 py-6 text-3xl font-normal  ml-8'>
                                                <span className="whitespace-nowrap">Nha Trang</span>
                                                <TbChevronDown size={36}></TbChevronDown>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='flex items-center justify-between gap-16 border-2 bg-black border-emerald-500 px-4 py-6 text-3xl font-normal  ml-8'>
                                                <span className="whitespace-nowrap">Da Nang</span>
                                                <TbChevronDown size={36}></TbChevronDown>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='flex items-center justify-between gap-16 border-2 bg-black border-emerald-500 px-4 py-6 text-3xl font-normal  ml-8'>
                                                <span className="whitespace-nowrap">Ha Noi</span>
                                                <TbChevronDown size={36}></TbChevronDown>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='flex items-center justify-between gap-16 border-2 bg-black border-emerald-500 px-4 py-6 text-3xl font-normal  ml-8'>
                                                <span className="whitespace-nowrap">Ho Chi Minh</span>
                                                <TbChevronDown size={36}></TbChevronDown>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className='overflow-hidden h-full mt-12 relative flex items-center justify-center group'>
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
                                <SwiperSlide>
                                    <div className='h-full'>
                                        <div className='absolute inset-0 bg-gradient-to-t w-full h-full from-[#051214] via-[#051214]/40 to-transparent z-20'></div>
                                        <img className='h-full w-full object-cover' alt='' src='https://static.vinwonders.com/production/du-lich-ha-long-topbanner.jpg'/>
                                        <div className=" absolute inset-0">
                                            <div className=' opacity-0 group-hover:opacity-100 duration-300 transition-opacity absolute bottom-0 left-0 right-0 rounded-lg py-4 px-4 backdrop-blur-xl flex justify-between items-center gap-4 z-40'>
                                                <div className='flex items-center gap-4 p-2 text-white hover:bg-white/15 duration-300 w-full'>
                                                    <TbMapPin size={'36'}></TbMapPin> 
                                                    <div className='flex flex-col'>
                                                        <span className='text-sm'>Destination</span>
                                                        <span className='text-lg'>Ha Noi to Quang Ninh</span>
                                                    </div>
                                                </div>
                                                <div className='h-8 w-0.5 bg-gray-400'></div>
                                                <div className='flex items-center gap-4 p-2 text-white hover:bg-white/15 duration-300 w-full'>
                                                    <TbSend size={'36'}></TbSend> 
                                                    <div className='flex flex-col'>
                                                        <span className='text-sm'>Type</span>
                                                        <span className='text-lg'>One way</span>
                                                    </div>
                                                </div>
                                                <div className='h-8 w-0.5 bg-gray-400'></div>
                                                <div className='flex items-center gap-4 p-2 text-white hover:bg-white/15 duration-300 w-full'>
                                                    <MdOutlineAttachMoney size={'36'}></MdOutlineAttachMoney> 
                                                    <div className='flex flex-col'>
                                                        <span className='text-sm'>Price</span>
                                                        <span className='text-lg'>$800-$1200</span>
                                                    </div>
                                                </div>
                                                <div className='h-8 w-0.5 bg-gray-400'></div>
                                                <div className='flex items-center gap-4 p-2 text-white hover:bg-white/15 duration-300 w-full'>
                                                    <TbCalendarEvent size={'36'}></TbCalendarEvent> 
                                                    <div className='flex flex-col'>
                                                        <span className='text-sm'>Date</span>
                                                        <span className='text-lg'>May 15</span>
                                                    </div>
                                                </div>
                                                <div className='h-8 w-0.5 bg-gray-400'></div>
                                                <button className='ml-2 text-2xl font-semibold hover:bg-teal-400 px-4 py-4 text-black bg-teal-300 duration-300 w-full text-center active:scale-95'>
                                                    <span>Book now</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                                <SwiperSlide>
                                    <div className='h-full'>
                                        <div className='absolute inset-0 bg-gradient-to-t w-full h-full from-[#051214] via-[#051214]/40 to-transparent z-20'></div>
                                        <img className='h-full w-full object-cover' alt='' src='https://khaihoanphuquoc.com.vn/wp-content/uploads/2023/09/DJI_0087-1-scaled-1.jpg'/>
                                        <div className=" absolute inset-0">
                                            <div className=' opacity-0 group-hover:opacity-100 duration-300 transition-opacity absolute bottom-0 left-0 right-0 rounded-lg py-4 px-4 backdrop-blur-xl flex justify-between items-center gap-4 z-40'>
                                                <div className='flex items-center gap-4 p-2 text-white hover:bg-white/15 duration-300 w-full'>
                                                    <TbMapPin size={'36'}></TbMapPin> 
                                                    <div className='flex flex-col'>
                                                        <span className='text-sm'>Destination</span>
                                                        <span className='text-lg'>Ha Noi to Phu Quoc</span>
                                                    </div>
                                                </div>
                                                <div className='h-8 w-0.5 bg-gray-400'></div>
                                                <div className='flex items-center gap-4 p-2 text-white hover:bg-white/15 duration-300 w-full'>
                                                    <TbSend size={'36'}></TbSend> 
                                                    <div className='flex flex-col'>
                                                        <span className='text-sm'>Type</span>
                                                        <span className='text-lg'>One way</span>
                                                    </div>
                                                </div>
                                                <div className='h-8 w-0.5 bg-gray-400'></div>
                                                <div className='flex items-center gap-4 p-2 text-white hover:bg-white/15 duration-300 w-full'>
                                                    <MdOutlineAttachMoney size={'36'}></MdOutlineAttachMoney> 
                                                    <div className='flex flex-col'>
                                                        <span className='text-sm'>Price</span>
                                                        <span className='text-lg'>$1500-$100</span>
                                                    </div>
                                                </div>
                                                <div className='h-8 w-0.5 bg-gray-400'></div>
                                                <div className='flex items-center gap-4 p-2 text-white hover:bg-white/15 duration-300 w-full'>
                                                    <TbCalendarEvent size={'36'}></TbCalendarEvent> 
                                                    <div className='flex flex-col'>
                                                        <span className='text-sm'>Date</span>
                                                        <span className='text-lg'>May 15</span>
                                                    </div>
                                                </div>
                                                <div className='h-8 w-0.5 bg-gray-400'></div>
                                                <button className='ml-2 text-2xl font-semibold hover:bg-teal-400 px-4 py-4 text-black bg-teal-300 duration-300 w-full text-center active:scale-95'>
                                                    <span>Book now</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                                <SwiperSlide>
                                    <div className='h-full'>
                                        <div className='absolute inset-0 bg-gradient-to-t w-full h-full from-[#051214] via-[#051214]/40 to-transparent z-20'></div>
                                        <img className='h-full w-full object-cover' alt='' src='https://static.vinwonders.com/production/nha-trang-o-dau-1.jpg'/>
                                        <div className=" absolute inset-0">
                                            <div className=' opacity-0 group-hover:opacity-100 duration-300 transition-opacity absolute bottom-0 left-0 right-0 rounded-lg py-4 px-4 backdrop-blur-xl flex justify-between items-center gap-4 z-40'>
                                                <div className='flex items-center gap-4 p-2 text-white hover:bg-white/15 duration-300 w-full'>
                                                    <TbMapPin size={'36'}></TbMapPin> 
                                                    <div className='flex flex-col'>
                                                        <span className='text-sm'>Destination</span>
                                                        <span className='text-lg'>Ha Noi to Nha Trang</span>
                                                    </div>
                                                </div>
                                                <div className='h-8 w-0.5 bg-gray-400'></div>
                                                <div className='flex items-center gap-4 p-2 text-white hover:bg-white/15 duration-300 w-full'>
                                                    <TbSend size={'36'}></TbSend> 
                                                    <div className='flex flex-col'>
                                                        <span className='text-sm'>Type</span>
                                                        <span className='text-lg'>One way</span>
                                                    </div>
                                                </div>
                                                <div className='h-8 w-0.5 bg-gray-400'></div>
                                                <div className='flex items-center gap-4 p-2 text-white hover:bg-white/15 duration-300 w-full'>
                                                    <MdOutlineAttachMoney size={'36'}></MdOutlineAttachMoney> 
                                                    <div className='flex flex-col'>
                                                        <span className='text-sm'>Price</span>
                                                        <span className='text-lg'>$800-$1200</span>
                                                    </div>
                                                </div>
                                                <div className='h-8 w-0.5 bg-gray-400'></div>
                                                <div className='flex items-center gap-4 p-2 text-white hover:bg-white/15 duration-300 w-full'>
                                                    <TbCalendarEvent size={'36'}></TbCalendarEvent> 
                                                    <div className='flex flex-col'>
                                                        <span className='text-sm'>Date</span>
                                                        <span className='text-lg'>May 15</span>
                                                    </div>
                                                </div>
                                                <div className='h-8 w-0.5 bg-gray-400'></div>
                                                <button className='ml-2 text-2xl font-semibold hover:bg-teal-400 px-4 py-4 text-black bg-teal-300 duration-300 w-full text-center active:scale-95'>
                                                    <span>Book now</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                                <SwiperSlide>
                                    <div className='h-full'>
                                        <div className='absolute inset-0 bg-gradient-to-t w-full h-full from-[#051214] via-[#051214]/40 to-transparent z-20'></div>
                                        <img className='h-full w-full object-cover' alt='' src='https://images2.thanhnien.vn/528068263637045248/2023/6/4/screenshot-2023-06-04-at-224756-16858937361421786911492.png'/>
                                        <div className=" absolute inset-0">
                                            <div className=' opacity-0 group-hover:opacity-100 duration-300 transition-opacity absolute bottom-0 left-0 right-0 rounded-lg py-4 px-4 backdrop-blur-xl flex justify-between items-center gap-4 z-40'>
                                                <div className='flex items-center gap-4 p-2 text-white hover:bg-white/15 duration-300 w-full'>
                                                    <TbMapPin size={'36'}></TbMapPin> 
                                                    <div className='flex flex-col'>
                                                        <span className='text-sm'>Destination</span>
                                                        <span className='text-lg'>Ha Noi to Da Nang</span>
                                                    </div>
                                                </div>
                                                <div className='h-8 w-0.5 bg-gray-400'></div>
                                                <div className='flex items-center gap-4 p-2 text-white hover:bg-white/15 duration-300 w-full'>
                                                    <TbSend size={'36'}></TbSend> 
                                                    <div className='flex flex-col'>
                                                        <span className='text-sm'>Type</span>
                                                        <span className='text-lg'>One way</span>
                                                    </div>
                                                </div>
                                                <div className='h-8 w-0.5 bg-gray-400'></div>
                                                <div className='flex items-center gap-4 p-2 text-white hover:bg-white/15 duration-300 w-full'>
                                                    <MdOutlineAttachMoney size={'36'}></MdOutlineAttachMoney> 
                                                    <div className='flex flex-col'>
                                                        <span className='text-sm'>Price</span>
                                                        <span className='text-lg'>$800-$1200</span>
                                                    </div>
                                                </div>
                                                <div className='h-8 w-0.5 bg-gray-400'></div>
                                                <div className='flex items-center gap-4 p-2 text-white hover:bg-white/15 duration-300 w-full'>
                                                    <TbCalendarEvent size={'36'}></TbCalendarEvent> 
                                                    <div className='flex flex-col'>
                                                        <span className='text-sm'>Date</span>
                                                        <span className='text-lg'>May 15</span>
                                                    </div>
                                                </div>
                                                <div className='h-8 w-0.5 bg-gray-400'></div>
                                                <button className='ml-2 text-2xl font-semibold hover:bg-teal-400 px-4 py-4 text-black bg-teal-300 duration-300 w-full text-center active:scale-95'>
                                                    <span>Book now</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                                <SwiperSlide>
                                    <div className='h-full'>
                                        <div className='absolute inset-0 bg-gradient-to-t w-full h-full from-[#051214] via-[#051214]/40 to-transparent z-20'></div>
                                        <img className='h-full w-full object-cover' alt='' src='https://statics.vinpearl.com/ho-hoan-kiem-1_1688884405.jpg'/>
                                        <div className=" absolute inset-0">
                                            <div className=' opacity-0 group-hover:opacity-100 duration-300 transition-opacity absolute bottom-0 left-0 right-0 rounded-lg py-4 px-4 backdrop-blur-xl flex justify-between items-center gap-4 z-40'>
                                                <div className='flex items-center gap-4 p-2 text-white hover:bg-white/15 duration-300 w-full'>
                                                    <TbMapPin size={'36'}></TbMapPin> 
                                                    <div className='flex flex-col'>
                                                        <span className='text-sm'>Destination</span>
                                                        <span className='text-lg'>Ha Noi to Ha Noi</span>
                                                    </div>
                                                </div>
                                                <div className='h-8 w-0.5 bg-gray-400'></div>
                                                <div className='flex items-center gap-4 p-2 text-white hover:bg-white/15 duration-300 w-full'>
                                                    <TbSend size={'36'}></TbSend> 
                                                    <div className='flex flex-col'>
                                                        <span className='text-sm'>Type</span>
                                                        <span className='text-lg'>One way</span>
                                                    </div>
                                                </div>
                                                <div className='h-8 w-0.5 bg-gray-400'></div>
                                                <div className='flex items-center gap-4 p-2 text-white hover:bg-white/15 duration-300 w-full'>
                                                    <MdOutlineAttachMoney size={'36'}></MdOutlineAttachMoney> 
                                                    <div className='flex flex-col'>
                                                        <span className='text-sm'>Price</span>
                                                        <span className='text-lg'>$1500-$100</span>
                                                    </div>
                                                </div>
                                                <div className='h-8 w-0.5 bg-gray-400'></div>
                                                <div className='flex items-center gap-4 p-2 text-white hover:bg-white/15 duration-300 w-full'>
                                                    <TbCalendarEvent size={'36'}></TbCalendarEvent> 
                                                    <div className='flex flex-col'>
                                                        <span className='text-sm'>Date</span>
                                                        <span className='text-lg'>May 15</span>
                                                    </div>
                                                </div>
                                                <div className='h-8 w-0.5 bg-gray-400'></div>
                                                <button className='ml-2 text-2xl font-semibold hover:bg-teal-400 px-4 py-4 text-black bg-teal-300 duration-300 w-full text-center active:scale-95'>
                                                    <span>Book now</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                    
                                <SwiperSlide>
                                    <div className='h-full'>
                                        <div className='absolute inset-0 bg-gradient-to-t w-full h-full from-[#051214] via-[#051214]/40 to-transparent z-20'></div>
                                        <img className='h-full w-full object-cover' alt='' src='https://vcdn-vnexpress.vnecdn.net/2023/05/26/Untitled-Panorama1-5826-1685055517.jpg'/>
                                        <div className=" absolute inset-0">
                                            <div className=' opacity-0 group-hover:opacity-100 duration-300 transition-opacity absolute bottom-0 left-0 right-0 rounded-lg py-4 px-4 backdrop-blur-xl flex justify-between items-center gap-4 z-40'>
                                                <div className='flex items-center gap-4 p-2 text-white hover:bg-white/15 duration-300 w-full'>
                                                    <TbMapPin size={'36'}></TbMapPin> 
                                                    <div className='flex flex-col'>
                                                        <span className='text-sm'>Destination</span>
                                                        <span className='text-lg'>Ha Noi to Ho Chi Minh</span>
                                                    </div>
                                                </div>
                                                <div className='h-8 w-0.5 bg-gray-400'></div>
                                                <div className='flex items-center gap-4 p-2 text-white hover:bg-white/15 duration-300 w-full'>
                                                    <TbSend size={'36'}></TbSend> 
                                                    <div className='flex flex-col'>
                                                        <span className='text-sm'>Type</span>
                                                        <span className='text-lg'>One way</span>
                                                    </div>
                                                </div>
                                                <div className='h-8 w-0.5 bg-gray-400'></div>
                                                <div className='flex items-center gap-4 p-2 text-white hover:bg-white/15 duration-300 w-full'>
                                                    <MdOutlineAttachMoney size={'36'}></MdOutlineAttachMoney> 
                                                    <div className='flex flex-col'>
                                                        <span className='text-sm'>Price</span>
                                                        <span className='text-lg'>$1500-$100</span>
                                                    </div>
                                                </div>
                                                <div className='h-8 w-0.5 bg-gray-400'></div>
                                                <div className='flex items-center gap-4 p-2 text-white hover:bg-white/15 duration-300 w-full'>
                                                    <TbCalendarEvent size={'36'}></TbCalendarEvent> 
                                                    <div className='flex flex-col'>
                                                        <span className='text-sm'>Date</span>
                                                        <span className='text-lg'>May 15</span>
                                                    </div>
                                                </div>
                                                <div className='h-8 w-0.5 bg-gray-400'></div>
                                                <button className='ml-2 text-2xl font-semibold hover:bg-teal-400 px-4 py-4 text-black bg-teal-300 duration-300 w-full text-center active:scale-95'>
                                                    <span>Book now</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
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
