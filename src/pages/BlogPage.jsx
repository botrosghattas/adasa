import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import BlogContent from '../components/BlogContent'

export default function BlogPage() {
  return (
    <div className='min-h-screen flex flex-col bg-slate-50'>
      <Nav page='blogs' />
      <main className='grow pt-20'>
        <BlogContent />
      </main>
      
      <Footer />
    </div>
  )
}
