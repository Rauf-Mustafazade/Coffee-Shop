import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Blogs from './pages/Blogs/Blogs'
import Shop from './pages/Shop/Shop'
import Login from './pages/Login/Login'
import LoginUp from './pages/Login/LoginUp'
import ProtectedRoute from './components/ProtectedRoute'

// IMPORT SCROLL TOP BUTTON
import ScrollToTopButton from './components/Scroll/ScrollToUp.jsx'
import ChatBot from './components/ChatBot.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/shop' element={
              <ProtectedRoute>
                <Shop />
              </ProtectedRoute>
            } />
            <Route path='/login' element={<Login />} />
            <Route path='/loginUp' element={<LoginUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ScrollToTopButton />
      <ChatBot />
    </>
  )
}
export default App
