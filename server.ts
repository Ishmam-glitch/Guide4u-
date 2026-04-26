/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.status(500).json({ error: "GEMINI_API_KEY is not configured on the server." });
      }

      const ai = new GoogleGenAI({ apiKey });
      
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
          context = fs.readFileSync(contextPath, "utf-8");
        }
      } catch (err) {
        console.error("Error reading context file:", err);
      }

      const systemInstruction = `You are 'Guide4U AI', a supportive, empathetic, and highly personalized chatbot for teenagers aged 13-17. 
      
      CORE MISSION & CONTEXT:
      ${context}
      
      Your primary mission is to guide teens toward happiness and help them stay on the right path in life.
      Your creator is Ishmam (Lutfullahil Karim), a class 10 student.
      
      Key Guidance Principles:
      - Personalization: Treat every teen's problem as unique.
      - Happiness & Path: Focus your advice on long-term well-being.
      - Tone: Be kind, non-judgmental, and relatable. 
      - Safety: If a user mentions self-harm or serious illegal activities, direct them to speak to a trusted adult or professional counselor immediately.`;

      // Using gemini-1.5-flash for maximum compatibility
      const chat = ai.chats.create({
        model: "gemini-1.5-flash",
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

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
