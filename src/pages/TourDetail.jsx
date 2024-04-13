import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../service/axiosInstance';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { TbBookmark, TbCalendarEvent, TbChevronDown, TbEye, TbHeart, TbMapPin, TbMessage, TbMoodSmile, TbPhotoSensor3, TbSend, TbShare, TbStarFilled, TbUserHeart } from 'react-icons/tb';
import { MdOutlineAttachMoney } from "react-icons/md";
import { HiOutlineCheck } from "react-icons/hi";
import { PiBowlFoodLight, PiCarProfileLight, PiMoney } from "react-icons/pi";
import {TourCard} from "../components/section/MainSection"
import HeaderTitle from '../components/section/HeaderTitle';
import Modal from "../components/Modal"
import  ContactForm  from '../components/form/ContactForm';
import { IoClose } from "react-icons/io5";
import GalleryImage from '../components/GalleryImage';
import parse from 'html-react-parser';
import useAuth from '../hooks/useAuth';
import { VscEmptyWindow } from "react-icons/vsc";
import TimeAgo from 'react-timeago'

const TourDetail = () => {
    const [tour,setTour]=useState(null)
    const { id } = useParams()
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {setIsReadMore(!isReadMore)};
    const [tours,setTours]= useState([])
    const [tab,setTab]=useState('about')
    const [modalIsOpen, setIsOpen] = useState(false);
    const [comment,setComment] =useState(null)
    const {currentUser} = useAuth()
    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
      setIsOpen(false);
    }
    const [galleryView, setgalleryView] = useState(false);
    function openGalleryView() {
        setgalleryView(true);
    }
    function closeGalleryView() {
        setgalleryView(false);
    }

    useEffect(() => {
        axiosInstance.get('tours/').then(res=>{
            setTours(res.data.results)
        })
    }, []);
    useEffect(() => {
        axiosInstance.get("tours/"+id+"/").then(res=>{
            setTour(res.data)
        })
        window.scrollTo(0, 100)
    }, [id]);
    
    return (
        <>
            {tour &&
            <div>
                <div className='container m-auto relative pt-12'>
                    <div className="flex flex-col mb-8">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className='text-gray-200 text-4xl'>
                                {tour.name}
                            </h2>
                            <button className='text-gray-300 hover:text-teal-300 duration-150'>
                                <TbBookmark size={24}></TbBookmark> 
                            </button>
                        </div>
                        <div className='flex items-center gap-8 text-gray-400'>
                            <div className='flex gap-1 items-center hover:text-gray-200 duration-150 text-sm'>
                                <TbEye  size={20}/>
                                3,2 M
                            </div>
                            <div className='flex gap-1 items-center hover:text-gray-200 duration-150 text-sm'>
                                <TbSend  size={20}/>
                                457
                            </div>
                            <div className='flex gap-1 items-center hover:text-gray-200 duration-150 text-sm'>
                                <TbMessage  size={20}/>
                                28
                            </div>
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                            {tour.tags.map((tag,key)=>(
                                <Link className="py-1 px-2 text-xs border border-teal-500 hover:bg-teal-500/50 text-gray-300">
                                    {tag.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-5 grid-rows-2 gap-4">
                        <div className="col-span-3 row-span-2 group overflow-hidden" onClick={openGalleryView}>
                            <img src={tour.thumbnail} alt="" className='w-full h-full object-cover group-hover:scale-110 duration-300'/>
                        </div>
                        <div className="grid col-span-2 row-span-2 grid-cols-2 gap-4">
                            {tour.attachments.slice(0,4).map((attachment,key)=>(
                                <div className="w-full h-full relative overflow-hidden group" onClick={openGalleryView}>
                                    {key ===3 &&
                                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-20">
                                            <button className='flex items-center gap-2 w-fit font-semibold hover:border-teal-300 hover:bg-black/60 px-6 py-3 border-gray-300 duration-300 text-center active:scale-95 border-2 text-white'>
                                                Xem tất cả
                                            </button>
                                        </div>
                                    }
                                    <img src={attachment.file} alt="" className='w-full h-full object-cover group-hover:scale-110 duration-300'/>
                                </div>
                            ))}
                        </div>
                        
                    </div>                    
                    <div className='flex justify-between pb-12'>
                        <div className='flex flex-col'>
                            <div className="flex items-center mt-8">
                                <button onClick={()=>{setTab('about')}} className={`py-3 px-8 border-b-2 [&.active]:border-b-teal-500 [&.active]:text-gray-200 text-gray-400 border-b-transparent text-lg font-medium duration-150 ${tab==='about'?'active':''}`}>
                                    Mô tả
                                </button>
                                <button onClick={()=>{setTab('schedule')}} className={`py-3 px-8 border-b-2 [&.active]:border-b-teal-500 [&.active]:text-gray-200 text-gray-400 border-b-transparent text-lg font-medium duration-150 ${tab==='schedule'?'active':''}`}>
                                    Lịch trình
                                </button>
                                <button onClick={()=>{setTab('rules')}} className={`py-3 px-8 border-b-2 [&.active]:border-b-teal-500 [&.active]:text-gray-200 text-gray-400 border-b-transparent text-lg font-medium duration-150 ${tab==='rules'?'active':''}`}>
                                    Quy định
                                </button>
                            </div>
                            <div className='mt-8 text-gray-300 whitespace-pre-line'>
                                {tab==='about' &&  
                                    <>
                                        {isReadMore ? parse(tour.about.slice(0, 550)): parse(tour.about) }
                                        {tour.about.length > 550 && 
                                            <>
                                                {isReadMore ? 
                                                    <button className='inline-block ml-2 text-teal-300' onClick={toggleReadMore}>..Xem thêm</button> 
                                                    :  
                                                    <button className='text-teal-300 mt-1 block' onClick={toggleReadMore}>Thu gọn</button>
                                                }
                                            </>
                                        }
                                    </>
                                }
                            </div>
                            <div className="mt-24 flex items-start">
                                <div className="w-96 sticky top-10">
                                    <div className="flex gap-2 text-2xl items-center text-gray-300">
                                        <TbStarFilled className='text-yellow-300' size={36} ></TbStarFilled>
                                        <span>4,86</span>
                                    </div>
                                    <div className='mt-6'>
                                        <p className='text-gray-300 mb-2'>Xếp hạng tổng thể</p>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-4">
                                                <span className='text-gray-300'>5</span>
                                                <div className="relative bg-gray-500 w-full h-2">
                                                    <div className="absolute w-11/12 bg-gray-300 h-full left-0"></div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <span className='text-gray-300'>4</span>
                                                <div className="relative bg-gray-500 w-full h-2">
                                                    <div className="absolute w-2/12 bg-gray-300 h-full left-0"></div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <span className='text-gray-300'>3</span>
                                                <div className="relative bg-gray-500 w-full h-2">
                                                    <div className="absolute w-1/12 bg-gray-300 h-full left-0"></div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <span className='text-gray-300'>2</span>
                                                <div className="relative bg-gray-500 w-full h-2">
                                                    <div className="absolute w-1/12 bg-gray-300 h-full left-0"></div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <span className='text-gray-300'>1</span>
                                                <div className="relative bg-gray-500 w-full h-2">
                                                    <div className="absolute w-1/12 bg-gray-300 h-full left-0"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex flex-col divide-y divide-gray-500">
                                        <div className="flex justify-between items-center py-6 text-gray-300">
                                            <div className="flex items-center gap-4">
                                                <HiOutlineCheck size={24}></HiOutlineCheck> 
                                                <span>Hài lòng về tour</span>
                                            </div>
                                            <span>4,8</span>
                                        </div>
                                        <div className="flex justify-between items-center py-6 text-gray-300">
                                            <div className="flex items-center gap-4">
                                                <TbPhotoSensor3 size={24}></TbPhotoSensor3> 
                                                <span>Cảnh đẹp</span>
                                            </div>
                                            <span>4,8</span>
                                        </div>
                                        <div className="flex justify-between items-center py-6 text-gray-300">
                                            <div className="flex items-center gap-4">
                                                <TbUserHeart size={24}></TbUserHeart> 
                                                <span>Hướng dẫn viên thân thiện</span>
                                            </div>
                                            <span>4,8</span>
                                        </div>
                                        <div className="flex justify-between items-center py-6 text-gray-300">
                                            <div className="flex items-center gap-4">
                                                <PiBowlFoodLight size={24}></PiBowlFoodLight> 
                                                <span>Đồ ăn ngon</span>
                                            </div>
                                            <span>4,8</span>
                                        </div>
                                        <div className="flex justify-between items-center py-6 text-gray-300">
                                            <div className="flex items-center gap-4">
                                                <PiCarProfileLight  size={24}></PiCarProfileLight> 
                                                <span>Di chuyển thuận lợi</span>
                                            </div>
                                            <span>4,8</span>
                                        </div>
                                        <div className="flex justify-between items-center py-6 text-gray-300">
                                            <div className="flex items-center gap-4">
                                                <PiMoney size={24}></PiMoney> 
                                                <span>Thanh toán dễ dàng</span>
                                            </div>
                                            <span>4,8</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 pl-24">
                                    <div className="flex items-center justify-between w-full">
                                        <div className="text-2xl text-gray-300">
                                            {tour.reviews.length} reviews
                                        </div>
                                        <div className="py-2 px-2 flex items-center justify-center gap-4 text-gray-300 border border-gray-300 hover:border-teal-300 duration-150">
                                            <span>Gần đây nhất</span>
                                            <TbChevronDown></TbChevronDown>
                                        </div>
                                    </div>
                                    <div className='my-10 w-full '>
                                        {currentUser ?  
                                            <div className="flex items-center gap-4">
                                                <div className='min-w-12 h-12 aspect-square overflow-hidden'>
                                                    <img src={process.env.REACT_APP_SERVER_URL + currentUser.avatar} className='w-full h-full object-cover border border-gray-300' alt="" />
                                                </div>
                                                <div className="relative w-full">
                                                    <input onInput={(e)=>{setComment(e.target.value)}} type="text" className='peer w-full h-12 flex pl-12 border border-gray-300 focus:border-teal-300 duration-150 outline-none hover:border-teal-300 bg-transparent text-gray-300' placeholder={`Hey ${currentUser.username}, what are you thinking?`} />
                                                    <span className='absolute top-1/2 -translate-y-1/2 left-0 pl-4 text-gray-300 peer-focus:text-teal-300'>
                                                        <TbMoodSmile size={24}></TbMoodSmile>
                                                    </span>
                                                </div>
                                                <button class={`text-md font-semibold px-8 duration-300 text-center active:scale-95 h-12 ${comment ? 'hover:bg-teal-400 text-black bg-teal-300' : 'pointer-events-none text-gray-500 bg-gray-700' }`}>
                                                    <span>Post</span>
                                                </button>
                                            </div>
                                            :
                                            <div className='text-md text-gray-300'>Bạn cần đăng nhập để có thể bình luận.<Link className='ml-1 text-teal-300 hover:underline' to={'/login'}>Log in now!</Link></div>
                                        }
                                    </div>
                                    <div className='flex flex-col gap-10'>
                                        {tour.reviews.length ===0 ? 
                                        <div className='w-full h-full flex flex-col items-center justify-center text-gray-300 pt-24'>
                                            <VscEmptyWindow size={88}></VscEmptyWindow>
                                            <span className='mt-6'>Tour currently has no reviews,<Link className='text-teal-300 hover:underline ml-1'>review now!</Link></span>
                                        </div>
                                        :
                                        <>
                                            {tour.reviews.map((review,key)=>(
                                                <div className='flex flex-col gap-3' key={key}>
                                                    <div className='flex items-center'>
                                                        <div className='w-12 h-12 rounded-full overflow-hidden border-teal-300 border'>
                                                            <img src={review.user.avatar} className='w-full h-full object-cover' alt="" />
                                                        </div>
                                                        <div className='ml-4'>
                                                            <p className='font-medium text-gray-300'>
                                                                {review.user.username}
                                                            </p>
                                                            <p className='text-gray-500 text-sm'>
                                                                <TimeAgo date={review.created_at}></TimeAgo>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center gap-2'>
                                                        {Array.from(Array(review.star), (e, i) => (
                                                        <div className='text-yellow-300' key={i}>
                                                            <TbStarFilled></TbStarFilled>
                                                        </div>
                                                        ))}
                                                    </div>
                                                    <div className='space-y-2'>
                                                        <div className='text-gray-200'>
                                                            {parse(review.content)}
                                                        </div>
                                                        <div className='flex items-center gap-6'>
                                                            <Link className='text-gray-300 flex items-center text-sm justify-center hover:text-teal-300 duration-150 gap-2'>
                                                                <TbHeart></TbHeart>
                                                                Like
                                                            </Link>
                                                            <Link className='text-gray-300 flex items-center text-sm justify-center hover:text-teal-300 duration-150 gap-2'>
                                                                <TbMessage></TbMessage>
                                                                Reply
                                                            </Link>
                                                            <Link className='text-gray-300 flex items-center text-sm justify-center hover:text-teal-300 duration-150 gap-2'>
                                                                <TbShare></TbShare>
                                                                Share
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))} 
                                            <button className='w-fit py-2 px-6 flex items-center justify-center gap-4 text-gray-300 border border-gray-300 hover:border-teal-300 duration-150'>
                                                Show all review
                                            </button>
                                        </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                <div className="container mx-auto mt-24">
                    <HeaderTitle title={"Có thể bạn sẽ thích"} desciption={"Take a look the best places"}></HeaderTitle>
                    <div className='mb-24 relative flex items-center flex-col justify-center'>
                        <div className='flex items-center justify-center gap-12 mt-12'>
                            {tours && tours.slice(0,3).map((tour,key)=>(
                                <TourCard tour={tour}></TourCard>
                            ))}
                        </div>
                        <button className="hover:bg-black/60 active:scale-95 focus:border-teal-300 mt-12 w-fit py-2 px-6 flex items-center justify-center gap-4 text-gray-300 border border-gray-300 hover:border-teal-300 duration-150">
                            Xem tất cả
                        </button>
                    </div>
                </div>
                <div className=" sticky bottom-0 w-full z-40">
                    <div className=' duration-300 transition-opacity rounded-lg py-4 px-4 backdrop-blur-xl flex justify-between items-center gap-4 '>
                        <div className='flex items-center gap-4 p-2 text-white hover:bg-white/15 duration-300 w-full'>
                            <TbMapPin size={'36'}></TbMapPin> 
                            <div className='flex flex-col'>
                                <span className='text-sm'>Destination</span>
                                <span className='text-lg'>{tour.destination.city.name}</span>
                            </div>
                        </div>
                        <div className='h-8 w-0.5 bg-gray-400'></div>
                        <div className='flex items-center gap-4 p-2 text-white hover:bg-white/15 duration-300 w-full'>
                            <TbSend size={'36'}></TbSend> 
                            <div className='flex flex-col'>
                                <span className='text-sm'>Transpot</span>
                                <span className='text-lg'>{tour.transpot}</span>
                            </div>
                        </div>
                        <div className='h-8 w-0.5 bg-gray-400'></div>
                        <div className='flex items-center gap-4 p-2 text-white hover:bg-white/15 duration-300 w-full'>
                            <MdOutlineAttachMoney size={'36'}></MdOutlineAttachMoney> 
                            <div className='flex flex-col'>
                                <span className='text-sm'>Price</span>
                                <span className='text-lg'>{tour.price.toLocaleString("en-US",{style:"currency",currency:'USD'})}</span>
                            </div>
                        </div>
                        <div className='h-8 w-0.5 bg-gray-400'></div>
                        <div className='flex items-center gap-4 p-2 text-white hover:bg-white/15 duration-300 w-full'>
                            <TbCalendarEvent size={'36'}></TbCalendarEvent> 
                            <div className='flex flex-col'>
                                <span className='text-sm'>Time</span>
                                <span className='text-lg'>{tour.time}</span>
                            </div>
                        </div>
                        <div className='h-8 w-0.5 bg-gray-400'></div>
                        <button  onClick={openModal} className='ml-2 text-2xl font-semibold hover:bg-teal-400 px-4 py-4 text-black bg-teal-300 duration-300 w-full text-center active:scale-95'>
                            <span>Book now</span>
                        </button>
                    </div>
                </div>
            </div> }  
            {modalIsOpen && <Modal show={modalIsOpen} onClose={closeModal}>
                <div className=' bg-teal-950 p-16 relative'>
                    <div className="mb-12 flex gap-4 items-center">
                        <img src={tour.thumbnail} alt=""  className='h-16 w-auto'/>
                        <div className="flex flex-col">
                            <span className='text-lg truncate text-gray-200'>{tour.name}</span>
                            <span className='text-md mt-1 text-gray-300'>{tour.schedule}</span>
                        </div>
                    </div>
                    <button className='absolute top-0 right-0 p-4'>
                        <IoClose size={36} className="text-gray-500 hover:text-gray-200 duration-150" onClick={closeModal}></IoClose>
                    </button>
                    <ContactForm></ContactForm>
                </div>
            </Modal>}     
            {galleryView && <Modal show={galleryView} onClose={closeGalleryView}>
                    <button className='absolute top-0 right-0 p-4 z-50'>
                        <IoClose size={36} className="text-gray-200 duration-150" onClick={closeGalleryView}></IoClose>
                    </button>
                <GalleryImage attachments={tour.attachments}></GalleryImage>
            </Modal>}     
        </>
    );
}

export default TourDetail;
