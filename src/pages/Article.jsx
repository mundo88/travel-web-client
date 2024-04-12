import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { TbBrandFacebookFilled, TbBrandTiktokFilled, TbBrandTwitterFilled, TbChevronDown, TbDots, TbHeart, TbHeartFilled, TbLink, TbMailFilled, TbMessage, TbMessageCircle2Filled, TbMoodSmile, TbPhoto, TbShare, TbStarFilled, TbTimeline } from 'react-icons/tb';
import { FaShare } from "react-icons/fa";
import {axiosInstance} from '../service/AxiosInstance';
import line from "../assets/images/SVG/line.svg"
import { TourCard } from '../components/section/MainSection';
import Footer from '../components/Footer';
import { HashLink } from 'react-router-hash-link';
import parse from 'html-react-parser';
import TimeAgo from 'react-timeago'

const ArticleCard = ({article}) => {
    return (
        <Link to={'/article/'+article.id} className='flex flex-col gap-3 group/article' key={article.id}>
            <div className="w-full aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-black/60 group-hover/article:opacity-100 opacity-0 duration-300 z-20"></div>
                <img className='w-full h-full object-cover group-hover/article:scale-110 duration-300' src={article.thumbnail} alt="" />
            </div>
            <div className='flex gap-3 items-center'>
                <span className='px-2 py-0.5 flex items-center justify-center bg-teal-700 text-gray-200 hover:bg-teal-800 text-sm uppercase'>
                    TIN TỨC
                </span>
                <span className='font-normal text-sm text-grey-800'>{new Date(article.updated_at).toLocaleDateString('vi-VN')}</span>
            </div>
            <div className='text-gray-800 text-2xl font-bold group-hover/article:underline duration-300'>
                {article.title}
            </div>
        </Link>
    )
}

