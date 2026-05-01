from app.services.memory_service import MemoryService
from app.services.llm_service import LLMService
from app.repositories.message_repo import MessageRepository

class ChatService:

    def __init__(self):
        self.memory = MemoryService()
        self.llm = LLMService()
        self.repo = MessageRepository()

    def handle_chat(self, db, session_id: str, user_input: str):

        # 1. Save user message
        self.repo.save(db, session_id, "user", user_input)

        # 2. Get memory
        history = self.memory.get_recent(db, session_id)

        # 3. Format for LLM
        messages = [
            {"role": msg.role, "content": msg.content}
            for msg in history
        ]

        # 4. Call LLM
        response = self.llm.generate(messages)

        # 5. Save assistant response
        self.repo.save(db, session_id, "assistant", response)

        return response