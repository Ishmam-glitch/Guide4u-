/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { X, Sun, Coffee, BookOpen, Heart, Moon, CheckCircle2 } from 'lucide-react';

interface RoutineStep {
  time: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
}

const TEEN_ROUTINE: RoutineStep[] = [
  {
    time: "07:00 AM",
    title: "Morning Reset",
    desc: "Drink a glass of water and stretch for 5 mins. Avoid your phone for the first 20 mins.",
    icon: <Sun className="w-5 h-5" />,
    color: "bg-amber-100 text-amber-600"
  },
  {
    time: "08:15 AM",
    title: "Deep Work / School",
    desc: "Focus on your most difficult task or subject first while your brain is fresh.",
    icon: <BookOpen className="w-5 h-5" />,
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    time: "01:00 PM",
    title: "Social Recharge",
    desc: "Eat away from screens. Talk to a friend or listen to music you love.",
    icon: <Coffee className="w-5 h-5" />,
    color: "bg-green-100 text-green-600"
  },
  {
    time: "04:00 PM",
    title: "Movement",
    desc: "Walk, play a sport, or dance. 30 mins of body movement reduces anxiety.",
    icon: <Heart className="w-5 h-5" />,
    color: "bg-pink-100 text-pink-600"
  },
  {
    time: "09:30 PM",
    title: "Digital Sunset",
    desc: "Devices away. Dim the lights. Read a physical book or journal your thoughts.",
    icon: <Moon className="w-5 h-5" />,
    color: "bg-purple-100 text-purple-600"
  }
];

export function PersonalizedRoutineModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
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
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="p-6 sm:p-8">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-2">Teen Life Routine</h2>
                <p className="text-slate-500 text-sm">A scientifically backed skeleton for a happy, productive day.</p>
              </div>

              <div className="space-y-6">
                {TEEN_ROUTINE.map((step, idx) => (
                  <div key={idx} className="flex gap-4 relative">
                    {idx !== TEEN_ROUTINE.length - 1 && (
                      <div className="absolute left-6 top-10 bottom-[-24px] w-0.5 bg-slate-100" />
                    )}
                    <div className={`w-12 h-12 shrink-0 ${step.color} rounded-2xl flex items-center justify-center z-10 shadow-sm`}>
                      {step.icon}
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider">{step.time}</span>
                        <CheckCircle2 className="w-4 h-4 text-slate-200" />
                      </div>
                      <h4 className="font-bold text-slate-800 mb-1">{step.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-50">
                <button
                  onClick={onClose}
                  className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl"
                >
                  Got it!
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
