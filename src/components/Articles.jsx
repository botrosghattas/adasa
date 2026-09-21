import BlogsArticleCardS from "./BlogsArticleCardS";
import { useState } from "react";
import BlogsArticleCardL from "./BlogsArticleCardL";

export default function Articles({posts, page, setPage}) {
    
    const [view, setView] = useState('grid')
    
    const numberOfPages = Math.ceil(posts.length/6)


    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-36.5">
            <div className="mb-8 flex items-center justify-between">
                <p className="text-neutral-400">
                    عرض <span className="font-bold text-white">{posts.length}</span> مقالات
                </p>
                <div className="flex items-center gap-2">
                    <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
                        <button
                            className={`p-2 rounded-lg transition-all duration-300 ${view === 'grid' ? 'bg-orange-500 text-white' : 'text-neutral-400 hover:text-white'}`}
                            title="عرض شبكي"
                            onClick={()=> setView('grid')}
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                />
                            </svg>
                        </button>
                        <button
                            className={`p-2 rounded-lg transition-all duration-300 ${view === 'list' ? 'bg-orange-500 text-white' : 'text-neutral-400 hover:text-white'}`}
                            title="عرض قائمة"
                            onClick={()=> setView('list')}
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={view=== 'grid' ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" : 'flex flex-col gap-6'}>
                {posts.slice(page*6-6, page*6).map(post => {
                    if (view==='grid') {
                        return <BlogsArticleCardS key={post.id} post={post} />
                    } else {
                        return <BlogsArticleCardL key={post.id} post={post}/>
                    }
                })}
            </div>
            {numberOfPages > 1 && <div><div className="flex justify-center items-center gap-2 mt-12">
                <button
                    disabled={page === 1 ? true : false}
                    className="p-3 rounded-xl border transition-all duration-300 bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
                >
                    <svg
                        className="w-5 h-5 rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
                <div className="flex items-center gap-1">
                    {Array.from({ length: numberOfPages }).map((_, index) => {
                        return (
                            <button key={index} className={`min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 ${page === index + 1 ? 'bg-linear-to-r from-orange-500 to-orange-600 text-white' : 'bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white'}`} onClick={() => setPage(index + 1)}>
                                {index + 1}
                            </button>
                        )
                    })}

                </div>
                <button className="p-3 rounded-xl border transition-all duration-300 bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]" disabled={page === numberOfPages ? true : false}>
                    <svg
                        className="w-5 h-5 rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
            <p className="text-center text-neutral-500 mt-4 text-sm">صفحة 1 من {numberOfPages}</p>
            </div>}
        </div>
    );
}
