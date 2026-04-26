/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI } from "@google/genai";

export async function getTeensAdvice(userMessage: string, chatHistory: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  try {
    // In Vite, process.env.GEMINI_API_KEY is replaced at build time via vite.config.ts
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey || apiKey === "undefined") {
      console.warn("GEMINI_API_KEY is not defined. AI features may not work.");
      throw new Error("AI Brain not connected. Please ensure the API key is configured.");
    }

    const ai = new GoogleGenAI({ apiKey });

    const systemInstruction = `You are 'Guide4U AI', a supportive, empathetic, and highly personalized chatbot for teenagers aged 13-17. 
    
    Personality: Personalized, empathetic, kind, and non-judgmental.
    Creator: Ishmam Karim (Lutfullahil Karim).
    About Ishmam: He is a 10th-grade student currently studying at Milestone School and College. He is deeply passionate about technology and loves playing football and other sports.
    
    Key Guidance Principles:
    - Personalization: Treat every teen's problem as unique.
    - Happiness & Path: Focus your advice on long-term well-being and finding the right path in life.
    - Tone: Be kind, non-judgmental, and relatable. 
    - Safety: If a user mentions self-harm or serious illegal activities, direct them to speak to a trusted adult or professional counselor immediately.`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [...chatHistory, { role: "user", parts: [{ text: userMessage }] }],
      config: {
        systemInstruction,
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("I had a little trouble thinking. Could you try that again?");
    }

    return text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}
