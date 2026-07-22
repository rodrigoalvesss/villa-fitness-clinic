import type { Metadata } from "next";
import Image from "next/image";
import { EditorialCTA } from "../components/EditorialCTA";
import { PageHero } from "../components/PageHero";
import { Arrow, instagramUrl } from "../lib/site";

export const metadata: Metadata = {
  title: "O Espaço",
  description:
    "Conheça o espaço da VILLA Fitness Clinic no centro de Vila Verde: reservado, funcional e pensado ao detalhe.",
};

const gallery = [
  { src: "/images/espaco-geral.jpg", alt: "Vista geral da VILLA Fitness Clinic", className: "gallery-wide" },
  { src: "/images/espaco-springwall.jpg", alt: "Zona Springwall do ginásio", className: "gallery-tall" },
  { src: "/images/espaco-recepcao.jpg", alt: "Receção da VILLA Fitness Clinic", className: "" },
  { src: "/images/espaco-conforto.jpg", alt: "Zona de conforto e hidratação", className: "" },
  { src: "/images/balneario.jpg", alt: "Zona de apoio e balneário", className: "gallery-tall" },
  { src: "/images/detalhe-villa.jpg", alt: "Detalhe de equipamento VILLA", className: "" },
  { src: "/images/toalhas.jpg", alt: "Toalhas disponíveis no espaço", className: "" },
];

export default function SpacePage() {
  return (
    <>
      <PageHero
        eyebrow="O espaço"
        title={<>Deixar o ruído<br /><em>lá fora.</em></>}
        intro="Um ginásio reservado no centro de Vila Verde, criado para treinar com foco e sentir-se verdadeiramente acompanhado."
        image="/images/espaco-geral.jpg"
        imageAlt="Interior da VILLA Fitness Clinic"
        index="03"
        position="center"
      />

      <section className="space-story shell section-space">
        <div className="section-label" data-reveal>01 · AMBIENTE</div>
        <div>
          <h2 data-reveal>
            Funcional no que importa.
            <br />
            <em>Cuidado em tudo o resto.</em>
          </h2>
          <div className="space-story-copy">
            <p data-reveal>
              O espaço foi pensado para reduzir distrações e criar as melhores condições para um
              acompanhamento atento, próximo e tecnicamente exigente.
            </p>
            <p data-reveal>
              A atmosfera em preto e branco, os equipamentos versáteis e as zonas de apoio formam
              uma experiência coerente: simples, confortável e sem excessos.
            </p>
          </div>
        </div>
      </section>

      <section className="space-values">
        <article data-reveal><span>01</span><h3>Privacidade</h3><p>Um ambiente reservado que favorece o foco e a confiança.</p></article>
        <article data-reveal><span>02</span><h3>Funcionalidade</h3><p>Equipamento versátil para responder a diferentes necessidades.</p></article>
        <article data-reveal><span>03</span><h3>Conforto</h3><p>Zonas de apoio e detalhes cuidados para uma experiência completa.</p></article>
      </section>

      <section className="full-gallery shell section-space">
        <div className="gallery-heading">
          <div className="section-label" data-reveal>02 · POR DENTRO</div>
          <h2 data-reveal>Conheça cada detalhe.</h2>
          <a className="inline-link" href={instagramUrl} target="_blank" rel="noreferrer" data-reveal>
            Ver mais no Instagram <Arrow />
          </a>
        </div>
        <div className="masonry-grid">
          {gallery.map((item, index) => (
            <figure className={item.className} data-reveal key={item.src}>
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 100vw, 50vw" />
              <figcaption>0{index + 1}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="location-statement">
        <div data-reveal>
          <p className="eyebrow eyebrow-light">No centro de Vila Verde</p>
          <h2>Próximo na localização.<br /><em>Próximo no acompanhamento.</em></h2>
        </div>
        <div className="location-statement-image" data-reveal>
          <Image src="/images/espaco-privacidade.jpg" alt="Zona de treino da VILLA Fitness Clinic" fill sizes="(max-width: 800px) 100vw, 45vw" />
        </div>
      </section>

      <EditorialCTA
        title="Venha conhecer a VILLA Fitness Clinic."
        text="Estamos na Rua do Município, no centro de Vila Verde. Fale connosco antes da sua visita."
        secondaryHref="/contactos"
        secondaryLabel="Morada e horário"
      />
    </>
  );
}
