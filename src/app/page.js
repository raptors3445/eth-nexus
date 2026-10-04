'use client';
import { useState } from 'react';
import ExchangeView from '@/components/ExchangeView';
import ArcadeView from '@/components/ArcadeView';
import StoreView from '@/components/StoreView';

export default function Home() {
  const [activeTab, setActiveTab] = useState('exchange');

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      
      {/* Top Navbar */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center font-black text-xl shadow-lg shadow-indigo-500/30">
            Ξ
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-wider bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              ETH NEXUS
            </h1>
            <p className="text-[10px] text-indigo-400 tracking-widest uppercase font-semibold">
              Zero-Fee P2P Protocol
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab('exchange')}
            className={`px-5 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'exchange'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ⚡ Ethereum Exchange
          </button>
          <button
            onClick={() => setActiveTab('arcade')}
            className={`px-5 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'arcade'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            🎮 Cyber Arcade
          </button>
          <button
            onClick={() => setActiveTab('store')}
            className={`px-5 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'store'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            💎 Jewelry Vault (Soon)
          </button>
        </nav>

        {/* Wallet Status */}
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-mono text-slate-300 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
            0% Fee Active
          </span>
        </div>
      </header>

      {/* Mobile Nav Bar */}
      <div className="md:hidden flex border-b border-slate-800 bg-slate-900/50 p-2 justify-around">
        <button onClick={() => setActiveTab('exchange')} className={`text-xs font-medium py-1 px-3 rounded-lg ${activeTab === 'exchange' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}>Exchange</button>
        <button onClick={() => setActiveTab('arcade')} className={`text-xs font-medium py-1 px-3 rounded-lg ${activeTab === 'arcade' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}>Arcade</button>
        <button onClick={() => setActiveTab('store')} className={`text-xs font-medium py-1 px-3 rounded-lg ${activeTab === 'store' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}>Store</button>
      </div>

      {/* Dynamic Content Views */}
      <div className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full">
        {activeTab === 'exchange' && <ExchangeView />}
        {activeTab === 'arcade' && <ArcadeView />}
        {activeTab === 'store' && <StoreView />}
      </div>

    </main>
  );
}
