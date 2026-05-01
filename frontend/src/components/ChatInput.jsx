import { useState } from "react";

const ChatInput = ({ onSend, disabled }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim() || disabled) return;
    onSend(text);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chat-input">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
        disabled={disabled}
      />
      <button onClick={handleSend} disabled={disabled || !text.trim()}>
        {disabled ? "..." : "Send"}
      </button>
    </div>
  );
};

export default ChatInput;