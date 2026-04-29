import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageCircle, Users } from "lucide-react";
import { notFound } from "next/navigation";

import { brand, cabins, getWhatsAppUrl } from "@/data/site";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return cabins.map((cabin) => ({
    slug: cabin.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cabin = cabins.find((item) => item.slug === slug);

  if (!cabin) {
    return {};
  }

  return {
    title: `${cabin.name} | ${brand.name}`,
    description: cabin.description
  };
}

export default async function CabinDetail({ params }: PageProps) {
  const { slug } = await params;
  const cabin = cabins.find((item) => item.slug === slug);

  if (!cabin) {
    notFound();
  }

  return (
    <main className="bg-cream">
      <section className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-forest-900/10 bg-white px-4 py-2 text-sm font-semibold text-forest-900 transition hover:border-forest-700/35"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Volver al inicio
          </Link>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] shadow-soft">
            <Image
              src={cabin.image}
              alt={`Foto principal de ${cabin.name}`}
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-earth-500">
              Alojamiento
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-forest-900 sm:text-5xl">
              {cabin.name}
            </h1>
            <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-earth-700">
              <Users className="h-4 w-4" aria-hidden="true" />
              {cabin.capacity}
            </p>
            <p className="mt-5 text-base leading-7 text-forest-900/72">{cabin.description}</p>
            <Link
              href={getWhatsAppUrl(cabin.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-forest-700 px-5 text-sm font-semibold text-white shadow-soft transition hover:bg-forest-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-700"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Consultar esta cabaña por WhatsApp
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-semibold text-forest-900">Galería de fotos</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cabin.gallery.map((image, index) => (
              <div key={`${image}-${index}`} className="relative aspect-[4/3] overflow-hidden rounded-[8px]">
                <Image
                  src={image}
                  alt={`${cabin.name} - foto ${index + 1}`}
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
          <h2 className="text-2xl font-semibold text-forest-900">Servicios incluidos</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {cabin.services.map((service) => (
              <div key={service} className="rounded-[8px] border border-forest-900/10 bg-white p-4 shadow-sm">
                <p className="font-medium text-forest-900">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
