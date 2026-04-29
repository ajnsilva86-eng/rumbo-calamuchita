import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DetailPage } from "@/components/DetailPage";
import { brand, services } from "@/data/site";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | ${brand.name}`,
    description: service.description
  };
}

export default async function ServiceDetail({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <DetailPage
      item={service}
      backHref="/#servicios"
      backLabel="Volver a servicios"
      eyebrow="Servicio externo"
    />
  );
}
