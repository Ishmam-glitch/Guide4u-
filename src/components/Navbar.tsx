/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logo } from './Logo';
import { useState } from 'react';
import { Menu, X, MessageSquareHeart, CalendarClock, BookMarked } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar({ onFeedbackOpen, onRoutineOpen, onStudyOpen }: { 
  onFeedbackOpen: () => void,
  onRoutineOpen: () => void,
  onStudyOpen: () => void
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
            onClick={onStudyOpen}
            className="hidden lg:flex items-center gap-2 text-slate-600 hover:text-indigo-600 px-4 py-2 rounded-xl text-sm font-semibold transition-all border border-slate-100 mr-2"
          >
            <BookMarked size={16} className="text-indigo-500" />
            Study Hub
          </button>
          
          <button 
            onClick={onRoutineOpen}
            className="hidden sm:block bg-slate-900 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-all shadow-md"
          >
            My Routine
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
                    onStudyOpen();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 rounded-xl transition-colors text-left"
                >
                  <BookMarked className="w-5 h-5" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold">Study Mastery</span>
                    <span className="text-[10px] text-slate-400">Subject focus & tips</span>
                  </div>
                </button>

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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
