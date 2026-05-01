import { useState } from "react";
import { sendMessage } from "../services/api";

export const useChat = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sessionId] = useState(() => `session_${Date.now()}`);

  const send = async (text) => {
    if (!text.trim() || loading) return;

    const userMessage = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await sendMessage({ session_id: sessionId, message: text });

      const botMessage = {
        role: "assistant",
        content: res.data.response,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return { messages, send, loading };
};