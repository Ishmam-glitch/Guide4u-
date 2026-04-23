/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles } from 'lucide-react';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 group transition-transform hover:scale-105 ${className}`}>
      <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
        <Sparkles className="text-white w-6 h-6" />
      </div>
      <span className="text-xl font-bold tracking-tight text-slate-800">
        Guide<span className="text-indigo-600">4U</span>
      </span>
    </div>
  );
}
