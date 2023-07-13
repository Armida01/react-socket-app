import React, {useState, useEffect} from 'react';

const ChatBar = ({socket}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        socket.on("newUserResponse", data => setUsers(data))
    }, [socket, users]);

    return (
        <div className="w-full max-w-[200px] bg-sky-700 absolute h-screen py-9">
            <h4 className="text-xl text-white text-center border-b border-gray-200 pb-2">ACTIVE USERS</h4>
            <div className="text-md text-white text-left px-4 mt-4">
                {users.map(user => <p className="py-2" key={user.socketID}>{user.userName}</p>)}
            </div>
        </div>
    );
};

export default ChatBar;
