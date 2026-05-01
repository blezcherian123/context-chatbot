from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.schemas.chat import ChatRequest, ChatResponse
from app.services.chat_service import ChatService
from app.db.session import get_db

router = APIRouter()
chat_service = ChatService()

@router.post("/chat", response_model=ChatResponse)
def chat(req: ChatRequest, db: Session = Depends(get_db)):
    response = chat_service.handle_chat(
        db,
        session_id=req.session_id,
        user_input=req.message
    )
    return ChatResponse(response=response)