import React, { useEffect, useState } from 'react';
import { TourCardFull } from '../components/TourCard';
import { useLocalStorage } from 'usehooks-ts'
import { axiosInstance } from '../service/axiosInstance';

const Favourite = () => {
    const [tourIdArr] = useLocalStorage('favourite_tour', [])
    const [tours,setTours] = useState([])
    useEffect(()=>{
        if (tourIdArr.length > 0) {
            axiosInstance.get('tours/?ids='+tourIdArr.join(",")).then(res=>{
                setTours(res.data.results)
            })
        }
    },[tourIdArr])

    return (
        <div className='min-h-screen pb-24'>
            <h2 className='text-3xl font-bold text-gray-100 mb-2 md:px-0 px-4 text-center w-full mt-12'>Favourites Tours</h2>
            {
                tours.length && <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:px-24 px-4 mt-12 md:mt-24">
                {
                    tours.map(tour=>(
                        <div key={tour.id} className='group relative'>
                            <TourCardFull tour={tour}/>
                        </div>
                    ))
                }
            </div>}
        </div>
    );
}

export default Favourite;
