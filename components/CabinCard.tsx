import Image from "next/image";
import Link from "next/link";
import { Images, MessageCircle, Users } from "lucide-react";

import { getWhatsAppUrl } from "@/data/site";

type CabinCardProps = {
  slug: string;
  name: string;
  capacity: string;
  services: string[];
  image: string;
  whatsappMessage: string;
};

export function CabinCard({
  slug,
  name,
  capacity,
  services,
  image,
  whatsappMessage
}: CabinCardProps) {
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
        <div className="mt-6 grid gap-3">
          <Link
            href={`/cabanas/${slug}`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-forest-700/20 bg-white px-5 text-sm font-semibold text-forest-900 transition hover:border-forest-700/40 hover:bg-forest-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-700"
          >
            <Images className="h-4 w-4" aria-hidden="true" />
            Ver más fotos
          </Link>
          <Link
            href={getWhatsAppUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-forest-700 px-5 text-sm font-semibold text-white shadow-soft transition hover:bg-forest-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-700"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Consultar por WhatsApp
          </Link>
        </div>
      </div>
    </article>
  );
}
