import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { pricingPackages } from "@/data/site";

export const metadata: Metadata = {
  title: "Paket Website dan Custom Build",
  description:
    "Pilih Website Launch untuk halaman bisnis atau Custom Build untuk web app, dashboard, dan sistem digital.",
};

export default function PricingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Pricing</p>
          <h1 className="display">Mulai dari kebutuhan paling penting.</h1>
          <p className="lead">
            Setiap project memiliki scope berbeda. Nexus membantu memetakan kebutuhan sebelum memberi estimasi.
          </p>
        </div>
      </section>

      <section className="container pricing-grid" style={{ paddingBottom: 90 }}>
        {pricingPackages.map((item) => (
          <article className={`pricing-card ${item.highlighted ? "highlighted" : ""}`} key={item.slug}>
            <span className="mini-label">{item.highlighted ? "Custom scope" : "Website starter"}</span>
            <h2 className="section-title" style={{ fontSize: "2.8rem", marginTop: 18 }}>{item.title}</h2>
            <p>{item.description}</p>
            <div className="pricing-price">{item.priceLabel}</div>
            <ul>
              {item.includes.map((feature) => <li key={feature}><Check size={17} /> {feature}</li>)}
            </ul>
            <Link
              className={`button ${item.highlighted ? "button-light" : "button-dark"}`}
              href={`/brief?package=${item.slug}&source=pricing`}
            >
              {item.ctaLabel} <ArrowRight size={16} />
            </Link>
          </article>
        ))}
      </section>

      <section className="section-tight">
        <div className="container detail-card wide">
          <p className="eyebrow">What affects price</p>
          <h2 className="section-title">Estimasi mengikuti scope yang benar-benar dibutuhkan.</h2>
          <div className="chip-list" style={{ marginTop: 26 }}>
            {[
              "Jumlah halaman",
              "Custom design",
              "Copywriting",
              "Database",
              "Login & roles",
              "Payment",
              "CMS",
              "Deadline",
            ].map((item) => <span className="tag" key={item}>{item}</span>)}
          </div>
        </div>
      </section>
    </>
  );
}
