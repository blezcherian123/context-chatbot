from sqlalchemy import Column, String, Text, DateTime
from sqlalchemy.sql import func
import uuid

from app.db.base import Base

class Message(Base):
    __tablename__ = "messages"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    session_id = Column(String, index=True)
    role = Column(String)  # user / assistant
    content = Column(Text)
    created_at = Column(DateTime(timezone=True), server_default=func.now())