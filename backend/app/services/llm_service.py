from groq import Groq
from app.core.config import settings

class LLMService:

    def __init__(self):
        self.client = Groq(api_key=settings.GROQ_API_KEY)

    def generate(self, messages):
        completion = self.client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=messages
        )

        return completion.choices[0].message.content