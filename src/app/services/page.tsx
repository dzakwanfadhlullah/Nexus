import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Layanan Website dan Aplikasi",
  description:
    "Bangun landing page, company profile, e-commerce, web app, dashboard, dan mobile app dengan arah yang jelas.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h1 className="display">Bangun produk digital dari arah yang lebih jelas.</h1>
          <p className="lead">
            Pilih bentuk project yang paling sesuai. Nexus membantu dari referensi dan struktur hingga implementasi.
          </p>
        </div>
      </section>
      <section className="container service-index-grid">
        {services.filter((service) => service.slug !== "website-catalog").map((service) => (
          <article className="service-index-card" key={service.slug}>
            <span className="mini-label">{service.slug.replaceAll("-", " ")}</span>
            <h2 className="card-title" style={{ marginTop: 18 }}>{service.title}</h2>
            <p>{service.description}</p>
            <div className="chip-list" style={{ marginBottom: 24 }}>
              {service.bestFor.slice(0, 3).map((item) => <span className="tag" key={item}>{item}</span>)}
            </div>
            <Link className="button button-dark button-small" href={`/services/${service.slug}`}>
              Lihat detail <ArrowRight size={15} />
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
