import React, { useState } from 'react';
import { TbArrowNarrowRight, TbChevronLeft, TbChevronRight, TbPlayerPlayFilled } from 'react-icons/tb';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, EffectFade,EffectCoverflow } from 'swiper/modules';
import "swiper/css/effect-coverflow";
import 'swiper/css/effect-fade';

const MainSection = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
}

const MainSectionCity =({children,props})=>{
    return (
        <div className="relative">
            <button  className='absolute top-1/2 -translate-y-1/2 -left-20 z-10 w-12 h-12 backdrop-blur-lg flex items-center justify-center hover:bg-white hover:text-black text-white active:scale-95 duration-300 bg-white/10'>
                <TbChevronLeft size={26}></TbChevronLeft>
            </button>
            <button  className='absolute top-1/2 -translate-y-1/2 -right-20 z-10 w-12 h-12 backdrop-blur-lg flex items-center justify-center hover:bg-white hover:text-black text-white active:scale-95 duration-300 bg-white/10'>
                <TbChevronRight size={26}></TbChevronRight>
            </button>
            <div className='flex -space-x-4'>
                <div className='flex flex-col gap-6 w-full overflow-hidden even:mt-16 group'>
                    <div className='w-full aspect-square overflow-hidden shadow-md shadow-black'>
                        <img src="https://vietnam.travel/sites/default/files/styles/large/public/2022-05/shutterstock_1303493764_1.jpg?itok=AhlENvUY" alt="" className='w-full h-full object-cover' />
                    </div>
                    <p className='uppercase text-3xl text-gray-500 group-hover:text-white text-center duration-300 font-bold'>Hoi An</p>
                </div>
                <div className='flex flex-col gap-6 w-full overflow-hidden even:mt-16 group'>
                    <div className='w-full aspect-square overflow-hidden shadow-md shadow-black'>
                        <img src="https://statics.vinpearl.com/Vietnam-travel-20_1689353358.jpg" alt="" className='w-full h-full object-cover' />
                    </div>
                    <p className='uppercase text-3xl text-gray-500 group-hover:text-white text-center duration-300 font-bold'>Fansipan</p>
                </div>
                <div className='flex flex-col gap-6 w-full overflow-hidden even:mt-16 group'>
                    <div className='w-full aspect-square overflow-hidden shadow-md shadow-black'>
                        <img src="https://static.toiimg.com/photo/101545435.cms" alt="" className='w-full h-full object-cover' />
                    </div>
                    <p className='uppercase text-3xl text-gray-500 group-hover:text-white text-center duration-300 font-bold'>Ha Long Bay</p>
                </div>
                <div className='flex flex-col gap-6 w-full overflow-hidden even:mt-16 group'>
                    <div className='w-full aspect-square overflow-hidden shadow-md shadow-black'>
                        <img src="https://www.travelandleisure.com/thmb/0yHeWZeBbUMSBeOrUq5kSV00o4w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-fisherman-in-vietnam-WHENVIETNAM0124-53bac1777bc5497390ccc317e9c71295.jpg" alt="" className='w-full h-full object-cover' />
                    </div>
                    <p className='uppercase text-3xl text-gray-500 group-hover:text-white text-center duration-300 font-bold'>Trang An</p>
                </div>
            </div>
        </div>
    )
}


const SiteCard = ({thumb,siteName})=>{
    return(
        <div className='flex items-end gap-4 w-full aspect-video overflow-hidden group'>
            <div style={{writingMode:"vertical-rl"}} className='rotate-180 uppercase text-gray-500 text-3xl font-bold group-hover:text-white duration-300'>{siteName}</div>
            <div className='w-full h-full relative'>
                <div className='absolute bg-black/60 flex items-center justify-center inset-0 gap-4 opacity-0 group-hover:opacity-100 duration-300'>
                    <button className='w-fit text-xl font-semibold px-8 py-3 text-white hover:bg-black/60 border-2 border-teal-300 duration-300 text-center active:scale-95'>Chi tiết</button>
                    <button className='w-fit text-xl font-semibold hover:bg-teal-400 px-8 py-3 text-black bg-teal-300 duration-300 text-center active:scale-95 border-2 border-teal-400'>Book now</button>
                </div>
                <img src={thumb} alt="" className='w-full h-full object-cover'/>
            </div>
        </div>
    )
}
const MainSectionSite = ({children,props})=>{
    const sites = [
        {
            siteName:"NINH BINH",
            thumb:"https://mir-s3-cdn-cf.behance.net/projects/404/fa78a4133824639.Y3JvcCwyNjE4LDIwNDgsNiww.png"
        },
        {
            siteName:"TRANG TIEN",
            thumb:"https://i.ytimg.com/vi/4yhJmPZjufQ/maxresdefault.jpg"
        },
        {
            siteName:"HA NOI",
            thumb:"https://evivatour.com/wp-content/uploads/2021/11/Best-time-to-visit-Vietnam-900x565.jpg"
        },
        {
            siteName:"LAO CAI",
            thumb:"https://vietnamhearttravel.com/travel-uploads/travel/2018_12/sapa1-dep.jpg"
        },
        {
            siteName:"DALAT",
            thumb:"https://sakos.vn/wp-content/uploads/2023/04/hanh-trinh-kham-pha-da-lat-bang-trai-ngoai-troi-1.png"
        },
        {
            siteName:"MOC CHAU",
            thumb:"https://booking.pystravel.vn/uploads/posts/albums/6315/b927abb7ac0194ba111214afc5919185.jpg"
        },
    ]
    return (
        <div className="grid gap-12 grid-cols-3 ">
            {sites.map((site,key)=>(
                <div key={key}>
                    <SiteCard thumb={site.thumb} siteName={site.siteName}/>
                </div>
            ))}
   
        </div>
    )
}

