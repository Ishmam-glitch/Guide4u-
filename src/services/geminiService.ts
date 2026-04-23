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
      systemInstruction: `You are 'Guide4U AI', a supportive, empathetic, and practical chatbot for teenagers aged 13-17. 
      Your creator is Ishmam (Lutfullahil Karim), a class 10 student.
      Always be kind, non-judgmental, and use a tone that resonates with modern teens without being 'cringy'. 
      If a user mentions self-harm or serious illegal activities, direct them to speak to a trusted adult or professional counselor immediately. 
      Help them with school problems, social issues, motivation, and mental well-being. Keep responses concise and focused on actionable advice.`,
    },
    history: chatHistory,
  });

  const response = await chat.sendMessage({
    message: userMessage,
  });

  return response.text;
}
