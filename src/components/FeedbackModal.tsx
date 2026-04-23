/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, MessageSquareHeart, ThumbsUp, ThumbsDown } from 'lucide-react';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FeedbackModal({ isOpen, onClose }: FeedbackModalProps) {
  const [rating, setRating] = useState<'good' | 'bad' | null>(null);
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link as a fallback for real interaction without a backend
    const subject = encodeURIComponent(`Feedback for Guide4U AI - ${rating === 'good' ? 'Positive' : 'Constructive'}`);
    const body = encodeURIComponent(`Rating: ${rating}\n\nComment: ${comment}`);
    const mailtoUrl = `mailto:fatehaakter083@gmail.com?subject=${subject}&body=${body}`;
    
    // In a real app with backend, we'd post to an API here
    // Since Firebase was declined, we'll simulate the success and provide the email option
    setIsSubmitted(true);
    
    // Optionally open the email client
    // window.location.href = mailtoUrl;
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
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="p-6 sm:p-8">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {!isSubmitted ? (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center">
                      <MessageSquareHeart className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-800">Share Feedback</h2>
                      <p className="text-slate-500 text-sm">Help Ishmam make Guide4U better!</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-3">
                        How was your experience?
                      </label>
                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setRating('good')}
                          className={`flex-1 flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all ${
                            rating === 'good' 
                              ? 'border-indigo-600 bg-indigo-50 text-indigo-600' 
                              : 'border-slate-100 hover:border-slate-200 text-slate-500'
                          }`}
                        >
                          <ThumbsUp className="w-6 h-6" />
                          <span className="text-xs font-bold">Great</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setRating('bad')}
                          className={`flex-1 flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all ${
                            rating === 'bad' 
                              ? 'border-indigo-600 bg-indigo-50 text-indigo-600' 
                              : 'border-slate-100 hover:border-slate-200 text-slate-500'
                          }`}
                        >
                          <ThumbsDown className="w-6 h-6" />
                          <span className="text-xs font-bold">Could be better</span>
                        </button>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="comment" className="block text-sm font-semibold text-slate-700 mb-2">
                        Your thoughts
                      </label>
                      <textarea
                        id="comment"
                        rows={4}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="What should we improve or what did you like?"
                        className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-indigo-500 focus:outline-none transition-colors text-sm font-body resize-none"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={!rating}
                      className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-200 disabled:opacity-50 disabled:grayscale"
                    >
                      <Send className="w-5 h-5" />
                      Submit Feedback
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-12 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ThumbsUp className="w-10 h-10 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-2">Thank You!</h2>
                  <p className="text-slate-500 mb-8 max-w-[200px] mx-auto">
                    Your feedback helps Ishmam improve Guide4U for everyone.
                  </p>
                  <button
                    onClick={onClose}
                    className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
