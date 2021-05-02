import React, { useState, useEffect } from "react";
import socketIo from "../../utils/socket-io";

const ChatBox = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);

  const addMessage = (msg) => {
    setChats(chats.concat({ author: msg.author, message: msg.message }));
  };

  const sendMessage = (event) => {
    event.preventDefault();
    socketIo.emit("send message", { author: username, message: message });
    setMessage("");
  };

  useEffect(() => {
    socketIo.on("receive message", (data) => {
      console.log("receive message", data);
      addMessage(data);
    });
  }, [chats]);

  return (
    <>
      <div className="container right">
        <div className="chatbox-container">
          <div className="messages">
            {chats.map((chat) => {
              return (
                <div>
                  {chat.author}: {chat.message}
                </div>
              );
            })}
          </div>
          <div className="card-footer">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
            />
            <input
              type="text"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-control"
            />
            <button
              onClick={sendMessage}
              className="btn btn-primary form-control"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
