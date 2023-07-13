import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Home = ({socket}) => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("userName", userName);
        socket?.emit("newUser", {userName, socketID: socket.id});
        navigate("/chat");
    }

    return (
        <form className="flex flex-col items-center justify-center h-screen w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
            <h2 className="mb-3 text-lg">Sign in to Open Chat</h2>
            <label htmlFor="username" className="self-start">Username</label>
            <input
                type="text"
                minLength={4}
                name="username"
                id='username'
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 my-2.5 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={userName}
                onChange={e => setUserName(e.target.value)}
            />
            <button className="bg-sky-700 text-white flex mx-auto text-white border-0 py-2 px-8 focus:outline-none hover:bg-sky-800 rounded text-lg transition duration-200 ease-in-out">SIGN IN</button>
        </form>
    );
};

export default Home;
