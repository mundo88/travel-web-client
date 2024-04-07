
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
                    <div className='container m-auto pt-16 relative' id='destination'>
                        <HeaderTitle title={'Choose your destination'} desciption={'Take a look the best places'}/>
                        <div className="relative">
                            <div className="mt-16">
                                <MainSection.City></MainSection.City>
                            </div>
                        </div>
                        <div className='mt-36' id="featuteal">
                            <HeaderTitle postion={'right'} title={'Featuteal Packages'} desciption={'Take a look the best places'}/>
                            <div className='mt-16 pb-36' >
                                <MainSection.Tour/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div className="m-auto mb-16 container">
                        <HeaderTitle title={'Best place to explore'} desciption={'Take a look the best places'}/>
                    </div>
                    <div className='h-screen' id="explore">
                        <MainSection.Country/>
                    </div>
                </div>
                <div className="container mt-36 mx-auto" id="article">
                    <div className="mb-16">
                        <HeaderTitle postion={'right'} title={'Experience in trips'} desciption={'Take a look the best places'}/>
                    </div>
                    <MainSection.Article/>
                </div>
                <div className='mt-36 relative'>
                    <div className="container m-auto mb-16">
                        <HeaderTitle  title={'Destination to the season'} desciption={'Take a look the best places'}/>
                    </div>
                    <div className="h-screen">
                        <MainSection.Season/>
                    </div>
                </div>
                <div className="container mt-36 mx-auto" id='contact'>
                    <div className="container m-auto mb-16">
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
