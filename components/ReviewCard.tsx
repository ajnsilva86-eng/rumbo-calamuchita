import { Star } from "lucide-react";

type ReviewCardProps = {
  name: string;
  text: string;
  rating: number;
  source: string;
};

export function ReviewCard({ name, text, rating, source }: ReviewCardProps) {
  return (
    <article className="min-w-[280px] rounded-[8px] border border-forest-900/10 bg-white p-5 shadow-sm sm:min-w-0">
      <div className="flex gap-1 text-earth-500" aria-label={`${rating} de 5 estrellas`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${index < rating ? "fill-current" : ""}`}
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="mt-4 text-sm leading-6 text-forest-900/74">{text}</p>
      <div className="mt-5">
        <p className="font-semibold text-forest-900">{name}</p>
        <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-earth-500">{source}</p>
      </div>
    </article>
  );
}
