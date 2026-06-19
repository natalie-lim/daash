export default function ChangeItUp() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-stone-600">change it up</p>
        <span className="text-stone-400 tracking-widest">···</span>
      </div>
      <div className="flex items-center gap-2 bg-white/60 rounded-xl px-3 py-2 border border-stone-200">
        <div className="flex gap-1 flex-shrink-0">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 to-rose-500" />
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500" />
        </div>
        <input
          type="text"
          className="flex-1 bg-transparent text-sm text-stone-700 outline-none placeholder:text-stone-400 min-w-0"
          placeholder="ask anything..."
        />
        <button
          type="button"
          className="text-stone-400 hover:text-stone-600 flex-shrink-0"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
