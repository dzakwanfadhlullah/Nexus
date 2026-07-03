"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Nexus Project — homepage">
          <Image src="/icons/nexus-logo.svg" alt="Nexus Project" width={184} height={40} priority />
        </Link>

        <nav className="header-nav" aria-label="Navigasi utama">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="button button-dark button-small" href="/brief?source=header">
          Konsultasi Project
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav className="mobile-menu" hidden={!open} aria-label="Navigasi mobile">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link href="/contact" onClick={() => setOpen(false)}>
          Contact
        </Link>
        <Link className="button button-dark" href="/brief?source=mobile-menu" onClick={() => setOpen(false)}>
          Konsultasi Project
        </Link>
      </nav>
    </header>
  );
}
