/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getTeensAdvice(userMessage: string, chatHistory: { role: 'user' | 'model', parts: { text: string }[] }[], customSystemInstruction?: string) {
  try {
    const defaultSystemInstruction = `You are 'Guide4U AI', a supportive, empathetic, and highly personalized chatbot for teenagers aged 13-17. 
    
    Personality: Personalized, empathetic, kind, and non-judgmental.
    Creator: Ishmam Karim (Lutfullahil Karim).
    About Ishmam: He is a 10th-grade student currently studying at Milestone School and College. He is deeply passionate about technology and loves playing football and other sports.
    
    Key Guidance Principles:
    - Personalization: Treat every teen's problem as unique.
    - Happiness & Path: Focus your advice on long-term well-being.
    - Tone: Be kind, non-judgmental, and relatable. 
    - Safety: If a user mentions self-harm or serious illegal activities, direct them to speak to a trusted adult or professional counselor immediately.`;

    const finalSystemInstruction = customSystemInstruction || defaultSystemInstruction;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [...chatHistory, { role: "user", parts: [{ text: userMessage }] }],
      config: {
        systemInstruction: finalSystemInstruction,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini AI Error:", error);
    throw error;
  }
}
