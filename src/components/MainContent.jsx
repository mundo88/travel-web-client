
import React, { useEffect, useState } from 'react';
import WordMapImage from "../assets/images/world-map.png"
import { TbArrowNarrowRight, TbChevronLeft, TbChevronRight, TbPlayerPlayFilled} from 'react-icons/tb';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, EffectFade,EffectCoverflow } from 'swiper/modules';
import "swiper/css/effect-coverflow";
import 'swiper/css/effect-fade';
import AssetImg2 from "../assets/images/asset2.svg"
import AssetImg3 from "../assets/images/asset3.svg"
import AssetImg5 from "../assets/images/asset5.svg"
import AssetImg7 from "../assets/images/asset7.svg"
import LineImg from "../assets/images/line.svg"
import ContactImg from "../assets/images/contact-svg.svg"
import { fromLatLng,setKey } from "react-geocode";  
import HeaderTitle from './section/HeaderTitle';
import MainSection from './section/MainSection';
import useSocials from '../hooks/useSocials';

setKey("AIzaSyADD-FpmZEjtbI2CY0sIgTmtecl2iqaPNo");


const MainContent = () => {
  
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const geolocationAPI = navigator.geolocation;
    const socials = useSocials()
    const getUserCoordinates = () => {
      if (!geolocationAPI) {
        console.log("Geolocation API is not available in your browser!");
      } else {
        geolocationAPI.getCurrentPosition(
          (position) => {
            const { coords } = position;
            setLat(coords.latitude);
            setLong(coords.longitude);
            fromLatLng(coords.longitude, coords.longitude)
            .then(({ results }) => {
                const { lat, lng } = results[0].geometry.location;
                console.log(lat, lng);
            })
            .catch(console.error);
          },
          (error) => {
            console.log("Something went wrong getting your position!");
          }
        );
      }
    };
    useEffect(()=>{
        getUserCoordinates()
    },[])
    return (
        <div className='bg-main relative h-full pb-32'>
            <div className="relative">
                <div className='absolute inset-0'>
                    <img src={WordMapImage} alt="" className='object-contain h-full w-auto opacity-[.03]' />
                </div>
                <div className='container m-auto pt-16 relative'>
                    <HeaderTitle title={'Choose your destination'} desciption={'Take a look the best places in the VietNam'}/>
                    <div className="relative">
                        
                        <div className="mt-16">
                            <MainSection.City></MainSection.City>
                        </div>
                    </div>
                    <div className='mt-36'>
                        <HeaderTitle postion={'right'} title={'Featuteal Packages'} desciption={'Take a look the best places in the VietNam'}/>
                        <div className='mt-16 pb-36'>
                            <MainSection.Site/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative'>
                <div className="m-auto mb-16 container">
                    <HeaderTitle title={'Best place to explore'} desciption={'Take a look the best places in the VietNam'}/>
                </div>
                <div className='h-screen'>
                    <MainSection.Country/>
                </div>
            </div>
            <div className="container mt-36 mx-auto">
                <div className="mb-16">
                    <HeaderTitle postion={'right'} title={'Experience in trips'} desciption={'Take a look the best places in the VietNam'}/>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div className='flex'>
                        <div className='w-full max-h-[450px]'>
                            <img src="https://images.pexels.com/photos/2108813/pexels-photo-2108813.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-full h-full object-cover'/>
                        </div>
                        <div className="w-full p-4 flex flex-col justify-end bg-teal-950 overflow-hidden">
                            <div className='h-full relative'>
                                <img src={AssetImg2} alt="" className='w-2/3 h-auto object-cover absolute -top-12 -right-12' />
                            </div>
                            <div className='text-left w-full h-full flex flex-col justify-end'>
                                <div className='text-md font-bold text-white'>Evening Bangkok cruise</div>
                                <div className="mt-1 mb-4 text-sm text-gray-300">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                                <button className='w-full text-md font-semibold px-8 py-2  hover:bg-black/60 text-white duration-300 text-center active:scale-95 border-2 border-teal-400'>View detail</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-full max-h-[450px]'>
                            <img src="https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-full h-full object-cover'/>
                        </div>
                        <div className="w-full p-4 flex flex-col justify-start bg-teal-100 overflow-hidden">
                            <div className='text-left w-full h-full flex flex-col justify-start'>
                                <div className='text-md font-bold text-black'>Evening Bangkok cruise</div>
                                <div className="mt-1 mb-4 text-sm text-gray-800">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                                <button className='w-full text-md font-semibold px-8 py-2 hover:bg-white/20 text-black duration-300 text-center active:scale-95 border-2 border-teal-400'>View detail</button>
                            </div>
                            <div className='h-full relative'>
                                <img src={AssetImg3} alt="" className='w-2/3 h-auto object-cover absolute -bottom-12 -right-12' />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <img src={LineImg} alt="" />
                    </div>
                    <div className='flex'>
                        <div className='w-full max-h-[450px]'>
                            <img src="https://images.pexels.com/photos/2162891/pexels-photo-2162891.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-full h-full object-cover'/>
                        </div>
                        <div className="w-full p-4 flex flex-col justify-start bg-teal-100 overflow-hidden">
                            <div className='text-left w-full h-full flex flex-col justify-start'>
                                <div className='text-md font-bold text-black'>Evening Bangkok cruise</div>
                                <div className="mt-1 mb-4 text-sm text-gray-800">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                                <button className='w-full text-md font-semibold px-8 py-2 hover:bg-white/20 text-black duration-300 text-center active:scale-95 border-2 border-teal-400'>View detail</button>
                            </div>
                            <div className='h-full relative'>
                                <img src={AssetImg7} alt="" className='w-2/3 h-auto object-cover absolute -bottom-12 -right-12' />
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-full max-h-[450px]'>
                            <img src="https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-full h-full object-cover'/>
                        </div>
                        <div className="w-full p-4 flex flex-col justify-end bg-teal-950 overflow-hidden">
                            <div className='h-full relative'>
                                <img src={AssetImg5} alt="" className='w-2/3 h-auto object-cover absolute -top-12 -right-12' />
                            </div>
                            <div className='text-left w-full h-full flex flex-col justify-end'>
                                <div className='text-md font-bold text-white'>Evening Bangkok cruise</div>
                                <div className="mt-1 mb-4 text-sm text-gray-300">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                                <button className='w-full text-md font-semibold px-8 py-2 hover:bg-black/60 text-white duration-300 text-center active:scale-95 border-2 border-teal-400'>View detail</button>
                            </div>
                        </div>
                    </div>
                  
                </div>
                <div className='m-auto mt-8 flex justify-center'>
                     <button className='w-fit text-md font-semibold px-8 py-2 hover:bg-black/60 text-white duration-300 text-center active:scale-95 border-2 border-teal-400'>
                        /View all
                     </button>
                </div>
            </div>
            <div className='mt-36 relative'>
                <div className="container m-auto mb-16">
                    <HeaderTitle  title={'Destination to the season'} desciption={'Take a look the best places in the VietNam'}/>
                </div>
                <div className='grid grid-cols-4 h-screen'>
                    <div className="h-full overflow-hidden relative group">
                        <div className="absolute inset-0 bg-black/40 opacity-100 duration-300"></div>
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <div className="rotate-180 uppercase text-gray-500 text-8xl font-bold group-hover:text-white duration-300" style={{writingMode: "vertical-rl"}}>
                                Spring
                            </div>
                        </div>
                        <img className='w-full h-full object-cover' src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsX29mZmljZV8yNV93b3Jtc19leWVfdmlld19waG90b19vZl9zdW1tZXJfZmxvd2VyX2ZpZWxkX18wNTkwYzk2Ny0xNDNlLTQyODQtYTMxMS05ODhlZWU5YmI2ZjhfMS5qcGc.jpg" alt="" />
                    </div>
                    <div className="h-full overflow-hidden relative group">
                         <div className="absolute inset-0 bg-black/40 group-hover:opacity-0 opacity-100 duration-300"></div>
                         <div className='absolute inset-0 flex items-center justify-center'>
                            <div className="rotate-180 uppercase text-gray-500 text-8xl font-bold group-hover:text-white duration-300" style={{writingMode: "vertical-rl"}}>
                                Summer
                            </div>
                         </div>
                        <img className='w-full h-full object-cover' src="https://e1.pxfuel.com/desktop-wallpaper/643/754/desktop-wallpaper-summer-aesthetic-iphone-summer-aesthetic-mobile.jpg" alt="" />
                    </div>
                    <div className="h-full overflow-hidden relative group">
                         <div className="absolute inset-0 bg-black/40 group-hover:opacity-0 opacity-100 duration-300"></div>
                         <div className='absolute inset-0 flex items-center justify-center'>
                            <div className="rotate-180 uppercase text-gray-500 text-8xl font-bold group-hover:text-white duration-300" style={{writingMode: "vertical-rl"}}>
                                Autumn
                            </div>
                         </div>
                        <img className='w-full h-full object-cover' src="https://64.media.tumblr.com/a264729b60d856261d35a2d0cbb58cb4/afea46ee5e650c99-88/s2048x3072/88d6c65197c97d363e229fd268398c5256cbbc6e.jpg" alt="" />
                    </div>
                    <div className="h-full overflow-hidden relative group">
                         <div className="absolute inset-0 bg-black/40 group-hover:opacity-0 opacity-100 duration-300"></div>
                         <div className='absolute inset-0 flex items-center justify-center'>
                            <div className="rotate-180 uppercase text-gray-500 text-8xl font-bold group-hover:text-white duration-300" style={{writingMode: "vertical-rl"}}>
                                Winter
                            </div>
                         </div>
                        <img className='w-full h-full object-cover' src="https://wallpapercave.com/wp/wp8282322.jpg" alt="" />
                    </div>
                </div>          
            </div>
            <div className="container mt-36 mx-auto">
                <div className="container m-auto mb-16">
                    <HeaderTitle postion={'right'} title={'Contact us'} desciption={'Take a look the best places in the VietNam'}/>
                </div>
                <div className="grid grid-cols-2 gap-24">
                    <div className="flex items-center relative">
                        <div className='relative pt-36 overflow-hidden pr-12'>
                            <div className='w-full absolute top-0 right-0'>
                                <img src={ContactImg} alt=""  />
                            </div>
                            <div className='relative bg-main pt-4'>
                                <div className="text-white text-7xl font-bold font-serif">
                                    We'd love to hear your thoughts
                                </div>
                                <div className='mt-4 text-xl text-gray-300'>
                                    Tell us about your vision: which challanges are you facing? We'd love to stay in touch with you, so we are always ready to answer any question that interests you.
                                </div>
                                <p className='mt-8 text-white uppercase font-semibold mb-2 text-xl'>May tour Joint Stock company</p>
                                <div className='flex gap-12 '>
                                    <div className='space-y-2'>
                                        <p className='text-white uppercase font-semibold'>Address</p>
                                        <p className='text-gray-300'> No. 105, House 381, Lane 379 Minh Khai, Vinh Tuy Ward, Hai Ba Trung District, Hanoi City, Vietnam </p>
                                    </div>
                                    <div className='space-y-2'>
                                        <p className='text-white uppercase font-semibold'>PHONE</p>
                                        <p className='text-gray-300'>(+84) 902168187</p>
                                    </div>
                                    <div className='space-y-2'>
                                        <p className='text-white uppercase font-semibold'>EMAIL</p>
                                        <p  className='text-gray-300'>contact@maytour.com</p>
                                    </div>
                                </div>
                                <div className="mt-8 flex items-center gap-6">
                                    {Object.keys(socials).map((key,i)=>(
                                        <button key={i} className='w-12 h-12 border-gray-500 border-2 flex items-center justify-center text-gray-300 hover:text-teal-300 hover:border-teal-300 active:-translate-y-1 duration-300'>
                                            {socials[key].icon}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between pt-12'>
                        <div>
                            <label htmlFor='username' className='text-gray-300'>What's your name?</label>
                            <input type="text" name="username" id="username" className='py-2 border-b-2 border-b-gray-500 w-full bg-transparent outline-none text-white text-3xl focus:border-teal-300 duration-300 mt-2 placeholder:text-gray-500 placeholder:text-2xl' placeholder='Marvin McKinney' />
                        </div>                   
                        <div>
                            <label htmlFor='email' className='text-gray-300'>What's your email?</label>
                            <input type="text" name="email" id="email" className='py-2 border-b-2 border-b-gray-500 w-full bg-transparent outline-none text-white text-3xl focus:border-teal-300 duration-300 mt-2 placeholder:text-gray-500 placeholder:text-2xl' placeholder='marvin_mckinney@gmail.com'/>
                        </div>                   
                        <div>
                            <label htmlFor='share' className='text-gray-300'>Share your thoughts</label>
                            <input type="text" name="share" id="share" className='py-2 border-b-2 border-b-gray-500 w-full bg-transparent outline-none text-white text-3xl focus:border-teal-300 duration-300 mt-2 placeholder:text-gray-500 placeholder:text-2xl' placeholder="Hi, i' love o ask you..."/>
                        </div>    
                        <div className='pt-4 flex justify-end items-center'>
                            <button className="flex flex-col items-center gap-2 w-fit text-xl font-semibold hover:bg-teal-400 px-6 py-3 text-black bg-teal-300 duration-300 text-center active:scale-95 border-2 border-teal-400">
                                SEND
                                <TbArrowNarrowRight size={28}></TbArrowNarrowRight> 
                            </button>
                        </div>               
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;
