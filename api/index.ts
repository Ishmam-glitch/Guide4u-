import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// API Routes
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history, mode } = req.body;
    // Following migration guidelines: Use GOOGLE_GENAI_API_KEY on server-side
    const apiKey = (process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== "MY_GEMINI_API_KEY") 
      ? process.env.GEMINI_API_KEY 
      : process.env.GOOGLE_GENAI_API_KEY;

    if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
      console.error("Missing valid API key. GEMINI_API_KEY:", !!process.env.GEMINI_API_KEY, "GOOGLE_GENAI_API_KEY:", !!process.env.GOOGLE_GENAI_API_KEY);
      return res.status(500).json({ error: "Gemini API key is not configured correctly on the server." });
    }

    // Initialize properly as per skill guidelines
    const ai = new GoogleGenAI({ apiKey });
    
    // Load context
    let context = `
      Guide4U AI Context:
      - Target Audience: Teenagers aged 13-17.
      - Goal: Guide users to be happy and stay on the right path in life.
      - Creator: Ishmam Karim (Lutfullahil Karim), Class 10 student.
      - Personality: Personalized, empathetic, kind, and non-judgmental.
    `;

    try {
      const contextPath = path.join(process.cwd(), "src", "context.txt");
      if (fs.existsSync(contextPath)) {
        const fileContext = fs.readFileSync(contextPath, "utf-8");
        if (fileContext.trim().length > 0) {
          context = fileContext;
        }
      }
    } catch (err) {
      console.error("Error reading context file on server:", err);
    }

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

    // Use the correct chat creation method as per skill
    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction,
      },
      history: history || [],
    });

    const result = await chat.sendMessage({
      message: message
    });
    
    res.json({ text: result.text });
  } catch (error) {
    console.error("Server API Error:", error);
    res.status(500).json({ error: "Failed to process chat request." });
  }
});

export default app;
