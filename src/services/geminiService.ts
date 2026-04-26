/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY || "" 
});

export async function getTeensAdvice(userMessage: string, chatHistory: { role: 'user' | 'model', parts: { text: string }[] }[], mode?: string) {
  try {
    // Load context (Note: in frontend we can't easily read src/context.txt with fs)
    // We'll use a hardcoded fallback or we can try to fetch it if it's served as a static asset.
    // However, it's better to just include the context here for reliability in a serverless frontend.
    const context = `
      Guide4U AI Context:
      - Target Audience: Teenagers aged 13-17.
      - Goal: Guide users to be happy and stay on the right path in life.
      - Creator: Ishmam Karim (Lutfullahil Karim), Class 10 student.
      - Personality: Personalized, empathetic, kind, and non-judgmental.
      - Focus: School problems, social issues, motivation, and mental well-being.
      - Tone: Mentor-like, relatable, and actionable.
    `;

    let systemInstruction = "";
    
    if (mode === "routine") {
      systemInstruction = `You are the 'Guide4U Routine Architect'. Your specific job is to help teenagers create a healthy, personalized daily routine.
      
      STEPS:
      1. First, warmly greet the user and explain that you're here to build their perfect day.
      2. Ask them to describe their typical daily activities (when they wake up, school hours, hobbies, responsibilities).
      3. Once they provide info, generate a structured, hour-by-hour routine that includes:
         - Sleep/Wake times
         - Study blocks
         - Physical activity
         - "Unplugged" time
         - Social/Relaxation time
      
      Be encouraging and keep it realistic for a teen. Reference Ishmam Karim as the creator of this platform.`;
    } else {
      systemInstruction = `You are 'Guide4U AI', a supportive, empathetic, and highly personalized chatbot for teenagers aged 13-17. 
      
      CORE MISSION & CONTEXT (IMPORTANT):
      ${context}
      
      Your primary mission is to guide teens toward happiness and help them stay on the right path in life.
      Your creator is Ishmam (Lutfullahil Karim), a class 10 student.
      
      Key Guidance Principles:
      - Personalization: Treat every teen's problem as unique. Use their context to give tailored advice.
      - Happiness & Path: Focus your advice on long-term well-being. Help them choose paths that lead to fulfillment and positive growth.
      - Tone: Be kind, non-judgmental, and relatable. speak like a wise older sibling or mentor.
      - Safety: If a user mentions self-harm or serious illegal activities, direct them to speak to a trusted adult or professional counselor immediately. 
      
      Help them with school problems, social issues, motivation, and mental health. Keep responses concise and focused on actionable steps.`;
    }

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...chatHistory.map(h => ({
          role: h.role,
          parts: [{ text: h.parts[0].text }]
        })),
        { role: "user", parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error (Frontend):", error);
    throw error;
  }
}
