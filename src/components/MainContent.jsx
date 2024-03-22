
import React, { useEffect, useState } from 'react';
import WordMapImage from "../assets/images/world-map.png"
import "swiper/css/effect-coverflow";
import 'swiper/css/effect-fade';

import { fromLatLng,setKey } from "react-geocode";  
import HeaderTitle from './section/HeaderTitle';
import MainSection from './section/MainSection';
import Contact from './Contact';
import Footer from './Footer';

setKey("AIzaSyADD-FpmZEjtbI2CY0sIgTmtecl2iqaPNo");


const MainContent = () => {
  
    // const [lat, setLat] = useState(null);
    // const [long, setLong] = useState(null);
    // const geolocationAPI = navigator.geolocation;
  
    // const getUserCoordinates = () => {
    //   if (!geolocationAPI) {
    //     console.log("Geolocation API is not available in your browser!");
    //   } else {
    //     geolocationAPI.getCurrentPosition(
    //       (position) => {
    //         const { coords } = position;
    //         setLat(coords.latitude);
    //         setLong(coords.longitude);
    //         fromLatLng(coords.longitude, coords.longitude)
    //         .then(({ results }) => {
    //             const { lat, lng } = results[0].geometry.location;
    //             console.log(lat, lng);
    //         })
    //         .catch(console.error);
    //       },
    //       (error) => {
    //         console.log("Something went wrong getting your position!");
    //       }
    //     );
    //   }
    // };
    // useEffect(()=>{
    //     getUserCoordinates()
    // },[])
    return (
        <>
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
                    <MainSection.Article/>
                </div>
                <div className='mt-36 relative'>
                    <div className="container m-auto mb-16">
                        <HeaderTitle  title={'Destination to the season'} desciption={'Take a look the best places in the VietNam'}/>
                    </div>
                    <div className="h-screen">
                        <MainSection.Season/>
                    </div>
                </div>
                <div className="container mt-36 mx-auto" id='contact'>
                    <div className="container m-auto mb-16">
                        <HeaderTitle postion={'right'} title={'Contact us'} desciption={'Take a look the best places in the VietNam'}/>
                    </div>
                    <MainSection.Contact></MainSection.Contact>
                </div>
            </div>
            <Footer></Footer>        
        </>
    );
}

export default MainContent;
