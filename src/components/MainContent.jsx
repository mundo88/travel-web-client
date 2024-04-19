
import WordMapImage from "../assets/images/world-map.png"
import "swiper/css/effect-coverflow";
import 'swiper/css/effect-fade';

import HeaderTitle from './section/HeaderTitle';
import MainSection from './section/MainSection';
import Footer from './Footer';

const MainContent = () => {


    return (
        <>
            <div className='bg-main relative h-full pb-32'>
                <div className="relative">
                    <div className='absolute inset-0'>
                        <img src={WordMapImage} alt="" className='object-contain h-full w-auto opacity-[.03]' />
                    </div>
                    <div className='container m-auto md:mt-16 -mt-8 relative'>
                        <div id="featured">
                            <HeaderTitle postion={'left'} title={'Featured Packages'} desciption={'Take a look the best places'}/>
                            <div className='md:mt-16 mt-8' >
                                <MainSection.Tour/>
                            </div>
                        </div>
                        <div className='md:my-36 my-16' id="destination">
                            <HeaderTitle postion={'right'} title={'Choose your destination'} desciption={'Take a look the best places'}/>
                            <div className="relative">
                                <div className="md:mt-16 mt-8">
                                    <MainSection.City></MainSection.City>
                                </div>
                            </div>
                       
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div className="m-auto md:mb-16 mb-8 container">
                        <HeaderTitle title={'Best place to explore'} desciption={'Take a look the best places'}/>
                    </div>
                    <div className='h-screen' id="explore">
                        <MainSection.Country/>
                    </div>
                </div>
                <div className="container md:mt-36 mt-16 mx-auto">
                    <div className="md:nb-16 mb-8" >
                        <HeaderTitle postion={'right'} title={'Experience in trips'} desciption={'Take a look the best places'}/>
                    </div>
                    <div id="article">
                        <MainSection.Article/>
                    </div>
                </div>
                <div className='md:mt-36 mt-16 relative'>
                    <div className="container m-auto md:mb-16 mb-8">
                        <HeaderTitle  title={'Destination to the season'} desciption={'Take a look the best places'}/>
                    </div>
                    <div className="h-screen">
                        <MainSection.Season/>
                    </div>
                </div>
                <div className="container md:mt-36 mt-16 mx-auto" id='contact'>
                    <div className="container m-auto mb-8">
                        <HeaderTitle postion={'right'} title={'Contact us'} desciption={'Take a look the best places'}/>
                    </div>
                    <MainSection.Contact></MainSection.Contact>
                </div>
            </div>
            <Footer></Footer>        
        </>
    );
}

export default MainContent;
