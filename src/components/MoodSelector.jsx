export default function MoodSelector() {
  const moods = [
    { id: "lonely", emoji: "☕", label: "เหงาจัง", color: "#A7C7E7" },
    { id: "stressed", emoji: "🌳", label: "อยากพัก", color: "#C1E1C1" },
    { id: "sweet", emoji: "🍰", label: "ขาดหวาน", color: "#FFB7B2" },
    { id: "work", emoji: "💻", label: "หาที่ทำงาน", color: "#FFDAC1" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {moods.map((mood) => (
        <button
          key={mood.id}
          className="group flex flex-col items-center gap-2 rounded-3xl bg-white p-6 shadow-sm border-2 border-transparent transition-all hover:border-[#FF7F67] hover:-translate-y-2 hover:shadow-xl active:scale-95"
        >
          <span className="text-4xl transition-transform group-hover:scale-125">{mood.emoji}</span>
          <span className="font-bold text-[#4A453A]">{mood.label}</span>
        </button>
      ))}
    </div>
  );
}