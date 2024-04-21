import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../service/axiosInstance';
import {  useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { TbCalendarEvent, TbChevronDown, TbEye, TbHeart, TbLoader2, TbMapPin, TbMessage, TbMoodSmile, TbPhotoSensor3, TbSend, TbShare, TbStarFilled, TbUserHeart, TbX } from 'react-icons/tb';
import { MdOutlineAttachMoney } from "react-icons/md";
import { HiOutlineCheck } from "react-icons/hi";
import { PiBowlFoodLight, PiCarProfileLight, PiMoney } from "react-icons/pi";
import { TourCard } from '../components/TourCard';
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
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import Meta from '../components/Meta';
import { useLocalStorage } from 'usehooks-ts';
import toast from 'react-hot-toast';
import CustomToast from '../components/CustomToast';
import FavouriteTourButton from '../components/FavouriteTourButton';


const TourDetail = () => {
    const [tour,setTour]=useState(null)
    const { id } = useParams()
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {setIsReadMore(!isReadMore)};
    const [reviews,setReviews]= useState([])
    const [reviewCount,setReviewCount]= useState(null)
    const [reviewNext,setReviewNext]= useState(null)
    const [reviewContent,setReviewContent]= useState("")
    const [reviewLoading,setReviewLoading]=useState(false)
    const [tab,setTab]=useState('about')
    const [modalIsOpen, setIsOpen] = useState(false);
    const {currentUser} = useAuth()
    const location = useLocation()
    const [rating, setRating] = useState(5)
    const [relatedTours,setRelatedTours] =useState([])

    const [emojiOpen,setEmojiOpen] = useState(false)

    const [loadingContact,setLoadingSendContact] = useState(false)
    const axiosPrivateInstance = useAxiosPrivate()

    const onSubmit = (contact,handleSuccess)=>{
        setLoadingSendContact(true)
        axiosInstance.post('orders/',{contact:contact,tour:tour.id}).then(res=>{
            handleSuccess(`Hi ${res.data.contact.username}, thank for contacting us.`)
            setLoadingSendContact(false)
            closeModal()
        }).catch(err=>{
            setLoadingSendContact(false)
        })
    }

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
        setReviewLoading(true)
        axiosPrivateInstance.post('reviews/',{
            user_id: currentUser.id,
            content: reviewContent,
            star: rating,
            tour: id
        }).then(res=>{
            setReviews(review=>[res.data,...review])
            setReviewContent("")
            setReviewCount(reviewCount+1)
            setReviewLoading(false)
        })
    }
    
    function setTagsSearchQuery(tags){
        let params = new URLSearchParams();
        tags.map(tag=>{
            params.append("tags", tag.id);
        })
        return params.toString()
    }
    useEffect(() => {
        axiosInstance.get("tours/"+id+"/").then(res=>{
            setTour(res.data)
            axiosInstance.get("tours/?"+ setTagsSearchQuery(res.data.tags)).then(res=>{
                if (res.data.results.length===0){
                    axiosInstance.get('tours/?page_size=3&ordering=-id').then(res=>{
                        setRelatedTours(res.data.results)
                    })
                }else{
                    setRelatedTours(res.data.results)
                }
            })
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
                <Meta title={tour.name} description={tour.about.slice(0,160)} thumbnail={tour.thumbnail}></Meta>
                <div className='container m-auto relative md:pt-12 pt-6'>
                    <div className="flex flex-col md:mb-8 mb-4 px-4 md:px-0">
                        <div className="flex justify-between items-center md:mb-4 mb-2">
                            <h2 className='text-gray-100 text-xl md:text-4xl'>
                                {tour.name}
                            </h2>
                            <FavouriteTourButton tourId={tour.id}/>
                        </div>
                        
                        <div className='flex items-center md:gap-8 gap-4 text-gray-400'>
                            <div className='flex gap-1 items-center hover:text-gray-200 duration-150 text-xs md:text-sm'>
                                <TbEye  size={20}/>
                                3,2 M
                            </div>
                            <div className='flex gap-1 items-center hover:text-gray-200 duration-150 text-xs md:text-sm'>
                                <TbSend  size={20}/>
                                457
                            </div>
                            <div className='flex gap-1 items-center hover:text-gray-200 duration-150 text-xs md:text-sm'>
                                <TbMessage  size={20}/>
                                28
                            </div>
                        </div>
                        <div className="flex items-center gap-4 md:mt-4 mt-3">
                            {tour.tags.map((tag,key)=>(
                                <Link className="py-1 px-2 text-xs border border-teal-500 hover:bg-teal-500/50 text-gray-300" key={key}>
                                    {tag.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="grid md:grid-cols-5 grid-cols-4 md:grid-rows-2 grid-rows-3 gap-y-2 md:gap-y-4 md:gap-x-4">
                        <div className="md:col-span-3 col-span-4 row-span-2 group overflow-hidden" onClick={openGalleryView}>
                            <img src={tour.thumbnail} alt="" className='w-full h-full object-cover group-hover:scale-110 duration-300'/>
                        </div>
                        <div className="grid md:col-span-2 md:row-span-2 md:grid-cols-2 md:gap-4 gap-2 grid-cols-4 col-span-5">
                            {tour.attachments.slice(0,4).map((attachment,key)=>(
                                <div className="w-full h-full relative overflow-hidden group" onClick={openGalleryView} key={key}>
                                    {key ===3 &&
                                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-20">
                                            <button className='flex items-center gap-2 w-fit font-semibold border-none hover:bg-black/60 px-6 py-3  duration-300 text-center active:scale-95 border-2 text-white'>
                                                <span className='md:block hidden'>View all images</span>
                                                <TbEye className='md:hidden block' size={24}></TbEye>
                                            </button>
                                        </div>
                                    }
                                    <img src={attachment.file} alt="" className='w-full h-full object-cover group-hover:scale-110 duration-300'/>
                                </div>
                            ))}
                        </div>
                        
                    </div>                    
                    <div className='flex justify-between pb-6 px-4 md:pb-12 w-full'>
                        <div className='flex flex-col w-full'>
                            <div className="flex items-center justify-between md:justify-start mt-6 md:mt-8">
                                <button onClick={()=>{setTab('about')}} className={`py-3 md:px-8 w-full md:w-fit border-b-2 [&.active]:border-b-teal-500 [&.active]:text-gray-200 text-gray-400 border-b-transparent md:text-lg font-medium duration-150 ${tab==='about'?'active':''}`}>
                                    Describe
                                </button>
                                <button onClick={()=>{setTab('schedule')}} className={`py-3 md:px-8 w-full md:w-fit border-b-2 [&.active]:border-b-teal-500 [&.active]:text-gray-200 text-gray-400 border-b-transparent md:text-lg font-medium duration-150 ${tab==='schedule'?'active':''}`}>
                                    Schedule
                                </button>
                                <button onClick={()=>{setTab('rules')}} className={`py-3 md:px-8 w-full md:w-fit border-b-2 [&.active]:border-b-teal-500 [&.active]:text-gray-200 text-gray-400 border-b-transparent md:text-lg font-medium duration-150 ${tab==='rules'?'active':''}`}>
                                    Regulations
                                </button>
                            </div>
                            <div className='mt-8 text-gray-300 whitespace-pre-line'>
                                {tab==='about' &&  
                                    <>
                                        {isReadMore ? parse(tour.about.slice(0, 550)): parse(tour.about) }
                                        {tour.about.length > 550 && 
                                            <>
                                                {isReadMore ? 
                                                    <button className='inline-block ml-2 text-teal-300' onClick={toggleReadMore}>..Read more</button> 
                                                    :  
                                                    <button className='text-teal-300 mt-1 block' onClick={toggleReadMore}>Collapse</button>
                                                }
                                            </>
                                        }
                                    </>
                                }
                            </div>
                            <div className="mt-12 md:mt-24 flex items-start flex-col md:flex-row gap-6 md:gap-24">
                                <div className="md:w-96 w-full md:sticky md:top-10">
                                    <div className="flex gap-2 text-2xl items-center text-gray-300">
                                        <TbStarFilled className='text-yellow-300' size={36} ></TbStarFilled>
                                        <span>{r(tour.aggregate_rating)}</span>
                                    </div>
                                    <div className='mt-6'>
                                        <p className='text-gray-300 mb-2'>Overall rating</p>
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
                                <div className="md:flex-1">
                                    <div className="flex items-center justify-between w-full">
                                        <div className="text-2xl text-gray-300">
                                            {reviewCount} reviews
                                        </div>
                                        <div className="py-2 px-2 flex items-center justify-center gap-4 text-gray-300 border border-gray-300 hover:border-teal-300 duration-150">
                                            <span>Most recent</span>
                                            <TbChevronDown></TbChevronDown>
                                        </div>
                                    </div>
                                    <div className='my-10 w-full'>
                                        {currentUser.id ?  
                                            <div className="flex items-center gap-4">
                                                <div className='min-w-12 h-12 aspect-square overflow-hidden rounded-full border border-gray-300'>
                                                    <img src={process.env.REACT_APP_API_ENDPOINT + currentUser.avatar} className='w-full h-full object-cover' alt="" />
                                                </div>
                                                <div className="relative w-full">
                                                    <input value={reviewContent} onChange={(e)=>{setReviewContent(e.target.value)}} type="text" className='peer w-full h-12 flex pl-12 pr-4 md:pr-44 border border-gray-300 focus:border-teal-300 duration-150 outline-none hover:border-teal-300 bg-transparent text-gray-300' placeholder={`Hey ${currentUser.username}, what are you thinking?`} />
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
                                                    <div className='absolute top-1/2 -translate-y-1/2 pb-1 right-0 pr-4 text-gray-300 peer-focus:text-teal-300 hidden md:flex items-center justify-center'>
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
                                                <button onClick={handlePostReview} className={`flex items-center justify-center gap-3 text-md font-semibold px-2 md:px-8 duration-300 text-center active:scale-95 h-12 ${reviewLoading && "pointer-events-none"} ${reviewContent ? 'hover:bg-teal-400 text-black bg-teal-300' : 'pointer-events-none text-gray-500 bg-gray-700'}`}>
                                                    {reviewLoading ? 
                                                    <TbLoader2 size={20} className='animate-spin'></TbLoader2>
                                                    :
                                                    <span>Post</span>
                                                    }
                                                </button>
                                            </div>
                                            :
                                            <div className='text-md text-gray-300'>Bạn cần đăng nhập để có thể bình luận.<Link className='ml-1 text-teal-300 hover:underline' to={'/login?next='+location.pathname}>Log in now!</Link></div>
                                        }
                                    </div>
                                    <div className='flex flex-col gap-10'>
                                        {reviews.length ===0 ? 
                                        <div className='w-full h-full flex flex-col items-center justify-center text-gray-300 md:pt-24 '>
                                            <VscEmptyWindow className='w-16 h-16 md:w-36 md:h-36'></VscEmptyWindow>
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
                                                        <p className='text-gray-200 tour break-all'>
                                                            {parse(review.content)}
                                                        </p>
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
                <div className="container mx-auto md:mt-24 mt-12 px-4 md:px-0">
                    <HeaderTitle title={"Tour For You"} desciption={"Take a look the best places"}></HeaderTitle>
                    <div className='md:mb-24 mb-44 relative flex items-center flex-col justify-center'>
                        <div className='grid md:grid-cols-3 grid-cols-1 gap-12 mt-12'>
                            {relatedTours && relatedTours.slice(0,3).map((tour,key)=>(
                                <div key={key}>
                                    <TourCard tour={tour}></TourCard>
                                </div>
                            ))}
                        </div>
                        <Link to={"/tours"} className="hover:bg-black/60 active:scale-95 focus:border-teal-300 mt-12 w-fit py-2 px-6 flex items-center justify-center gap-4 text-gray-300 border border-gray-300 hover:border-teal-300 duration-150">
                            View all
                        </Link>
                    </div>
                </div>
                <div className="md:sticky fixed bottom-0 w-full z-40">
                    <div className='duration-300 transition-opacity rounded-lg py-4 px-4 backdrop-blur-xl flex flex-col md:flex-row justify-between items-center gap-4'>
                        <div className='md:flex grid grid-cols-2 justify-between items-center gap-4 w-full'>
                            <div className='flex items-center gap-4 md:p-2 text-white md:hover:bg-white/15 duration-300 w-full'>
                                <TbMapPin size={'36'}></TbMapPin> 
                                <div className='flex flex-col'>
                                    <span className='text-xs md:text-sm'>Destination</span>
                                    <span className='md:text-lg text-sm truncate md:max-w-none max-w-[119px]'>{tour.destination.name}</span>
                                </div>
                            </div>
                            <div className='h-8 w-0.5 bg-gray-400 hidden md:block'></div>
                            <div className='flex items-center gap-4 md:p-2 text-white md:hover:bg-white/15 duration-300 w-full'>
                                <TbSend size={'36'}></TbSend> 
                                <div className='flex flex-col'>
                                    <span className='text-xs md:text-sm'>Transport</span>
                                    <span className='md:text-lg text-sm truncate md:max-w-none max-w-[119px]'>{tour.transport}</span>
                                </div>
                            </div>
                            <div className='h-8 w-0.5 bg-gray-400 hidden md:block'></div>
                            <div className='flex items-center gap-4 md:p-2 text-white md:hover:bg-white/15 duration-300 w-full'>
                                <MdOutlineAttachMoney size={'36'}></MdOutlineAttachMoney> 
                                <div className='flex flex-col'>
                                    <span className='text-xs md:text-sm'>Price</span>
                                    <span className='md:text-lg text-sm truncate md:max-w-none max-w-[119px]'>{tour.price.toLocaleString("en-US",{style:"currency",currency:'USD'})}</span>
                                </div>
                            </div>
                            <div className='h-8 w-0.5 bg-gray-400 hidden md:block'></div>
                            <div className='flex items-center gap-4 md:p-2 text-white md:hover:bg-white/15 duration-300 w-full'>
                                <TbCalendarEvent size={'36'}></TbCalendarEvent> 
                                <div className='flex flex-col'>
                                    <span className='text-xs md:text-sm'>Time</span>
                                    <span className='md:text-lg text-sm truncate md:max-w-none max-w-[119px]'>{tour.time}</span>
                                </div>
                            </div>
                            <div className='h-8 w-0.5 bg-gray-400 hidden md:block'></div>
                        </div>
                        <button onClick={openModal} className='ml-2 text-2xl font-semibold hover:bg-teal-400 md:w-1/5 w-full px-4 py-4 text-black bg-teal-300 duration-300 text-center active:scale-95'>
                            <span className='whitespace-nowrap'>Book now</span>
                        </button>
                    </div>
                </div>
            </div> }  
            {modalIsOpen && <Modal show={modalIsOpen} onClose={closeModal}>
                <div className=' bg-teal-950 md:p-16 p-4 flex flex-col justify-center relative w-full h-full'>
                    <div className="mb-12 flex gap-4 items-center">
                        <img src={tour.thumbnail} alt=""  className='h-16 w-auto'/>
                        <div className="flex flex-col">
                            <span className='text-lg text-gray-200'>{tour.name}</span>
                            <span className='text-md mt-1 text-gray-300'>{tour.schedule}</span>
                        </div>
                    </div>
                    <button className='absolute top-0 right-0 p-4'>
                        <IoClose size={36} className="text-gray-500 hover:text-gray-200 duration-150" onClick={closeModal}></IoClose>
                    </button>
                    <ContactForm onSubmit={onSubmit} loading={loadingContact}/>
                </div>
            </Modal>}     
                {galleryView  && 
                <Modal show={galleryView} onClose={closeGalleryView}>
                    <button className='absolute top-0 right-0 p-4 z-50'>
                        <IoClose size={36} className="text-gray-200 duration-150" onClick={closeGalleryView}></IoClose>
                    </button>
                    <GalleryImage attachments={tour.attachments}></GalleryImage>
                </Modal>
            }
        </>
    );
}

export default TourDetail;
