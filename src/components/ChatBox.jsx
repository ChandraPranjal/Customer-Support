import React, { useEffect, useRef, useState } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Message from "./Message";
import SendMessage from "./SendMessage";
import Support from "./Support";
function ChatBox() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi", name: "User" },
    { id: 2, text: "Hello", name: "Bot" },
    {
      id: 3,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quos magnam neque quia totam, placeat aliquam. Facere eius tempore beatae labore ab magni, unde sapiente sit laudantium, rerum quibusdam obcaecat Eius, mollitia cumque possimus atque ducimus omnis culpa quidem! Vel et consectetur assumenda, sapiente iste facere sunt nesciunt ullam vitae id veritatis tempora nisi voluptates adipisci doloribus consequatur nihil quam!",
      name: "User",
    },
    {
      id: 4,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quos magnam neque quia totam, placeat aliquam. Facere eius tempore beatae labore ab magni, unde sapiente sit laudantium, rerum quibusdam obcaecat Eius, mollitia cumque possimus atque ducimus omnis culpa quidem! Vel et consectetur assumenda, sapiente iste facere sunt nesciunt ullam vitae id veritatis tempora nisi voluptates adipisci doloribus consequatur nihil quam!",
      name: "Bot",
    },
    {
      id: 5,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quos magnam neque quia totam, placeat aliquam. Facere eius tempore beatae labore ab magni, unde sapiente sit laudantium, rerum quibusdam obcaecat Eius, mollitia cumque possimus atque ducimus omnis culpa quidem! Vel et consectetur assumenda, sapiente iste facere sunt nesciunt ullam vitae id veritatis tempora nisi voluptates adipisci doloribus consequatur nihil quam!",
      name: "User",
    },
    {
      id: 6,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quos magnam neque quia totam, placeat aliquam. Facere eius tempore beatae labore ab magni, unde sapiente sit laudantium, rerum quibusdam obcaecat Eius, mollitia cumque possimus atque ducimus omnis culpa quidem! Vel et consectetur assumenda, sapiente iste facere sunt nesciunt ullam vitae id veritatis tempora nisi voluptates adipisci doloribus consequatur nihil quam!",
      name: "Bot",
    },
    {
      id: 7,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quos magnam neque quia totam, placeat aliquam. Facere eius tempore beatae labore ab magni, unde sapiente sit laudantium, rerum quibusdam obcaecat Eius, mollitia cumque possimus atque ducimus omnis culpa quidem! Vel et consectetur assumenda, sapiente iste facere sunt nesciunt ullam vitae id veritatis tempora nisi voluptates adipisci doloribus consequatur nihil quam!",
      name: "User",
    },
    {
      id: 8,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quos magnam neque quia totam, placeat aliquam. Facere eius tempore beatae labore ab magni, unde sapiente sit laudantium, rerum quibusdam obcaecat Eius, mollitia cumque possimus atque ducimus omnis culpa quidem! Vel et consectetur assumenda, sapiente iste facere sunt nesciunt ullam vitae id veritatis tempora nisi voluptates adipisci doloribus consequatur nihil quam!",
      name: "User",
    },
    {
      id: 9,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quos magnam neque quia totam, placeat aliquam. Facere eius tempore beatae labore ab magni, unde sapiente sit laudantium, rerum quibusdam obcaecat Eius, mollitia cumque possimus atque ducimus omnis culpa quidem! Vel et consectetur assumenda, sapiente iste facere sunt nesciunt ullam vitae id veritatis tempora nisi voluptates adipisci doloribus consequatur nihil quam!",
      name: "User",
    },
    {
      id: 10,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quos magnam neque quia totam, placeat aliquam. Facere eius tempore beatae labore ab magni, unde sapiente sit laudantium, rerum quibusdam obcaecat Eius, mollitia cumque possimus atque ducimus omnis culpa quidem! Vel et consectetur assumenda, sapiente iste facere sunt nesciunt ullam vitae id veritatis tempora nisi voluptates adipisci doloribus consequatur nihil quam!",
      name: "Bot",
    },
    {
      id: 11,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quos magnam neque quia totam, placeat aliquam. Facere eius tempore beatae labore ab magni, unde sapiente sit laudantium, rerum quibusdam obcaecat Eius, mollitia cumque possimus atque ducimus omnis culpa quidem! Vel et consectetur assumenda, sapiente iste facere sunt nesciunt ullam vitae id veritatis tempora nisi voluptates adipisci doloribus consequatur nihil quam!",
      name: "User",
    },
  ]);
  const [isClicked, setIsClicked] = useState(true);
  const messagesEndRef = useRef(null);
  window.HTMLElement.prototype.scrollintoview = function () {};
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div>
      {isClicked ? (
        <div className="fixed bottom-0 right-0 m-5 w-4/6 h-3/5 md:w-2/6 md:h-5/6 flex flex-col ">
          <div className=" bg-sky-900  h-[11%] rounded-t-2xl p-5 text-center flex justify-between">
            <p>My Chat</p>
            <button className=" btn glass" onClick={() => {
                setIsClicked(!isClicked)
            }}>
              <CloseOutlinedIcon />
            </button>
          </div>
          <div
            className="backdrop-blur-sm overflow-y-auto h-[76%] "
            // style={{ height: "calc(100% - 4rem" }}
          >
            {messages.map((message) => (
              <Message key={message.id} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </div>
          <SendMessage messages={messages} setMessages={setMessages} />
        </div>
      ) : (
        <Support setIsClicked = {setIsClicked} isClicked = {isClicked} />
      )}
    </div>
  );
}

export default ChatBox;
