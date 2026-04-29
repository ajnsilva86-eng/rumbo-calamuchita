import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getWhatsAppUrl } from "@/data/site";

type DetailPageProps = {
  item: {
    name?: string;
    title?: string;
    description: string;
    image: string;
    gallery: string[];
    services: string[];
    whatsappMessage: string;
    capacity?: string;
  };
  backHref: string;
  backLabel: string;
  eyebrow: string;
};

export function DetailPage({ item, backHref, backLabel, eyebrow }: DetailPageProps) {
  const title = item.name ?? item.title ?? "Detalle";

  return (
    <main className="bg-cream">
      <section className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 rounded-full border border-forest-900/10 bg-white px-4 py-2 text-sm font-semibold text-forest-900 transition hover:border-forest-700/35"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {backLabel}
          </Link>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] shadow-soft">
            <Image
              src={item.image}
              alt={`Foto principal de ${title}`}
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-earth-500">{eyebrow}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-forest-900 sm:text-5xl">
              {title}
            </h1>
            {item.capacity ? (
              <p className="mt-4 text-sm font-semibold text-earth-700">{item.capacity}</p>
            ) : null}
            <p className="mt-5 text-base leading-7 text-forest-900/72">{item.description}</p>
            <WhatsAppButton href={getWhatsAppUrl(item.whatsappMessage)} className="mt-8">
              Consultar disponibilidad
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-semibold text-forest-900">Galeria</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {item.gallery.map((image, index) => (
              <div key={`${image}-${index}`} className="relative aspect-[4/3] overflow-hidden rounded-[8px]">
                <Image
                  src={image}
                  alt={`${title} - foto ${index + 1}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-semibold text-forest-900">Caracteristicas y servicios</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {item.services.map((service) => (
              <div key={service} className="rounded-[8px] border border-forest-900/10 bg-white p-4 shadow-sm">
                <p className="font-medium text-forest-900">{service}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-[8px] bg-forest-900 p-6 text-white sm:p-8">
            <h2 className="text-2xl font-semibold">Consulta esta opcion</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/76">
              El mensaje de WhatsApp ya sale personalizado para esta opcion, asi la consulta llega clara desde el primer contacto.
            </p>
            <WhatsAppButton href={getWhatsAppUrl(item.whatsappMessage)} variant="light" className="mt-6">
              Escribir por WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </main>
  );
}
