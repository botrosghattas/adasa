import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Featured from "../components/Featured"
import Categories from "../components/Categories"
import Recents from "../components/Recents"
import Subscribe from "../components/Subscribe"
import Footer from "../components/Footer"

export default function Home() {
    return (
        <div className='min-h-screen flex flex-col bg-slate-50'>
            <Nav page="home" />
            <main className='grow pt-20'>
                <Hero />
                <Featured />
                <Categories />
                <Recents />
                <Subscribe />
            </main>
            <Footer />
        </div>
    )
}
