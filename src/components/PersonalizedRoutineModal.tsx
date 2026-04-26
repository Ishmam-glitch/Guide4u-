/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { X, Bot, User, Sparkles, Loader2, Send } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { getTeensAdvice } from '../services/geminiService';
import Markdown from 'react-markdown';

interface Message {
  role: 'bot' | 'user';
  text: string;
}

export function PersonalizedRoutineModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Hey! I'm Ishmam's AI guide. I'm here to help you build a routine that actually works for you. How's your day usually planned out? Tell me about your tasks or when things happen!" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isGenerating]);

  const handleSend = async () => {
    if (!inputValue.trim() || isGenerating) return;

    const userMsg = inputValue.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputValue('');
    setIsGenerating(true);

    try {
      const history = messages.map(m => ({
        role: m.role === 'bot' ? 'model' as const : 'user' as const,
        parts: [{ text: m.text }]
      }));

      // Extra context for the routine builder
      const routinePrompt = `
        User response: "${userMsg}"
        
        Your Goal: Help the user build a personalized daily routine. 
        - Ask about their day naturally.
        - Ask about school times, wake up, bed time, tuition, or any other tasks they have.
        - When they give you enough information, or if they ask for the routine, provide a clear, formatted daily routine using Markdown (time slots, emojis, encouraging tone).
        - Focus on balance (study, rest, hobbies).
        - Be supportive and non-judgmental.
      `;
      
      const result = await getTeensAdvice(routinePrompt, history);
      setMessages(prev => [...prev, { role: 'bot', text: result }]);
    } catch (error) {
      console.error("Error in routine chat:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Oops! I had a little technical glitch. Could you try saying that again?" }]);
    } finally {
      setIsGenerating(false);
    }
  };

  const reset = () => {
    setMessages([
      { role: 'bot', text: "Hey! I'm Ishmam's AI guide. I'm here to help you build a routine that actually works for you. How's your day usually planned out? Tell me about your tasks or when things happen!" }
    ]);
    setInputValue('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[85vh] max-h-[700px]"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-indigo-600 text-white shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Routine Builder</h2>
                  <p className="text-indigo-100 text-xs text-opacity-80">AI Personalized Schedule</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth bg-slate-50/50"
            >
              {messages.map((m, i) => (
                <motion.div
                  initial={{ opacity: 0, x: m.role === 'bot' ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i}
                  className={`flex ${m.role === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm ${
                      m.role === 'bot' ? 'bg-indigo-100 text-indigo-600' : 'bg-white text-slate-600 border border-slate-200'
                    }`}>
                      {m.role === 'bot' ? <Bot size={16} /> : <User size={16} />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      m.role === 'bot' 
                        ? 'bg-white text-slate-800 rounded-tl-none border border-slate-100' 
                        : 'bg-indigo-600 text-white rounded-tr-none'
                    }`}>
                      {m.role === 'bot' ? (
                        <div className="prose prose-sm prose-indigo max-w-none">
                          <Markdown>{m.text}</Markdown>
                        </div>
                      ) : (
                        m.text
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {isGenerating && (
                <div className="flex justify-start">
                  <div className="flex gap-2 items-center text-slate-400 text-sm italic ml-11">
                    <Loader2 className="w-4 h-4 animate-spin text-indigo-500" />
                    Ishmam's AI is working...
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-100 bg-white shrink-0">
                <div className="relative max-w-lg mx-auto">
                  <input 
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your answer here..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-6 pr-14 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
                  />
                  <button 
                    onClick={handleSend}
                    disabled={!inputValue.trim() || isGenerating}
                    className="absolute right-2 top-2 p-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold font-sans">
                    Crafted by Ishmam's AI
                  </p>
                  <button 
                    onClick={reset}
                    className="text-[10px] text-indigo-600 font-bold uppercase hover:underline"
                  >
                    Reset Chat
                  </button>
                </div>
              </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
