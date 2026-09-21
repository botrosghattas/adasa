import { dateFormatter } from "../utilis"


export default function HomeArticleCard({post}) {
    return (
        <article
            className="group relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
            style={{ animationDelay: "0ms" }}
        >
            <a
                className="block"
                href={`/blogs/${post.slug}`}
                data-discover="true"
            >
                <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-72 md:h-100 overflow-hidden">
                        <img
                            alt={post.excerpt}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            src={post.image}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute top-4 right-4">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-linear-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full">
                                <svg
                                    className="w-3.5 h-3.5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                مميز
                            </span>
                        </div>
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center bg-[#161616]">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                                {post.category}
                            </span>
                            <span className="flex items-center gap-1 text-sm text-neutral-500">
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                {post.readTime}
                            </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-tight">
                            {post.excerpt}
                        </h2>
                        <p className="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">
                            {post.content}
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <img
                                        alt={post.author.name}
                                        className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                                        src={post.author.avatar}
                                    />
                                    <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#161616]" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-white">
                                        {post.author.name}
                                    </p>
                                    <p className="text-xs text-neutral-500">
                                        {dateFormatter(post.date)}
                                    </p>
                                </div>
                            </div>
                            <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                                اقرأ المقال
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
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </a>
        </article>
    )
}
