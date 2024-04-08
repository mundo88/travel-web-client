import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, EffectFade, Navigation, Thumbs } from 'swiper/modules';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';
import 'swiper/css/effect-fade';

const GalleryImage = ({attachments}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);

    return (
        <div className='relative w-screen h-screen flex flex-col items-center justify-center overflow-hidden gap-4'>
            <div className="absolute inset-0">
                <Swiper
                    thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                    modules={[Thumbs,Controller,EffectFade]}
                    onSwiper={setFirstSwiper}
                    controller={{ control: secondSwiper && !secondSwiper.destroyed ? secondSwiper : null }}
                    className='h-full'
                    effect = {'fade'}
                >
                    {attachments.map((attachment,key)=>(
                        <SwiperSlide className='w-full h-full' key={key}>
                            <img alt='' className='h-full w-full object-cover' src={attachment.file} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="absolute backdrop-blur-xl inset-0 z-20 bg-black/60"></div>
            </div>
            <div className="flex items-center justify-center overflow-hidden flex-1 w-full h-full relative z-20">
                <div className='w-full flex items-center justify-center h-full'>
                    <div className="h-full px-4 flex items-center justify-center">
                        <button className='swiper-button prev w-12 h-12 backdrop-blur-lg  flex items-center justify-center hover:bg-white hover:text-black text-white active:scale-95 duration-300 bg-white/10'>
                            <TbChevronLeft size={26}></TbChevronLeft>
                        </button>
                    </div>
                    <Swiper
                        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                        modules={[Thumbs,Controller,Navigation]}
                        className='h-full'
                        onSwiper={setSecondSwiper}
                        navigation={{
                            nextEl: ".next",
                            prevEl: ".prev",
                            disabledClass: "swiper-disabled"
                        }}
                        controller={{ control: firstSwiper && !firstSwiper.destroyed ? firstSwiper : null }}
                    >
                        {attachments.map((attachment,key)=>(
                            <SwiperSlide className='w-full h-full'>
                                <div className="flex items-center justify-center w-full h-full">
                                    <img alt='' className='h-full w-full object-contain' src={attachment.file} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="h-full px-4 flex items-center justify-center">
                        <button className='swiper-button next w-12 h-12 backdrop-blur-lg  flex items-center justify-center hover:bg-white hover:text-black text-white active:scale-95 duration-300 bg-white/10'>
                            <TbChevronRight size={26}></TbChevronRight>
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full overflow-hidden flex items-center justify-center pb-4 relative z-20">
                <div className='container m-auto flex items-center justify-center h-20'>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        slidesPerView={attachments.length}
                        modules={[ Thumbs]}
                        className='w-full h-full'
                        spaceBetween={10}
                        centerInsufficientSlide={true}
                    >
                        {attachments.map((attachment,key)=>(
                            <SwiperSlide className='w-full h-full'>
                                <img alt='' className='h-full w-full object-cover' src={attachment.file} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default GalleryImage;
