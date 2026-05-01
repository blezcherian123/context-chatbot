const MessageBubble = ({ message }) => {
  return (
    <div className={`message ${message.role === "user" ? "user" : "bot"}`}>
      {message.content}
    </div>
  );
};

export default MessageBubble;