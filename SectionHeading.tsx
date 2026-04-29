import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DetailPage } from "@/components/DetailPage";
import { brand, experiences } from "@/data/site";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return experiences.map((experience) => ({
    slug: experience.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const experience = experiences.find((item) => item.slug === slug);

  if (!experience) {
    return {};
  }

  return {
    title: `${experience.title} | ${brand.name}`,
    description: experience.description
  };
}

export default async function ExperienceDetail({ params }: PageProps) {
  const { slug } = await params;
  const experience = experiences.find((item) => item.slug === slug);

  if (!experience) {
    notFound();
  }

  return (
    <DetailPage
      item={experience}
      backHref="/#experiencias"
      backLabel="Volver a experiencias"
      eyebrow="Experiencia"
    />
  );
}