const MainSectionCountry =()=>{
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);
    return (
        <>
            <Swiper 
                className='h-full' 
                effect='fade'  
                modules={[EffectFade,Controller]} 
                loop={true} 
                onSwiper={setFirstSwiper} 
                mousewheel={false}
                controller={{ control: secondSwiper }}

            >
                <SwiperSlide >
                    <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent'>
                    </div>
                    <img className='h-full w-full object-cover' src="https://vietnamtravel.com/images/2023/06/vietnam-travel-featured-image.jpg" alt="" />
                    <div className='absolute h-full top-0 left-0 flex justify-center pl-44 ml-1 z-10 flex-col'>
                        <div className='relative z-10 text-8xl font-black text-white after:absolute after:top-2 after:-left-2 after:text-[#051214] after:content-[attr(data-title)] after:-z-10 after:opacity-50' >VIETNAM</div>
                        <p className='max-w-1/3 w-1/3 text-gray-200 text-sm mt-2 mb-12'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <div className='flex items-center gap-4'>
                            <button className="w-fit text-xl font-semibold px-8 py-3 text-white hover:bg-black/60 border-2 border-teal-300 duration-300 text-center active:scale-95">Detail</button>
                            <button className="flex items-center gap-2 w-fit text-xl font-semibold hover:bg-teal-400 px-6 py-3 text-black bg-teal-300 duration-300 text-center active:scale-95 border-2 border-teal-400">
                                Explore
                                <TbArrowNarrowRight size={28}></TbArrowNarrowRight> 
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent'>
                    </div>
                    <img className='h-full w-full object-cover' src="https://a.cdn-hotels.com/gdcs/production29/d372/b70fa24d-b7b9-491a-a67a-8da0857b80a2.jpg" alt="" />
                    <div className='absolute h-full top-0 left-0 flex justify-center pl-44 ml-1 z-10 flex-col'>
                        <div className='relative z-10 text-8xl font-black text-white '>INDONESIA</div>
                        <p className='max-w-1/3 w-1/3 text-gray-200 text-sm mt-2 mb-12'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <div className='flex items-center gap-4'>
                            <button className="w-fit text-xl font-semibold px-8 py-3 text-white hover:bg-black/60 border-2 border-teal-300 duration-300 text-center active:scale-95">Detail</button>
                            <button className="flex items-center gap-2 w-fit text-xl font-semibold hover:bg-teal-400 px-6 py-3 text-black bg-teal-300 duration-300 text-center active:scale-95 border-2 border-teal-400">
                                Explore
                                <TbArrowNarrowRight size={28}></TbArrowNarrowRight> 
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent'>
                    </div>
                    <img className='h-full w-full object-cover' src="https://www.kkday.com/vi/blog/wp-content/uploads/Chiang-Mai-Travel-Guide.jpg" alt="" />
                    <div className='absolute h-full top-0 left-0 flex justify-center pl-44 ml-1 z-10 flex-col'>
                        <div className='relative z-10 text-8xl font-black text-white after:absolute after:top-2 after:-left-2 after:text-[#051214] after:content-[attr(data-title)] after:-z-10 after:opacity-50' >THAILAND</div>
                        <p className='max-w-1/3 w-1/3 text-gray-200 text-sm mt-2 mb-12'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <div className='flex items-center gap-4'>
                            <button className="w-fit text-xl font-semibold px-8 py-3 text-white hover:bg-black/60 border-2 border-teal-300 duration-300 text-center active:scale-95">Detail</button>
                            <button className="flex items-center gap-2 w-fit text-xl font-semibold hover:bg-teal-400 px-6 py-3 text-black bg-teal-300 duration-300 text-center active:scale-95 border-2 border-teal-400">
                                Explore
                                <TbArrowNarrowRight size={28}></TbArrowNarrowRight> 
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent'>
                    </div>
                    <img className='h-full w-full object-cover' src="https://thriftynomads.com/wp-content/uploads/2018/01/Japan-Mt-Fuji.jpg" alt="" />
                    <div className='absolute h-full top-0 left-0 flex justify-center pl-44 ml-1 z-10 flex-col'>
                        <div className='relative z-10 text-8xl font-black text-white after:absolute after:top-2 after:-left-2 after:text-[#051214] after:content-[attr(data-title)] after:-z-10 after:opacity-50' >JAPAN</div>
                        <p className='max-w-1/3 w-1/3 text-gray-200 text-sm mt-2 mb-12'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <div className='flex items-center gap-4'>
                            <button className="w-fit text-xl font-semibold px-8 py-3 text-white hover:bg-black/60 border-2 border-teal-300 duration-300 text-center active:scale-95">Detail</button>
                            <button className="flex items-center gap-2 w-fit text-xl font-semibold hover:bg-teal-400 px-6 py-3 text-black bg-teal-300 duration-300 text-center active:scale-95 border-2 border-teal-400">
                                Explore
                                <TbArrowNarrowRight size={28}></TbArrowNarrowRight> 
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
            <div className='absolute top-0 right-0 h-full flex items-center justify-end z-40 w-1/2 pl-24'>
                <div className='absolute bottom-36 left-1/2 -translate-x-1/2 flex gap-4 ml-24'>
                    <button className='w-12 h-12 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white hover:text-black text-white active:scale-95 duration-300 bg-white/10'>
                        <TbChevronLeft size={26}></TbChevronLeft>
                    </button>
                    <button className='w-12 h-12 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white hover:text-black text-white active:scale-95 duration-300 bg-white/10'>
                        <TbPlayerPlayFilled size={26}></TbPlayerPlayFilled>
                    </button>
                    <button  className='w-12 h-12 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white hover:text-black text-white active:scale-95 duration-300 bg-white/10'>
                        <TbChevronRight size={26}></TbChevronRight>
                    </button>
                </div> 
                <Swiper 
                    className='overflow-hidden h-1/2' 
                    slidesPerView={3} 
                    loop={true} 
                    spaceBetween={24} 
                    modules={[Controller,EffectCoverflow]} 
                    onSwiper={setSecondSwiper} 
                    controller={{ control: firstSwiper }}
                    slidesPerGroup={1}
                    effect="coverflow"
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 500,
                        modifier: 1,
                        slideShadows: false
                    }}
                    >
                    <SwiperSlide className='group'>
                        <div className=' duration-300 h-full flex flex-col justify-center'>
                            <div className='flex items-center gap-4 mb-4'>
                                <div className='font-bold group-[&.swiper-slide-active]:text-white text-gray-300 text-2xl'>VIETNAM</div>
                            </div>
                            <div className='h-full w-full overflow-hidden'>
                                <img className='w-full h-full object-cover ' src="https://hoponworld.com/wp-content/uploads/2021/07/halong-bay-vietnam.jpg" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='group'>
                        <div className=' duration-300 h-full flex flex-col justify-center'>
                            <div className='flex items-center gap-4 mb-4'>
                                <div className='font-bold group-[&.swiper-slide-active]:text-white text-gray-300 text-2xl'>INDONESIA</div>
                            </div>
                            <div className='h-full w-full overflow-hidden'>
                                <img className='w-full h-full object-cover ' src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/revisi-2020/destinations-thumbnail/Bali-Thumbnail.jpg" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='group'>
                        <div className=' duration-300 h-full flex flex-col justify-center'>
                            <div className='flex items-center gap-4 mb-4'>
                                <div className='font-bold group-[&.swiper-slide-active]:text-white text-gray-300 text-2xl'>THAILAND</div>
                            </div>
                            <div className='h-full w-full overflow-hidden'>
                                <img className='w-full h-full object-cover ' src="https://vietnamtouristvn.com/thumbs/670x500x1/upload/product/muang-boran-4-8565.jpg" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='group'>
                        <div className=' duration-300 h-full flex flex-col justify-center'>
                            <div className='flex items-center gap-4 mb-4'>
                                <div className='font-bold group-[&.swiper-slide-active]:text-white text-gray-300 text-2xl'>JAPAN</div>
                        
                            </div>
                            <div className='h-full w-full overflow-hidden'>
                                <img className='w-full h-full object-cover ' src="https://thriftynomads.com/wp-content/uploads/2018/01/Japan-Mt-Fuji.jpg" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>        
        </>
    )
}

MainSection.City = MainSectionCity
MainSection.Site = MainSectionSite
MainSection.Country = MainSectionCountry

export default MainSection;
