import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../service/axiosInstance';
import TimeAgo from 'react-timeago'
import { Link } from 'react-router-dom';

const ArticleList = () => {
    const [featuredArticles,setFeaturedArticles] = useState([])
    const [articles,setArticles] = useState([])
    const [next,setNext] = useState(null)

    const handleNextArticles = ()=>{
        axiosInstance.get(next).then(res=>{
            setArticles([...articles,...res.data.results])
            console.log(res.data.results)
            setNext(res.data.next)
        })
    }

    useEffect(()=>{
        axiosInstance.get('articles/?featured=true').then(res=>{
            setFeaturedArticles(res.data.results)
        })
        axiosInstance.get('articles/?featured=false').then(res=>{
            setArticles(res.data.results)
            console.log(res.data.next)
            setNext(res.data.next)
        })
    },[])
    return (
        <div className='min-h-screen bg-grey-50'>
            <div className="container mx-auto md:py-16 py-6  border-b border-b-grey-300">
                <h2 className='text-3xl font-bold mb-2 md:px-0 px-4'>
                    Featured Article
                </h2>
                {featuredArticles.length &&
                <div className='grid gap-x-12 gap-y-4 md:grid-cols-2'>
                    <Link to={"/articles/"+featuredArticles[0].id} className='w-full group pt-4'>
                        <div className="w-full h-auto aspect-video overflow-hidden">
                            <img alt="" src={featuredArticles[0].thumbnail} className='w-full h-full object-cover group-hover:scale-110 duration-300' />
                        </div>
                        <div className='py-4 px-4 md:px-0'>
                            <TimeAgo className='line-clamp-2 text-sm text-grey-500' date={featuredArticles[0].created_at}></TimeAgo>
                            <p className='text-2xl font-semibold text-grey-800 group-hover:underline mt-1'>{featuredArticles[0].title}</p>
                            <p className='line-clamp-2 text-md mt-1 text-grey-600'>{featuredArticles[0].description}</p>
                        </div>
                    </Link>
                    <div className=" divide-y divide-grey-300 flex flex-col max-h-full md:px-0 px-4">
                        {featuredArticles.slice(1,4).map(article=>(
                        <Link to={"/articles/"+article.id} className='w-full h-full py-4 flex items-start justify-center flex-row gap-4 group' key={article.id}>
                            <div className="md:max-w-64 max-w-40 w-auto aspect-video overflow-hidden">
                                <img alt="" src={article.thumbnail} className='w-full h-full object-cover group-hover:scale-110 duration-300' />
                            </div>
                            <div className=''>
                                <TimeAgo className='line-clamp-2 text-xs mt-1 text-grey-500' date={article.created_at}></TimeAgo>
                                <p className='font-semibold text-grey-800 md:line-clamp-2 line-clamp-1 group-hover:underline mt-1'>{article.title}</p>
                                <p className='line-clamp-2 text-sm mt-1 text-grey-600'>{article.description}</p>
                            </div>
                        </Link>
                        ))}
                    </div>
                </div>}
            </div>
            <div className="container mx-auto py-16  px-4 md:px-0">
                <h2 className='text-3xl font-bold mb-6'>
                    Lated Articles
                </h2>
                {articles.length &&
                <div className="grid md:grid-cols-4 gap-8">
                    {articles.map(article=>(
                        <div className='flex flex-col group' key={article.id}>
                            <div className="w-full h-auto aspect-square overflow-hidden">
                                <img src={article.thumbnail} className='w-full h-full object-cover group-hover:scale-110 duration-300' alt="" />
                            </div>
                            <div className='mt-2'>
                                <TimeAgo className='line-clamp-2 text-xs mt-1 text-grey-500' date={article.created_at}></TimeAgo>
                                <p className='font-semibold text-grey-800 line-clamp-2 group-hover:underline mt-1'>{article.title} {article.id}</p>
                                <p className='line-clamp-2 text-sm mt-1 text-grey-600'>{article.description}</p>
                            </div>
                        </div>
                    ))}
                </div>}

                {
                    next && 
                    <div className='mx-auto container flex items-center justify-center mt-12'>
                        <button onClick={handleNextArticles} className='w-fit py-2 px-6 flex items-center justify-center gap-4 text-grey-800 border border-grey-500 hover:border-teal-700 duration-150 active:scale-95'>
                            Show more article
                        </button>
                    </div>
                }
            </div>
            
        </div>
    );
}

export default ArticleList;
