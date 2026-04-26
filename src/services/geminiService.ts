/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export async function getTeensAdvice(userMessage: string, chatHistory: { role: 'user' | 'model', parts: { text: string }[] }[], customSystemInstruction?: string) {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: userMessage,
        history: chatHistory,
        systemInstruction: customSystemInstruction,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to get response from server.");
    }

    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("Chat API Error:", error);
    throw error;
  }
}
