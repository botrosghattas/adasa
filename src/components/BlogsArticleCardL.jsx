import { dateFormatter } from "../utilis";

export default function BlogsArticleCardL({post}) {
    return (
        <article
            className="group bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-500 overflow-hidden"
            style={{ animationDelay: "0ms" }}
        >
            <a
                className="flex flex-col md:flex-row"
                href={`/blogs/${post.slug}`}
                data-discover="true"
            >
                <div className="relative w-full md:w-72 lg:w-80 h-52 md:h-auto shrink-0 overflow-hidden">
                    <img
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src={post.image}
                    />
                    <div className="absolute inset-0 bg-linear-to-l from-[#161616]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
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
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                            {dateFormatter(post.date)}
                        </span>
                    </div>
                    <h2 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
                        {post.title}
                    </h2>
                    <p className="text-neutral-400 mb-4 line-clamp-2 leading-relaxed">
                        {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-3">
                            <img
                                alt={post.author.name}
                                className="w-10 h-10 rounded-full object-cover ring-2 ring-[#262626]"
                                src={post.author.avatar}
                            />
                            <div>
                                <p className="text-sm font-semibold text-white">{post.author.name}</p>
                                <p className="text-xs text-neutral-500">{post.author.role}</p>
                            </div>
                        </div>
                        <span className="hidden sm:inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
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
            </a>
        </article>
    );
}
