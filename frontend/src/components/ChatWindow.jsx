import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import "../styles/chat.css";

const ChatWindow = ({ messages, onSend, loading, messagesEndRef }) => {
  return (
    <div className="chat-container">
      <div className="chat-header">
        <span className="header-text">AI Assistant</span>
      </div>

      <div className="chat-messages">
        {messages.map((msg, index) => (
          <MessageBubble key={index} message={msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <ChatInput onSend={onSend} disabled={loading} />
    </div>
  );
};

export default ChatWindow;