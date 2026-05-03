import { useEffect, useRef } from "react";

const MessageBubble = ({ message, isLatest }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && isLatest) {
      ref.current.classList.add("animate-in");
    }
  }, [isLatest]);

  if (message.isTyping) {
    return (
      <div className="message-row bot">
        <div className="avatar bot-avatar">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="currentColor"/>
          </svg>
        </div>
        <div className="message bot typing">
          <span /><span /><span />
        </div>
      </div>
    );
  }

  const isUser = message.role === "user";

  return (
    <div ref={ref} className={`message-row ${isUser ? "user" : "bot"}`}>
      {!isUser && (
        <div className="avatar bot-avatar">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="currentColor"/>
          </svg>
        </div>
      )}
      <div className={`message ${isUser ? "user" : "bot"}`}>
        {message.content}
      </div>
      {isUser && <div className="avatar user-avatar">U</div>}
    </div>
  );
};

export default MessageBubble;