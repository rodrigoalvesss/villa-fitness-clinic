"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Arrow, navigation, whatsappUrl } from "../lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <>
      <header className={`global-header ${scrolled ? "is-scrolled" : ""} ${open ? "menu-active" : ""}`}>
        <Link className="global-brand" href="/" aria-label="VILLA Fitness Clinic — início" onClick={() => setOpen(false)}>
          <span>VILLA</span>
          <small>Fitness Clinic</small>
        </Link>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <Link className={pathname === item.href ? "active" : ""} href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="global-book" href={whatsappUrl} target="_blank" rel="noreferrer">
          Pedir informações <Arrow />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </header>

      <div className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="mobile-menu-inner">
          <p>Menu</p>
          <nav aria-label="Navegação móvel">
            {navigation.map((item, index) => (
              <Link href={item.href} key={item.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
                <span>0{index + 1}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mobile-menu-contact">
            <a href="tel:+351917616847" tabIndex={open ? 0 : -1}>+351 917 616 847</a>
            <span>Rua do Município, 122 · Vila Verde</span>
          </div>
        </div>
      </div>
    </>
  );
}
