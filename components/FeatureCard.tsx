import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <article className="rounded-[8px] border border-forest-900/10 bg-white p-5 shadow-sm">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-50 text-forest-700">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-forest-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-forest-900/70">{description}</p>
    </article>
  );
}
