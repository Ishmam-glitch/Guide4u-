/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getTeensAdvice(userMessage: string, chatHistory: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  try {
    const systemInstruction = `You are 'Guide4U AI', a supportive, empathetic, and highly personalized chatbot for teenagers aged 13-17. 
    
    Personality: Personalized, empathetic, kind, and non-judgmental.
    Creator: Ishmam Karim (Lutfullahil Karim), Class 10 student.
    
    Key Guidance Principles:
    - Personalization: Treat every teen's problem as unique.
    - Happiness & Path: Focus your advice on long-term well-being.
    - Tone: Be kind, non-judgmental, and relatable. 
    - Safety: If a user mentions self-harm or serious illegal activities, direct them to speak to a trusted adult or professional counselor immediately.`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [...chatHistory, { role: "user", parts: [{ text: userMessage }] }],
      config: {
        systemInstruction,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}
