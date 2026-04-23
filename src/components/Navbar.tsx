/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logo } from './Logo';

export function Navbar({ onChatOpen, onFeedbackOpen }: { onChatOpen: () => void, onFeedbackOpen: () => void }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-3">
        <Logo />
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#home" className="hover:text-indigo-600 transition-colors">Home</a>
          <a href="#problems" className="hover:text-indigo-600 transition-colors">Solutions</a>
          <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
          <button 
            onClick={onFeedbackOpen}
            className="hover:text-indigo-600 transition-colors cursor-pointer"
          >
            Feedback
          </button>
        </div>
        
        <button 
          onClick={onChatOpen}
          className="bg-slate-900 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-all shadow-md"
        >
          Chat with AI
        </button>
      </div>
    </nav>
  );
}
