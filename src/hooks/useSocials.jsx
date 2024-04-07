import React from 'react';
import { TbBrandFacebookFilled, TbBrandInstagram, TbBrandTwitterFilled, TbBrandYoutubeFilled,TbBrandWhatsapp } from 'react-icons/tb';

const useSocials = () => {
    const socials = {
        'facebook': {
            'icon':<TbBrandFacebookFilled size={24}/>,
            'to':'https://www.facebook.com/huong.lanvu87',
            'hoverClass':'hover:bg-blue-600'
        },
        'instagram': {
            'icon':<TbBrandInstagram size={28}/>,
            'to':'#',
            'hoverClass':'after:bg-instagram after:inset-0 after:absolute after:opacity-0 hover:after:opacity-100 after:-z-1'
        },
        'twitter': {
            'icon':<TbBrandTwitterFilled size={24}/>,
            'to':'#',
            'hoverClass':'hover:bg-sky-500'
        },
        'youtube': {
            'icon':<TbBrandYoutubeFilled size={24}/>,
            'to':'#',
            'hoverClass':'hover:bg-red-600'
        },
        'whatsapp': {
            'icon':<TbBrandWhatsapp size={24}/>,
            'to':'https://wa.me/84902168187',
            'hoverClass':'hover:bg-green-600'
        },
    }
    return socials
}

export default useSocials
