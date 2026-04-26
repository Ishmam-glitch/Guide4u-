/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for AI Chat
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history, systemInstruction } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        console.error("GEMINI_API_KEY is missing on the server.");
        return res.status(500).json({ error: "GEMINI_API_KEY is not configured on the server." });
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const defaultSystemInstruction = `You are 'Guide4U AI', a supportive, empathetic, and highly personalized chatbot for teenagers aged 13-17. 
      
      Personality: Personalized, empathetic, kind, and non-judgmental.
      Creator: Ishmam Karim (Lutfullahil Karim), Class 10 student.
      
      Key Guidance Principles:
      - Personalization: Treat every teen's problem as unique.
      - Happiness & Path: Focus your advice on long-term well-being.
      - Tone: Be kind, non-judgmental, and relatable. 
      - Safety: If a user mentions self-harm or serious illegal activities, direct them to speak to a trusted adult or professional counselor immediately.`;

      // Construct contents with optional system instruction
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [...(history || []), { role: "user", parts: [{ text: message }] }],
        config: {
          systemInstruction: systemInstruction || defaultSystemInstruction,
        }
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Server AI Error:", error);
      res.status(500).json({ error: error.message || "Failed to process AI request." });
    }
  });

  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve the built files
    const distPath = path.resolve(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer().catch(err => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
