import { BrandGroup } from "@/lib/constants";

export default function BrandCard({ group }: { group: BrandGroup }) {
  return (
    <div className="border border-white/10 p-6">
      <p className="text-xs font-medium tracking-wide2 text-cloud/70">{group.category}</p>
      <ul className="mt-4 space-y-2">
        {group.brands.map((brand) => (
          <li key={brand} className="font-display text-lg font-semibold text-white">
            {brand}
          </li>
        ))}
      </ul>
    </div>
  );
}
