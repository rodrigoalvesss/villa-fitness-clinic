import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "../components/PageHero";
import { Arrow, instagramUrl, mapsUrl, whatsappUrl } from "../lib/site";

export const metadata: Metadata = {
  title: "Contactos",
  description:
    "Contacte a VILLA Fitness Clinic em Vila Verde. Consulte a morada, horário, telefone e agende a sua avaliação.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contactos"
        title={<>O próximo passo<br /><em>começa aqui.</em></>}
        intro="Conte-nos o que procura. Estamos disponíveis para esclarecer dúvidas e ajudar a encontrar o acompanhamento certo."
        image="/images/espaco-recepcao.jpg"
        imageAlt="Receção da VILLA Fitness Clinic"
        index="04"
        position="center"
      />

      <section className="contact-options shell section-space">
        <div className="section-label" data-reveal>01 · FALE CONNOSCO</div>
        <div className="contact-option-grid">
          <a href={whatsappUrl} target="_blank" rel="noreferrer" data-reveal>
            <span>Resposta direta</span><h2>WhatsApp</h2><p>Envie-nos uma mensagem para saber mais ou agendar uma avaliação.</p><Arrow />
          </a>
          <a href="tel:+351917616847" data-reveal>
            <span>Telefone</span><h2>+351 917 616 847</h2><p>Entre em contacto durante o horário de funcionamento.</p><Arrow />
          </a>
          <a href="mailto:villafitnessclinic@gmail.com" data-reveal>
            <span>Email</span><h2>Enviar email</h2><p>Escreva-nos com toda a informação que considere importante.</p><Arrow />
          </a>
        </div>
      </section>

      <section className="visit-section">
        <div className="visit-map" data-reveal>
          <Image src="/images/espaco-conforto.jpg" alt="Detalhe do espaço VILLA" fill sizes="(max-width: 800px) 100vw, 48vw" />
          <a href={mapsUrl} target="_blank" rel="noreferrer">Abrir no Google Maps <Arrow /></a>
        </div>
        <div className="visit-details" data-reveal>
          <div className="section-label section-label-light">02 · VISITE-NOS</div>
          <h2>Rua do Município, 122<br />4730-760 Vila Verde</h2>
          <div className="schedule-large">
            <div><span>Segunda — Sexta</span><strong>07:00 — 21:00</strong></div>
            <div><span>Sábado</span><strong>08:00 — 13:00</strong></div>
            <div><span>Domingo</span><strong>Fechado</strong></div>
          </div>
        </div>
      </section>

      <section className="contact-final shell section-space">
        <div data-reveal>
          <p className="eyebrow">Antes de visitar</p>
          <h2>Agende uma avaliação e receba um acompanhamento pensado para si.</h2>
        </div>
        <div data-reveal>
          <p>
            A VILLA Fitness Clinic funciona com acompanhamento. Recomendamos um contacto prévio para conhecermos o
            que procura e prepararmos o primeiro momento.
          </p>
          <a className="button button-dark" href={whatsappUrl} target="_blank" rel="noreferrer">Agendar avaliação <Arrow /></a>
          <a className="inline-link" href={instagramUrl} target="_blank" rel="noreferrer">Acompanhar no Instagram <Arrow /></a>
        </div>
      </section>
    </>
  );
}
