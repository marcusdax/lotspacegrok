import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import type { Sensory } from "@/lib/types";

const keys: (keyof Omit<Sensory, "notes" | "overall">)[] = [
  "fragrance",
  "flavor",
  "aftertaste",
  "acidity",
  "body",
  "balance",
];

export function CuppingRadar({ sensory }: { sensory: Sensory }) {
  const data = keys.map((k) => ({
    axis: k[0].toUpperCase() + k.slice(1),
    value: sensory[k],
  }));
  if (!sensory.flavor) {
    return <p className="text-sm text-muted">Not yet cupped.</p>;
  }
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer>
        <RadarChart data={data} cx="50%" cy="50%" outerRadius="72%">
          <PolarGrid stroke="#D9D3C9" />
          <PolarAngleAxis dataKey="axis" tick={{ fill: "#58514B", fontSize: 11, fontFamily: "Archivo" }} />
          <PolarRadiusAxis angle={30} domain={[6, 9]} tick={false} axisLine={false} />
          <Radar dataKey="value" stroke="#74362F" fill="#74362F" fillOpacity={0.18} strokeWidth={1.5} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
