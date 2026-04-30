import Image from "next/image";
import Link from "next/link";
import { ArrowDown, MapPin } from "lucide-react";

import { CabinCard } from "@/components/CabinCard";
import { FeatureCard } from "@/components/FeatureCard";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  brand,
  cabins,
  experiences,
  navigation,
  reasons,
  services,
} from "@/data/site";

export default function Home() {
  return (
    <main>
      <header className="absolute left-0 right-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <Link href="#" className="text-sm font-bold tracking-[0.18em] text-white">
            {brand.name}
          </Link>
          <nav className="hidden items-center gap-6 md:flex" aria-label="Navegacion principal">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/85 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <section className="relative min-h-[92svh] overflow-hidden bg-forest-900 text-white">
        <Image
          src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1800&q=85"
          alt="Paisaje serrano al atardecer en Calamuchita"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/75 via-forest-900/45 to-forest-900/80" />
        <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-7xl items-center px-4 pb-20 pt-28 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Santa Rosa de Calamuchita, Cordoba
            </p>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              Escapate a Calamuchita
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/86 sm:text-xl">
              Cabañas, naturaleza y experiencias personalizadas en Santa Rosa de Calamuchita.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton variant="light">Consultar disponibilidad</WhatsAppButton>
              <Link
                href="#cabanas"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/35 px-5 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Ver cabañas
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Por que elegirnos"
            title="Una estadia simple, cuidada y conectada con el valle"
            description="RUMBO CALAMUCHITA combina alojamientos seleccionados, informacion clara y acompañamiento para que tu viaje empiece bien desde la primera consulta."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <FeatureCard key={reason.title} {...reason} />
            ))}
          </div>
        </div>
      </section>

      <section id="cabanas" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Cabanas"
            title="Alojamientos para parejas, familias y grupos pequeños"
            description="Cada alojamiento tiene su ficha individual con galeria, caracteristicas y consulta directa por WhatsApp."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {cabins.map((cabin) => (
              <CabinCard key={cabin.slug} {...cabin} />
            ))}
          </div>
        </div>
      </section>

      <section id="experiencias" className="bg-forest-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Experiencias"
            title="Cada viaje puede tener su propio ritmo"
            description="Sumá propuestas turisticas editables para vender escapadas, paseos y planes personalizados."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {experiences.map((experience) => (
              <CatalogCard
                key={experience.slug}
                href={`/experiencias/${experience.slug}`}
                {...experience}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Servicios externos"
            title="Extras para una estadia mas comoda"
            description="Mostrá proveedores, adicionales y servicios coordinados que aumentan el valor de cada consulta."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <CatalogCard key={service.slug} href={`/servicios/${service.slug}`} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section id="ubicacion" className="bg-forest-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80"
              alt="Sierras y naturaleza del Valle de Calamuchita"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Ubicacion"
              title="Santa Rosa de Calamuchita, Cordoba"
              description="En el corazon del Valle de Calamuchita, Santa Rosa combina rio, sierras, gastronomia regional y cercania con destinos como Villa General Belgrano, Los Reartes y Embalse."
            />
            <p className="mt-5 text-base leading-7 text-forest-900/70">
              Es un destino ideal para quienes buscan descanso, naturaleza y comodidad sin perder acceso a servicios,
              paseos y actividades para todas las edades.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-forest-900 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-earth-200">
            Tu proxima escapada
          </p>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Consulta tu estadia</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/76">
            Contanos fechas, cantidad de personas y tipo de viaje. Te respondemos por WhatsApp con opciones disponibles.
          </p>
          <WhatsAppButton variant="light" className="mt-8">
            Consultar por WhatsApp
          </WhatsAppButton>
        </div>
      </section>

      <footer className="bg-cream px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-bold tracking-[0.16em] text-forest-900">{brand.name}</p>
            <p className="mt-2 text-sm text-forest-900/65">{brand.location}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-forest-900/10 bg-white px-4 py-2 text-sm font-semibold text-forest-900 transition hover:border-forest-700/40"
              >
                <link.icon className="h-4 w-4" aria-hidden="true" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
