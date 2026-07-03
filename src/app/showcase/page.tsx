import type { Metadata } from "next";
import { ShowcaseExplorer } from "@/components/showcase/ShowcaseExplorer";
import { showcases } from "@/data/site";

export const metadata: Metadata = {
  title: "Showcase Website dan Aplikasi",
  description:
    "Jelajahi arah website dan aplikasi berdasarkan jenis project, industri, style visual, tujuan bisnis, dan fitur.",
};

export default async function ShowcasePage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Showcase Library</p>
          <h1 className="display">Jelajahi arah website untuk project berikutnya.</h1>
          <p className="lead">
            Cari berdasarkan jenis project, industri, style, tujuan bisnis, dan fitur yang dibutuhkan.
          </p>
        </div>
      </section>
      <section className="container">
        <ShowcaseExplorer items={showcases} initialQuery={params.q} />
      </section>
    </>
  );
}
