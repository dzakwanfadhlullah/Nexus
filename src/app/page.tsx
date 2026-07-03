import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: "Nexus Project — Studio Digital untuk Website, Aplikasi, dan Showcase",
  description:
    "Nexus Project membantu bisnis menemukan arah website atau aplikasi melalui showcase, lalu membangunnya menjadi produk digital yang siap digunakan.",
};

export default function Page() {
  return <HomePage />;
}
