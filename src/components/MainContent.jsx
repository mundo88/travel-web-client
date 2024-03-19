
import React from 'react';
import WordMapImage from "../assets/images/world-map.png"
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';


const MainContent = () => {
    return (
        <div className='bg-main relative h-full pb-32'>
            <div className='absolute inset-0'>
                <img src={WordMapImage} alt="" className='object-contain h-full w-auto opacity-[.03]' />
            </div>
            <div className='container m-auto pt-36 relative'>
               
                <div className='flex items-center gap-12'>
                    <span className='h-16 w-2 bg-teal-500'></span>
                    <div>
                        <div className='uppercase text-teal-300 text-4xl font-bold'>
                            Choose your destination
                        </div>
                        <div className='text-gray-300 text-md' >Take a look the best places in the VietNam</div>
                    </div>
                </div>
                <div className="relative">
                    <button  className='absolute top-1/2 -translate-y-1/2 -left-20 z-10 w-12 h-12 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white hover:text-black text-white active:scale-95 duration-300 bg-white/10'>
                        <TbChevronLeft size={26}></TbChevronLeft>
                    </button>
                    <button  className='absolute top-1/2 -translate-y-1/2 -right-20 z-10 w-12 h-12 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white hover:text-black text-white active:scale-95 duration-300 bg-white/10'>
                        <TbChevronRight size={26}></TbChevronRight>
                    </button>
                    <div className='flex mt-16 -space-x-4'>
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
                <div className='mt-36'>
                    <div className='flex items-center gap-12 justify-end'>
                        <div>
                            <div className='uppercase text-teal-300 text-4xl font-bold'>
                                Featured Packages
                            </div>
                            <div className='text-gray-300 text-md text-right' >Take a look the best places in the VietNam</div>
                        </div>
                        <span className='h-16 w-2 bg-teal-500'></span>
                    </div>
                    <div className='mt-16 grid gap-12 grid-cols-3'>
                        <div className='flex items-end gap-4 w-full aspect-video overflow-hidden group'>
                            <div style={{writingMode:"vertical-rl"}} className='rotate-180 uppercase text-gray-500 text-3xl font-bold'>Pho Co</div>
                            <div className='w-full h-full relative'>
                                <div className='absolute bg-black/60 flex items-center justify-center inset-0 gap-4 opacity-0 group-hover:opacity-100 duration-300'>
                                    <button className='w-fit text-xl font-semibold px-8 py-3 text-white hover:bg-black/60 border-2 border-teal-300 rounded-xl duration-300 text-center active:scale-95'>Chi tiết</button>
                                    <button className='w-fit text-xl font-semibold hover:bg-teal-400 px-8 py-3 text-black bg-teal-300 rounded-xl duration-300 text-center active:scale-95'>Book now</button>
                                </div>
                                <img src="https://mir-s3-cdn-cf.behance.net/projects/404/fa78a4133824639.Y3JvcCwyNjE4LDIwNDgsNiww.png" alt="" className='w-full h-full object-cover'/>
                            </div>
                        </div>
                        <div className='flex items-end gap-4 w-full aspect-video overflow-hidden group'>
                            <div style={{writingMode:"vertical-rl"}} className='rotate-180 uppercase text-gray-500 text-3xl font-bold'>Trang tien</div>
                            <div className='w-full h-full relative'>
                                <div className='absolute bg-black/60 flex items-center justify-center inset-0 gap-4 opacity-0 group-hover:opacity-100 duration-300'>
                                    <button className='w-fit text-xl font-semibold px-8 py-3 text-white hover:bg-black/60 border-2 border-teal-300 rounded-xl duration-300 text-center active:scale-95'>Chi tiết</button>
                                    <button className='w-fit text-xl font-semibold hover:bg-teal-400 px-8 py-3 text-black bg-teal-300 rounded-xl duration-300 text-center active:scale-95'>Book now</button>
                                </div>
                                <img src="https://i.ytimg.com/vi/4yhJmPZjufQ/maxresdefault.jpg" alt="" className='w-full h-full object-cover' />
                            </div>
                        </div>
                        <div className='flex items-end gap-4 w-full aspect-video overflow-hidden group'>
                            <div style={{writingMode:"vertical-rl"}} className='rotate-180 uppercase text-gray-500 text-3xl font-bold'>Ho Guom</div>
                            <div className='w-full h-full relative'>
                                <div className='absolute bg-black/60 flex items-center justify-center inset-0 gap-4 opacity-0 group-hover:opacity-100 duration-300'>
                                    <button className='w-fit text-xl font-semibold px-8 py-3 text-white hover:bg-black/60 border-2 border-teal-300 rounded-xl duration-300 text-center active:scale-95'>Chi tiết</button>
                                    <button className='w-fit text-xl font-semibold hover:bg-teal-400 px-8 py-3 text-black bg-teal-300 rounded-xl duration-300 text-center active:scale-95'>Book now</button>
                                </div>
                                <img src="https://evivatour.com/wp-content/uploads/2021/11/Best-time-to-visit-Vietnam-900x565.jpg" alt="" className='w-full h-full object-cover' />
                            </div>
                        </div>
                        <div className='flex items-end gap-4 w-full aspect-video overflow-hidden group'>
                            <div style={{writingMode:"vertical-rl"}} className='rotate-180 uppercase text-gray-500 text-3xl font-bold'>Sapa</div>
                            <div className='w-full h-full relative'>
                                <div className='absolute bg-black/60 flex items-center justify-center inset-0 gap-4 opacity-0 group-hover:opacity-100 duration-300'>
                                    <button className='w-fit text-xl font-semibold px-8 py-3 text-white hover:bg-black/60 border-2 border-teal-300 rounded-xl duration-300 text-center active:scale-95'>Chi tiết</button>
                                    <button className='w-fit text-xl font-semibold hover:bg-teal-400 px-8 py-3 text-black bg-teal-300 rounded-xl duration-300 text-center active:scale-95'>Book now</button>
                                </div>
                                <img src="https://vietnamhearttravel.com/travel-uploads/travel/2018_12/sapa1-dep.jpg" alt="" className='w-full h-full object-cover'/>
                            </div>
                        </div>
                        <div className='flex items-end gap-4 w-full aspect-video overflow-hidden group'>
                            <div style={{writingMode:"vertical-rl"}} className='rotate-180 uppercase text-gray-500 text-3xl font-bold'>Da lat</div>
                            <div className='w-full h-full relative'>
                                <div className='absolute bg-black/60 flex items-center justify-center inset-0 gap-4 opacity-0 group-hover:opacity-100 duration-300'>
                                    <button className='w-fit text-xl font-semibold px-8 py-3 text-white hover:bg-black/60 border-2 border-teal-300 rounded-xl duration-300 text-center active:scale-95'>Chi tiết</button>
                                    <button className='w-fit text-xl font-semibold hover:bg-teal-400 px-8 py-3 text-black bg-teal-300 rounded-xl duration-300 text-center active:scale-95'>Book now</button>
                                </div>
                                <img src="https://sakos.vn/wp-content/uploads/2023/04/hanh-trinh-kham-pha-da-lat-bang-trai-ngoai-troi-1.png" alt="" className='w-full h-full object-cover' />
                            </div>
                        </div>
                        <div className='flex items-end gap-4 w-full aspect-video overflow-hidden group'>
                            <div style={{writingMode:"vertical-rl"}} className='rotate-180 uppercase text-gray-500 text-3xl font-bold'>Vung tau</div>
                            <div className='w-full h-full relative'>
                                <div className='absolute bg-black/60 flex items-center justify-center inset-0 gap-4 opacity-0 group-hover:opacity-100 duration-300'>
                                    <button className='w-fit text-xl font-semibold px-8 py-3 text-white hover:bg-black/60 border-2 border-teal-300 rounded-xl duration-300 text-center active:scale-95'>Chi tiết</button>
                                    <button className='w-fit text-xl font-semibold hover:bg-teal-400 px-8 py-3 text-black bg-teal-300 rounded-xl duration-300 text-center active:scale-95'>Book now</button>
                                </div>
                                <img src="https://www.vietnamonline.com/media/uploads/froala_editor/images/VNO-Best%20Time%20To%20Visit%20Vung%20Tau1.jpg" alt="" className='w-full h-full object-cover' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;
