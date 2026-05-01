import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import "../styles/chat.css";

const ChatWindow = ({ messages, onSend, loading }) => {
  return (
    <div className="chat-container">
      <div className="chat-header">AI Chatbot</div>

      <div className="chat-messages">
        {messages.map((msg, index) => (
          <MessageBubble key={index} message={msg} />
        ))}
      </div>

      <ChatInput onSend={onSend} disabled={loading} />
    </div>
  );
};

export default ChatWindow;