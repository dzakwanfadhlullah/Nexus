import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
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
      <section className="page-hero article-hero">
        <Reveal className="container article-hero-inner" variant="mask">
          <Link className="article-back" href="/resources">
            <ArrowLeft size={15} /> Semua resources
          </Link>
          <p className="eyebrow">{resource.category}</p>
          <h1 className="display">{resource.title}</h1>
          <p className="lead">{resource.excerpt}</p>
          <div className="article-meta">
            <span>Nexus Editorial</span>
            <time dateTime={resource.publishedAt}>2 Juli 2026</time>
            <span><Clock3 size={14} /> {resource.content.length + 2} min read</span>
          </div>
        </Reveal>
      </section>
      <article className="container article">
        <aside className="article-sidebar">
          <span className="mini-label">Dalam artikel</span>
          <ol>
            {resource.content.map((paragraph, index) => (
              <li key={paragraph}>
                <a href={`#step-${index + 1}`}>
                  {["Mulai dari tujuan", "Siapkan konten inti", "Kunci jalur aksi", "Rapikan aset"][index] ?? "Langkah berikutnya"}
                </a>
              </li>
            ))}
          </ol>
        </aside>
        <div className="article-content">
          <Stagger>
            {resource.content.map((paragraph, index) => (
              <StaggerItem key={paragraph}>
                <section className="article-step" id={`step-${index + 1}`}>
                  <span className="article-step-number">0{index + 1}</span>
                  <div>
                    <h2 className="card-title">
                      {["Mulai dari tujuan", "Siapkan konten inti", "Kunci jalur aksi", "Rapikan aset"][index] ?? "Langkah berikutnya"}
                    </h2>
                    <p>{paragraph}</p>
                  </div>
                </section>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="article-callout" variant="scale">
            <span className="mini-label">Next step</span>
            <h2 className="card-title">Butuh bantuan menentukan arah?</h2>
            <p>Kirim kebutuhanmu. Nexus bantu memilih struktur, style, dan fitur yang paling sesuai.</p>
            <Link className="button button-dark" href="/brief?source=resource">
              Konsultasi Project <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </article>
    </>
  );
}
