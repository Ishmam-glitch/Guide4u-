/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI } from "@google/genai";

// We initialize inside the function to avoid crashing at module load if the key is missing
function getAI() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not defined. Please configure it in your environment.");
  }
  return new GoogleGenAI({ apiKey });
}

export async function getTeensAdvice(userMessage: string, chatHistory: { role: 'user' | 'model', parts: { text: string }[] }[], customSystemInstruction?: string) {
  try {
    const ai = getAI();
    
    const defaultSystemInstruction = `You are 'Guide4U AI', a supportive, empathetic, and highly personalized chatbot for teenagers aged 13-17. 
    
    Personality: Personalized, empathetic, kind, and non-judgmental.
    Creator: Ishmam Karim (Lutfullahil Karim), Class 10 student.
    
    Key Guidance Principles:
    - Personalization: Treat every teen's problem as unique.
    - Happiness & Path: Focus your advice on long-term well-being.
    - Tone: Be kind, non-judgmental, and relatable. 
    - Safety: If a user mentions self-harm or serious illegal activities, direct them to speak to a trusted adult or professional counselor immediately.`;

    const finalSystemInstruction = customSystemInstruction || defaultSystemInstruction;

    // Using gemini-3-flash-preview as per skill recommendation
    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: finalSystemInstruction,
      },
      history: chatHistory,
    });

    const result = await chat.sendMessage({ 
      message: userMessage
    });
    
    return result.text;
  } catch (error) {
    console.error("Gemini AI Error:", error);
    throw error;
  }
}
