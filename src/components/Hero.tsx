/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ChevronRight, CalendarClock } from 'lucide-react';

export function Hero({ onRoutineOpen }: { onRoutineOpen: () => void }) {
  return (
    <section id="home" className="pt-32 pb-16 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative">
        {/* Background blobs */}
        <div className="absolute top-0 -left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-0 -right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        
        <motion.div
// ... existing animation props ...
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 rounded-full border border-indigo-100">
            For Teens, By Teens
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            <span className="text-gradient">Remove your anxiety.</span> <br />
            Find your peace within.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-body font-light italic">
            "Navigating age 13 to 17 can be tough. From academic stress to social circles, 
            Guide4U is here to help you solve common problems with real solutions."
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#problems" 
              className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-xl shadow-indigo-200/50 group w-full sm:w-auto justify-center"
            >
              Explore Solutions
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              onClick={onRoutineOpen}
              className="bg-white text-indigo-600 border-2 border-indigo-100 px-8 py-4 rounded-2xl font-bold text-lg hover:border-indigo-600 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <CalendarClock className="w-5 h-5 text-indigo-500" />
              Get My AI Routine
            </button>
          </div>

          <p className="mt-8 text-sm text-slate-400 italic">
            Crafted by Ishmam Karim · Milestone School and College
          </p>
        </motion.div>
      </div>
    </section>
  );
}