const Article = () => {
    const { id } = useParams()
    const [tours,setTours]=useState([])
    const [comment,setComment] =useState(null)
    const [article,setArticle] =useState(null)
    const [latestArticles,setLatestArticles] =useState([])
    const [relatedArticles,setRelatedArticles] =useState([])
    const [fullShare,setFullShare] = useState(false)
    function setTagsSearchQuery(tags){
        let params = new URLSearchParams();
        tags.map(tag=>{
            params.append("tags", tag.id);
        })
        return params.toString()
    }
    useEffect(() => { 
        window.scrollTo(0, 0)
        axiosInstance.get('tours').then(res=>{
            setTours(res.data.results)
        })
  
        axiosInstance.get('articles/'+id).then(res=>{
            setArticle(res.data)
            const related_api ="articles/?"+ setTagsSearchQuery(res.data.tags)
            axiosInstance.get(related_api).then(res=>{
                setRelatedArticles(res.data.results)
            })

        })
        axiosInstance.get('articles/?ordering=-id').then(res=>{
            setLatestArticles(res.data.results)
        })
    }, [id]);
    return (
        <>
            <div className='min-h-screen bg-main article'>
                <div className='sticky top-0 py-4 bg-main z-50'>
                    <Navbar></Navbar>
                </div>
                <div className='h-full bg-grey-50'>
                    <div className='container mx-auto py-24'>
                        <div className="w-full flex gap-24">
                            <div className='flex items-start gap-10'>
                                <div className="flex flex-col gap-2 mt-12 sticky top-28">
                                    <button className='flex items-center justify-center gap-2 font-semibold text-grey-800 hover:border-teal-500 hover:text-white w-14 h-14 border-grey-700 duration-300 text-center active:scale-95 border-2  after:absolute after:bottom-0 after:left-0 after:right-0 hover:after:h-full after:h-0 after:z-0 after:duration-150 after:bg-teal-500 relative'>
                                        <TbBrandFacebookFilled className='relative z-10' size={24}></TbBrandFacebookFilled>
                                    </button>
                                    <button className='flex items-center justify-center gap-2 font-semibold text-grey-800 hover:border-teal-500 hover:text-white w-14 h-14 border-grey-700 duration-300 text-center active:scale-95 border-2  after:absolute after:bottom-0 after:left-0 after:right-0 hover:after:h-full after:h-0 after:z-0 after:duration-150 after:bg-teal-500 relative'>
                                        <TbBrandTiktokFilled  className='relative z-10' size={24}></TbBrandTiktokFilled>
                                    </button>
                                    <button className='flex items-center justify-center gap-2 font-semibold text-grey-800 hover:border-teal-500 hover:text-white w-14 h-14 border-grey-700 duration-300 text-center active:scale-95 border-2  after:absolute after:bottom-0 after:left-0 after:right-0 hover:after:h-full after:h-0 after:z-0 after:duration-150 after:bg-teal-500 relative'>
                                        <TbBrandTwitterFilled  className='relative z-10' size={24}></TbBrandTwitterFilled>
                                    </button>
                                    <div className="flex flex-col items-center justify-center gap-2 font-semibold text-grey-800">
                                      
                                        {fullShare &&
                                        <><button className='flex items-center justify-center w-14 h-14 hover:border-teal-500 border-2  hover:text-white border-grey-700 duration-300 text-center active:scale-95  after:absolute after:bottom-0 after:left-0 after:right-0 hover:after:h-full after:h-0 after:z-0 after:duration-150 after:bg-teal-500 relative'>
                                            <TbMailFilled  className='relative z-10' size={28}></TbMailFilled>
                                        </button>
                                        <button className='flex items-center justify-center w-14 h-14 hover:border-teal-500 border-2 hover:text-white border-grey-700 duration-300 text-center active:scale-95  after:absolute after:bottom-0 after:left-0 after:right-0 hover:after:h-full after:h-0 after:z-0 after:duration-150 after:bg-teal-500 relative'>
                                            <TbLink onClick={() => {navigator.clipboard.writeText(window.location.href)}} className='relative z-10' size={28}></TbLink>
                                        </button></>}
                                        <button onClick={()=>setFullShare(!fullShare)} className='flex items-center justify-center w-14 h-14 hover:border-teal-500 border-2 hover:text-white border-grey-700 duration-300 text-center active:scale-95  after:absolute after:bottom-0 after:left-0 after:right-0 hover:after:h-full after:h-0 after:z-0 after:duration-150 after:bg-teal-500 relative'>
                                            <TbDots className='relative z-10' size={28}></TbDots>
                                        </button>
                                    </div>
                                </div>
                                {article &&
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className='px-2 py-0.5 flex items-center justify-center bg-teal-700 text-gray-200 hover:bg-teal-800'>
                                                Du lịch
                                            </span>
                                            <span className='px-2 py-0.5 flex items-center justify-center bg-teal-700 text-gray-200 hover:bg-teal-800'>
                                                Tắm biển
                                            </span>
                                            <span className='px-2 py-0.5 flex items-center justify-center bg-teal-700 text-gray-200 hover:bg-teal-800'>
                                                Phú Quốc
                                            </span>
                                        </div>
                                        <h1 className='text-gray-800 text-4xl font-bold mt-4'>{article.title}</h1>
                                        <div className="mt-6 flex items-center gap-1">
                                            <TbTimeline size={24} className='text-teal-700'></TbTimeline>
                                            <span className='font-bold text-lg text-grey-800'>{new Date(article.updated_at).toLocaleDateString('vi-VN')}</span>
                                            <div className="flex items-center gap-1 ml-4 hover:underline">
                                                <TbHeartFilled className='text-grey-800' size={24}></TbHeartFilled>
                                                <span className='font-bold text-lg text-grey-800'>198</span>
                                            </div>
                                            <HashLink to={"#comment"} smooth className="flex items-center gap-1 ml-4 hover:underline">
                                                <TbMessageCircle2Filled className='text-grey-800' size={24}></TbMessageCircle2Filled>
                                                <span className='font-bold text-lg text-grey-800'>36</span>
                                            </HashLink>
                                            <div className="flex items-center gap-1 ml-4 hover:underline">
                                                <FaShare className='text-grey-800' size={24}></FaShare>
                                                <span className='font-bold text-lg text-grey-800'>14</span>
                                            </div>
                                        </div>
                                        <div className="mt-12">
                                            <img src={article.thumbnail} alt="" />
                                        </div>
                                        <div className="mt-12">
                                            <span className='whitespace-pre-wrap text-grey-800 text-xl leading-9 article'>
                                                {parse(article.content)}
                                            </span>
                                        </div>
                                        <div className="flex-1 mt-24" id='comment'>
                                            <div className="flex items-center justify-between w-full">
                                                <div className="text-2xl text-grey-800">
                                                    {article.comments.length} comments
                                                </div>
                                                <button className="py-2 px-2 flex items-center justify-center gap-4 text-grey-800 border border-gray-500 hover:border-teal-700 duration-150 active:scale-95">
                                                    <span>Gần đây nhất</span>
                                                    <TbChevronDown></TbChevronDown>
                                                </button>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="my-10 w-full relative">
                                                    <input onInput={(e)=>{setComment(e.target.value)}} type="text" className='peer w-full h-12 flex pr-20 pl-4 border border-grey-500 focus:border-grey-800 duration-150 outline-none hover:border-grey-800 bg-transparent text-grey-800' placeholder='Viết bình luận' />
                                                    <span className='absolute top-1/2 -translate-y-1/2 right-0 pr-3 text-grey-500 flex items-center justify-center gap-2.5'>
                                                        <button className='hover:text-grey-800'>
                                                            <TbMoodSmile size={24}></TbMoodSmile>
                                                        </button>
                                                        <button className='hover:text-grey-800'>
                                                            <TbPhoto size={24}></TbPhoto>
                                                        </button>
                                                    </span>
                                                </div>
                                                <button className={`ml-4 text-md font-semibold px-8 duration-300 text-center active:scale-95 h-12 ${comment ? 'hover:bg-teal-800 text-white bg-teal-700' : 'pointer-events-none text-grey-500 bg-grey-300' }`}>
                                                    <span>Đăng</span>
                                                </button>
                                            </div>
                                            <div className='flex flex-col gap-10'>
                                                {article.comments && article.comments.map((comment,key)=>(
                                                    <div className='flex flex-col gap-2' key={key}>
                                                        <div className='flex items-center'>
                                                            <div className='w-12 h-12 rounded-full overflow-hidden border-grey-200 border'>
                                                                <img src={comment.user.avatar} className='w-full h-full object-cover' alt="" />
                                                            </div>
                                                            <div className='ml-4'>
                                                                <p className='font-medium text-grey-800'>
                                                                    {comment.user.username}
                                                                </p>
                                                                <p className='text-gray-500 text-sm'>
                                                                    <TimeAgo date={comment.created_at}></TimeAgo>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-center gap-2'>
                                                            {Array.from(Array(comment.star), (e, i) => (
                                                            <div className='text-orange-500' key={i}>
                                                                <TbStarFilled></TbStarFilled>
                                                            </div>
                                                            ))}
                                                        </div>
                                                        <div className='space-y-2'>
                                                            <div className='text-grey-800'>
                                                                {comment.comment}
                                                            </div>
                                                            <div className="my-6 flex gap-2">
                                                                {comment.attachments && comment.attachments.map((attachment,key) => (
                                                                    <div className="max-w-28 max-h-44 overflow-hidden" key={key}>
                                                                        <img src={attachment.file} alt="" className='w-full h-full object-cover' />
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            <div className='flex items-center gap-6'>
                                                                <Link className='text-grey-800 flex items-center text-sm justify-center hover:text-teal-700 duration-150 gap-2 hover:underline'>
                                                                    <TbHeart></TbHeart>
                                                                    Like
                                                                </Link>
                                                                <Link className='text-grey-800 flex items-center text-sm justify-center hover:text-teal-700 duration-150 gap-2 hover:underline'>
                                                                    <TbMessage></TbMessage>
                                                                    Reply
                                                                </Link>
                                                                <Link className='text-grey-800 flex items-center text-sm justify-center hover:text-teal-700 duration-150 gap-2 hover:underline'>
                                                                    <TbShare></TbShare>
                                                                    Share
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                                <button className='w-fit py-2 px-6 flex items-center justify-center gap-4 text-grey-800 border border-grey-500 hover:border-teal-700 duration-150 active:scale-95'>
                                                    Show all
                                                </button>
                                            </div>
                                        </div>
                                    </div> 
                                }
                            </div>
                            <div className="min-w-96">
                                <div className='text-gray-800 text-4xl font-bold relative'>
                                    Latest News
                                    <div className="absolute w-full -bottom-4 left-0">
                                        <img src={line} className='w-1/2' alt="" />
                                    </div>
                                </div>
                                <div className='mt-10 flex flex-col gap-8'>
                                    {latestArticles && latestArticles.map((latestArticle,key)=>(
                                        <div key={key}>
                                            <ArticleCard article={latestArticle} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                     
                        </div>
                        <div className='mt-24'>
                            <div className='flex flex-col'>
                                 <div className='flex items-center justify-between w-full'>
                                    <div className='text-gray-800 text-4xl font-bold relative w-fit'>
                                        Related articles
                                        <div className="absolute w-full -bottom-4 left-0">
                                            <img src={line} className='w-1/2' alt="" />
                                        </div>
                                    </div>
                                    <button className="text-md font-semibold px-8 py-2 text-grey-800 duration-300 text-center active:scale-95 border border-grey-500 hover:border-teal-700">/View all</button>
                                 </div>
                                <div className="grid grid-cols-3 gap-8 mt-12">
                                    {relatedArticles && relatedArticles.slice(0,3).map((latestArticle,key)=>(
                                        <div key={key}>
                                            <ArticleCard article={latestArticle} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='mt-12'>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='text-gray-800 text-4xl font-bold relative w-fit'>
                                        Related tours
                                        <div className="absolute w-full -bottom-4 left-0">
                                            <img src={line} className='w-1/2' alt="" />
                                        </div>
                                    </div>
                                    <button className="text-md font-semibold px-8 py-2 text-grey-800 duration-300 text-center active:scale-95 border border-grey-500 hover:border-teal-700">/View all</button>
                                 </div>
                                <div className="grid grid-cols-3 gap-8 mt-12">
                                    {tours && tours.slice(0,3).map((tour,key)=>(
                                       <div key={key}>
                                            <TourCard tour={tour}></TourCard>
                                       </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <Footer></Footer>
        </>
    );
}

export default Article;
