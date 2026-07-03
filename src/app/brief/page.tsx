import type { Metadata } from "next";
import { Suspense } from "react";
import { CheckCircle2 } from "lucide-react";
import { ProjectBriefForm } from "@/components/brief/ProjectBriefForm";

export const metadata: Metadata = {
  title: "Kirim Brief Project",
  description:
    "Ceritakan kebutuhan website atau aplikasi. Nexus membantu merapikan arah, struktur, fitur, dan estimasi project.",
};

export default function BriefPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Project Brief</p>
          <h1 className="display">Ceritakan kebutuhan project kamu.</h1>
          <p className="lead">
            Tidak perlu langsung lengkap. Isi kebutuhan awal, lalu Nexus bantu rapikan arahnya.
          </p>
        </div>
      </section>
      <section className="container brief-layout">
        <aside>
          <p className="eyebrow">What happens next</p>
          <h2 className="section-title">Mulai ringan. Arahkan dengan jelas.</h2>
          <div className="brief-list" style={{ marginTop: 26 }}>
            {[
              "Pilih jenis project",
              "Ceritakan konteks bisnis",
              "Kirim referensi jika ada",
              "Tentukan fitur dan scope awal",
              "Lanjutkan diskusi via WhatsApp",
            ].map((item) => (
              <div className="brief-item" key={item}>
                <span>{item}</span>
                <CheckCircle2 size={16} />
              </div>
            ))}
          </div>
        </aside>
        <Suspense fallback={<div className="brief-form">Memuat brief...</div>}>
          <ProjectBriefForm />
        </Suspense>
      </section>
    </>
  );
}
