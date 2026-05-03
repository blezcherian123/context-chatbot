import { useEffect } from "react";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import "../styles/chat.css";

const ChatWindow = ({ messages, onSend, loading, messagesEndRef }) => {
  useEffect(() => {
    messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, messagesEndRef]);

  return (
    <div className="chat-shell">
      {/* Ambient background orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="chat-container">
        {/* Header */}
        <header className="chat-header">
          <div className="header-left">
            <div className="header-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="currentColor"/>
              </svg>
            </div>
            <div>
              <p className="header-name">Jarvis</p>
              <p className="header-status">
                <span className="status-dot" />
                Online
              </p>
            </div>
          </div>
          <div className="header-actions">
            <button className="icon-btn" aria-label="More options">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="5" r="1.5" fill="currentColor"/>
                <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
                <circle cx="12" cy="19" r="1.5" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </header>

        {/* Messages */}
        <main className="chat-messages">
          {messages.length === 0 && (
            <div className="empty-state">
              <div className="empty-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill="currentColor"/>
                </svg>
              </div>
              <p className="empty-title">How can I help you?</p>
              <p className="empty-sub">Ask me anything — I'm here for you.</p>
            </div>
          )}
          {messages.map((msg, i) => (
            <MessageBubble
              key={i}
              message={msg}
              isLatest={i === messages.length - 1}
            />
          ))}
          <div ref={messagesEndRef} />
        </main>

        {/* Input */}
        <footer className="chat-footer">
          <ChatInput onSend={onSend} loading={loading} />
        </footer>
      </div>
    </div>
  );
};

export default ChatWindow;