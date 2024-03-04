import React from "react";

function Message({ message}) {
  return (
    <div
      className={`chat ${message.name !== "Bot" ? "chat-start" : "chat-end"}`}
    >
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Avatar"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
      <div className="chat-bubble break-words ">{message.text}</div>
    </div>
  );
}

export default Message;
