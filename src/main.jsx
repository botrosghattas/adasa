import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './all.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import BlogPage from './pages/BlogPage.jsx'
import NotFound from './pages/NotFound.jsx'

const router = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: "/blogs", element: <Blogs />},
  {path: "/blogs/:blog", element: <BlogPage />, errorElement: <NotFound />},
  {path: "*", element: <NotFound />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
