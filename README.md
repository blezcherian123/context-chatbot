# Context-Based Chatbot

A full-stack AI chatbot application with context-aware conversations using FastAPI (backend) and React (frontend).

## 🏗️ Project Structure

```
Context-based-Chatbot/
├── backend/                 # FastAPI backend
│   ├── app/
│   │   ├── api/            # API routes
│   │   ├── core/           # Configuration
│   │   ├── db/             # Database session
│   │   ├── models/         # SQLAlchemy models
│   │   ├── repositories/   # Data access layer
│   │   ├── schemas/        # Pydantic schemas
│   │   └── services/       # Business logic
│   ├── requirements.txt
│   └── venv/               # Virtual environment
│
└── frontend/               # React frontend
    ├── src/
    │   ├── components/    # UI components
    │   ├── hooks/          # Custom React hooks
    │   ├── services/       # API client
    │   └── styles/        # CSS styles
    └── package.json
```

## 🚀 Features

- **Context-Aware Conversations**: Remembers chat history per session
- **Real-time Messaging**: Send messages and receive AI responses
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, dark-themed interface with smooth interactions
- **Loading States**: Visual feedback during API calls
- **Error Handling**: Graceful error messages for failed requests

## 🛠️ Tech Stack

### Backend
- **FastAPI** — Modern Python web framework
- **SQLAlchemy** — ORM for database operations
- **Groq** — LLM API for AI responses
- **Pydantic** — Data validation

### Frontend
- **React 19** — UI library
- **Vite** — Build tool
- **Axios** — HTTP client
- **CSS3** — Styling

## ⚙️ Setup

### Prerequisites
- Python 3.10+
- Node.js 18+
- Groq API Key

### Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
echo DATABASE_URL=sqlite:///./chatbot.db
echo GROQ_API_KEY=your_groq_api_key_here > .env

# Start server
uvicorn app.main:app --reload
```

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/chat` | Send a message and get AI response |

### Request Body
```json
{
  "session_id": "session_123456",
  "message": "Hello, how are you?"
}
```

### Response
```json
{
  "response": "Hello! I'm doing well, thank you for asking."
}
```

## 🔧 Environment Variables

Create a `.env` file in the `backend/` directory:

```env
DATABASE_URL=sqlite:///./chatbot.db
GROQ_API_KEY=your_groq_api_key_here
```

> **Note**: Get your Groq API key from [groq.com](https://groq.com/)

## 📱 Usage

1. Start the backend server (port 8000)
2. Start the frontend server (port 5173)
3. Open http://localhost:5173 in your browser
4. Type a message and press Enter or click Send
5. The AI will respond based on conversation context

## 📁 Key Files

| File | Description |
|------|-------------|
| [backend/app/main.py](backend/app/main.py) | FastAPI app entry point |
| [backend/app/api/chat.py](backend/app/api/chat.py) | Chat API route |
| [backend/app/services/chat_service.py](backend/app/services/chat_service.py) | Chat business logic |
| [backend/app/services/llm_service.py](backend/app/services/llm_service.py) | LLM integration |
| [frontend/src/hooks/useChat.js](frontend/src/hooks/useChat.js) | Chat state management |
| [frontend/src/components/ChatWindow.jsx](frontend/src/components/ChatWindow.jsx) | Main chat UI |

## 📄 License

MIT License