import React, { useState } from 'react';
import { TbArrowNarrowRight, TbChevronLeft, TbChevronRight, TbPlayerPlayFilled } from 'react-icons/tb';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,EffectFade,EffectCoverflow, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import "swiper/css/effect-coverflow";
import 'swiper/css/effect-fade';
import AssetImg2 from "../../assets/images/asset2.svg"
import AssetImg3 from "../../assets/images/asset3.svg"
import LineImg from "../../assets/images/line.svg"
import {ContactContent } from '../Contact';
import { useEffect } from 'react';
import { axiosInstance }  from "../../service/axiosInstance"
import { Link } from 'react-router-dom';
import ContactForm from '../form/ContactForm';
import { Toaster } from 'react-hot-toast';
import { TourCard } from '../TourCard';

const MainSection = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
}



const MainSectionCity =({children,props})=>{
    const [destinations,setDestinations] = useState([])
    useEffect(() => {
        axiosInstance.get("destinations/?featured=true").then(res=>{
            setDestinations(res.data.results)
        })
        return () => {
        };
    }, []);
    return (
        <div className="relative">
            <button className='prev-city absolute top-1/2 -translate-y-1/2 md:-left-20 left-8 z-10 w-12 h-12 backdrop-blur-lg flex items-center justify-center hover:bg-white hover:text-black text-white active:scale-95 duration-300 bg-white/10'>
                <TbChevronLeft size={26}></TbChevronLeft>
            </button>
            <button  className='next-city absolute top-1/2 -translate-y-1/2 md:-right-20 right-8 z-10 w-12 h-12 backdrop-blur-lg flex items-center justify-center hover:bg-white hover:text-black text-white active:scale-95 duration-300 bg-white/10'>
                <TbChevronRight size={26}></TbChevronRight>
            </button>
            <div className='md:px-0 px-4'>
                <Swiper className='w-full ' 
                        breakpoints={
                            {
                                640: {
                                    slidesPerView: 1  
                                },
                                768: {
                                    slidesPerView: 2  
                                },
                                1024: {
                                    slidesPerView: 4  
                                }
                            }
                        }
                        modules={[Navigation]}
                        navigation={{
                            nextEl: ".next-city",
                            prevEl: ".prev-city",
                            disabledClass: "swiper-disabled"
                        }}>
                    {destinations && destinations.map((destination)=>(
                        <SwiperSlide className=' md:even:mt-16' key={destination.id}>
                            <Link to={"/tours?destination="+destination.id} className='flex flex-col gap-6 w-full overflow-hidden group'>
                                <div className='w-full h-auto aspect-square overflow-hidden shadow-md shadow-black'>
                                    <img src={destination.thumbnail} alt="" className='w-full h-full object-cover' />
                                </div>
                                <p className='text-3xl uppercase text-gray-500 group-hover:text-white text-center duration-300 font-bold truncate px-6'>{destination.name}</p>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}



const MainSectionTour = ({children,props})=>{
    const [tours,setTours]= useState([])
    useEffect(() => {
        axiosInstance.get('tours/?page_size=9&ordering=-id').then(res=>{
            setTours(res.data.results)
        })
        return ()=>{

        }
    }, []);

    return (
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 px-4 md:p-0">
            {tours&& tours.map((tour,key)=>(
                <div key={key}>
                    <TourCard tour={tour}/>
                </div>
            ))}
   
        </div>
    )
}

const MainSectionCountry =()=>{
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <Swiper 
                className='h-full' 
                effect='fade'  
                modules={[EffectFade,Thumbs,FreeMode,Navigation,Autoplay]} 
                loop={true} 
                thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                mousewheel={false}
                navigation={{
                    nextEl: ".next-country",
                    prevEl: ".prev-country",
                    disabledClass: "swiper-disabled"
                }}
                autoplay={{
                    delay: 4000,
                    pauseOnMouseEnter:true
                }}
            >
                <SwiperSlide >
                    <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30 md:to-transparent'>
                    </div>
                    <img className='h-full w-full object-cover' src="https://vietnamtravel.com/images/2023/06/vietnam-travel-featured-image.jpg" alt="" />
                    <div className='absolute h-full top-0 left-0 flex justify-center px-4 md:px-0 md:pl-44 ml-1 z-10 flex-col'>
                        <div className='relative z-10 text-4xl md:text-8xl font-black text-white after:absolute after:top-2 after:-left-2 after:text-[#051214] after:content-[attr(data-title)] after:-z-10 after:opacity-50' >VIETNAM</div>
                        <p className='md:max-w-1/3 md:w-1/3 text-gray-200 text-xs md:text-sm mt-2 mb-12'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <div className='flex items-center gap-4'>
                            <button className="w-fit text-md md:text-xl font-semibold md:px-8 px-4 md:py-3 py-2 text-white hover:bg-black/60 border-2 border-teal-300 duration-300 text-center active:scale-95">Detail</button>
                            <button className="flex items-center gap-2 w-fit text-md md:text-xl font-semibold hover:bg-teal-400 md:px-6 md:py-3 py-2 px-4 text-black bg-teal-300 duration-300 text-center active:scale-95 border-2 border-teal-400">
                                Explore
                                <TbArrowNarrowRight size={28}></TbArrowNarrowRight> 
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30 md:to-transparent tex-center md:text-left'>
                    </div>
                    <img className='h-full w-full object-cover' src="https://a.cdn-hotels.com/gdcs/production29/d372/b70fa24d-b7b9-491a-a67a-8da0857b80a2.jpg" alt="" />
                    <div className='absolute h-full top-0 left-0 flex justify-center px-4 md:px-0 md:pl-44 ml-1 z-10 flex-col'>
                        <div className='relative z-10 text-4xl md:text-8xl font-black text-white'>INDONESIA</div>
                        <p className='md:max-w-1/3 md:w-1/3 text-gray-200 text-xs md:text-sm mt-2 mb-12'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <div className='flex items-center gap-4'>
                            <button className="w-fit text-md md:text-xl font-semibold md:px-8 px-4 md:py-3 py-2 text-white hover:bg-black/60 border-2 border-teal-300 duration-300 text-center active:scale-95">Detail</button>
                            <button className="flex items-center gap-2 w-fit text-md md:text-xl font-semibold hover:bg-teal-400 md:px-6 md:py-3 py-2 px-4 text-black bg-teal-300 duration-300 text-center active:scale-95 border-2 border-teal-400">
                                Explore
                                <TbArrowNarrowRight size={28}></TbArrowNarrowRight> 
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30 md:to-transparent tex-center md:text-left'>
                    </div>
                    <img className='h-full w-full object-cover' src="https://www.kkday.com/vi/blog/wp-content/uploads/Chiang-Mai-Travel-Guide.jpg" alt="" />
                    <div className='absolute h-full top-0 left-0 flex justify-center px-4 md:px-0 md:pl-44 ml-1 z-10 flex-col'>
                        <div className='relative z-10 text-4xl md:text-8xl font-black text-white after:absolute after:top-2 after:-left-2 after:text-[#051214] after:content-[attr(data-title)] after:-z-10 after:opacity-50' >THAILAND</div>
                        <p className='md:max-w-1/3 md:w-1/3 text-gray-200 text-xs md:text-sm mt-2 mb-12'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <div className='flex items-center gap-4'>
                            <button className="w-fit text-md md:text-xl font-semibold md:px-8 px-4 md:py-3 py-2 text-white hover:bg-black/60 border-2 border-teal-300 duration-300 text-center active:scale-95">Detail</button>
                            <button className="flex items-center gap-2 w-fit text-md md:text-xl font-semibold hover:bg-teal-400 md:px-6 md:py-3 py-2 px-4 text-black bg-teal-300 duration-300 text-center active:scale-95 border-2 border-teal-400">
                                Explore
                                <TbArrowNarrowRight size={28}></TbArrowNarrowRight> 
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30 md:to-transparent tex-center md:text-left'>
                    </div>
                    <img className='h-full w-full object-cover' src="https://thriftynomads.com/wp-content/uploads/2018/01/Japan-Mt-Fuji.jpg" alt="" />
                    <div className='absolute h-full top-0 left-0 flex justify-center px-4 md:px-0 md:pl-44 ml-1 z-10 flex-col'>
                        <div className='relative z-10 text-4xl md:text-8xl font-black text-white after:absolute after:top-2 after:-left-2 after:text-[#051214] after:content-[attr(data-title)] after:-z-10 after:opacity-50' >JAPAN</div>
                        <p className='md:max-w-1/3 md:w-1/3 text-gray-200 text-xs md:text-sm mt-2 mb-12'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <div className='flex items-center gap-4'>
                            <button className="w-fit text-md md:text-xl font-semibold md:px-8 px-4 md:py-3 py-2 text-white hover:bg-black/60 border-2 border-teal-300 duration-300 text-center active:scale-95">Detail</button>
                            <button className="flex items-center gap-2 w-fit text-md md:text-xl font-semibold hover:bg-teal-400 md:px-6 md:py-3 py-2 px-4 text-black bg-teal-300 duration-300 text-center active:scale-95 border-2 border-teal-400">
                                Explore
                                <TbArrowNarrowRight size={28}></TbArrowNarrowRight> 
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='absolute top-0 right-0 h-full flex items-center justify-end z-40 md:w-1/2 w-full md:pl-24 pl-0'>
                <div className='absolute md:bottom-64 bottom-24 left-1/2 -translate-x-1/2 flex gap-4 md:ml-24 ml-0'>
                    <button className='prev-country w-12 h-12 backdrop-blur-lg  flex items-center justify-center hover:bg-white hover:text-black text-white active:scale-95 duration-300 bg-white/10'>
                        <TbChevronLeft size={26}></TbChevronLeft>
                    </button>
                    <button className='w-12 h-12 backdrop-blur-lg  flex items-center justify-center hover:bg-white hover:text-black text-white active:scale-95 duration-300 bg-white/10'>
                        <TbPlayerPlayFilled size={26}></TbPlayerPlayFilled>
                    </button>
                    <button className='next-country w-12 h-12 backdrop-blur-lg  flex items-center justify-center hover:bg-white hover:text-black text-white active:scale-95 duration-300 bg-white/10'>
                        <TbChevronRight size={26}></TbChevronRight>
                    </button>
                </div> 
                <div className="hidden md:flex items-center justify-center w-full h-full">
                    <Swiper 
                        className='overflow-hidden h-1/3 ' 
                        onSwiper={setThumbsSwiper}
                        slidesPerView={3}
            
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode,EffectCoverflow, Navigation, Thumbs]}
                        loop={true} 
                        spaceBetween={24} 
            
                        >
                        <SwiperSlide className='group'>
                            <div className=' duration-300 h-full flex flex-col justify-center'>
                                <div className='flex items-center gap-4 mb-4'>
                                    <div className='font-bold text-gray-100 text-2xl'>VIETNAM</div>
                                </div>
                                <div className='h-full w-full overflow-hidden'>
                                    <img className='w-full h-full object-cover ' src="https://hoponworld.com/wp-content/uploads/2021/07/halong-bay-vietnam.jpg" alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='group'>
                            <div className=' duration-300 h-full flex flex-col justify-center'>
                                <div className='flex items-center gap-4 mb-4'>
                                    <div className='font-bold text-gray-100 text-2xl'>INDONESIA</div>
                                </div>
                                <div className='h-full w-full overflow-hidden'>
                                    <img className='w-full h-full object-cover ' src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/revisi-2020/destinations-thumbnail/Bali-Thumbnail.jpg" alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='group'>
                            <div className=' duration-300 h-full flex flex-col justify-center'>
                                <div className='flex items-center gap-4 mb-4'>
                                    <div className='font-bold text-gray-100 text-2xl'>THAILAND</div>
                                </div>
                                <div className='h-full w-full overflow-hidden'>
                                    <img className='w-full h-full object-cover ' src="https://vietnamtouristvn.com/thumbs/670x500x1/upload/product/muang-boran-4-8565.jpg" alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='group'>
                            <div className=' duration-300 h-full flex flex-col justify-center'>
                                <div className='flex items-center gap-4 mb-4'>
                                    <div className='font-bold text-gray-100 text-2xl'>JAPAN</div>
                                </div>
                                <div className='h-full w-full overflow-hidden'>
                                    <img className='w-full h-full object-cover ' src="https://thriftynomads.com/wp-content/uploads/2018/01/Japan-Mt-Fuji.jpg" alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>        
        </>
    )
}

const MainSectionArticle =()=>{
    const [articles,setArticles]= useState([])
    useEffect(() => {
        axiosInstance.get('articles/').then(res=>{
            setArticles(res.data.results)
        })
        return ()=>{
        }
    }, []);
    return (
        <>
            <div className="grid md:grid-cols-2 gap-8 grid-cols-1 px-4">
                {articles&& articles.slice(0,4).map((article,key)=>(
                    key % 2 ===0 ?
                    <div className='flex md:flex-row flex-col' key={article.id}>
                        <div className='w-full h-auto md:h-[450px] md:max-h-[450px] aspect-square md:aspect-auto '>
                            <img src={article.thumbnail} alt="" className='w-full h-full object-cover'/>
                        </div>
                        <div className="w-full p-4 flex flex-col justify-end bg-teal-950 overflow-hidden">
                            <div className='h-full relative md:block hidden'>
                                <img src={AssetImg2} alt="" className='w-2/3 h-auto object-cover absolute -top-12 -right-12' />
                            </div>
                            <div className='text-left w-full h-full flex flex-col justify-end'>
                                <div className='text-md font-bold text-white'>{article.title}</div>
                                <div className="mt-1 mb-4 text-xs line-clamp-2 md:line-clamp-4 md:text-sm text-gray-300">
                                    {article.description}
                                </div>
                                <Link to={"/articles/"+article.id} className='w-full text-md font-semibold px-8 py-2  hover:bg-black/60 text-white duration-300 text-center active:scale-95 border-2 border-teal-400'>View detail</Link>
                            </div>
                        </div>
                    </div>:
                    <>
                        <div className='flex md:flex-row flex-col' key={article.id}>
                            <div className='w-full h-auto md:h-[450px] md:max-h-[450px] aspect-square md:aspect-auto'>
                                <img src={article.thumbnail} alt="" className='w-full h-full object-cover'/>
                            </div>
                            <div className="w-full p-4 flex flex-col justify-start bg-teal-100 overflow-hidden">
                                <div className='text-left w-full h-full flex flex-col justify-start'>
                                    <div className='text-md font-bold text-black'>{article.title}</div>
                                    <div className="mt-1 mb-4 text-xs line-clamp-2 md:line-clamp-4 md:text-sm text-gray-800 ">
                                        {article.description}
                                    </div>
                                    <Link to={"/articles/"+article.id} className='w-full text-md font-semibold px-8 py-2 hover:bg-white/20 text-black duration-300 text-center active:scale-95 border-2 border-teal-400'>View detail</Link>
                                </div>
                                <div className='h-full relative md:block hidden'>
                                    <img src={AssetImg3} alt="" className='w-2/3 h-auto object-cover absolute -bottom-12 -right-12' />
                                </div>
                            </div>
                        </div>
                        <div className='md:col-span-2 hidden md:block'>
                            <img src={LineImg} alt="" />
                        </div>
                    </>
                ))}
            </div>
            <div className='m-auto mt-8 flex justify-center'>
                <Link to={"/articles"} className='w-fit text-md font-semibold px-8 py-2 hover:bg-black/60 text-white duration-300 text-center active:scale-95 border-2 border-teal-400'>
                    /View all
                </Link>
            </div>
        </>
    )
}
const MainSectionSeason = ()=>{
    return (
        <div className='grid md:grid-cols-4 h-full'>
            <div className="h-full overflow-hidden relative group">
                <div className="absolute inset-0 bg-black/40 opacity-100 duration-300"></div>
                <div className='absolute inset-0 flex items-center justify-center'>
                    <div className="md:rotate-180 -rotate-90 uppercase text-gray-500 text-4xl md:text-8xl font-bold group-hover:text-white duration-300" style={{writingMode: "vertical-rl"}}>
                        Spring
                    </div>
                </div>
                <img className='w-full h-full object-cover' src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsX29mZmljZV8yNV93b3Jtc19leWVfdmlld19waG90b19vZl9zdW1tZXJfZmxvd2VyX2ZpZWxkX18wNTkwYzk2Ny0xNDNlLTQyODQtYTMxMS05ODhlZWU5YmI2ZjhfMS5qcGc.jpg" alt="" />
            </div>
            <div className="h-full overflow-hidden relative group">
                <div className="absolute inset-0 bg-black/40 group-hover:opacity-0 opacity-100 duration-300"></div>
                <div className='absolute inset-0 flex items-center justify-center'>
                    <div className="md:rotate-180 -rotate-90 uppercase text-gray-500 text-4xl md:text-8xl font-bold group-hover:text-white duration-300" style={{writingMode: "vertical-rl"}}>
                        Summer
                    </div>
                </div>
                <img className='w-full h-full object-cover' src="https://e1.pxfuel.com/desktop-wallpaper/643/754/desktop-wallpaper-summer-aesthetic-iphone-summer-aesthetic-mobile.jpg" alt="" />
            </div>
            <div className="h-full overflow-hidden relative group">
                <div className="absolute inset-0 bg-black/40 group-hover:opacity-0 opacity-100 duration-300"></div>
                <div className='absolute inset-0 flex items-center justify-center'>
                    <div className="md:rotate-180 -rotate-90 uppercase text-gray-500 text-4xl md:text-8xl font-bold group-hover:text-white duration-300" style={{writingMode: "vertical-rl"}}>
                        Autumn
                    </div>
                </div>
                <img className='w-full h-full object-cover' src="https://64.media.tumblr.com/a264729b60d856261d35a2d0cbb58cb4/afea46ee5e650c99-88/s2048x3072/88d6c65197c97d363e229fd268398c5256cbbc6e.jpg" alt="" />
            </div>
            <div className="h-full overflow-hidden relative group">
                <div className="absolute inset-0 bg-black/40 group-hover:opacity-0 opacity-100 duration-300"></div>
                <div className='absolute inset-0 flex items-center justify-center'>
                    <div className="md:rotate-180 -rotate-90 uppercase text-gray-500 text-4xl md:text-8xl font-bold group-hover:text-white duration-300" style={{writingMode: "vertical-rl"}}>
                        Winter
                    </div>
                </div>
                <img className='w-full h-full object-cover' src="https://wallpapercave.com/wp/wp8282322.jpg" alt="" />
            </div>
        </div>    
    )
}


const MainSectionContact = ({children})=>{
    const [loading,setLoading] = useState(false)
    const onSubmit =(data,handleSuccess)=>{
        setLoading(true)
        axiosInstance.post('contacts/',data).then(res=>{
            handleSuccess(`Hi ${res.data.username}, thank for contacting us.`)
            setLoading(false)
        }).catch(res=>{
            console.log(res)
            setLoading(false)
        })
    }
    return (
        <>
            <div className="grid md:grid-cols-2 md:gap-24 gap-8 items-center">
                <div className="flex items-center relative w-full overflow-hidden">
                    <ContactContent/>
                </div>
                <div className='flex flex-col justify-between pt-0 px-4 md:px-0 md:pt-12'>
                    <ContactForm onSubmit={onSubmit} loading={loading}/>
                </div>
            </div>
            <Toaster></Toaster>
        </>
    )
}

MainSection.City = MainSectionCity
MainSection.Tour = MainSectionTour
MainSection.Country = MainSectionCountry
MainSection.Article = MainSectionArticle
MainSection.Season = MainSectionSeason
MainSection.Contact = MainSectionContact

export default MainSection;
