import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Blog from './components/blog.jsx'
import Contact from './components/contact.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  
  const [theme, setTheme] = useState("light")

  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) setTheme(savedTheme)
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar theme={theme} setTheme={setTheme} /><Home /></>,
    },
    {
      path: '/about',
      element: <><Navbar theme={theme} setTheme={setTheme} /><About /></>,
    },
    {
      path: '/blog',
      element: <><Navbar theme={theme} setTheme={setTheme} /><Blog /></>,
    },
    {
      path: '/contact',
      element: <><Navbar theme={theme} setTheme={setTheme} /><Contact /></>,
    },
  ]);

  return (
    <div className={`app ${theme}`}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
