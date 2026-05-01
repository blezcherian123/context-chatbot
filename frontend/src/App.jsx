import ChatWindow from "./components/ChatWindow";
import { useChat } from "./hooks/useChat";

function App() {
  const { messages, send, loading } = useChat();

  return <ChatWindow messages={messages} onSend={send} loading={loading} />;
}

export default App;