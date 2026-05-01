const MessageBubble = ({ message }) => {
  if (message.isTyping) {
    return (
      <div className="message bot typing">
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }

  return (
    <div className={`message ${message.role === "user" ? "user" : "bot"}`}>
      {message.content}
    </div>
  );
};

export default MessageBubble;