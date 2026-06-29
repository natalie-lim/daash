const favs = [
  { title: "Hard Fork", sub: "NYT", bg: "#1a3020", text: "white", subText: "#4ade80" },
  { title: "Ride", sub: "— DearMedia", bg: "#e8c040", text: "#1a1a1a", subText: "#92400e" },
  { title: "Daily Mix", sub: "O1", bg: "#1db954", text: "white", subText: "#bbf7d0" },
];

export default function NewFromFavs() {
  return (
    <div className="flex gap-3">
        {favs.map((f, i) => (
          <div
            key={i}
            className="w-20 h-20 rounded-xl flex flex-col justify-end p-2 flex-shrink-0 cursor-pointer"
            style={{ backgroundColor: f.bg }}
          >
            <span className="text-[10px] font-semibold leading-tight" style={{ color: f.text }}>{f.title}</span>
            <span className="text-[9px] leading-tight" style={{ color: f.subText }}>{f.sub}</span>
          </div>
        ))}
    </div>
  );
}
