/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { X, Bot, User, Sparkles, Loader2, Send } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { getTeensAdvice } from '../services/geminiService';
import Markdown from 'react-markdown';

const QUESTIONS = [
  { id: 'schoolStart', question: "First things first, what time does your school start?" },
  { id: 'schoolEnd', question: "And when does it usually end?" },
  { id: 'wakeUp', question: "What time do you usually wake up in the morning?" },
  { id: 'bedTime', question: "When do you typically head to bed?" },
  { id: 'tuition', question: "Do you have any private tuition? If so, what time(s)?" }
];

interface Message {
  role: 'bot' | 'user';
  text: string;
}

export function PersonalizedRoutineModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Hey! I'm Ishmam's AI guide. I'm here to help you build a routine that actually works for you. Let's start with a few questions." },
    { role: 'bot', text: QUESTIONS[0].question }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedRoutine, setGeneratedRoutine] = useState<string | null>(null);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isGenerating, generatedRoutine]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const currentAnswer = inputValue.trim();
    const currentQuestionId = QUESTIONS[step].id;
    
    setMessages(prev => [...prev, { role: 'user', text: currentAnswer }]);
    const updatedAnswers = { ...answers, [currentQuestionId]: currentAnswer };
    setAnswers(updatedAnswers);
    setInputValue('');

    if (step < QUESTIONS.length - 1) {
      const nextStep = step + 1;
      setStep(nextStep);
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'bot', text: QUESTIONS[nextStep].question }]);
      }, 500);
    } else {
      // All questions answered, generate routine
      setIsGenerating(true);
      setMessages(prev => [...prev, { role: 'bot', text: "Got it! Thanks for sharing. I'm crafting your personalized routine right now... 🧪✨" }]);
      
      try {
        const prompt = `
          Generate a personalized daily routine for a teenager based on these details:
          - School starts: ${updatedAnswers.schoolStart || 'Not specified'}
          - School ends: ${updatedAnswers.schoolEnd || 'Not specified'}
          - Wakes up: ${updatedAnswers.wakeUp || 'Not specified'}
          - Bedtime: ${updatedAnswers.bedTime || 'Not specified'}
          - Tuition: ${updatedAnswers.tuition || 'Not specified'}

          Format the routine with clear time slots and emojis. Make it encouraging, non-judgmental, and focused on balance (study, rest, social). 
          Keep it concise but detailed enough to be useful. Focus on being a supportive guide (Guide4U).
          Start the response with a friendly encouraging remark.
        `;
        
        const result = await getTeensAdvice(prompt, []);
        setGeneratedRoutine(result);
      } catch (error) {
        console.error("Error generating routine:", error);
        setMessages(prev => [...prev, { role: 'bot', text: "Oops! I hit a snag while generating your routine. Could you try again?" }]);
      } finally {
        setIsGenerating(false);
      }
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setMessages([
      { role: 'bot', text: "Hey! I'm Ishmam's AI guide. I'm here to help you build a routine that actually works for you. Let's start with a few questions." },
      { role: 'bot', text: QUESTIONS[0].question }
    ]);
    setGeneratedRoutine(null);
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
                      {m.text}
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

              {generatedRoutine && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white border border-indigo-100 rounded-2xl p-6 mt-4 shadow-md overflow-hidden relative"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500" />
                  <div className="flex items-center gap-2 mb-4 text-indigo-700 font-bold">
                    <Sparkles className="w-5 h-5 text-indigo-500" />
                    <span>Your Personalized Routine</span>
                  </div>
                  <div className="prose prose-sm prose-indigo max-w-none prose-p:leading-relaxed prose-li:my-1 text-slate-700">
                    <Markdown>{generatedRoutine}</Markdown>
                  </div>
                  <button 
                    onClick={reset}
                    className="mt-6 w-full py-4 bg-indigo-50 text-indigo-600 rounded-xl font-bold hover:bg-indigo-100 transition-all flex items-center justify-center gap-2"
                  >
                    Create Another Routine
                  </button>
                </motion.div>
              )}
            </div>

            {/* Input */}
            {!generatedRoutine && (
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
                <p className="text-[10px] text-slate-400 mt-3 text-center uppercase tracking-widest font-bold font-sans">
                  Crafted by Ishmam's Supportive AI
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
