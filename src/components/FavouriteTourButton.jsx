import React, { useEffect, useState } from 'react';
import { TbHeart, TbHeartX } from 'react-icons/tb';
import { useLocalStorage } from 'usehooks-ts';
import CustomToast from './CustomToast';
import toast from 'react-hot-toast';

const FavouriteTourButton = ({tourId,className,iconSize}) => {
    const [action,setAction] = useState(null)

    const [tourIdArr, setTourIdArr,removeTourId] = useLocalStorage('favourite_tour', [])
    const removeTourFavourites = ()=>{
        setTourIdArr(tourIdArr.filter(x=>x!=tourId))
        toast.custom((t) => <CustomToast t={t} msg={'Removed tour to favorites'}/>,{duration:3000})
    }
    const addTourFavourites = ()=>{
        setTourIdArr([...tourIdArr.filter(x=>x!=tourId),tourId])
        toast.custom((t) => <CustomToast t={t} msg={'Added tour to favorites'}/>,{duration:3000})
    }

    useEffect(()=>{
        if (tourIdArr.find(function (element) {
            return element === tourId;
        })) {
            setAction('remove')
        }else {
            setAction('add')
        }
    },[tourIdArr])
    return (
        <button onClick={action==='add'?addTourFavourites:removeTourFavourites} className={className || 'text-gray-300 hover:text-teal-300 duration-150' } >
            {action==='add' ? <TbHeart size={iconSize || 24}></TbHeart> : <TbHeartX size={iconSize || 24}></TbHeartX> }
        </button>
    );
}

export default FavouriteTourButton;
