/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { X, BookOpen, Clock, Lightbulb, CheckCircle2 } from 'lucide-react';

interface ComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

export function StudyGuideModal({ isOpen, onClose }: ComponentProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
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
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="bg-indigo-600 p-6 text-white shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Study Mastery</h2>
                    <p className="text-indigo-100 text-xs text-opacity-80">Tips for effective learning</p>
                  </div>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {/* Single Subject Focus */}
              <section>
                <div className="flex items-center gap-2 mb-4 text-indigo-600">
                  <Clock className="w-5 h-5" />
                  <h3 className="font-bold text-lg">How to Study a Single Subject</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-slate-800 mb-2">The "Deep Work" Method (45-15 Rule)</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Instead of switching between subjects, dedicate **45 minutes** of absolute focus to one subject, followed by a **15-minute** break. This allows your brain to reach "Flow State."
                    </p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>**First 10 mins:** Review previous notes to activate memory.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>**Active Recall:** Read a page, close the book, and explain it out loud as if teaching someone.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>**Problem Solving:** Spend 60% of your time doing exercises, not just reading.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Homework Management */}
              <section>
                <div className="flex items-center gap-2 mb-4 text-purple-600">
                  <Lightbulb className="w-5 h-5" />
                  <h3 className="font-bold text-lg">Homework Time Management</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100 italic text-sm text-purple-800">
                    "Quantity is not quality. Completing homework fast is good, but understanding is better."
                  </div>
                  <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100 text-sm text-indigo-800 font-bold flex items-center justify-center text-center">
                    Ideal Homework Time:<br />2 - 2.5 Hours total per day
                  </div>
                </div>
                <div className="mt-4 space-y-4">
                  <p className="text-sm text-slate-600 italic">Recommended Breakdown:</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-xl text-sm">
                      <span className="font-medium text-slate-700">Hardest Tasks (Math/Physics)</span>
                      <span className="font-bold text-indigo-600">1 Hour</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-xl text-sm">
                      <span className="font-medium text-slate-700">Reading & Written Work</span>
                      <span className="font-bold text-indigo-600">45 Mins</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-xl text-sm">
                      <span className="font-medium text-slate-700">Revision & Prep</span>
                      <span className="font-bold text-indigo-600">30 Mins</span>
                    </div>
                  </div>
                </div>
              </section>

              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 text-xs text-amber-800 leading-relaxed">
                <strong>Pro Tip:</strong> Always tackle your hardest homework first. Your brain has the most energy at the start of your study session.
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
              <button 
                onClick={onClose}
                className="px-6 py-2 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-900 transition-all text-sm"
              >
                Got it!
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
