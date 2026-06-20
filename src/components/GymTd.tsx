const items = [
  "Legs (quad focus)",
  "Back squat — 4 × 5–6",
  "Hip thrust — 3 × 10",
  "Leg press — 3 × 10–12",
  "RDLs",
  "Goblet Squat",
  "Bulgarian split squat — 3 × 8",
  "Leg extension — 3 × 12",
  "30 min walk",
];

export default function GymTd() {
  return (
    <ul className="flex flex-col gap-1.5 text-sm px-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="text-stone-400 mt-0.5">·</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
