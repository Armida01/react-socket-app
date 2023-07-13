import React from 'react';
import {useNavigate} from 'react-router-dom';

const ChatBody = ({messages, typingStatus, lastMessageRef}) => {
  const navigate = useNavigate();


  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    navigate("/");
    window.location.reload();
  }

  return (
    <>
      <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-[calc(100vh_-_100px)]">
        <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
          <div className="relative flex items-center space-x-4">
            <p>Hangout with Colleagues</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-red-700" onClick={handleLeaveChat}>LEAVE CHAT</button>
          </div>
        </div>
        <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
          {messages.map((message, index) => {
            return (
              <div key={index} className="chat-message">
                {message.name === localStorage.getItem("userName") ? (
                  <div className="flex items-end justify-end">
                    <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                      <div>
                        <span className="px-8 py-4 rounded-lg inline-block rounded-br-none bg-sky-700 text-white text-sm">
                          {message.text}
                        </span>
                      </div>
                    </div>
                    <img
                      src="https://pixabay.com/get/g927f10c2652c239b884489edb0d72bf3930576e8c46076530cfab0c9b8320d18202a8670ec674dfde323f91d2a6636f4_640.png"
                      alt="My profile" className="w-6 h-6 rounded-full order-2"
                    />
                  </div>
                ) : (
                  <div className="flex items-end">
                    <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                      <div className="relative">
                        <span className="absolute top-0 left-1 text-[10px]">{message.name}</span>

                        <span className="px-8 py-4 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600 text-sm">
                          {message.text}
                        </span>
                      </div>
                    </div>
                    <img
                      src="https://pixabay.com/get/g927f10c2652c239b884489edb0d72bf3930576e8c46076530cfab0c9b8320d18202a8670ec674dfde323f91d2a6636f4_640.png"
                      alt="Other User Profile Photo" className="w-6 h-6 rounded-full order-1"
                    />
                  </div>
                )}
              </div>
            )
          })}

          <div ref={lastMessageRef}/>
        </div>
      </div>
    </>
  );
};

export default ChatBody;