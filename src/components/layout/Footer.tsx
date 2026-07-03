import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

const columns = [
  {
    title: "Services",
    links: [
      ["Landing Page", "/services/landing-page"],
      ["Company Profile", "/services/company-profile"],
      ["E-commerce", "/services/ecommerce"],
      ["Web App", "/services/web-app"],
      ["Mobile App", "/services/mobile-app"],
      ["Dashboard", "/services/dashboard"],
    ],
  },
  {
    title: "Showcase",
    links: [
      ["All Showcase", "/showcase"],
      ["By Industry", "/showcase"],
      ["By Style", "/showcase"],
      ["Case Studies", "/showcase"],
      ["Website Directions", "/showcase"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Website Checklist", "/resources/website-checklist-bisnis-lokal"],
      ["Planning Guide", "/resources/landing-page-vs-company-profile"],
      ["Brief Template", "/brief"],
      ["All Resources", "/resources"],
    ],
  },
  {
    title: "Start Project",
    links: [
      ["WhatsApp", `https://wa.me/${siteConfig.whatsapp}`],
      ["Email", `mailto:${siteConfig.email}`],
      ["Instagram", siteConfig.instagram],
      ["Submit Brief", "/brief"],
      ["Contact", "/contact"],
    ],
  },
];

export function Footer() {
  return (
    <div className="site-footer-wrap">
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <Image src="/icons/nexus-logo.svg" alt="Nexus Project" width={184} height={40} />
            <p>
              Studio digital berbasis showcase untuk website, aplikasi, dan sistem digital yang siap digunakan.
            </p>
          </div>
          {columns.map((column) => (
            <nav className="footer-column" key={column.title} aria-label={column.title}>
              <h3>{column.title}</h3>
              {column.links.map(([label, href]) => (
                <Link key={label} href={href}>
                  {label}
                </Link>
              ))}
            </nav>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© 2026 Nexus Project. Dibangun dengan arah, struktur, dan tujuan.</span>
          <span>Indonesia · Available for selected projects</span>
        </div>
      </footer>
    </div>
  );
}
