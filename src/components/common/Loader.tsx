import React, { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check if session already loaded
    const hasLoaded = sessionStorage.getItem('a1_intro_loaded');
    if (hasLoaded) {
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            sessionStorage.setItem('a1_intro_loaded', 'true');
            setTimeout(onComplete, 400); // Allow exit transition
          }, 200);
          return 100;
        }
        // Rapid, variable increments for high-tech telemetry feel
        const jump = Math.floor(Math.random() * 16) + 6;
        return Math.min(prev + jump, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#050608] transition-all duration-500 ease-out ${
        isDone ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Background fine technical grid */}
      <div className="absolute inset-0 bg-fine-grid opacity-25" />

      {/* Center Automotive Telemetry Branding */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-md w-full">
        {/* Emblem Badge */}
        <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-lg bg-carbon-800 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-vignette opacity-50" />
          <svg className="w-8 h-8 text-racing-500 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>

        {/* Brand Typography */}
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-xs font-semibold tracking-widest text-racing-500 uppercase">SYS.BOOT // CERTIFIED</span>
          <span className="w-1.5 h-1.5 rounded-full bg-racing-500 animate-ping" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-display font-black tracking-tight text-white mb-6">
          A1 AUTO <span className="text-racing-500">KING</span>
        </h1>

        {/* Progress Line */}
        <div className="w-full bg-carbon-800/80 h-[2px] rounded-full overflow-hidden relative mb-4 border border-white/5">
          <div
            className="h-full bg-gradient-to-r from-racing-600 via-racing-500 to-white transition-all duration-75 ease-out rounded-full shadow-[0_0_12px_#E53935]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Numerical Telemetry & Status */}
        <div className="w-full flex items-center justify-between text-xs font-mono text-metallic-400">
          <span className="tracking-widest">INITIALIZING INVENTORY</span>
          <span className="text-white font-bold">{progress}%</span>
        </div>
      </div>
    </div>
  );
};
