from app.repositories.message_repo import MessageRepository

class MemoryService:

    def __init__(self):
        self.repo = MessageRepository()

    def get_recent(self, db, session_id: str, limit=10):
        messages = self.repo.get_last_n(db, session_id, limit)

        # reverse to chronological order
        return list(reversed(messages))