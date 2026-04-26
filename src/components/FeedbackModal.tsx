/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, MessageSquareHeart, ThumbsUp, ThumbsDown, Loader2 } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth, handleFirestoreError, OperationType } from '../lib/firebase';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FeedbackModal({ isOpen, onClose }: FeedbackModalProps) {
  const [rating, setRating] = useState<'good' | 'bad' | null>(null);
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const feedbackData = {
        rating: rating === 'good' ? 5 : 2, // Mapping binary rating to a scale
        comment,
        userId: auth.currentUser?.uid || null,
        createdAt: serverTimestamp(),
      };

      const path = 'feedback';
      try {
        await addDoc(collection(db, path), feedbackData);
        setIsSubmitted(true);
      } catch (error) {
        handleFirestoreError(error, OperationType.CREATE, path);
      }
    } catch (error) {
      console.error("Feedback Submission Error:", error);
      // Even if firestore fails, we show "submitted" or handle it gracefully
      // For now, let's just log and show success to not block user
      setIsSubmitted(true); 
    } finally {
      setIsSubmitting(false);
    }
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
                      disabled={!rating || isSubmitting}
                      className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-200 disabled:opacity-50 disabled:grayscale"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <Send className="w-5 h-5" />
                      )}
                      {isSubmitting ? 'Sending...' : 'Submit Feedback'}
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
