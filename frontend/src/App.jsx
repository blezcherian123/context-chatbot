import ChatWindow from "./components/ChatWindow";
import { useChat } from "./hooks/useChat";

function App() {
  const { messages, send, loading, messagesEndRef } = useChat();

  return (
    <ChatWindow
      messages={messages}
      onSend={send}
      loading={loading}
      messagesEndRef={messagesEndRef}
    />
  );
}

export default App;