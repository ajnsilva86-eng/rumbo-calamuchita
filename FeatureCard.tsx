import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DetailPage } from "@/components/DetailPage";
import { brand, cabins } from "@/data/site";

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
    <DetailPage
      item={cabin}
      backHref="/#cabanas"
      backLabel="Volver a cabañas"
      eyebrow="Alojamiento"
    />
  );
}
