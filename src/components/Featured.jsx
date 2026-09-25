import { posts } from "../posts.json"
import HomeArticleCard from "./HomeArticleCard";
import { Link } from "react-router-dom";


const featuredPosts = posts.filter(post => post.featured)


export default function Featured() {
    return (
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-orange-500/5 to-transparent" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                    <div>
                        <span className="section-label mb-4">
                            <span className="relative flex h-2 w-2 ml-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                            </span>
                            مميز
                        </span>
                        <h2 className="section-title text-white">مقالات مختارة</h2>
                        <p className="section-subtitle max-w-lg">
                            محتوى منتقى لبدء رحلة تعلمك
                        </p>
                    </div>
                    <Link
                        className="group inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5"
                        to="/blogs"
                        data-discover="true"
                    >
                        عرض الكل
                        <svg
                            className="w-4 h-4 group-hover:-translate-x-1 transition-transform rotate-180"
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
                    </Link>
                </div>
                <div className="space-y-8">
                    {featuredPosts.map(post => {
                        return (
                            <HomeArticleCard key={post.id} post={post} />
                        )
                    })}

                </div>
            </div>
        </section>
    );
}
