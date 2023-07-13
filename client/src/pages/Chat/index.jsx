import React, {useEffect, useState, useRef} from 'react'

// Components
import {ChatBar, ChatBody, ChatFooter} from '../../components';

const ChatPage = ({socket}) => {
  const [messages, setMessages] = useState([])
  const [typingStatus, setTypingStatus] = useState("")
  const lastMessageRef = useRef(null);

  useEffect(() => {
    socket.on("messageResponse", data => setMessages([...messages, data]))
  }, [socket, messages])

  useEffect(() => {
    socket.on("typingResponse", data => setTypingStatus(data))
  }, [socket])

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    lastMessageRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [messages]);

  return (
      <div className="relative">
        <ChatBar socket={socket}/>
        <div className="ml-[200px]">
          <ChatBody messages={messages} typingStatus={typingStatus} lastMessageRef={lastMessageRef}/>
          <ChatFooter socket={socket}/>
        </div>
      </div>
  )
}

export default ChatPage;
