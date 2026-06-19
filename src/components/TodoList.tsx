import Subheader from "./Subheader";

const items = [
  { text: "gym", done: true },
  { text: "plan weekend", done: true },
  { text: "start networking", done: false },
  { text: "fix github and linkedin", done: false },
  { text: "leetcode (2 hrs)", done: false },
  { text: "casey prep (2 hrs)", done: false },
  { text: "clean and wash sheets", done: false },
];

export default function TodoList() {
  return (
    <div>
      <Subheader title="to-do today" color="#A3B49F" />
      <ul className="mt-3 flex flex-col gap-1.5 text-sm px-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="font-mono text-xs mt-0.5">{item.done ? "[x]" : "[ ]"}</span>
            <span className={item.done ? "line-through text-stone-400" : ""}>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
