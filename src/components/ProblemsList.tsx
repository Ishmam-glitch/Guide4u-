/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COMMON_TEEN_PROBLEMS, type ProblemSolution } from '../constants';
import { ChevronDown, BookOpen, Users, Heart, ShieldAlert } from 'lucide-react';
import { cn } from '../lib/utils';

export function ProblemsList() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const getIcon = (category: string) => {
    switch (category) {
      case 'academic': return <BookOpen className="w-5 h-5" />;
      case 'social': return <Users className="w-5 h-5" />;
      case 'personal': return <Heart className="w-5 h-5" />;
      case 'health': return <ShieldAlert className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <section id="problems" className="py-20 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Common <span className="text-gradient">Teen Challenges</span>
          </h2>
          <p className="text-slate-600">Most common issues faced by students aged 13-17</p>
        </div>

        <div className="space-y-4">
          {COMMON_TEEN_PROBLEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "group cursor-pointer rounded-2xl transition-all duration-300",
                selectedId === item.id 
                  ? "bg-white shadow-xl ring-1 ring-indigo-100 p-6" 
                  : "bg-white/50 hover:bg-white p-5 border border-slate-200"
              )}
              onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                    selectedId === item.id 
                      ? "bg-indigo-600 text-white" 
                      : "bg-slate-100 text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600"
                  )}>
                    {getIcon(item.category)}
                  </div>
                  <div>
                    <h3 className={cn(
                      "font-bold transition-colors",
                      selectedId === item.id ? "text-indigo-600" : "text-slate-800"
                    )}>
                      {item.question}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-0.5">
                      {item.problem}
                    </p>
                  </div>
                </div>
                <ChevronDown className={cn(
                  "w-5 h-5 text-slate-400 transition-transform duration-300",
                  selectedId === item.id && "rotate-180 text-indigo-600"
                )} />
              </div>

              <AnimatePresence>
                {selectedId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 mt-6 border-t border-slate-100">
                      <div className="bg-indigo-50/50 rounded-xl p-4 border border-indigo-100/50">
                        <p className="text-slate-700 leading-relaxed font-body">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
