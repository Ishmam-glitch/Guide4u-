/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function Logo({ className = "" }: { className?: string }) {
  const logoUrl = "https://i.postimg.cc/4dYrHMsM/1000026494-removebg-preview.png";
  
  return (
    <div className={`flex items-center gap-2 group transition-all hover:scale-105 ${className}`}>
      <div className="w-12 h-12 overflow-hidden flex items-center justify-center group-hover:rotate-6 transition-transform">
        <img 
          src={logoUrl} 
          alt="Guide4U Logo" 
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
      <span className="text-xl font-bold tracking-tight text-slate-800">
        Guide<span className="text-indigo-600">4U</span>
      </span>
    </div>
  );
}
