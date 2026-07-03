import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services, showcases } from "@/data/site";
import { getServiceBySlug } from "@/lib/content";
import { ShowcaseCard } from "@/components/showcase/ShowcaseCard";

export function generateStaticParams() {
  return services
    .filter((service) => service.slug !== "website-catalog")
    .map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Layanan tidak ditemukan" };
  return {
    title: `Jasa ${service.title}`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service || service.slug === "website-catalog") notFound();

  const related = showcases
    .filter((item) => item.type === service.slug || item.features.some((feature) => service.keyFeatures.includes(feature)))
    .slice(0, 4);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{service.title}</p>
          <h1 className="display">{service.shortDescription}</h1>
          <p className="lead">{service.description}</p>
          <div className="hero-actions">
            <Link className="button button-dark" href={`/brief?service=${service.slug}&source=service-detail`}>
              Konsultasi {service.title} <ArrowRight size={16} />
            </Link>
            <Link className="button button-light" href={`/showcase?q=${encodeURIComponent(service.title)}`}>
              Lihat Contoh
            </Link>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container detail-section-grid">
          <article className="detail-card">
            <p className="eyebrow">Best For</p>
            <h2 className="card-title">Cocok untuk</h2>
            <ul>
              {service.bestFor.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article className="detail-card">
            <p className="eyebrow">Common Structure</p>
            <h2 className="card-title">Struktur umum</h2>
            <ol>
              {service.commonSections.map((item) => <li key={item}>{item}</li>)}
            </ol>
          </article>
          <article className="detail-card wide">
            <p className="eyebrow">Key Features</p>
            <h2 className="card-title">Yang bisa disiapkan</h2>
            <div className="chip-list" style={{ marginTop: 22 }}>
              {service.keyFeatures.map((item) => (
                <span className="tag" key={item}><CheckCircle2 size={13} style={{ marginRight: 6 }} /> {item}</span>
              ))}
            </div>
          </article>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section">
          <div className="section-head container">
            <p className="eyebrow">Related Showcase</p>
            <h2 className="section-title">Lihat arah yang relevan.</h2>
          </div>
          <div className="horizontal-rail showcase-rail">
            {related.map((item) => <ShowcaseCard item={item} key={item.slug} />)}
          </div>
        </section>
      )}
    </>
  );
}
