"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, CheckCircle2, Send } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { showcases } from "@/data/site";
import { buildWhatsAppUrl } from "@/lib/content";

const schema = z.object({
  projectType: z.string().min(1, "Pilih jenis project."),
  businessName: z.string().min(2, "Nama bisnis wajib diisi."),
  industry: z.string().min(2, "Bidang bisnis wajib diisi."),
  referenceLink: z.union([z.literal(""), z.string().url("Link referensi belum valid.")]),
  features: z.array(z.string()),
  budgetRange: z.string().min(1, "Pilih range budget."),
  deadline: z.string().min(1, "Pilih target waktu."),
  name: z.string().min(2, "Nama wajib diisi."),
  whatsapp: z.string().min(8, "Nomor WhatsApp belum valid."),
  email: z.union([z.literal(""), z.string().email("Email belum valid.")]),
  message: z.string().min(10, "Ceritakan kebutuhan minimal 10 karakter."),
});

type FormData = z.infer<typeof schema>;

const projectTypes = [
  "Landing Page",
  "Company Profile",
  "E-commerce",
  "Web App",
  "Mobile App",
  "Dashboard",
  "Belum yakin",
];

const featureOptions = [
  "WhatsApp CTA",
  "Contact Form",
  "Maps",
  "Pricing",
  "Gallery",
  "Dashboard",
  "Payment",
  "CMS",
  "Blog",
  "Booking",
  "Login/Register",
  "Belum yakin",
];

const stepFields: (keyof FormData)[][] = [
  ["projectType"],
  ["businessName", "industry"],
  ["referenceLink"],
  ["features"],
  ["budgetRange", "deadline"],
  ["name", "whatsapp", "email", "message"],
];

