import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Articles from "../components/Articles";
import BlogsHero from "../components/BlogsHero";
import Nav from "../components/Nav";
import Search from "../components/Search";
import { posts } from "../posts.json"
import { useState, useEffect } from "react";
import Footer from '../components/Footer';

export default function Blogs() {

    

    const [searchParams, setSearchParams] = useSearchParams()
    const currentCategory = searchParams.get('category') || 'all'
    const postsToDisplay = currentCategory === 'all' ? posts : posts.filter((post) => post.category === currentCategory)

    const [displayedPosts, setDisplayedPosts] = useState(postsToDisplay)

    const [page, setPage] = useState(1)

    const navigate = useNavigate()

    useEffect(() => {
        setDisplayedPosts(currentCategory === 'all' ? posts : posts.filter((post) => post.category === currentCategory))
    }, [currentCategory])

    function handleSearch (inputValue) {
        const searchResult = posts.filter(post => (post.title.includes(inputValue) || post.excerpt.includes(inputValue)) && (currentCategory==='all' ? true : post.category===currentCategory))
        setDisplayedPosts(searchResult)
    }

    function handleFilter(nextCategory) {
        setPage(1)

        if (nextCategory === "all") {
            navigate("/blogs")
        } else {
            setSearchParams({category: nextCategory})
        }
    }

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Nav page="blogs" />
            <main className="grow pt-20">
                <div className="min-h-screen bg-[#0a0a0a]">
                <BlogsHero />
                <Search handleSearch={handleSearch} category={currentCategory} handleFilter={handleFilter}/>
                <Articles posts={displayedPosts} page={page} setPage={setPage} />
                </div>
            </main>
            <Footer />
        </div>
    );
}
