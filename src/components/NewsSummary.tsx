export default function NewsSummary() {
  return (
    <div>
      <p className="text-sm text-stone-600 leading-relaxed">
        lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
        lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
        lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
        lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
      </p>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {[1, 2, 3].map((n) => (
          <div key={n} className="aspect-video rounded-xl bg-stone-300/60" />
        ))}
      </div>
    </div>
  );
}
