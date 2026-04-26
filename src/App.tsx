/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemsList } from './components/ProblemsList';
import { Chatbot } from './components/Chatbot';
import { FeedbackModal } from './components/FeedbackModal';
import { PersonalizedRoutineModal } from './components/PersonalizedRoutineModal';
import { Logo } from './components/Logo';
import { ShieldCheck, Target, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, type ReactNode } from 'react';

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isRoutineOpen, setIsRoutineOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar 
        onChatOpen={() => setIsChatOpen(true)} 
        onFeedbackOpen={() => setIsFeedbackOpen(true)}
        onRoutineOpen={() => setIsRoutineOpen(true)}
      />
      
      <main>
        <Hero onRoutineOpen={() => setIsRoutineOpen(true)} />
        
        {/* Features Preview */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<ShieldCheck className="w-8 h-8 text-indigo-600" />}
              title="Academic Support"
              desc="Proven strategies to handle exams, group projects, and daily school stress."
            />
            <FeatureCard 
              icon={<HeartHandshake className="w-8 h-8 text-purple-600" />}
              title="Social Guidance"
              desc="Navigating friendships, family, and relationships with confidence."
            />
            <FeatureCard 
              icon={<Target className="w-8 h-8 text-pink-600" />}
              title="Future Planning"
              desc="Exploration tools for your career path without the early-life pressure."
            />
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
                "As a class 10 student, I know how hard it can be to find reliable, non-judgmental 
                advice that actually makes sense. I created Guide4U to be the companion I wish I 
                had when things get overwhelming."
              </p>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/20 mb-4 overflow-hidden">
                   <div className="text-3xl font-bold text-white">IK</div>
                </div>
                <h4 className="text-2xl font-bold">Ishmam Karim</h4>
                <p className="text-indigo-300">Creator & Student (Class 10)</p>
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
            © 2026 Guide4U by Lutfullahil Karim (Class 10). All rights reserved.
          </p>
        </div>
      </footer>

      <Chatbot isOpen={isChatOpen} onToggle={(open) => setIsChatOpen(open)} />
      <FeedbackModal isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />
      <PersonalizedRoutineModal isOpen={isRoutineOpen} onClose={() => setIsRoutineOpen(false)} />
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all border border-slate-100"
    >
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
      <p className="text-slate-600 leading-relaxed font-body text-sm">
        {desc}
      </p>
    </motion.div>
  );
}
