export default function StoreView() {
  return (
    <div className="glass-panel rounded-2xl p-10 md:p-16 text-center space-y-6 max-w-3xl mx-auto border border-slate-800/80 neon-glow">
      <span className="bg-violet-500/10 text-violet-400 text-xs px-3.5 py-1.5 rounded-full border border-violet-500/20 font-mono">
        💎 Future Expansion Vault
      </span>
      
      <div className="space-y-2">
        <h2 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          Exclusive Jewelry & Hardware Vault
        </h2>
        <p className="text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
          A high-end curated marketplace for custom mechanical design items, precision hardware, and exclusive cryptographic accessories.
        </p>
      </div>

      <div className="p-6 bg-slate-950/80 rounded-2xl border border-slate-800/80 inline-block w-full max-w-md mx-auto space-y-3">
        <div className="flex justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-3">
          <span>Protocol Status:</span>
          <span className="text-amber-400 font-bold animate-pulse">DEPLOYING SOON 🚀</span>
        </div>
        <p className="text-xs text-slate-500">
          Integration scheduled for phase-two decentralized liquidity rollout. Stay tuned.
        </p>
      </div>
    </div>
  );
}
