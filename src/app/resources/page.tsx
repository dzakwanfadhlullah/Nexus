import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { resources } from "@/data/site";

export const metadata: Metadata = {
  title: "Resources Website dan Digital Product",
  description: "Checklist dan panduan untuk menentukan arah website, aplikasi, dan project digital.",
};

export default function ResourcesPage() {
  return (
    <>
      <section className="page-hero resource-index-hero">
        <Reveal className="container resource-hero-grid" variant="mask">
          <div>
            <p className="eyebrow">Nexus field notes</p>
            <h1 className="display">Baca dulu, lalu mulai dengan arah yang lebih jelas.</h1>
          </div>
          <div className="resource-hero-note">
            <span>Vol. 01 — 2026</span>
            <p>Panduan praktis tentang strategy, content, dan arah website tanpa jargon berlebihan.</p>
          </div>
        </Reveal>
      </section>
      <section className="resource-library">
        <div className="container resource-library-head">
          <span>Latest notes</span>
          <span>{resources.length.toString().padStart(2, "0")} articles</span>
        </div>
        <Stagger className="container resource-grid" delay={0.08}>
          {resources.map((resource, index) => (
            <StaggerItem key={resource.slug}>
              <article className="resource-card">
                <div className="resource-card-top">
                  <span className="resource-number">0{index + 1}</span>
                  <span className="mini-label">{resource.category}</span>
                  <span className="resource-read-time"><Clock3 size={13} /> {3 + index} min</span>
                </div>
                <h2 className="card-title">{resource.title}</h2>
                <p>{resource.excerpt}</p>
                <div className="resource-card-foot">
                  <time dateTime={resource.publishedAt}>02.07.2026</time>
                  <Link href={`/resources/${resource.slug}`}>
                    Baca panduan <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
