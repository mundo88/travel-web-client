import React, { useState } from 'react';
import { useEffect } from 'react';
import { TbArrowRight, TbChevronLeft, TbChevronRight, TbFilter, TbSearch, TbStarFilled } from 'react-icons/tb';
import { axiosInstance } from '../service/axiosInstance';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import useRound from '../hooks/useRound';
import { Navigation } from 'swiper/modules';


const TourCard = ({tour,children}) =>{
    const round = useRound()
    return (
        <div className='w-full flex flex-col' to={"/tours/"+tour.id}>
            <div className="w-full h-auto aspect-square overflow-hidden relative group/tour">
            <button className={`prev-${tour.id} absolute top-1/2 -translate-y-1/2 left-4 w-10 h-10 backdrop-blur-lg flex items-center justify-center hover:bg-white hover:text-black text-white active:scale-95 duration-300 next opacity-0 group-hover/tour:opacity-100 z-20`}>
                    <TbChevronLeft size={24}></TbChevronLeft>
                </button>
                <button className={`next-${tour.id} absolute top-1/2 -translate-y-1/2 right-4 w-10 h-10 backdrop-blur-lg flex items-center justify-center hover:bg-white hover:text-black text-white active:scale-95 duration-300 next opacity-0 group-hover/tour:opacity-100 z-20`}>
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
                    <SwiperSlide className='group'>
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

const TourList = () => {
    const [categories,setCategories] = useState(null)
    const [tours,setTours]= useState([])

    useEffect(() => {
        axiosInstance.get("categories/").then(res=>{
            setCategories(res.data)
        })
        axiosInstance.get('tours/?page_size=15').then(res=>{
            setTours(res.data.results)
        })
        return () => {
        };
    }, []);
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked)
    }
    return (
        <div className='min-h-screen pb-24'>
            <div className='bg-main '>
                <div className='w-full container mx-auto'>
                    <div className='w-2/3 py-8 mx-auto'>
                        <div className="flex items-center w-full relative bg-teal-900">
                            <div className='w-full flex'>
                                <label htmlFor="" className='text-gray-100 px-6 py-4 flex flex-col gap-1 duration-150 focus:bg-teal-800 hover:bg-teal-800 w-full'>
                                    <span className='text-sm'>Destination</span>
                                    <input type="text" className='text-md font-semibold bg-transparent outline-none placeholder:text-gray-100' placeholder='Choose destination' name="" id="" />
                                </label>
                            </div>
                            <div className='flex items-center justify-between px-6 py-4 gap-12 w-full h-full focus:bg-teal-700 hover:bg-teal-700 '>
                                <div className='text-gray-100 flex flex-col gap-1 duration-150 '>
                                    <span className='text-sm'>Transport</span>
                                    <span className='text-md font-semibold bg-transparent outline-none placeholder:text-gray-100 '>Choose Transport</span>
                                </div>
                            </div>
                            <div className='flex items-center justify-between px-6 py-4 gap-12 w-full h-full focus:bg-teal-700 hover:bg-teal-700 '>
                                <div className='text-gray-100 flex flex-col gap-1 duration-150 '>
                                    <span className='text-sm'>Time</span>
                                    <span className='text-md font-semibold bg-transparent outline-none placeholder:text-gray-100 '>Choose time</span>
                                </div>
                                <button className='font-semibold hover:bg-teal-400 h-12 w-12 min-w-12 text-black bg-teal-300 duration-300 flex items-center justify-center active:scale-95'>
                                    <TbSearch size={32}></TbSearch>
                                </button>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>   
            <div className='pt-3 pb-3 px-24 flex items-center justify-center gap-6 sticky top-20 z-10 bg-main border-t border-t-teal-800 '>
                <Swiper slidesPerView={12} className='w-full' spaceBetween={20}>
                    {categories && categories.map((category,key)=>(
                        <SwiperSlide>
                            <Link className='flex flex-col items-center py-3 justify-center w-full max-w-full group border-b-2 hover:border-b-teal-300 border-transparent duration-300' key={key}>
                                <div className='w-8 h-8 bg-teal-300 overflow-hidden p-1 hover:bg-teal-400 duration-300'>
                                    <img src={category.thumbnail} alt="" className='w-full h-full object-contain' />
                                </div>
                                <p className='text-gray-100 truncate text-sm mt-2 max-w-full'>{category.title}</p>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button className='gap-3 mb-3 text-md md:text-lg flex items-center font-semibold md:px-6 px-3 py-2 text-white hover:bg-black/60 border-2 border-teal-200 duration-300 text-center active:scale-95'>
                    <TbFilter size={24}></TbFilter>
                    <span className='whitespace-nowrap'>Filter</span>
                </button>
                <div className='gap-3 mb-3 text-md md:text-lg flex items-center font-semibold pl-6 pr-2 py-2 text-white hover:bg-black/60 border-2 border-teal-300 duration-300 text-center'>
                    <span className='whitespace-nowrap'>Gallery</span>
                    <label className='flex cursor-pointer select-none items-center'>
                        <div className='relative'>
                            <input
                                type='checkbox'
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                                className='sr-only'
                            />
                            <div className='block h-8 w-14 border border-gray-500 focus:border-teal-300 bg-transparent'></div>
                            <div className={` absolute top-1 h-6 w-6  duration-300 ${isChecked ? "right-1 bg-teal-300" : "left-1 bg-gray-600"}`}></div>
                        </div>
                    </label>
                </div>
            </div>
            <div className="grid grid-cols-6 gap-8 px-24 mt-6">
                {tours.map((tour,key)=>(
                    <div key={key}>
                        <TourCard tour={tour}/>
                    </div>
                ))}
            </div>
            <div className='mx-auto w-full flex items-center justify-center'>
                <Link class="hover:bg-black/60 active:scale-95 focus:border-teal-300 mt-12 w-fit py-2 px-6 flex items-center justify-center gap-4 text-gray-300 border border-gray-300 hover:border-teal-300 duration-150" to="/tours">
                    View more tour
                </Link>
            </div>
        </div>
    );
}

export default TourList;