export function ProjectBriefForm() {
  const params = useSearchParams();
  const referenceSlug = params.get("reference") ?? "";
  const service = params.get("service") ?? "";
  const packageSlug = params.get("package") ?? "";
  const source = params.get("source") ?? "direct";
  const selectedReference = showcases.find((item) => item.slug === referenceSlug);
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const inferredType = useMemo(() => {
    if (selectedReference) {
      const labels: Record<string, string> = {
        "landing-page": "Landing Page",
        "company-profile": "Company Profile",
        ecommerce: "E-commerce",
        "web-app": "Web App",
        "mobile-app": "Mobile App",
        dashboard: "Dashboard",
      };
      return labels[selectedReference.type] ?? "";
    }
    const labels: Record<string, string> = {
      "landing-page": "Landing Page",
      "company-profile": "Company Profile",
      ecommerce: "E-commerce",
      "web-app": "Web App",
      "mobile-app": "Mobile App",
      dashboard: "Dashboard",
    };
    return labels[service] ?? "";
  }, [selectedReference, service]);

  const {
    register,
    handleSubmit,
    trigger,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      projectType: inferredType,
      businessName: "",
      industry: selectedReference?.industry[0] ?? "",
      referenceLink: "",
      features: selectedReference?.features ?? [],
      budgetRange: "",
      deadline: "",
      name: "",
      whatsapp: "",
      email: "",
      message: selectedReference
        ? `Saya tertarik dengan arah ${selectedReference.title} dan ingin menyesuaikannya untuk bisnis saya.`
        : "",
    },
  });
  const selectedFeatures = useWatch({ control, name: "features" });

  async function nextStep() {
    const fields = stepFields[step];
    const valid = fields.length ? await trigger(fields) : true;
    if (valid) setStep((value) => Math.min(value + 1, 5));
  }

  function onSubmit(data: FormData) {
    const message = [
      "Halo Nexus Project, saya ingin konsultasi project.",
      "",
      `Nama: ${data.name}`,
      `Bisnis: ${data.businessName}`,
      `Industri: ${data.industry}`,
      `Project: ${data.projectType}`,
      selectedReference ? `Referensi Nexus: ${selectedReference.title}` : null,
      data.referenceLink ? `Referensi lain: ${data.referenceLink}` : null,
      service ? `Service context: ${service}` : null,
      packageSlug ? `Package context: ${packageSlug}` : null,
      `Fitur: ${data.features.join(", ") || "Belum ditentukan"}`,
      `Budget: ${data.budgetRange}`,
      `Timeline: ${data.deadline}`,
      `Sumber: ${source}`,
      "",
      `Kebutuhan: ${data.message}`,
      `WhatsApp: ${data.whatsapp}`,
      data.email ? `Email: ${data.email}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    setSubmitted(true);
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  if (submitted) {
    return (
      <div className="success-panel" role="status">
        <CheckCircle2 size={34} />
        <h2 className="card-title" style={{ marginTop: 16 }}>Brief siap dikirim.</h2>
        <p>WhatsApp sudah dibuka dengan ringkasan kebutuhanmu. Cek pesannya lalu tekan kirim.</p>
        <button className="button button-light" type="button" onClick={() => setSubmitted(false)}>
          Kembali ke form
        </button>
      </div>
    );
  }

  return (
    <form className="brief-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="progress" aria-label={`Langkah ${step + 1} dari 6`}>
        <span style={{ width: `${((step + 1) / 6) * 100}%` }} />
      </div>
      <p className="mini-label">Step {step + 1} of 6</p>

      {step === 0 && (
        <Step title="Jenis project apa yang ingin dibuat?" description="Pilih yang paling mendekati.">
          <div className="option-grid">
            {projectTypes.map((option) => (
              <label className="option-card" key={option}>
                <input type="radio" value={option} {...register("projectType")} />
                <span>{option}</span>
              </label>
            ))}
          </div>
          {errors.projectType && <p className="form-error">{errors.projectType.message}</p>}
        </Step>
      )}

      {step === 1 && (
        <Step title="Ceritakan sedikit tentang bisnismu." description="Agar struktur dan tone lebih tepat.">
          <Field label="Nama bisnis / brand" error={errors.businessName?.message}>
            <input className="form-input" placeholder="Contoh: Studio Pagi" {...register("businessName")} />
          </Field>
          <Field label="Bidang bisnis" error={errors.industry?.message}>
            <input className="form-input" placeholder="Contoh: Travel, Florist, SaaS" {...register("industry")} />
          </Field>
        </Step>
      )}

      {step === 2 && (
        <Step title="Punya referensi yang kamu suka?" description="Boleh kosong. Nexus tetap bisa bantu arahkan.">
          {selectedReference && (
            <div className="success-panel" style={{ marginBottom: 18 }}>
              <span className="mini-label">Selected showcase</span>
              <h3 className="card-title" style={{ marginTop: 10 }}>{selectedReference.title}</h3>
              <p>{selectedReference.shortDescription}</p>
            </div>
          )}
          <Field label="Link referensi website" error={errors.referenceLink?.message}>
            <input className="form-input" type="url" placeholder="https://..." {...register("referenceLink")} />
          </Field>
        </Step>
      )}

      {step === 3 && (
        <Step title="Fitur apa saja yang dibutuhkan?" description="Pilih beberapa atau pilih belum yakin.">
          <div className="option-grid">
            {featureOptions.map((option) => (
              <label className="option-card" key={option}>
                <input type="checkbox" value={option} {...register("features")} />
                <span>{option}</span>
              </label>
            ))}
          </div>
          <p style={{ color: "var(--muted)", fontSize: ".78rem" }}>
            Terpilih: {selectedFeatures?.join(", ") || "Belum ada"}
          </p>
        </Step>
      )}

      {step === 4 && (
        <Step title="Ada gambaran budget dan timeline?" description="Tidak harus pasti—ini untuk scope awal.">
          <Field label="Range budget" error={errors.budgetRange?.message}>
            <select className="form-select" {...register("budgetRange")}>
              <option value="">Pilih range</option>
              <option>Belum tahu</option>
              <option>Di bawah 3 juta</option>
              <option>3–5 juta</option>
              <option>5–10 juta</option>
              <option>10 juta ke atas</option>
              <option>Menyesuaikan scope</option>
            </select>
          </Field>
          <Field label="Target selesai" error={errors.deadline?.message}>
            <select className="form-select" {...register("deadline")}>
              <option value="">Pilih timeline</option>
              <option>Secepatnya</option>
              <option>1–2 minggu</option>
              <option>3–4 minggu</option>
              <option>1–2 bulan</option>
              <option>Fleksibel</option>
            </select>
          </Field>
        </Step>
      )}

      {step === 5 && (
        <Step title="Terakhir, kontak yang bisa dihubungi." description="Nexus akan melanjutkan diskusi lewat kontak ini.">
          <Field label="Nama" error={errors.name?.message}>
            <input className="form-input" {...register("name")} />
          </Field>
          <Field label="WhatsApp" error={errors.whatsapp?.message}>
            <input className="form-input" inputMode="tel" placeholder="628..." {...register("whatsapp")} />
          </Field>
          <Field label="Email (opsional)" error={errors.email?.message}>
            <input className="form-input" type="email" {...register("email")} />
          </Field>
          <Field label="Ceritakan kebutuhan singkatnya" error={errors.message?.message}>
            <textarea className="form-textarea" {...register("message")} />
          </Field>
        </Step>
      )}

      <div className="form-actions">
        <button
          className="button button-light"
          type="button"
          disabled={step === 0}
          onClick={() => setStep((value) => Math.max(0, value - 1))}
        >
          <ArrowLeft size={16} /> Kembali
        </button>
        {step < 5 ? (
          <button className="button button-dark" type="button" onClick={nextStep}>
            Lanjut <ArrowRight size={16} />
          </button>
        ) : (
          <button className="button button-dark" type="submit">
            Buka WhatsApp <Send size={16} />
          </button>
        )}
      </div>
    </form>
  );
}

function Step({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="card-title" style={{ marginTop: 14 }}>{title}</h2>
      <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>{description}</p>
      {children}
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="form-group">
      <label>{label}</label>
      {children}
      {error && <p className="form-error">{error}</p>}
    </div>
  );
}
