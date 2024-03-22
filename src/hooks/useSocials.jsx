import React from 'react';
import { TbBrandFacebookFilled, TbBrandInstagram, TbBrandLinkedin, TbBrandTwitterFilled, TbBrandYoutubeFilled } from 'react-icons/tb';

const useSocials = () => {
    const socials = {
        'facebook': {
            'icon':<TbBrandFacebookFilled size={26}/>,
            'url':'https://facebook.com/me'
        },
        'instagram': {
            'icon':<TbBrandInstagram size={26}/>,
            'url':'https://facebook.com/me'
        },
        'twitter': {
            'icon':<TbBrandTwitterFilled size={26}/>,
            'url':'https://facebook.com/me'
        },
        'youtube': {
            'icon':<TbBrandYoutubeFilled size={26}/>,
            'url':'https://facebook.com/me'
        },
        'linkedin': {
            'icon':<TbBrandLinkedin size={26}/>,
            'url':'https://facebook.com/me'
        },
    }
    return socials
}

export default useSocials
