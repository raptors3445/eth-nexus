'use client';
import { useState } from 'react';

export default function ExchangeView() {
  const [ethAmount, setEthAmount] = useState('');
  const [usdTotal, setUsdTotal] = useState('0.00');
  const [orderStatus, setOrderStatus] = useState('');
  const [orderType, setOrderType] = useState('market'); // market / limit

  const handleCalculate = (val) => {
    setEthAmount(val);
    const price = 3450; // قیمت لحظه‌ای اتریوم
    if (!isNaN(val) && val > 0) {
      setUsdTotal((val * price).toLocaleString());
    } else {
      setUsdTotal('0.00');
    }
  };

  const executeOrder = (type) => {
    if (!ethAmount) return;
    setOrderStatus(`[PRO-NODE]: Successfully executed P2P ${type} order for ${ethAmount} ETH at $3,450. 0% Protocol Fee applied.`);
    setTimeout(() => setOrderStatus(''), 5000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* Trading Panel */}
      <div className="lg:col-span-2 glass-panel rounded-2xl p-6 md:p-8 space-y-6 neon-glow border border-slate-800/80">
        <div className="flex justify-between items-center border-b border-slate-800/80 pb-4">
          <div>
            <h2 className="text-xl font-bold tracking-wide">Ethereum P2P Core Terminal</h2>
            <p className="text-xs text-slate-400">Zero-fee peer-to-peer liquidity protocol engine.</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-1.5 rounded-xl font-mono">
              ETH/USD: $3,450.00
            </span>
          </div>
        </div>

        {orderStatus && (
          <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-4 rounded-xl text-xs font-mono leading-relaxed">
            {orderStatus}
          </div>
        )}

        {/* Order Mode Tabs */}
        <div className="flex gap-2 border-b border-slate-800/60 pb-4">
          <button
            onClick={() => setOrderType('market')}
            className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all ${
              orderType === 'market' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'text-slate-400 hover:text-white bg-slate-900/50'
            }`}
          >
            Instant Market
          </button>
          <button
            onClick={() => setOrderType('limit')}
            className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all ${
              orderType === 'limit' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'text-slate-400 hover:text-white bg-slate-900/50'
            }`}
          >
            Advanced Limit
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Execution Amount (ETH)
            </label>
            <input
              type="number"
              value={ethAmount}
              onChange={(e) => handleCalculate(e.target.value)}
              placeholder="0.00"
              className="w-full bg-slate-900/90 border border-slate-800 rounded-xl p-4 text-lg font-mono text-white focus:outline-none focus:border-indigo-500 transition-all"
            />
          </div>

          <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800/80 flex justify-between items-center">
            <span className="text-xs text-slate-400 font-medium">Estimated Liquidity Value (USD):</span>
            <span className="text-lg font-mono font-bold text-emerald-400">${usdTotal}</span>
          </div>

          <div className="p-4 bg-indigo-950/30 border border-indigo-500/20 rounded-xl text-xs text-indigo-300 space-y-1">
            <div className="font-semibold flex items-center gap-1">
              <span>⚡</span> Zero-Fee Protocol Guarantee
            </div>
            <p className="text-[11px] text-slate-400">This node enforces strict 0% commission on all direct P2P exchange streams.</p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <button
              onClick={() => executeOrder('BUY')}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-emerald-600/25 active:scale-[0.99]"
            >
              🟢 Execute Buy (LONG)
            </button>
            <button
              onClick={() => executeOrder('SELL')}
              className="w-full bg-rose-600 hover:bg-rose-500 text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-rose-600/25 active:scale-[0.99]"
            >
              🔴 Execute Sell (SHORT)
            </button>
          </div>
        </div>
      </div>

      {/* Live Order Book Sidebar */}
      <div className="glass-panel rounded-2xl p-6 space-y-4 border border-slate-800/80">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-3 flex justify-between items-center">
          <span>Global Order Book</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
        </h3>
        <div className="space-y-3 font-mono text-xs">
          <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800/80 flex justify-between items-center">
            <span className="text-emerald-400 font-bold">BUY 4.82 ETH</span>
            <span className="text-slate-400">$3,450.00</span>
          </div>
          <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800/80 flex justify-between items-center">
            <span className="text-rose-400 font-bold">SELL 1.50 ETH</span>
            <span className="text-slate-400">$3,452.50</span>
          </div>
          <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800/80 flex justify-between items-center">
            <span className="text-emerald-400 font-bold">BUY 12.0 ETH</span>
            <span className="text-slate-400">$3,449.10</span>
          </div>
          <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800/80 flex justify-between items-center">
            <span className="text-rose-400 font-bold">SELL 0.75 ETH</span>
            <span className="text-slate-400">$3,453.20</span>
          </div>
        </div>
      </div>

    </div>
  );
}
