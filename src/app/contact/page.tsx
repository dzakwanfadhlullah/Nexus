import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Camera, FileText, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { buildWhatsAppUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Nexus Project",
  description: "Hubungi Nexus untuk konsultasi website, aplikasi, dashboard, atau sistem digital.",
};

export default function ContactPage() {
  const cards = [
    [
      MessageCircle,
      "WhatsApp",
      "Untuk konsultasi cepat, tanya layanan, atau kirim referensi.",
      buildWhatsAppUrl("Halo Nexus Project, saya ingin tanya tentang layanan website dan aplikasi."),
      "Chat WhatsApp",
    ],
    [Mail, "Email", "Untuk diskusi project, proposal, atau kolaborasi.", `mailto:${siteConfig.email}`, "Kirim Email"],
    [Camera, "Instagram", "Lihat update desain, mockup, dan inspirasi.", siteConfig.instagram, "Lihat Instagram"],
    [FileText, "Project Brief", "Mulai dari kebutuhan yang lebih terstruktur.", "/brief?source=contact", "Isi Brief"],
  ] as const;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1 className="display">Punya project atau referensi yang ingin dibangun?</h1>
          <p className="lead">Kirim kebutuhan atau pertanyaan awal. Nexus bantu arahkan langkah berikutnya.</p>
        </div>
      </section>
      <section className="container contact-grid">
        {cards.map(([Icon, title, description, href, label]) => (
          <article className="contact-card" key={title}>
            <span className="channel-icon"><Icon size={28} /></span>
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <Link className="button button-light button-small" href={href}>
              {label} <ArrowRight size={15} />
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
