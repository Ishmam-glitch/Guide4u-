/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logo } from './Logo';
import { useState } from 'react';
import { Menu, X, MessageSquareHeart, CalendarClock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar({ onChatOpen, onFeedbackOpen, onRoutineOpen }: { 
  onChatOpen: () => void, 
  onFeedbackOpen: () => void,
  onRoutineOpen: () => void
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-3">
        <Logo />
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#home" className="hover:text-indigo-600 transition-colors">Home</a>
          <a href="#problems" className="hover:text-indigo-600 transition-colors">Solutions</a>
          <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={onChatOpen}
            className="hidden sm:block bg-slate-900 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-all shadow-md"
          >
            Chat with AI
          </button>

          <button 
            onClick={toggleMenu}
            className="p-2 rounded-xl hover:bg-slate-100 transition-colors text-slate-600"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute top-full right-6 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 overflow-hidden"
            >
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => {
                    onRoutineOpen();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 rounded-xl transition-colors text-left"
                >
                  <CalendarClock className="w-5 h-5" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold">Personalized Routine</span>
                    <span className="text-[10px] text-slate-400">Your daily teen success guide</span>
                  </div>
                </button>

                <button
                  onClick={() => {
                    onFeedbackOpen();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 rounded-xl transition-colors text-left"
                >
                  <MessageSquareHeart className="w-5 h-5" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold">Feedback</span>
                    <span className="text-[10px] text-slate-400">Share your thoughts</span>
                  </div>
                </button>

                <div className="md:hidden border-t border-slate-50 my-1 pt-1">
                   <button
                    onClick={() => {
                      onChatOpen();
                      setIsMenuOpen(false);
                    }}
                    className="flex w-full items-center gap-3 px-4 py-3 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 rounded-xl transition-colors text-left"
                  >
                    <div className="w-5 h-5 bg-slate-900 rounded-md" />
                    <span className="text-sm font-bold">Chat with AI</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
