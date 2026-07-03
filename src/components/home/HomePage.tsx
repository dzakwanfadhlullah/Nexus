import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  BookOpen,
  Building2,
  CalendarDays,
  Camera,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  Database,
  FileText,
  FolderKanban,
  Gauge,
  Globe2,
  LayoutDashboard,
  MessageCircle,
  PanelTop,
  Rocket,
  Search,
  ShoppingBag,
  Smartphone,
  Target,
  WandSparkles,
} from "lucide-react";
import { pricingPackages, services, showcases, siteConfig } from "@/data/site";
import { ShowcaseCard } from "@/components/showcase/ShowcaseCard";
import { Floating, Reveal } from "@/components/motion/Reveal";
import { HeroVideo } from "@/components/home/HeroVideo";
import { buildWhatsAppUrl } from "@/lib/content";

const personas = [
  ["Local Business", "Website katalog, Maps, dan WhatsApp untuk calon pelanggan."],
  ["Service Business", "Landing page untuk travel, catering, rental, florist, dan jasa lokal."],
  ["Company & Organization", "Company profile, layanan, portfolio, dan kontak resmi."],
  ["Founder & Startup", "Landing page MVP, waitlist, product page, dan validasi awal."],
  ["Creator & Portfolio", "Personal website, case study, project archive, dan CV digital."],
  ["Online Seller", "Katalog, promo, checkout ringan, dan order WhatsApp."],
  ["Internal Team", "Dashboard, manajemen data, laporan, dan sistem kerja internal."],
  ["Education & Community", "Course, event, membership, dan halaman program."],
];

const proof = [
  [Search, "Research-led Direction", "Dimulai dari kebutuhan, referensi, dan tujuan yang jelas."],
  [Smartphone, "Mobile-first Output", "Nyaman digunakan di mobile, bukan hanya bagus di desktop."],
  [Target, "Lead-ready Structure", "CTA dan jalur kontak direncanakan sejak awal."],
  [Blocks, "Scalable Build", "Bisa berkembang dari website menjadi sistem yang lebih besar."],
];

