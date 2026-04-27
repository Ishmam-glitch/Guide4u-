/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles } from 'lucide-react';
import { useState } from 'react';


interface RoutineItem {
  id: string;
  time: string;
  task: string;
}

export function PersonalizedRoutineModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [items, setItems] = useState<RoutineItem[]>([
    { id: '1', time: '07:00 AM', task: 'Wake up & Stretching' },
    { id: '2', time: '08:00 AM', task: 'Breakfast & Study' },
    { id: '3', time: '02:00 PM', task: 'School/College Ends' },
  ]);
  const [newTime, setNewTime] = useState('');
  const [newTask, setNewTask] = useState('');

  const addItem = () => {
    if (!newTime || !newTask) return;
    setItems([...items, { id: Date.now().toString(), time: newTime, task: newTask }]);
    setNewTime('');
    setNewTask('');
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
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
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[85vh] max-h-[700px]"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-indigo-600 text-white shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">My Daily Routine</h2>
                  <p className="text-indigo-100 text-xs text-opacity-80">Design your perfect day</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50">
              {items.length === 0 && (
                <div className="text-center py-12 text-slate-400">
                  <p>Your routine is empty. Add some tasks below!</p>
                </div>
              )}
              {items.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={item.id}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100"
                >
                  <div className="w-24 shrink-0 font-bold text-indigo-600 text-sm">
                    {item.time}
                  </div>
                  <div className="flex-1 text-slate-700 text-sm font-medium">
                    {item.task}
                  </div>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-slate-300 hover:text-red-500 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Input Wrapper */}
            <div className="p-6 border-t border-slate-100 bg-white shrink-0 space-y-3">
              <div className="grid grid-cols-3 gap-3">
                <input 
                  type="text"
                  value={newTime}
                  onChange={(e) => setNewTime(e.target.value)}
                  placeholder="7:00 AM"
                  className="col-span-1 bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
                />
                <input 
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Task description..."
                  className="col-span-2 bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
                />
              </div>
              <button 
                onClick={addItem}
                disabled={!newTime || !newTask}
                className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 disabled:opacity-50 transition-all shadow-lg shadow-indigo-100 flex items-center justify-center gap-2"
              >
                <Sparkles size={18} />
                Add to My Day
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
