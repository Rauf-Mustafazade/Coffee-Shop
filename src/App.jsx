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

// IMPORT SCROLL TOP BUTTON
import ScrollToTopButton from './components/Scroll/ScrollToUp.jsx'
import ChatBot from './components/ChatBot.jsx'

// chatbot
// import { useEffect, useRef, useState } from 'react'
// import ChatbotIcon from './components/ChatbotIcon'
// import ChatForm from './components/ChatForm'
// import ChatMessage from './components/ChatMessage'
// import { companyInfo } from "./companyInfo.js"
// chatbot
function App() {
  // chatbot
  // const [chatHistory, setChatHistory] = useState([
  //   {
  //     hideInChat: true,
  //     role: "model",
  //     text: companyInfo,
  //   },
  // ])
  // const [showChatbot, setShowChatbot] = useState(false)
  // const chatBodyRef = useRef()

  // const generateBotResponse = async (history) => {
    // helper
    // const updateHistory = (text, isError = false) => {
    //   setChatHistory(prev => [...prev.filter((msg) => msg.text !== "Thinking..."), { role: "model", text, isError }])
    // };
    // history = history.map(({ role, text }) => ({ role, parts: [{ text }] }))

    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ contents: history })
    // }
    // const requestOptions = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "x-goog-api-key": import.meta.env.VITE_GEMINI_API_KEY,
    //   },
    //   body: JSON.stringify({ contents: history }),
    // };

    // const response = await fetch(import.meta.env.VITE_GEMINI_API_URL, requestOptions);

  //   try {
  //     const response = await fetch(import.meta.env.VITE_GEMINI_API_URL, requestOptions);
  //     const data = await response.json();
  //     if (!response.ok) throw new Error(data.error.message || "Something went wrong!");

  //     const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").
  //       trim();
  //     updateHistory(apiResponseText)

  //   }
  //   catch (error) {
  //     updateHistory(error.message, true)

  //   }
  // };
  // useEffect(() => {
  //   // auto-scroll 
  //   chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });
  // }, [chatHistory])
  // chatbot
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/login' element={<Login />} />
            <Route path='/loginUp' element={<LoginUp />} />

          </Route>
        </Routes>

        {/* КНОПКА SCROLL TO TOP — ВСЕГДА ВИДНА */}
      </BrowserRouter>
      <ScrollToTopButton />
      <ChatBot/>

      {/* chatbot */}
      {/* <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>
        <button onClick={() => setShowChatbot(prev => !prev)} id="chatbot-toggler">
          <span className="material-symbols-rounded">mode_comment</span>
          <span className="material-symbols-rounded">close</span>

        </button>

        <div className="chatbot-popup"> */}
          {/* chatbot header */}
          {/* <div className="chat-header">
            <div className="header-info">
              <ChatbotIcon />
              <h2 className="logo-text">
                Chatbot
              </h2>
              <button onClick={() => setShowChatbot(prev => !prev)}
                className="material-symbols-rounded">
                keyboard_arrow_down
              </button>

            </div>
          </div> */}
          {/* chatbot body */}
          {/* <div ref={chatBodyRef} className="chat-body">
            <div className="message bot-message">
              <ChatbotIcon />
              <p className="message-text">
                Salam! <br /> nece komeklik ede bilerem?
              </p>
            </div> */}
            {/*  render the chat history dynamically */}
            {/* {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))}


          </div> */}
          {/* chatbot footer */}
          {/* <div className="chat-footer">
            <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
          </div>
        </div>
      </div> */}
      {/* chatbot */}

    </>
  )
}
export default App
