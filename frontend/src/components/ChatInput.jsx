import { useState, useRef } from "react";

const ChatInput = ({ onSend, loading }) => {
  const [text, setText] = useState("");
  const [focused, setFocused] = useState(false);
  const textareaRef = useRef(null);

  const handleSend = () => {
    if (!text.trim() || loading) return;
    onSend(text);
    setText("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = (e) => {
    setText(e.target.value);
    const ta = textareaRef.current;
    if (ta) {
      ta.style.height = "auto";
      ta.style.height = Math.min(ta.scrollHeight, 120) + "px";
    }
  };

  const canSend = text.trim();

  return (
    <div className={`chat-input-wrapper ${focused ? "focused" : ""}`}>
      <div className="input-glow" />
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Ask me anything…"
        rows={1}
        className="chat-textarea"
      />
      <button
        onClick={handleSend}
        disabled={loading || !canSend}
        className={`send-btn ${canSend && !loading ? "active" : ""}`}
        aria-label="Send message"
      >
        {loading ? (
          <span className="btn-spinner" />
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
    </div>
  );
};

export default ChatInput;