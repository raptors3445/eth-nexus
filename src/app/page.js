'use client';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('exchange');
  const [amount, setAmount] = useState('');
  const [arcadeScore, setArcadeScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [highScore, setHighScore] = useState(1420);

  const startArcade = () => {
    setIsPlaying(true);
    setArcadeScore(0);
    let currentScore = 0;
    const interval = setInterval(() => {
      currentScore += Math.floor(Math.random() * 80) + 20;
      setArcadeScore(currentScore);
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
    <main className="min-h-screen bg-[#030712] text-slate-100 flex flex-col items-center p-4 md:p-8 selection:bg-indigo-500 selection:text-white">
      {/* Header */}
      <header className="w-full max-w-4xl flex justify-between items-center py-6 border-b border-slate-800/80 mb-8">
        <div className="flex items-center space-x-3 space-x-reverse">
          <span className="text-2xl font-black bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent font-mono">
            ⚡ ETH NEXUS
          </span>
          <span className="text-[10px] bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded border border-indigo-500/20 font-mono">
            P2P PROTOCOL v2.0
          </span>
        </div>
        <div className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          0% Protocol Fee
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="flex space-x-2 space-x-reverse bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800 mb-8 max-w-md w-full justify-center">
        <button
          onClick={() => setActiveTab('exchange')}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-mono transition-all ${
            activeTab === 'exchange'
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 font-bold'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
          }`}
        >
          🔄 Exchange
        </button>
        <button
          onClick={() => setActiveTab('arcade')}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-mono transition-all ${
            activeTab === 'arcade'
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 font-bold'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
          }`}
        >
          🎮 Cyber Arcade
        </button>
        <button
          onClick={() => setActiveTab('store')}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-mono transition-all ${
            activeTab === 'store'
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 font-bold'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
          }`}
        >
          💎 Vault
        </button>
      </nav>

      {/* Content Area */}
      <div className="w-full max-w-2xl">
        {activeTab === 'exchange' && (
          <div className="bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-slate-800 shadow-2xl space-y-6">
            <h2 className="text-xl font-bold font-mono text-indigo-300">P2P Ethereum Exchange</h2>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-2">Amount to Swap (ETH)</label>
                <input
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white font-mono focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800/60 text-xs font-mono space-y-2 text-slate-400">
                <div className="flex justify-between"><span>Protocol Fee:</span><span className="text-emerald-400">0.00 ETH (0%)</span></div>
                <div className="flex justify-between"><span>Network Status:</span><span className="text-indigo-400">Optimal</span></div>
              </div>
              <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-indigo-600/30">
                Execute Secure Swap
              </button>
            </div>
          </div>
        )}

        {activeTab === 'arcade' && (
          <div className="bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-slate-800 shadow-2xl text-center space-y-6">
            <div className="flex justify-between items-center text-xs font-mono text-slate-400 border-b border-slate-800 pb-3">
              <span>ETH Grid Runner v2.4</span>
              <span>High Score: <strong className="text-emerald-400">{highScore}</strong></span>
            </div>
            <div className="py-8 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Session Score</span>
              <div className="text-5xl font-extrabold font-mono text-indigo-400">{arcadeScore}</div>
              <div className="text-[10px] font-mono text-slate-500">
                {isPlaying ? '⚡ NODE SYNC IN PROGRESS...' : 'READY'}
              </div>
            </div>
            <button
              onClick={startArcade}
              disabled={isPlaying}
              className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-indigo-600/30"
            >
              {isPlaying ? 'Processing...' : '🚀 Launch Arcade Protocol'}
            </button>
          </div>
        )}

        {activeTab === 'store' && (
          <div className="bg-slate-900/70 backdrop-blur-xl rounded-2xl p-8 border border-slate-800 shadow-2xl text-center space-y-6">
            <span className="bg-violet-500/10 text-violet-400 text-xs px-3 py-1 rounded-full border border-violet-500/20 font-mono">
              Future Expansion Vault
            </span>
            <h2 className="text-2xl font-bold font-mono">Exclusive Jewelry & Hardware Vault</h2>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              A high-end curated marketplace for custom mechanical design items and cryptographic accessories.
            </p>
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-amber-400 animate-pulse">
              DEPLOYING SOON 🚀
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
