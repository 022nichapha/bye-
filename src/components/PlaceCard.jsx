export default function PlaceCard({ place }) {
  return (
    <div className="group overflow-hidden rounded-[32px] bg-white border border-[#E2DCCB] transition-all hover:shadow-2xl">
      <div className="h-48 w-full bg-[#EFE9D9] relative overflow-hidden">
        {/* จำลองรูปภาพ */}
        <div className="absolute inset-0 flex items-center justify-center text-[#7E7869] font-medium italic">
          {place.name} Image
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF7F67]">{place.category}</span>
        </div>
        <h3 className="text-xl font-bold text-[#4A453A] mb-2">{place.name}</h3>
        <p className="text-sm text-[#7E7869] line-clamp-2 mb-4">{place.description}</p>
        <button className="text-sm font-bold text-[#FF7F67] group-hover:underline">ดูรายละเอียด →</button>
      </div>
    </div>
  );
}