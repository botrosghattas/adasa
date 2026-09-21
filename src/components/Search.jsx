export default function Search({handleFilter, category, handleSearch}) {
    return (
        <div className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="relative w-full md:w-80">
                        <input
                            placeholder="ابحث في المقالات..."
                            className="input-dark w-full px-5 py-3 pr-12"
                            type="text"
                            onChange={(e)=> handleSearch(e.target.value)}
                        />
                        <svg
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                        <button className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${[undefined, 'all'].includes(category) ? 'bg-linear-to-r from-orange-500 to-orange-600 text-white' : 'bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30'} hover:cursor-pointer`} onClick={()=>handleFilter('all')}>
                            جميع المقالات
                        </button>
                        <button className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${category ==='إضاءة' ? 'bg-linear-to-r from-orange-500 to-orange-600 text-white' : 'bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30'} hover:cursor-pointer`} onClick={() => handleFilter('إضاءة')}>
                            إضاءة
                        </button>
                        <button className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${category === 'بورتريه' ? 'bg-linear-to-r from-orange-500 to-orange-600 text-white' : 'bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30'} hover:cursor-pointer`} onClick={() => handleFilter('بورتريه')}>
                            بورتريه
                        </button>
                        <button className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${category === 'مناظر طبيعية' ? 'bg-linear-to-r from-orange-500 to-orange-600 text-white' : 'bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30'} hover:cursor-pointer`} onClick={() => handleFilter('مناظر طبيعية')}>
                            مناظر طبيعية
                        </button>
                        <button className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${category === 'تقنيات' ? 'bg-linear-to-r from-orange-500 to-orange-600 text-white' : 'bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30'} hover:cursor-pointer`} onClick={() => handleFilter('تقنيات')}>
                            تقنيات
                        </button>
                        <button className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${category === 'معدات' ? 'bg-linear-to-r from-orange-500 to-orange-600 text-white' : 'bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30'} hover:cursor-pointer`} onClick={() => handleFilter('معدات')}>
                            معدات
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
