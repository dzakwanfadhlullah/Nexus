import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { resources } from "@/data/site";

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);
  if (!resource) return { title: "Resource tidak ditemukan" };
  return { title: resource.title, description: resource.excerpt };
}

export default async function ResourceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);
  if (!resource) notFound();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{resource.category}</p>
          <h1 className="display">{resource.title}</h1>
          <p className="lead">{resource.excerpt}</p>
        </div>
      </section>
      <article className="container article">
        {resource.content.map((paragraph, index) => (
          <section key={paragraph}>
            <h2 className="card-title">{index + 1}. {["Mulai dari tujuan", "Siapkan konten inti", "Kunci jalur aksi", "Rapikan aset"][index] ?? "Langkah berikutnya"}</h2>
            <p>{paragraph}</p>
          </section>
        ))}
        <div className="article-callout">
          <h2 className="card-title">Butuh bantuan menentukan arah?</h2>
          <p>Kirim kebutuhanmu. Nexus bantu memilih struktur, style, dan fitur yang paling sesuai.</p>
          <Link className="button button-dark" href="/brief?source=resource">
            Konsultasi Project <ArrowRight size={16} />
          </Link>
        </div>
      </article>
    </>
  );
}
