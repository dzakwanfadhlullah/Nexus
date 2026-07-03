import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { showcases } from "@/data/site";
import {
  formatShowcaseStatus,
  formatType,
  getRelatedShowcases,
  getShowcaseBySlug,
} from "@/lib/content";
import { ShowcaseVisual } from "@/components/showcase/ShowcaseVisual";
import { ShowcaseCard } from "@/components/showcase/ShowcaseCard";

export function generateStaticParams() {
  return showcases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getShowcaseBySlug(slug);
  if (!item) return { title: "Showcase tidak ditemukan" };
  return {
    title: `${item.title} — Website Direction`,
    description: item.shortDescription,
    openGraph: {
      title: `${item.title} — Nexus Project`,
      description: item.shortDescription,
      images: [item.image ?? "/og/default-og.svg"],
    },
  };
}

export default async function ShowcaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getShowcaseBySlug(slug);
  if (!item) notFound();
  const related = getRelatedShowcases(item);

  return (
    <>
      <section className="page-hero" style={{ textAlign: "left" }}>
        <div className="container detail-hero-grid">
          <div className="detail-copy">
            <Link href="/showcase" className="eyebrow">
              <ArrowLeft size={14} /> Showcase
            </Link>
            <span className={`status status-${item.status}`}>
              {formatShowcaseStatus(item.status)}
            </span>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <div className="chip-list">
              {[formatType(item.type), ...item.industry, ...item.style, ...item.goal].map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
            <div className="detail-actions">
              <Link
                className="button button-dark"
                href={`/brief?reference=${item.slug}&source=showcase-detail`}
              >
                Buat seperti ini <ArrowRight size={16} />
              </Link>
              <Link className="button button-light" href="/showcase">
                Showcase lainnya
              </Link>
            </div>
          </div>
          <div className="detail-preview">
            <ShowcaseVisual item={item} priority />
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container detail-section-grid">
          <article className="detail-card">
            <p className="eyebrow">Problem</p>
            <h2 className="card-title">Apa yang perlu diperbaiki?</h2>
            <p>{item.problem}</p>
          </article>
          <article className="detail-card">
            <p className="eyebrow">Direction</p>
            <h2 className="card-title">Bagaimana arahnya?</h2>
            <p>{item.solution}</p>
          </article>
          <article className="detail-card">
            <p className="eyebrow">Page Structure</p>
            <h2 className="card-title">Struktur yang disarankan</h2>
            <ol>
              {item.pageStructure.map((section) => <li key={section}>{section}</li>)}
            </ol>
          </article>
          <article className="detail-card">
            <p className="eyebrow">Key Features</p>
            <h2 className="card-title">Fitur utama</h2>
            <ul>
              {item.keyFeatures.map((feature) => (
                <li key={feature}><CheckCircle2 size={15} style={{ display: "inline", marginRight: 8 }} />{feature}</li>
              ))}
            </ul>
          </article>
          <article className="detail-card wide">
            <p className="eyebrow">Recommended For</p>
            <h2 className="card-title">Cocok untuk siapa?</h2>
            <div className="chip-list" style={{ marginTop: 20 }}>
              {item.recommendedFor.map((target) => <span className="tag" key={target}>{target}</span>)}
            </div>
            <p style={{ marginTop: 24 }}><strong>Arah visual:</strong> {item.styleDirection}</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-head container">
          <p className="eyebrow">Similar Showcase</p>
          <h2 className="section-title">Arah lain yang mungkin cocok.</h2>
        </div>
        <div className="horizontal-rail showcase-rail">
          {related.map((relatedItem) => <ShowcaseCard item={relatedItem} key={relatedItem.slug} />)}
        </div>
      </section>

      <section className="section">
        <div className="container final-cta">
          <div>
            <h2 className="section-title">Tertarik dengan arah seperti ini?</h2>
            <p>Nexus akan menyesuaikan struktur, style, dan fiturnya untuk kebutuhan bisnismu.</p>
          </div>
          <div className="final-actions">
            <Link className="button button-dark" href={`/brief?reference=${item.slug}`}>
              Buat seperti ini <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
