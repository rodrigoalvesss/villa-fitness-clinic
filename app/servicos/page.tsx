import type { Metadata } from "next";
import Image from "next/image";
import { EditorialCTA } from "../components/EditorialCTA";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Treino personalizado e Pilates acompanhado na VILLA Fitness Clinic, em Vila Verde. Conheça a abordagem e o processo.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title={<>Acompanhamento<br /><em>com intenção.</em></>}
        intro="Duas formas de trabalhar o corpo. A mesma atenção à pessoa, ao movimento e à evolução."
        image="/images/treino-agachamento.jpg"
        imageAlt="Treino personalizado acompanhado na VILLA Fitness Clinic"
        index="02"
        position="center 35%"
      />

      <nav className="service-anchor-nav" aria-label="Serviços disponíveis">
        <a href="#treino-personalizado"><span>01</span> Treino personalizado</a>
        <a href="#pilates"><span>02</span> Pilates acompanhado</a>
        <a href="#processo"><span>03</span> Como começamos</a>
      </nav>

      <section className="service-detail shell section-space" id="treino-personalizado">
        <div className="service-detail-heading">
          <div className="section-label" data-reveal>01 · TREINO PERSONALIZADO</div>
          <h2 data-reveal>Um plano que começa em si.</h2>
          <p data-reveal>
            O treino é pensado a partir dos seus objetivos, experiência e realidade. A orientação
            próxima permite ajustar o trabalho, manter o foco e treinar com maior confiança.
          </p>
        </div>
        <div className="service-detail-media" data-reveal>
          <Image src="/images/treino-personalizado.jpg" alt="Sessão de treino personalizado" fill sizes="(max-width: 800px) 100vw, 48vw" />
        </div>
        <div className="service-features">
          <article data-reveal><span>01</span><h3>Planeamento individual</h3><p>Uma estratégia construída em função do seu ponto de partida e da evolução pretendida.</p></article>
          <article data-reveal><span>02</span><h3>Acompanhamento próximo</h3><p>Orientação técnica, atenção ao movimento e apoio durante toda a sessão.</p></article>
          <article data-reveal><span>03</span><h3>Ajuste contínuo</h3><p>O plano acompanha a resposta do corpo, a rotina e o progresso observado.</p></article>
        </div>
        <div className="training-strip">
          <div data-reveal><Image src="/images/treino-ropes.jpg" alt="Treino com cordas" fill sizes="33vw" /></div>
          <div data-reveal><Image src="/images/treino-elevacao.jpg" alt="Exercício de elevação" fill sizes="33vw" /></div>
          <div data-reveal><Image src="/images/treino-dedicacao.jpg" alt="Treino com halteres" fill sizes="33vw" /></div>
        </div>
      </section>

      <section className="pilates-detail section-space" id="pilates">
        <div className="pilates-media" data-reveal>
          <Image src="/images/pilates.jpg" alt="Pilates acompanhado com Springwall" fill sizes="(max-width: 800px) 100vw, 50vw" />
        </div>
        <div className="pilates-copy" data-reveal>
          <div className="section-label section-label-light">02 · PILATES ACOMPANHADO</div>
          <h2>Movimento com controlo. Corpo com consciência.</h2>
          <p>
            Uma abordagem acompanhada para trabalhar mobilidade, estabilidade e controlo corporal,
            respeitando sempre o ritmo e as necessidades de cada pessoa.
          </p>
          <ul>
            <li><span>01</span> Trabalho adaptado</li>
            <li><span>02</span> Atenção à execução</li>
            <li><span>03</span> Mobilidade e controlo</li>
            <li><span>04</span> Bem-estar global</li>
          </ul>
        </div>
      </section>

      <section className="process shell section-space" id="processo">
        <div className="process-heading">
          <div className="section-label" data-reveal>03 · COMO COMEÇAMOS</div>
          <h2 data-reveal>Antes de começar, compreendemos o que procura.</h2>
        </div>
        <ol className="process-list">
          <li data-reveal><span>01</span><h3>Primeiro contacto</h3><p>Fale connosco por WhatsApp, telefone ou email.</p></li>
          <li data-reveal><span>02</span><h3>Conhecer objetivos</h3><p>Percebemos o que procura e o seu ponto de partida.</p></li>
          <li data-reveal><span>03</span><h3>Definir direção</h3><p>Escolhemos a abordagem mais adequada para si.</p></li>
          <li data-reveal><span>04</span><h3>Começar</h3><p>Iniciamos um processo acompanhado e ajustável.</p></li>
        </ol>
      </section>

      <section className="faq shell section-space">
        <div className="faq-heading">
          <div className="section-label" data-reveal>04 · PERGUNTAS FREQUENTES</div>
          <h2 data-reveal>O essencial, antes de começar.</h2>
        </div>
        <div className="faq-list" data-reveal>
          <details>
            <summary>Preciso de ter experiência de treino?<span>+</span></summary>
            <p>Não. O acompanhamento parte sempre do nível, da experiência e das necessidades de cada pessoa.</p>
          </details>
          <details>
            <summary>Como sei qual o serviço adequado?<span>+</span></summary>
            <p>A avaliação inicial permite perceber o que procura e orientar a escolha.</p>
          </details>
          <details>
            <summary>O treino pode ser ajustado ao longo do tempo?<span>+</span></summary>
            <p>Sim. O acompanhamento permite observar a evolução e adaptar o planeamento quando necessário.</p>
          </details>
          <details>
            <summary>Como posso agendar uma avaliação?<span>+</span></summary>
            <p>Pode contactar diretamente por WhatsApp, telefone ou email. Respondemos assim que possível.</p>
          </details>
        </div>
      </section>

      <EditorialCTA
        title="O acompanhamento certo começa por compreender o que procura."
        text="Conheça as opções e escolha um acompanhamento ajustado aos seus objetivos."
        secondaryHref="/contactos"
        secondaryLabel="Ver todos os contactos"
      />
    </>
  );
}
