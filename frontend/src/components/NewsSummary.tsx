import Tags from "./Tags";

export default function NewsSummary() {
  return (
    <div className="gap-2">
      <div className="my-2 -flex flex-row gap-3 items-center justify-start">
        <Tags title="AI & ML" />
        <Tags title="Current Events" />
        <Tags title="Ice Skating" />
      </div>
      <p className="text-sm text-stone-600 leading-relaxed"></p>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {[1, 2, 3].map((n) => (
          <div key={n} className="aspect-video rounded-xl bg-stone-300/60" />
        ))}
      </div>
    </div>
  );
}
