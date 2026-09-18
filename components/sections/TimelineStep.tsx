import { ProcessStep } from "@/lib/constants";

export default function TimelineStep({ step }: { step: ProcessStep }) {
  return (
    <div className="relative border-l border-line pl-5 md:border-l-0 md:border-t md:pl-0 md:pt-5">
      <span className="font-display text-sm font-semibold text-cyan">{step.index}</span>
      <p className="mt-2 font-display text-base font-semibold text-navy md:text-lg">{step.title}</p>
    </div>
  );
}
