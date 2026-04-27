/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemsList } from './components/ProblemsList';
import { FeedbackModal } from './components/FeedbackModal';
import { PersonalizedRoutineModal } from './components/PersonalizedRoutineModal';
import { StudyGuideModal } from './components/StudyGuideModal';
import { Logo } from './components/Logo';
import { Quote, BookOpen, GraduationCap, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const QUOTES = [
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs", color: "border-indigo-500" },
  { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", color: "border-purple-500" },
  { quote: "Everything you've ever wanted is on the other side of fear.", author: "George Addair", color: "border-pink-500" },
  { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", color: "border-blue-500" },
  { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", color: "border-emerald-500" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", color: "border-amber-500" },
  { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson", color: "border-cyan-500" },
  { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt", color: "border-rose-500" },
  { quote: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford", color: "border-violet-500" },
];

export default function App() {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isRoutineOpen, setIsRoutineOpen] = useState(false);
  const [isStudyOpen, setIsStudyOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar 
        onFeedbackOpen={() => setIsFeedbackOpen(true)}
        onRoutineOpen={() => setIsRoutineOpen(true)}
        onStudyOpen={() => setIsStudyOpen(true)}
      />
      
      <main>
        <Hero onRoutineOpen={() => setIsRoutineOpen(true)} />

        {/* Study mastery section */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight">Study Mastery</h2>
                </div>
                <p className="text-indigo-100 text-lg mb-8 font-light leading-relaxed">
                  Struggling with homework or focusing on a specific subject? Discover the best 
                  strategies to optimize your study time and achieve your academic goals.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => setIsStudyOpen(true)}
                    className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold hover:bg-indigo-50 transition-all shadow-xl shadow-indigo-900/20 flex items-center gap-2"
                  >
                    <BookOpen className="w-5 h-5" />
                    Subject Strategies
                  </button>
                  <button 
                    onClick={() => setIsStudyOpen(true)}
                    className="bg-indigo-500/30 text-white border border-white/20 px-8 py-4 rounded-2xl font-bold hover:bg-indigo-500/40 transition-all flex items-center gap-2"
                  >
                    <Clock className="w-5 h-5" />
                    Homework Tips
                  </button>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-white/10 rounded-3xl backdrop-blur-md border border-white/10">
                    <h4 className="font-bold text-xl mb-2">Focused</h4>
                    <p className="text-indigo-100 text-sm">Targeted learning sessions</p>
                  </div>
                  <div className="p-6 bg-white/10 rounded-3xl backdrop-blur-md border border-white/10 mt-8">
                    <h4 className="font-bold text-xl mb-2">Fast</h4>
                    <p className="text-indigo-100 text-sm">Efficient task completion</p>
                  </div>
                  <div className="p-6 bg-white/10 rounded-3xl backdrop-blur-md border border-white/10">
                    <h4 className="font-bold text-xl mb-2">Steady</h4>
                    <p className="text-indigo-100 text-sm">Consistent daily progress</p>
                  </div>
                  <div className="p-6 bg-white/10 rounded-3xl backdrop-blur-md border border-white/10 mt-8">
                    <h4 className="font-bold text-xl mb-2">Balanced</h4>
                    <p className="text-indigo-100 text-sm">Rest & study harmony</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/10 rounded-full -ml-32 -mb-32 blur-3xl" />
          </div>
        </section>
        
        {/* Inspiration Section (Greatest lines from greatest men) */}
        <section className="py-24 px-6 bg-slate-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Words of Wisdom</h2>
              <p className="text-slate-500 max-w-2xl mx-auto font-body">
                Timeless advice from history's greatest minds to keep you motivated on your journey.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {QUOTES.map((q, index) => (
                <QuoteCard 
                  key={index}
                  quote={q.quote}
                  author={q.author}
                  borderColor={q.color}
                />
              ))}
            </div>
          </div>
        </section>

        <ProblemsList />

        {/* About Section */}
        <section id="about" className="py-24 px-6 bg-indigo-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-600/20 to-transparent pointer-events-none" />
          <div className="max-w-4xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-8">About Guide4U</h2>
              <p className="text-xl text-indigo-100 mb-12 leading-relaxed font-light">
                "As a 10th-grade student at Milestone School and College, I know how hard it can be to find reliable, non-judgmental 
                advice that actually makes sense. I'm deeply passionate about technology and sports like football, and I created Guide4U 
                to be the companion I wish I had when things get overwhelming."
              </p>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/20 mb-4 overflow-hidden">
                   <div className="text-3xl font-bold text-white">IK</div>
                </div>
                <h4 className="text-2xl font-bold">Ishmam Karim</h4>
                <p className="text-indigo-300">Milestone School and College · Tech & Sports Enthusiast</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-16 px-6 bg-white border-t border-slate-100 flex flex-col items-center gap-8">
        <Logo />
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-slate-500 font-medium text-sm">
          <a href="#home" className="hover:text-indigo-600 transition-colors">Home</a>
          <a href="#problems" className="hover:text-indigo-600 transition-colors">Solutions</a>
          <a href="#about" className="hover:text-indigo-600 transition-colors">About Ishmam</a>
          <button 
            onClick={() => setIsFeedbackOpen(true)}
            className="hover:text-indigo-600 transition-colors cursor-pointer"
          >
            Feedback
          </button>
          <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
        </div>
        <div className="pt-8 border-t border-slate-100 w-full max-w-2xl text-center">
          <p className="text-slate-400 text-xs">
            © 2026 Guide4U by Lutfullahil Karim · Milestone School and College. All rights reserved.
          </p>
        </div>
      </footer>

      <FeedbackModal isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />
      <PersonalizedRoutineModal isOpen={isRoutineOpen} onClose={() => setIsRoutineOpen(false)} />
      <StudyGuideModal isOpen={isStudyOpen} onClose={() => setIsStudyOpen(false)} />
    </div>
  );
}

function QuoteCard({ quote, author, borderColor }: { quote: string, author: string, borderColor: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all border-l-4 ${borderColor}`}
    >
      <Quote className="w-8 h-8 text-slate-200 mb-6" />
      <p className="text-lg font-medium mb-6 text-slate-700 italic leading-relaxed">
        "{quote}"
      </p>
      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">— {author}</h4>
    </motion.div>
  );
}
