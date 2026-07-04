import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  Building2,
  CalendarDays,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  Database,
  FileText,
  FolderKanban,
  Gauge,
  LayoutDashboard,
  PanelTop,
  Rocket,
  Search,
  ShoppingBag,
  Smartphone,
  Target,
  WandSparkles,
} from "lucide-react";
import {
  SiFramer,
  SiGoogleanalytics,
  SiGoogleforms,
  SiGooglegemini,
  SiGooglesearchconsole,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiClaude,
  SiCursor,
  SiStrapi,
  SiSupabase,
  SiTailwindcss,
  SiWhatsapp,
} from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";
import { pricingPackages, services, showcases, siteConfig } from "@/data/site";
import { ShowcaseCard } from "@/components/showcase/ShowcaseCard";
import { HorizontalRail } from "@/components/motion/HorizontalRail";
import { Floating, Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { HeroVideo } from "@/components/home/HeroVideo";
import { buildWhatsAppUrl } from "@/lib/content";

const personas = [
  [
    "Local Business",
    "Website katalog, Maps, dan WhatsApp untuk calon pelanggan.",
    "/images/personas/01-local-business.jpg",
  ],
  [
    "Service Business",
    "Landing page untuk travel, catering, rental, florist, dan jasa lokal.",
    "/images/personas/02-service-business.png",
  ],
  [
    "Company & Organization",
    "Company profile, layanan, portfolio, dan kontak resmi.",
    "/images/personas/03-company-organization.jpg",
  ],
  [
    "Founder & Startup",
    "Landing page MVP, waitlist, product page, dan validasi awal.",
    "/images/personas/04-founder-startup.jpg",
  ],
  [
    "Creator & Portfolio",
    "Personal website, case study, project archive, dan CV digital.",
    "/images/personas/05-creator-portfolio.jpg",
  ],
  [
    "Online Seller",
    "Katalog, promo, checkout ringan, dan order WhatsApp.",
    "/images/personas/06-online-seller.jpg",
  ],
  [
    "Internal Team",
    "Dashboard, manajemen data, laporan, dan sistem kerja internal.",
    "/images/personas/07-internal-team.jpg",
  ],
  [
    "Education & Community",
    "Course, event, membership, dan halaman program.",
    "/images/personas/08-education-community.png",
  ],
];

const proof = [
  [Search, "Research-led Direction", "Dimulai dari kebutuhan, referensi, dan tujuan yang jelas."],
  [Smartphone, "Mobile-first Output", "Nyaman digunakan di mobile, bukan hanya bagus di desktop."],
  [Target, "Lead-ready Structure", "CTA dan jalur kontak direncanakan sejak awal."],
  [Blocks, "Scalable Build", "Bisa berkembang dari website menjadi sistem yang lebih besar."],
];

const heroPreviews = [
  {
    label: "Travel direction",
    slug: "modern-travel-website",
    image: "/images/showcase/modern-travel-website.png",
  },
  {
    label: "Florist direction",
    slug: "soft-florist-catalog",
    image: "/images/showcase/soft-florist-catalog.png",
  },
  {
    label: "Company direction",
    slug: "crayon-daycare-trust-website",
    image: "/images/showcase/crayon-kinder.jpg",
  },
  {
    label: "Dashboard direction",
    slug: "dashboard-web-app",
    image: "/images/showcase/dashboard-web-app.png",
  },
] as const;

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
        <Stagger className="hero-copy" delay={0.08}>
          <StaggerItem><p className="eyebrow">Studio digital berbasis showcase</p></StaggerItem>
          <StaggerItem>
            <h1 className="display">
              Temukan arah yang tepat, lalu <em>bangun bersama Nexus.</em>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="lead">
              Nexus membantu bisnis menemukan referensi, menyusun struktur, merancang tampilan,
              dan membangun website atau aplikasi yang siap digunakan.
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="hero-actions">
              <Link className="button button-dark" href="/brief?source=homepage-hero">
                Konsultasi Project <ArrowRight size={17} />
              </Link>
              <Link className="button button-light" href="/showcase">
                Lihat Showcase
              </Link>
            </div>
          </StaggerItem>
          <StaggerItem>
            <p className="hero-note">Mulai dari ide, referensi, atau kebutuhan yang masih mentah.</p>
          </StaggerItem>
        </Stagger>

        <Reveal delay={0.22} variant="scale">
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
                  {heroPreviews.map((item) => (
                    <Link
                      className="mini-preview"
                      href={`/showcase/${item.slug}`}
                      key={item.slug}
                    >
                      <span className="mini-preview-image">
                        <Image
                          src={item.image}
                          alt={`Preview ${item.label}`}
                          fill
                          sizes="(max-width: 767px) 80vw, 260px"
                        />
                      </span>
                      <span>{item.label}</span>
                    </Link>
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
          <Stagger className="service-grid" delay={0.08}>
            {services.slice(0, 5).map((service, index) => {
              const Icon = icons[index];
              return (
                <StaggerItem key={service.slug}>
                  <Link className="service-item" href={`/services/${service.slug}`}>
                    <span className="service-icon">
                      <Icon size={25} strokeWidth={1.7} />
                    </span>
                    <span>{service.title}</span>
                  </Link>
                </StaggerItem>
              );
            })}
          </Stagger>
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
      <HorizontalRail label="Tipe pengguna Nexus">
        {personas.map(([title, description, image]) => (
          <article className="persona-card" key={title}>
            <div className="persona-art">
              <Image
                className="persona-image"
                src={image}
                alt={`Ilustrasi ${title}`}
                fill
                sizes="255px"
              />
            </div>
            <div className="persona-body">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </HorizontalRail>
    </section>
  );
}

function DirectionSection() {
  return (
    <section className="section" id="direction">
      <Reveal className="container" variant="left">
        <div className="feature-panel direction-panel">
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
    {
      icon: Code2,
      title: "Frontend & Interface",
      items: [
        { icon: SiNextdotjs, label: "Next.js", tone: "next", color: "#111111" },
        { icon: SiReact, label: "React", tone: "react", color: "#149ECA" },
        { icon: SiTailwindcss, label: "Responsive UI", tone: "tailwind", color: "#06B6D4" },
        { icon: SiFramer, label: "Motion", tone: "framer", color: "#8254F5" },
      ],
    },
    {
      icon: Database,
      title: "Backend & Data",
      items: [
        { icon: SiSupabase, label: "Supabase", tone: "supabase", color: "#3ECF8E" },
        { icon: SiPostgresql, label: "PostgreSQL", tone: "postgres", color: "#4169E1" },
        { icon: SiStrapi, label: "CMS", tone: "strapi", color: "#4945FF" },
        { icon: SiPostman, label: "API", tone: "postman", color: "#FF6C37" },
      ],
    },
    {
      icon: Rocket,
      title: "Start Building",
      items: [
        { icon: SiClaude, label: "Claude", tone: "claude", color: "#D97757" },
        { icon: TbBrandOpenai, label: "Codex", tone: "codex", color: "#111111" },
        { icon: SiCursor, label: "Cursor", tone: "cursor", color: "#202020" },
        { icon: SiGooglegemini, label: "Gemini", tone: "gemini", color: "#657DEB" },
      ],
    },
    {
      icon: Target,
      title: "Lead & Growth",
      items: [
        { icon: SiWhatsapp, label: "WhatsApp", tone: "whatsapp", color: "#25D366" },
        { icon: SiGoogleforms, label: "Forms", tone: "forms", color: "#7248B9" },
        {
          icon: SiGooglesearchconsole,
          label: "Google Search Console",
          tone: "search-console",
          color: "#4285F4",
        },
        {
          icon: SiGoogleanalytics,
          label: "Google Analytics",
          tone: "analytics",
          color: "#E37400",
        },
      ],
    },
  ] as const;

  return (
    <section className="section">
      <Reveal className="container" variant="right">
        <div className="feature-panel build-panel mint">
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
          <Stagger className="integration-grid" delay={0.12}>
            {cards.map(({ icon: Icon, title, items }) => (
              <StaggerItem key={title}>
                <article className="integration-card">
                  <div className="integration-heading">
                    <Icon size={19} aria-hidden="true" />
                    <h3>{title}</h3>
                  </div>
                  <div className="integration-logos">
                    {items.map(({ icon: ItemIcon, label, tone, color }) => (
                      <span
                        className={`integration-logo integration-logo-${tone}`}
                        key={label}
                        title={label}
                        aria-label={label}
                        style={{ color }}
                      >
                        <ItemIcon size={22} aria-hidden="true" />
                      </span>
                    ))}
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
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
      <Reveal className="container" variant="mask">
        <div className="feature-panel process-panel yellow">
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
          <Stagger className="process-grid" delay={0.16}>
            {cards.map(([Icon, title, items], index) => (
              <StaggerItem key={title}>
                <article className="process-card">
                  <span className="process-step">0{index + 1}</span>
                  <h3><Icon size={20} /> {title}</h3>
                  <ul>
                    {items.map((item) => <li key={item}><CheckCircle2 size={14} /> {item}</li>)}
                  </ul>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
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
      <HorizontalRail className="showcase-rail" label="Website direction carousel">
        {showcases.map((item, index) => (
          <ShowcaseCard item={item} priority={index < 2} key={item.slug} />
        ))}
      </HorizontalRail>
    </section>
  );
}

function ChannelSection() {
  const whatsapp = buildWhatsAppUrl(
    "Halo Nexus Project, saya ingin konsultasi pembuatan website/aplikasi dan ingin dibantu menentukan arah project."
  );
  const channels = [
    {
      title: "WhatsApp",
      description: "Konsultasi project dan kirim referensi.",
      href: whatsapp,
      logo: "/images/brands/whatsapp.svg",
      logoWidth: 145,
      logoHeight: 40,
      dark: false,
    },
    {
      title: "Instagram",
      description: "Update desain, mockup, dan proses.",
      href: siteConfig.instagram,
      logo: "/images/brands/instagram.svg",
      logoWidth: 148,
      logoHeight: 32,
      dark: false,
    },
    {
      title: "Showcase Library",
      description: "Jelajahi arah berdasarkan kebutuhan.",
      href: "/showcase",
      logo: "/images/brands/behance.svg",
      logoWidth: 150,
      logoHeight: 28,
      dark: true,
    },
    {
      title: "Resources",
      description: "Checklist dan panduan sebelum membangun.",
      href: "/resources",
      logo: "/images/brands/notion.svg",
      logoWidth: 42,
      logoHeight: 42,
      logoText: "Notion",
      dark: false,
    },
  ] as const;

  return (
    <section className="section">
      <Reveal className="section-head container">
        <h2 className="section-title">Tetap terhubung dengan proses dan inspirasi Nexus.</h2>
        <p className="lead">Pilih cara paling nyaman untuk melihat referensi atau mulai berdiskusi.</p>
      </Reveal>
      <Reveal className="container channels-grid">
        {channels.map(({ title, description, href, dark, logo, logoWidth, logoHeight, ...channel }) => (
          <Link className={`channel-card ${dark ? "dark" : ""}`} href={href} key={title}>
            <span className={`channel-logo ${dark ? "channel-logo-on-dark" : ""}`}>
              <Image
                src={logo}
                alt=""
                width={logoWidth}
                height={logoHeight}
              />
              {"logoText" in channel ? (
                <span className="channel-logo-text">{channel.logoText}</span>
              ) : null}
            </span>
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
        <div className="final-cta-copy">
          <p className="eyebrow">Start a project</p>
          <h2 className="section-title">Siap bikin website atau aplikasi yang lebih serius?</h2>
          <p className="final-cta-description">
            Kirim kebutuhan, referensi, atau contoh website yang kamu suka. Nexus bantu ubah jadi arah
            project yang jelas.
          </p>
        </div>
        <div className="final-actions">
          <Link className="button button-dark" href="/brief?source=final-cta">
            Mulai Project <ArrowRight size={16} />
          </Link>
          <Link className="button button-light" href={referenceUrl}>
            Kirim Referensi <ArrowRight size={16} />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
