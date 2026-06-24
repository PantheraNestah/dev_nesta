import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Layout    from './components/Layout'
import Home      from './pages/Home'
import About     from './pages/About'
import Projects  from './pages/Projects'
import CaseStudy from './pages/CaseStudy'
import Blog      from './pages/Blog'
import Contact   from './pages/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true,              element: <Home /> },
      { path: 'about',            element: <About /> },
      { path: 'projects',         element: <Projects /> },
      { path: 'projects/:id',     element: <CaseStudy /> },
      { path: 'blog',             element: <Blog /> },
      { path: 'contact',          element: <Contact /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
