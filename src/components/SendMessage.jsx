import React, { useState } from "react";

function SendMessage({ messages, setMessages }) {
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.target.value);
    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
    setSearchHeight(`${textarea.scrollHeight}px`);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim().length) return;
    // console.log(value);
    const obj = { id: 1, text: value, name: "Bot" };
    setMessages([...messages, obj]);
    setValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevents inserting new line
      if (!value.trim().length) return;
      const obj = { id: 1, text: value, name: "Bot" };
      setMessages([...messages, obj]);
      setValue("");
    }
  };
  return (
    <div className="bg-base-200 p-2 mt-2 flex items-center justify-center w-full h-[13%]">
      <textarea
        value={value}
        onInput={changeHandler}
        onKeyDown={handleKeyDown}
        className="input placeholder:text-sm flex rounded-xl  overflow-auto max-h-[90%]  p-1 resize-none w-4/5"
        placeholder="How may I help you?"
      ></textarea>
      <button className="btn btn-ghost m-2 p-1 b-0" onClick={handleSubmit}>
        Send
      </button>
    </div>
  );
}

export default SendMessage;
