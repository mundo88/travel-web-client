import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../service/axiosInstance';
import { ScrollRestoration, useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { TbBookmark, TbCalendarEvent, TbChevronDown, TbEye, TbHeart, TbMapPin, TbMessage, TbMoodSmile, TbPhotoSensor3, TbSend, TbShare, TbStarFilled, TbUserHeart, TbX } from 'react-icons/tb';
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
import StarRatings from 'react-star-ratings';
import EmojiPicker from 'emoji-picker-react';
import OutsideClickHandler from 'react-outside-click-handler';


const TourDetail = () => {
    const [tour,setTour]=useState(null)
    const { id } = useParams()
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {setIsReadMore(!isReadMore)};
    const [tours,setTours]= useState([])
    const [reviews,setReviews]= useState([])
    const [reviewCount,setReviewCount]= useState(null)
    const [reviewNext,setReviewNext]= useState(null)
    const [tab,setTab]=useState('about')
    const [modalIsOpen, setIsOpen] = useState(false);
    const {currentUser} = useAuth()
    const location = useLocation()
    const [rating, setRating] = useState(5)
    const [reviewContent,setReviewContent]= useState("")
    const [emojiOpen,setEmojiOpen] = useState(false)

    const r=(n,p=1)=>(e=>((n*e)+.5|0)/e)(10**p) // 37 bytes

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
    const handleOpenEmoji = ()=>{
        setEmojiOpen(!emojiOpen)
    }
    const handleEmoji = (emoji)=>{
        const appendEmoji = reviewContent + emoji.emoji
        setReviewContent(appendEmoji)
    }

    const handleNextReview = ()=>{
        axiosInstance.get(reviewNext).then(res=>{
            const newReviews = reviews.concat(res.data.results.filter(x=> x != reviews.some(y=>y.id==x.id)))
            setReviews(newReviews)
            setReviewNext(res.data.next)
        })
    }
    const handlePostReview = ()=>{
        axiosInstance.post('reviews/',{
            user_id: currentUser.id,
            content: reviewContent,
            star: rating,
            tour: id
        }).then(res=>{
            setReviews(review=>[res.data,...review])
            setReviewContent("")
            setReviewCount(reviewCount+1)
        })
    }
    useEffect(() => {
        axiosInstance.get("tours/"+id+"/").then(res=>{
            setTour(res.data)
            console.log(res.data)
        })
        axiosInstance.get('tours/').then(res=>{
            setTours(res.data.results)
        })
        axiosInstance.get('tours/').then(res=>{
            setTours(res.data.results)
        })
        axiosInstance.get(`reviews/?tour=${id}&page_size=5&page=1&ordering=-id`).then(res=>{
            setReviews(res.data.results)
            setReviewCount(res.data.count)
            setReviewNext(res.data.next)
        })

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
                                <Link className="py-1 px-2 text-xs border border-teal-500 hover:bg-teal-500/50 text-gray-300" key={key}>
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
                                <div className="w-full h-full relative overflow-hidden group" onClick={openGalleryView} key={key}>
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
                                        <span>{r(tour.aggregate_rating)}</span>
                                    </div>
                                    <div className='mt-6'>
                                        <p className='text-gray-300 mb-2'>Xếp hạng tổng thể</p>
                                        <div className="flex flex-col gap-2">
                                            {tour.review_percentage.map((percen,key)=>(
                                                <div className="flex items-center gap-4" key={key}>
                                                    <span className='text-gray-300'>{percen.star}</span>
                                                    <div className="relative bg-gray-500 w-full h-2">
                                                        <div className="absolute bg-gray-300 h-full left-0" style={{width:percen.percen+'%'}}></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mt-6 flex flex-col divide-y divide-gray-500">
                                        <div className="flex justify-between items-center py-6 text-gray-300">
                                            <div className="flex items-center gap-4">
                                                <HiOutlineCheck size={24}></HiOutlineCheck> 
                                                <span>Satisfied with the tour</span>
                                            </div>
                                            <span>{r(tour.aggregate_rating)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-6 text-gray-300">
                                            <div className="flex items-center gap-4">
                                                <TbPhotoSensor3 size={24}></TbPhotoSensor3> 
                                                <span>Beauty scene</span>
                                            </div>
                                            <span>{r(tour.aggregate_rating)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-6 text-gray-300">
                                            <div className="flex items-center gap-4">
                                                <TbUserHeart size={24}></TbUserHeart> 
                                                <span>Friendly tour guide</span>
                                            </div>
                                            <span>{r(tour.aggregate_rating)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-6 text-gray-300">
                                            <div className="flex items-center gap-4">
                                                <PiBowlFoodLight size={24}></PiBowlFoodLight> 
                                                <span>Good taste</span>
                                            </div>
                                            <span>{r(tour.aggregate_rating)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-6 text-gray-300">
                                            <div className="flex items-center gap-4">
                                                <PiCarProfileLight  size={24}></PiCarProfileLight> 
                                                <span>Move conveniently</span>
                                            </div>
                                            <span>{r(tour.aggregate_rating)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-6 text-gray-300">
                                            <div className="flex items-center gap-4">
                                                <PiMoney size={24}></PiMoney> 
                                                <span>Easy payment</span>
                                            </div>
                                            <span>{r(tour.aggregate_rating)}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 pl-24">
                                    <div className="flex items-center justify-between w-full">
                                        <div className="text-2xl text-gray-300">
                                            {reviewCount} reviews
                                        </div>
                                        <div className="py-2 px-2 flex items-center justify-center gap-4 text-gray-300 border border-gray-300 hover:border-teal-300 duration-150">
                                            <span>Gần đây nhất</span>
                                            <TbChevronDown></TbChevronDown>
                                        </div>
                                    </div>
                                    <div className='my-10 w-full '>
                                        {currentUser.id ?  
                                            <div className="flex items-center gap-4">
                                                <div className='min-w-12 h-12 aspect-square overflow-hidden rounded-full border border-gray-300'>
                                                    <img src={process.env.REACT_APP_SERVER_URL + currentUser.avatar} className='w-full h-full object-cover' alt="" />
                                                </div>
                                                <div className="relative w-full">
                                                    <input value={reviewContent} onChange={(e)=>{setReviewContent(e.target.value)}} type="text" className='peer w-full h-12 flex pl-12 pr-44 border border-gray-300 focus:border-teal-300 duration-150 outline-none hover:border-teal-300 bg-transparent text-gray-300' placeholder={`Hey ${currentUser.username}, what are you thinking?`} />
                                                    <div className='absolute top-1/2 -translate-y-1/2 left-0 pl-4 text-gray-300 peer-focus:text-teal-300'>
                                                        <button onClick={handleOpenEmoji} className='flex items-center justify-center'>
                                                            {
                                                                !emojiOpen ? 
                                                                <TbMoodSmile size={24}></TbMoodSmile>
                                                                :
                                                                <TbX size={24}></TbX>
                                                            }
                                                        </button>
                                                        
                                                        <div className="absolute bottom-full left-0 mb-6">
                                                            <OutsideClickHandler onOutsideClick={()=>emojiOpen && setEmojiOpen(false)}>
                                                                <EmojiPicker onEmojiClick={handleEmoji} theme='dark' reactionsDefaultOpen={true} open={emojiOpen}/>
                                                            </OutsideClickHandler>
                                                        </div>
                                                    </div>
                                                    <div className='absolute top-1/2 -translate-y-1/2 pb-1 right-0 pr-4 text-gray-300 peer-focus:text-teal-300 flex items-center justify-center'>
                                                        <StarRatings
                                                            rating={rating}
                                                            starRatedColor="#fde047"
                                                            starHoverColor='#fde047'
                                                            starEmptyColor = "#374151"
                                                            numberOfStars={5}
                                                            changeRating={setRating}
                                                            name='rating'
                                                            starDimension="24px"
                                                            starSpacing='4px'
                                                            svgIconViewBox='0 0 24 24'
                                                            svgIconPath='M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z'
                                                        />
                                                    </div>

                                                </div>
                                                <button onClick={handlePostReview} className={`text-md font-semibold px-8 duration-300 text-center active:scale-95 h-12 ${reviewContent ? 'hover:bg-teal-400 text-black bg-teal-300' : 'pointer-events-none text-gray-500 bg-gray-700' }`}>
                                                    <span>Post</span>
                                                </button>
                                            </div>
                                            :
                                            <div className='text-md text-gray-300'>Bạn cần đăng nhập để có thể bình luận.<Link className='ml-1 text-teal-300 hover:underline' to={'/login?next='+location.pathname}>Log in now!</Link></div>
                                        }
                                    </div>
                                    <div className='flex flex-col gap-10'>
                                        {reviews.length ===0 ? 
                                        <div className='w-full h-full flex flex-col items-center justify-center text-gray-300 pt-24'>
                                            <VscEmptyWindow size={88}></VscEmptyWindow>
                                            <span className='mt-6'>Tour currently has no reviews,<Link className='text-teal-300 hover:underline ml-1'>review now!</Link></span>
                                        </div>
                                        :
                                        <>
                                            {reviews.map((review,key)=>(
                                                <div className='flex flex-col gap-2' key={key}>
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
                                                        <div className='text-gray-200 tour'>
                                                            {parse(review.content)}
                                                        </div>
                                                        {review.attachments.length >0 && 
                                                        <div className='flex gap-2 pb-1'>
                                                            {review.attachments.map((attachment,key)=>(
                                                                <div className='max-w-28 max-h-44 overflow-hidden' key={key}>
                                                                    <img src={attachment.file} className='w-full h-full object-cover' alt="" />
                                                                </div>
                                                            ))}
                                                        </div>}
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
                                            {reviewNext && 
                                            <button onClick={handleNextReview} className='w-fit py-2 px-6 flex items-center justify-center gap-4 text-gray-300 border border-gray-300 hover:border-teal-300 duration-150'>
                                                Show more reviews
                                            </button>}
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
                        <div className='grid md:grid-cols-3 grid-cols-1 gap-12 mt-12'>
                            {tours && tours.slice(0,3).map((tour,key)=>(
                                <div key={key}>
                                    <TourCard tour={tour}></TourCard>
                                </div>
                            ))}
                        </div>
                        <Link to={"/tours"} className="hover:bg-black/60 active:scale-95 focus:border-teal-300 mt-12 w-fit py-2 px-6 flex items-center justify-center gap-4 text-gray-300 border border-gray-300 hover:border-teal-300 duration-150">
                            Xem tất cả
                        </Link>
                    </div>
                </div>
                <div className="sticky bottom-0 w-full z-40">
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
                                <span className='text-sm'>Transport</span>
                                <span className='text-lg'>{tour.transport}</span>
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
