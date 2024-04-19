import React, { useState } from 'react';
import { useEffect } from 'react';
import {  TbChevronLeft, TbChevronRight, TbFilter, TbMenuOrder, TbSearch, TbStarFilled } from 'react-icons/tb';
import { axiosInstance } from '../service/axiosInstance';
import { Link, useParams, useSearchParams, } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import useRound from '../hooks/useRound';
import { Navigation } from 'swiper/modules';
import { VscEmptyWindow } from 'react-icons/vsc';


const TourCard = ({tour,galleryShow}) =>{
    const round = useRound()
    
    return (
        <div className='w-full flex flex-col' to={"/tours/"+tour.id}>
            <div className="w-full h-auto aspect-square overflow-hidden relative group/tour">
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

const TourList = () => {
    const [categories,setCategories] = useState(null)
    const [tours,setTours]= useState([])
    const [galleryShow,setGalleryShow] = useState(true)
    const [searchDestination,setSearchDestination] = useState([])
    const [next,setNext] = useState(null)
    const [loading,setLoading] = useState(false)
    const [params,setParams] = useSearchParams()

    const tourApi = "tours/?page_size=15&ordering=-id&"

    const searchToursByCategory = (category_id)=>{
        setLoading(true)
        setTours([])
        axiosInstance.get(tourApi+'category='+category_id).then(res=>{
            setTours(res.data.results)
            setNext(res.data.next)
            setLoading(false)
        })
    }
    const searchTours = ()=>{
        setLoading(true)
        setTours([])
        axiosInstance.get(tourApi+'search='+searchDestination).then(res=>{
            setTours(res.data.results)
            setNext(res.data.next)
            setLoading(false)
            window.scrollTo(0,0)
        })
    }
    const handleNext= ()=>{
        axiosInstance.get(next).then(res=>{
            setTours(t =>[...t,...res.data.results])
            setNext(res.data.next)
        })
    }
    useEffect(() => {
        const sendSearchRequest = setTimeout(() => {
            if (searchDestination && searchDestination.length > 2) {
                searchTours()
            }
        }, 500);
        return () => clearTimeout(sendSearchRequest);
      }, [searchDestination]);

    
    useEffect(() => {
        axiosInstance.get("categories/").then(res=>{
            setCategories(res.data)
        })
        axiosInstance.get(tourApi+params.toString()).then(res=>{
            setTours(res.data.results)
            setNext(res.data.next)
        })
        return () => {
        };
    }, []);



    const handleGalleryChange = () => {
        setGalleryShow(!galleryShow)
    }
    return (
        <div className='min-h-screen pb-24'>
            <div className='bg-main sticky -top-px z-40'>
                <div className='w-full container mx-auto'>
                    <div className='md:w-2/3 md:py-8 py-4 mx-auto w-full md:px-0 px-4 flex items-center justify-center'>
                        <div className="flex items-center w-full relative bg-teal-900">
                            <label className='text-gray-100 md:px-6 px-4 py-4 flex flex-col gap-1 w-full'>
                                <span className='text-sm hidden md:block'>Destination</span>
                                <input value={searchDestination} onInput={(e)=>setSearchDestination(e.target.value)} type="text" className='text-md font-semibold bg-transparent outline-none placeholder:text-gray-100' placeholder='Search destination' name="" id=""/>
                            </label>
                            <button onClick={searchTours} className='font-semibold mx-3 md:mx-5 hover:bg-teal-400 md:h-12 h-8 md:w-12 w-8 md:min-w-12 min-w-8 text-black bg-teal-300 duration-300 flex items-center justify-center active:scale-95'>
                                <TbSearch className='w-6 h-6 md:w-8 md:h-8'></TbSearch>
                            </button>
                        </div>          
                        <button className='text-md relative md:text-lg flex md:hidden items-center font-semibold px-4 py-4 text-gray-200 duration-300 text-center active:scale-95'>
                            <TbFilter size={24}></TbFilter>
                            <span className='text-xs absolute bottom-3 right-px '>Lọc</span>
                        </button>  
                    </div>
                </div>
                <div className='md:py-3 py-1 shadow-xl px-4 md:px-24 flex items-center justify-center md:gap-6 gap-3 md:top-20 z-50 bg-main border-t border-t-teal-800 '>
                    <button className={`prev-category [&.category-swiper-disabled]:text-gray-500 [&.category-swiper-disabled]:pointer-events-none md:min-w-10 md:w-10 h-10 backdrop-blur-lg flex items-center justify-center md:hover:bg-white md:hover:text-black text-white active:scale-95 duration-300`}>
                        <TbChevronLeft size={24}></TbChevronLeft>
                    </button>
                    <Swiper 
                        breakpoints={
                            {
                                390: {
                                    slidesPerView: 4 ,
                                    slidesPerGroup:4
                                    
                                },
                                768: {
                                    slidesPerView: 7,
                                    slidesPerGroup:7
                                },
                                1024: {
                                    slidesPerView: 12,
                                    slidesPerGroup:12
                                }
                            }
                        } 
                        
                        modules={[Navigation]}
                        className='w-full' 
                        spaceBetween={20}
                        navigation={{
                            nextEl: ".next-category",
                            prevEl: '.prev-category',
                            disabledClass: "category-swiper-disabled"
                        }}
                        >
                        <SwiperSlide>
                            <button onClick={()=>searchToursByCategory("")} className='flex flex-col items-center py-3 justify-center w-full max-w-full group border-b-2 hover:border-b-teal-300 border-transparent duration-300'>
                                <div className='flex items-center justify-center w-8 h-8 bg-teal-300 overflow-hidden p-1 hover:bg-teal-400 duration-300'>
                                    <TbMenuOrder size={44}></TbMenuOrder>
                                </div>
                                <p className='text-gray-100 truncate text-sm mt-2 max-w-full'>Tất cả</p>
                            </button>
                        </SwiperSlide>
                        {categories && categories.map((category,key)=>(
                        <SwiperSlide>
                            <button onClick={()=>searchToursByCategory(category.id)} className='flex flex-col items-center py-3 justify-center w-full max-w-full group border-b-2 hover:border-b-teal-300 border-transparent duration-300' key={key}>
                                <div className='w-8 h-8 bg-teal-300 overflow-hidden p-1 hover:bg-teal-400 duration-300'>
                                    <img src={category.thumbnail} alt="" className='w-full h-full object-contain' />
                                </div>
                                <p className='text-gray-100 truncate text-sm mt-2 max-w-full'>{category.title}</p>
                            </button>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                    <button className={`next-category [&.category-swiper-disabled]:text-gray-500 [&.category-swiper-disabled]:pointer-events-none md:min-w-10 md:w-10 h-10 backdrop-blur-lg flex items-center justify-center md:hover:bg-white md:hover:text-black text-white active:scale-95 duration-300`}>
                        <TbChevronRight size={24}></TbChevronRight>
                    </button>
                    <button className='gap-3 text-md md:text-lg hidden md:flex items-center font-semibold md:px-6 px-3 py-2 text-white hover:bg-black/60 border-2 border-teal-200 duration-300 text-center active:scale-95'>
                        <TbFilter size={24}></TbFilter>
                        <span className='whitespace-nowrap'>Filter</span>
                    </button>
  
                    <div className='gap-3 text-md md:text-lg md:flex hidden items-center font-semibold pl-6 pr-2 py-2 text-white hover:bg-black/60 border-2 border-teal-300 duration-300 text-center'>
                        <span className='whitespace-nowrap'>Gallery</span>
                        <label className='flex cursor-pointer select-none items-center'>
                            <div className='relative'>
                                <input
                                    type='checkbox'
                                    checked={galleryShow}
                                    onChange={handleGalleryChange}
                                    className='sr-only'
                                />
                                <div className='block md:h-7 h-6 w-14 border border-gray-500 focus:border-teal-300 bg-transparent'></div>
                                <div className={` absolute top-1 md:h-5 md:w-5 h-4 w-4 duration-300 ${galleryShow ? "right-1 bg-teal-300" : "left-1 bg-gray-600"}`}></div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>   
            {
                tours.length && <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:px-24 px-4 mt-6">
                {
                    tours.map((tour,key)=>(
                        <div key={key}>
                            <TourCard tour={tour} galleryShow={galleryShow}/>
                        </div>
                    ))
                }
            </div>}
            {loading &&
                <div className='text-xl text-gray-100 mx-auto text-center mt-28 flex flex-col items-center justify-center gap-8'>
                    <div role="status">
                        <svg aria-hidden="true" class="inline w-10 h-10 text-gray-200 animate-spin fill-teal-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                }
            {
                !loading && tours.length===0 && 
                <div className='text-xl text-gray-100 mx-auto text-center mt-24 flex flex-col items-center justify-center gap-8'>
                    <VscEmptyWindow size={120}></VscEmptyWindow>
                    Không tìm thấy tour, vui lòng thử lại
                </div>
            }
            {next && 
            <div className='mx-auto w-full flex items-center justify-center'>
                <button onClick={handleNext} class="hover:bg-black/60 active:scale-95 focus:border-teal-300 mt-12 w-fit py-2 px-6 flex items-center justify-center gap-4 text-gray-300 border border-gray-300 hover:border-teal-300 duration-150" to="/tours">
                    View more tour
                </button>
            </div>}
        </div>
    );
}

export default TourList;
