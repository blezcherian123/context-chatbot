import { useState, useRef, useEffect } from "react";
import { sendMessage } from "../services/api";

export const useChat = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sessionId] = useState(() => `session_${Date.now()}`);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const send = async (text) => {
    if (!text.trim() || loading) return;

    const userMessage = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    // Add typing indicator
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: "", isTyping: true },
    ]);

    try {
      const res = await sendMessage({ session_id: sessionId, message: text });

      // Remove typing indicator and add actual response
      setMessages((prev) =>
        prev.map((msg, idx) =>
          idx === prev.length - 1
            ? { role: "assistant", content: res.data.response, isTyping: false }
            : msg
        )
      );
    } catch (err) {
      console.error(err);
      // Remove typing indicator and add error message
      setMessages((prev) =>
        prev.map((msg, idx) =>
          idx === prev.length - 1
            ? { role: "assistant", content: "Sorry, something went wrong.", isTyping: false }
            : msg
        )
      );
    } finally {
      setLoading(false);
    }
  };

  return { messages, send, loading, messagesEndRef };
};