from sqlalchemy.orm import Session
from app.models.message import Message

class MessageRepository:

    def save(self, db: Session, session_id: str, role: str, content: str):
        msg = Message(
            session_id=session_id,
            role=role,
            content=content
        )
        db.add(msg)
        db.commit()
        db.refresh(msg)
        return msg

    def get_last_n(self, db: Session, session_id: str, n: int = 10):
        return (
            db.query(Message)
            .filter(Message.session_id == session_id)
            .order_by(Message.created_at.desc())
            .limit(n)
            .all()
        )