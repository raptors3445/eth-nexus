'use client';
import { useState } from 'react';

export default function ArcadeView() {
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [highScore, setHighScore] = useState(1420);

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    let currentScore = 0;
    const interval = setInterval(() => {
      currentScore += Math.floor(Math.random() * 80) + 20;
      setScore(currentScore);
    }, 300);

    setTimeout(() => {
      clearInterval(interval);
      setIsPlaying(false);
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }
    }, 5000);
  };

  return (
    <div className="glass-panel rounded-2xl p-6 md:p-10 max-w-3xl mx-auto text-center space-y-6 border border-slate-800/80 neon-glow">
      <div className="flex justify-between items-center border-b border-slate-800 pb-4">
        <span className="bg-indigo-500/10 text-indigo-400 text-xs px-3 py-1.5 rounded-full border border-indigo-500/20 font-mono">
          🎮 Cyber Arcade Engine v2.4
        </span>
        <span className="text-xs font-mono text-slate-400">
          High Score: <strong className="text-emerald-400">{highScore}</strong>
        </span>
      </div>

      <div className="space-y-2">
        <h2 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          ETH Grid Runner
        </h2>
        <p className="text-sm text-slate-400 max-w-lg mx-auto">
          Synchronize your reflex metrics with the decentralized trading nodes while maintaining network velocity.
        </p>
      </div>

      <div className="py-10 bg-slate-950/90 rounded-2xl border border-slate-800/80 space-y-3 shadow-inner">
        <p className="text-xs uppercase tracking-widest text-slate-500 font-mono">Session Score Metric</p>
        <p className="text-6xl font-extrabold font-mono text-indigo-400 tracking-wider">{score}</p>
        <div className="text-[11px] font-mono text-slate-500">
          {isPlaying ? '⚡ NODE SYNC IN PROGRESS...' : 'READY FOR NEXT SEQUENCE'}
        </div>
      </div>

      <button
        onClick={startGame}
        disabled={isPlaying}
        className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-indigo-600/35 active:scale-[0.99]"
      >
        {isPlaying ? '🎮 Processing Cyber Session...' : '🚀 Launch Arcade Protocol'}
      </button>
    </div>
  );
}
