import Image from "next/image";
import { Users } from "lucide-react";

import { WhatsAppButton } from "@/components/WhatsAppButton";

type CabinCardProps = {
  name: string;
  capacity: string;
  services: string[];
  image: string;
};

export function CabinCard({ name, capacity, services, image }: CabinCardProps) {
  return (
    <article className="overflow-hidden rounded-[8px] border border-forest-900/10 bg-white shadow-soft">
      <div className="relative aspect-[4/3]">
        <Image
          src={image}
          alt={`Foto de ${name}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-forest-900">{name}</h3>
        <p className="mt-3 flex items-center gap-2 text-sm font-medium text-earth-700">
          <Users className="h-4 w-4" aria-hidden="true" />
          {capacity}
        </p>
        <ul className="mt-4 grid gap-2 text-sm text-forest-900/70">
          {services.map((service) => (
            <li key={service} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-forest-600" aria-hidden="true" />
              <span>{service}</span>
            </li>
          ))}
        </ul>
        <WhatsAppButton className="mt-6 w-full">Consultar por WhatsApp</WhatsAppButton>
      </div>
    </article>
  );
}