export function HomePage() {
  return (
    <>
      <Hero />
      <ServiceRow />
      <PersonaSection />
      <DirectionSection />
      <QuoteSection />
      <BuildSection />
      <ProofSection />
      <ProcessSection />
      <TaxonomySection />
      <ShowcaseSection />
      <ChannelSection />
      <PricingSection />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-media" aria-hidden="true">
        <HeroVideo />
      </div>
      <div className="container-wide">
        <Reveal className="hero-copy">
          <p className="eyebrow">Studio digital berbasis showcase</p>
          <h1 className="display">
            Temukan arah yang tepat, lalu <em>bangun bersama Nexus.</em>
          </h1>
          <p className="lead">
            Nexus membantu bisnis menemukan referensi, menyusun struktur, merancang tampilan,
            dan membangun website atau aplikasi yang siap digunakan.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/brief?source=homepage-hero">
              Konsultasi Project <ArrowRight size={17} />
            </Link>
            <Link className="button button-light" href="/showcase">
              Lihat Showcase
            </Link>
          </div>
          <p className="hero-note">Mulai dari ide, referensi, atau kebutuhan yang masih mentah.</p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="hero-stage">
            <div className="browser">
              <div className="browser-bar" aria-hidden="true">
                <span className="browser-dot" />
                <span className="browser-dot" />
                <span className="browser-dot" />
                <span className="browser-address" />
              </div>
              <div className="hero-dashboard">
                <div className="brief-panel">
                  <span className="mini-label">Project direction</span>
                  <h2>Satu tempat untuk melihat, memilih, dan mulai membangun.</h2>
                  <div className="brief-list">
                    <div className="brief-item">
                      <span>Project type</span>
                      <span className="brief-value">Landing Page</span>
                    </div>
                    <div className="brief-item">
                      <span>Business goal</span>
                      <span className="brief-value">Booking Leads</span>
                    </div>
                    <div className="brief-item">
                      <span>Visual tone</span>
                      <span className="brief-value">Premium + Clean</span>
                    </div>
                    <div className="brief-item">
                      <span>Main CTA</span>
                      <span className="brief-value">WhatsApp</span>
                    </div>
                  </div>
                </div>
                <div className="preview-panel">
                  {["Travel", "Florist", "Company", "Dashboard"].map((title) => (
                    <div className="mini-preview" key={title}>
                      <span>{title} direction</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Floating className="floating-chip chip-one">
              <PanelTop size={15} /> Landing Page
            </Floating>
            <Floating className="floating-chip chip-two" delay={0.8}>
              <LayoutDashboard size={15} /> Dashboard
            </Floating>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceRow() {
  const icons = [PanelTop, Building2, ShoppingBag, LayoutDashboard, Smartphone];

  return (
    <section className="section-tight" id="services">
      <div className="container">
        <Reveal>
          <div className="service-intro">
            <h2 className="section-title">
              Bukan cuma satu jenis website, tapi untuk <em>berbagai kebutuhan digital.</em>
            </h2>
          </div>
          <div className="service-grid">
            {services.slice(0, 5).map((service, index) => {
              const Icon = icons[index];
              return (
                <Link className="service-item" href={`/services/${service.slug}`} key={service.slug}>
                  <span className="service-icon">
                    <Icon size={25} strokeWidth={1.7} />
                  </span>
                  <span>{service.title}</span>
                </Link>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PersonaSection() {
  return (
    <section className="section">
      <Reveal className="section-head container">
        <h2 className="section-title">Siapa saja yang bisa membangun bersama Nexus?</h2>
        <p className="lead">
          Dari bisnis lokal sampai produk digital, arah project dibentuk mengikuti kebutuhan nyata.
        </p>
      </Reveal>
      <div className="horizontal-rail" aria-label="Tipe pengguna Nexus">
        {personas.map(([title, description]) => (
          <article className="persona-card" key={title}>
            <div className="persona-art" aria-hidden="true" />
            <div className="persona-body">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function DirectionSection() {
  return (
    <section className="section" id="direction">
      <Reveal className="container">
        <div className="feature-panel">
          <div className="mockup-stack" aria-label="Visual proses direction">
            <div className="mockup-note">
              <span className="mini-label">Project brief</span>
              <h3>Florist catalog</h3>
              <div className="mockup-line" style={{ "--w": "94%" } as React.CSSProperties} />
              <div className="mockup-line" style={{ "--w": "76%" } as React.CSSProperties} />
              <div className="mockup-line" style={{ "--w": "58%" } as React.CSSProperties} />
            </div>
            <div className="mockup-note">
              <span className="mini-label">Website structure</span>
              <h3>Hero → Catalog → Order</h3>
              <div className="brief-list">
                <div className="brief-item"><span>Hero copy</span><Check size={15} /></div>
                <div className="brief-item"><span>Best seller</span><Check size={15} /></div>
                <div className="brief-item"><span>WhatsApp flow</span><Check size={15} /></div>
              </div>
            </div>
          </div>
          <div className="feature-copy">
            <p className="eyebrow">Direction</p>
            <h2 className="section-title">Dari ide mentah menjadi arah yang siap dibangun.</h2>
            <p>
              Kamu tidak harus datang dengan brief sempurna. Nexus membantu merapikan kebutuhan,
              mengolah referensi, menyusun halaman, dan menentukan arah konten.
            </p>
            <div className="feature-list">
              {[
                [Search, "Business Research"],
                [WandSparkles, "Reference Mapping"],
                [FolderKanban, "Page Structure"],
                [Rocket, "Build Direction"],
              ].map(([Icon, label]) => {
                const ItemIcon = Icon as typeof Search;
                return (
                  <span className="feature-list-item" key={label as string}>
                    <ItemIcon size={18} /> {label as string}
                  </span>
                );
              })}
            </div>
            <Link className="button button-dark" href="/#process">
              Lihat Proses Nexus <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function QuoteSection() {
  return (
    <section className="section-tight">
      <Reveal className="container quote-block">
        <div className="quote-author">
          <span className="quote-mark">N</span>
          <span>Nexus Project Principle</span>
        </div>
        <blockquote className="quote-text">
          “Website yang baik bukan hanya terlihat bagus, tapi membuat pengunjung paham,
          percaya, dan tahu harus klik apa.”
        </blockquote>
      </Reveal>
    </section>
  );
}

function BuildSection() {
  const cards = [
    [Code2, "Frontend & Interface", ["Next.js", "React", "Responsive UI", "Motion"]],
    [Database, "Backend & Data", ["Supabase", "PostgreSQL", "CMS", "API"]],
    [Rocket, "Start Building", ["Landing Page", "Company Profile", "Web App", "Dashboard"]],
    [Target, "Lead & Growth", ["WhatsApp", "Forms", "SEO Basic", "Analytics"]],
  ] as const;

  return (
    <section className="section">
      <Reveal className="container">
        <div className="feature-panel mint">
          <div className="feature-copy">
            <p className="eyebrow">Build</p>
            <h2 className="section-title">Hubungkan website dengan tools yang sudah dipakai bisnismu.</h2>
            <p>
              Stack dipilih sesuai kebutuhan: website cepat, CMS untuk konten, database untuk aplikasi,
              WhatsApp untuk leads, dan dashboard untuk operasional.
            </p>
            <Link className="button button-dark" href="/brief?source=build-section">
              Diskusikan Kebutuhan <ArrowRight size={16} />
            </Link>
          </div>
          <div className="integration-grid">
            {cards.map(([Icon, title, items]) => (
              <article className="integration-card" key={title}>
                <Icon size={22} />
                <h3>{title}</h3>
                <div className="chip-list">
                  {items.map((item) => <span className="tag" key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function ProofSection() {
  return (
    <section className="section-tight">
      <Reveal className="container proof-grid">
        {proof.map(([Icon, title, description]) => {
          const ProofIcon = Icon as typeof Search;
          return (
            <article className="proof-item" key={title as string}>
              <span className="proof-icon"><ProofIcon size={23} /></span>
              <h3>{title as string}</h3>
              <p>{description as string}</p>
            </article>
          );
        })}
      </Reveal>
    </section>
  );
}

function ProcessSection() {
  const cards = [
    [CalendarDays, "Timeline", ["Brief", "Direction", "Design", "Development"]],
    [ClipboardCheck, "Tasks", ["Copywriting", "UI Design", "Responsive", "Deploy"]],
    [FileText, "Notes", ["Brand tone", "Audience", "CTA priority", "Content"]],
    [Gauge, "Review", ["Desktop", "Mobile", "Speed", "Form/WA"]],
  ] as const;

  return (
    <section className="section" id="process">
      <Reveal className="container">
        <div className="feature-panel yellow">
          <div className="feature-copy">
            <p className="eyebrow">Process</p>
            <h2 className="section-title">Alur project yang jelas dari konsultasi sampai launch.</h2>
            <p>
              Project dibagi menjadi tahap kecil yang mudah dipantau: brief, referensi, struktur,
              desain, development, review, dan launch.
            </p>
            <Link className="button button-dark" href="/brief?source=process">
              Mulai dari Brief <ArrowRight size={16} />
            </Link>
          </div>
          <div className="process-grid">
            {cards.map(([Icon, title, items]) => (
              <article className="process-card" key={title}>
                <h3><Icon size={20} /> {title}</h3>
                <ul>
                  {items.map((item) => <li key={item}><CheckCircle2 size={14} /> {item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function TaxonomySection() {
  return (
    <section className="section" id="showcase">
      <Reveal className="section-head container">
        <p className="eyebrow">Showcase</p>
        <h2 className="section-title">Temukan arah website yang tepat sebelum mulai membangun.</h2>
        <p className="lead">
          Jelajahi berdasarkan jenis project, industri, style, fitur, dan tujuan bisnis.
        </p>
      </Reveal>
      <Reveal className="container taxonomy-grid" delay={0.08}>
        <article className="taxonomy-card">
          <h3 className="card-title">Project Types</h3>
          <p>Pilih bentuk produk digital yang paling sesuai dengan kebutuhan saat ini.</p>
          <div className="taxonomy-visual">
            {["Landing Page", "Company Profile", "Web App", "Dashboard"].map((item) => (
              <div className="taxonomy-row" key={item}><span>{item}</span><ArrowRight size={13} /></div>
            ))}
          </div>
        </article>
        <article className="taxonomy-card">
          <h3 className="card-title">Styles & Tags</h3>
          <p>Temukan tone visual yang mendekati karakter brand dan audience.</p>
          <div className="taxonomy-visual chip-list">
            {["#minimal", "#premium", "#soft", "#dark", "#clean", "#bold", "#editorial"].map((item) => (
              <span className="tag" key={item}>{item}</span>
            ))}
          </div>
        </article>
        <article className="taxonomy-card">
          <h3 className="card-title">Collections</h3>
          <p>Arah pilihan yang dikelompokkan berdasarkan industri dan tujuan.</p>
          <div className="taxonomy-visual">
            {[
              ["Travel booking", "Leads"],
              ["Florist catalog", "Orders"],
              ["Clinic profile", "Trust"],
              ["Dashboard", "Operations"],
            ].map(([name, goal]) => (
              <div className="taxonomy-row" key={name}><span>{name}</span><span>{goal}</span></div>
            ))}
          </div>
        </article>
      </Reveal>
      <div style={{ textAlign: "center", marginTop: 32 }}>
        <Link className="button button-light" href="/showcase">
          Lihat Semua Showcase <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

function ShowcaseSection() {
  return (
    <section className="section">
      <Reveal className="section-head container">
        <p className="eyebrow">Website Direction</p>
        <h2 className="section-title">Bikin website yang terasa benar-benar milik brand kamu.</h2>
        <p className="lead">Pilih arah sebagai titik awal—bukan untuk disalin mentah.</p>
      </Reveal>
      <div className="horizontal-rail showcase-rail" aria-label="Website direction carousel">
        {showcases.map((item, index) => (
          <ShowcaseCard item={item} priority={index < 2} key={item.slug} />
        ))}
      </div>
    </section>
  );
}

function ChannelSection() {
  const whatsapp = buildWhatsAppUrl(
    "Halo Nexus Project, saya ingin konsultasi pembuatan website/aplikasi dan ingin dibantu menentukan arah project."
  );
  const channels = [
    [MessageCircle, "WhatsApp", "Konsultasi project dan kirim referensi.", whatsapp, false],
    [Camera, "Instagram", "Update desain, mockup, dan proses.", siteConfig.instagram, false],
    [Globe2, "Showcase Library", "Jelajahi arah berdasarkan kebutuhan.", "/showcase", true],
    [BookOpen, "Resources", "Checklist dan panduan sebelum membangun.", "/resources", false],
  ] as const;

  return (
    <section className="section">
      <Reveal className="section-head container">
        <h2 className="section-title">Tetap terhubung dengan proses dan inspirasi Nexus.</h2>
        <p className="lead">Pilih cara paling nyaman untuk melihat referensi atau mulai berdiskusi.</p>
      </Reveal>
      <Reveal className="container channels-grid">
        {channels.map(([Icon, title, description, href, dark]) => (
          <Link className={`channel-card ${dark ? "dark" : ""}`} href={href} key={title}>
            <span className="channel-icon"><Icon size={29} /></span>
            <h3>{title}</h3>
            <p>{description}</p>
            <span className="button button-light button-small">Buka <ArrowRight size={14} /></span>
          </Link>
        ))}
      </Reveal>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="section" id="pricing">
      <Reveal className="section-head container">
        <p className="eyebrow">Pricing</p>
        <h2 className="section-title">Mulai dari yang paling penting, lalu kembangkan saat siap.</h2>
        <p className="lead">Harga mengikuti scope—tanpa angka palsu atau paket yang dipaksakan.</p>
      </Reveal>
      <Reveal className="container pricing-grid">
        {pricingPackages.map((item) => (
          <article className={`pricing-card ${item.highlighted ? "highlighted" : ""}`} key={item.slug}>
            <span className="mini-label">{item.highlighted ? "Custom scope" : "Website starter"}</span>
            <h3 className="section-title" style={{ fontSize: "2.65rem", marginTop: 16 }}>{item.title}</h3>
            <p>{item.description}</p>
            <div className="pricing-price">{item.priceLabel}</div>
            <ul>
              {item.includes.map((feature) => (
                <li key={feature}><Check size={17} /> {feature}</li>
              ))}
            </ul>
            <Link
              className={`button ${item.highlighted ? "button-light" : "button-dark"}`}
              href={`/brief?package=${item.slug}&source=homepage-pricing`}
            >
              {item.ctaLabel} <ArrowRight size={16} />
            </Link>
          </article>
        ))}
      </Reveal>
    </section>
  );
}

function FinalCTA() {
  const referenceUrl = buildWhatsAppUrl(
    "Halo Nexus Project, saya punya referensi website dan ingin dibantu membuat versi yang sesuai untuk bisnis saya."
  );
  return (
    <section className="section">
      <Reveal className="container final-cta">
        <div>
          <h2 className="section-title">Siap bikin website atau aplikasi yang lebih serius?</h2>
          <p>
            Kirim kebutuhan, referensi, atau contoh website yang kamu suka. Nexus bantu ubah jadi arah
            project yang jelas.
          </p>
        </div>
        <div className="final-actions">
          <Link className="button button-dark" href="/brief?source=final-cta">
            Mulai Project <ArrowRight size={16} />
          </Link>
          <Link className="button button-light" href={referenceUrl}>
            Kirim Referensi
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
