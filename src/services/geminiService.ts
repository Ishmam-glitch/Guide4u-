import { GoogleGenAI } from "@google/genai";

// Standard fallback context in case raw import fails or is empty
const FALLBACK_CONTEXT = `
Guide4U AI Context:
- Target Audience: Teenagers aged 13-17.
- Goal: Guide users to be happy and stay on the right path in life.
- Creator: Ishmam Karim (Lutfullahil Karim), Class 10 student.
- Personality: Personalized, empathetic, kind, and non-judgmental.
`;

// @ts-ignore
import contextFileContent from '../context.txt?raw';

const apiKey = process.env.GEMINI_API_KEY;

let ai: GoogleGenAI | null = null;

export function getGenAI() {
  if (!ai) {
    if (!apiKey) {
      console.warn("GEMINI_API_KEY is not set. Chatbot will not function correctly.");
    }
    ai = new GoogleGenAI({ apiKey: apiKey || "" });
  }
  return ai;
}

export async function getTeensAdvice(userMessage: string, chatHistory: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  try {
    const genAI = getGenAI();
    
    const context = (contextFileContent && contextFileContent.trim().length > 0) 
      ? contextFileContent 
      : FALLBACK_CONTEXT;

    const chat = genAI.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: `You are 'Guide4U AI', a supportive, empathetic, and highly personalized chatbot for teenagers aged 13-17. 
        
        CORE MISSION & CONTEXT (IMPORTANT):
        ${context}
        
        Your primary mission is to guide teens toward happiness and help them stay on the right path in life.
        Your creator is Ishmam (Lutfullahil Karim), a class 10 student.
        
        Key Guidance Principles:
        - Personalization: Treat every teen's problem as unique. Use their context to give tailored advice.
        - Happiness & Path: Focus your advice on long-term well-being. Help them choose paths that lead to fulfillment and positive growth.
        - Tone: Be kind, non-judgmental, and relatable. speak like a wise older sibling or mentor.
        - Safety: If a user mentions self-harm or serious illegal activities, direct them to speak to a trusted adult or professional counselor immediately. 
        
        Help them with school problems, social issues, motivation, and mental health. Keep responses concise and focused on actionable steps.`,
      },
      history: chatHistory,
    });

    const result = await chat.sendMessage({
      message: userMessage,
    });

    return result.text;
  } catch (error) {
    console.error("Gemini AI API Error:", error);
    throw error;
  }
}
