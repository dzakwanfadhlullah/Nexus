import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { resources } from "@/data/site";

export const metadata: Metadata = {
  title: "Resources Website dan Digital Product",
  description: "Checklist dan panduan untuk menentukan arah website, aplikasi, dan project digital.",
};

export default function ResourcesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Resources</p>
          <h1 className="display">Baca dulu, lalu mulai dengan arah yang lebih jelas.</h1>
          <p className="lead">Panduan singkat untuk menyiapkan project tanpa jargon yang berlebihan.</p>
        </div>
      </section>
      <section className="container resource-grid">
        {resources.map((resource) => (
          <article className="resource-card" key={resource.slug}>
            <span className="mini-label">{resource.category}</span>
            <h2 className="card-title" style={{ marginTop: 18 }}>{resource.title}</h2>
            <p>{resource.excerpt}</p>
            <Link className="button button-light button-small" href={`/resources/${resource.slug}`}>
              Baca panduan <ArrowRight size={15} />
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
