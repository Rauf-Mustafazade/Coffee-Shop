import { useRef } from "react"


const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {

    const inputRef = useRef()
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const userMessage = inputRef.current.value.trim()
        if (!userMessage) return
        inputRef.current.value = ""


        // Update chat history with the users message
        setChatHistory((history) => [
            ...history,
            { role: "user", text: userMessage }
        ]);
        setTimeout(() => {
            setChatHistory((history) => [
                ...history,
                { role: "model", text: "Thinking..." }
            ]);
            generateBotResponse([
                ...chatHistory,
                {
                    role: "user", text: ` Using the details provided above,
                    please address this query:${userMessage}`
                }
            ]);
        }, 600);


        //   Call the function to generate the bots response
    }
    return (
        <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
            <input ref={inputRef} type="text" className="message-input" placeholder='Message...' required />
            <button className="material-symbols-rounded">
                arrow_upward
            </button>
        </form>
    )
}

export default ChatForm