import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "78vh", display: "grid", placeItems: "center" }}>
      <div className="container">
        <p className="eyebrow">404</p>
        <h1 className="display">Halaman ini belum ditemukan.</h1>
        <p className="lead">
          Mungkin link sudah berubah. Kembali ke showcase atau mulai konsultasi project.
        </p>
        <div className="hero-actions">
          <Link className="button button-dark" href="/">
            Kembali ke Homepage
          </Link>
          <Link className="button button-light" href="/showcase">
            Lihat Showcase <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
