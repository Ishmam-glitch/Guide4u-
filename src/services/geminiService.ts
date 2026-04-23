import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

let ai: GoogleGenAI | null = null;

export function getGenAI() {
  if (!ai) {
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not set in environment variables.");
    }
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
}

export async function getTeensAdvice(userMessage: string, chatHistory: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  const genAI = getGenAI();
  
  const chat = genAI.chats.create({
    model: "gemini-3-flash-preview",
    config: {
      systemInstruction: `You are 'Guide4U AI', a supportive, empathetic, and highly personalized chatbot for teenagers aged 13-17. 
      Your primary mission is to guide teens toward happiness and help them stay on the right path in life.
      Your creator is Ishmam (Lutfullahil Karim), a class 10 student.
      
      Key Guidance Principles:
      - Personalization: Treat every teen's problem as unique. Use their context to give tailored advice.
      - Happiness & Path: Focus your advice on long-term well-being. Help them choose paths that lead to fulfillment and positive growth.
      - Tone: Be kind, non-judgmental, and relatable. Speak like a mentor who "gets it."
      - Safety: If a user mentions self-harm or serious illegal activities, direct them to speak to a trusted adult or professional counselor immediately. 
      
      Help them with school problems, social issues, motivation, and mental health. Keep responses concise and focused on actionable steps to improve their situation.`,
    },
    history: chatHistory,
  });

  const response = await chat.sendMessage({
    message: userMessage,
  });

  return response.text;
}
