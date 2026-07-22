import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaStar, FaWhatsapp } from "react-icons/fa6";
import { EditorialCTA } from "./components/EditorialCTA";
import { Arrow, facebookUrl, instagramUrl, mapsUrl, whatsappUrl } from "./lib/site";

function ReviewStars() {
  return (
    <span className="review-stars" aria-label="5 em 5 estrelas">
      {Array.from({ length: 5 }, (_, index) => (
        <FaStar key={index} aria-hidden="true" />
      ))}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-media image-reveal">
          <Image
            src="/images/hero-treino.jpg"
            alt="Treino acompanhado na VILLA Fitness Clinic"
            fill
            priority
            sizes="(max-width: 780px) 100vw, 42vw"
          />
        </div>
        <div className="home-hero-content">
          <p className="eyebrow eyebrow-light page-enter">Treino personalizado · Vila Verde</p>
          <h1 className="page-enter page-enter-delay">
            Treino pensado
            <br />
            <em>ao pormenor.</em>
          </h1>
          <div className="home-hero-bottom page-enter page-enter-delay-2">
            <p>Um método construído em torno de si, num espaço onde cada detalhe tem intenção.</p>
            <div className="home-hero-actions">
              <Link className="button button-light" href="/servicos">
                Conhecer os serviços <Arrow />
              </Link>
              <a className="hero-contact-link" href={whatsappUrl} target="_blank" rel="noreferrer">
                Pedir preços e informações <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="home-intro shell section-space">
        <div className="section-label" data-reveal>01 · VILLA FITNESS CLINIC</div>
        <div className="home-intro-main">
          <h2 data-reveal>Menos massificação.<br /><em>Mais atenção.</em></h2>
          <div className="home-intro-copy" data-reveal>
            <p>
              A VILLA Fitness Clinic é um ginásio de treino personalizado para quem valoriza
              acompanhamento, privacidade e um plano com direção.
            </p>
            <Link className="inline-link" href="/espaco">Conhecer o espaço <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="home-services shell">
        <div className="home-service-card" data-reveal>
          <Link href="/servicos#treino-personalizado" aria-label="Conhecer o treino personalizado">
            <Image
              src="/images/treino-personalizado.jpg"
              alt="Treino personalizado na VILLA Fitness Clinic"
              fill
              sizes="(max-width: 760px) 100vw, 42vw"
            />
            <div className="card-overlay" />
            <span className="card-index">01</span>
            <div><p>Acompanhamento</p><h3>Treino personalizado</h3></div>
            <Arrow />
          </Link>
        </div>
        <div className="home-service-card" data-reveal>
          <Link href="/servicos#pilates" aria-label="Conhecer o Pilates acompanhado">
            <Image
              src="/images/pilates.jpg"
              alt="Pilates acompanhado na VILLA Fitness Clinic"
              fill
              sizes="(max-width: 760px) 100vw, 42vw"
            />
            <div className="card-overlay" />
            <span className="card-index">02</span>
            <div><p>Movimento e controlo</p><h3>Pilates acompanhado</h3></div>
            <Arrow />
          </Link>
        </div>
      </section>

      <section className="reviews-preview section-space" aria-labelledby="reviews-title">
        <div className="shell">
          <div className="reviews-heading">
            <div className="section-label" data-reveal>02 · AVALIAÇÕES</div>
            <h2 id="reviews-title" data-reveal>Quem treina connosco<br /><em>sente a diferença.</em></h2>
            <div className="reviews-rating" data-reveal>
              <div className="rating-source">
                <span className="google-mark" aria-hidden="true">G</span>
                <span>Avaliações Google</span>
              </div>
              <div className="rating-score">
                <strong>5,0</strong><span>/ 5</span>
              </div>
              <ReviewStars />
              <p>Excelente · 29 avaliações</p>
              <a className="inline-link" href={mapsUrl} target="_blank" rel="noreferrer">
                Ver todas as avaliações <Arrow />
              </a>
            </div>
          </div>

          <div className="reviews-grid">
            <figure data-reveal>
              <div className="review-card-top"><ReviewStars /><span>Google</span></div>
              <blockquote>
                “É um local livre de julgamentos e onde o respeito pelas limitações e objetivos das pessoas é totalmente cumprido.”
              </blockquote>
              <figcaption><strong>Cláudia Rocha</strong><span>Avaliação de cliente</span></figcaption>
            </figure>
            <figure data-reveal>
              <div className="review-card-top"><ReviewStars /><span>Google</span></div>
              <blockquote>
                “PT&apos;s de excelência com capacidades técnicas elevadas em diversas áreas, correção postural, recuperação/prevenção de lesões e treinos de força/musculação.”
              </blockquote>
              <figcaption><strong>Pedro Pimenta</strong><span>Avaliação de cliente</span></figcaption>
            </figure>
            <figure data-reveal>
              <div className="review-card-top"><ReviewStars /><span>Google</span></div>
              <blockquote>
                “Com privacidade total onde o PT está 100% dedicado ao meu treino e sempre com atenção aos problemas físicos…”
              </blockquote>
              <figcaption><strong>Angélica Rodrigues</strong><span>Avaliação de cliente</span></figcaption>
            </figure>
            <figure data-reveal>
              <div className="review-card-top"><ReviewStars /><span>Google</span></div>
              <blockquote>
                “A certeza de resultados aliadas a muito trabalho, rigor e disciplina. Frequento e recomendo.”
              </blockquote>
              <figcaption><strong>Sandra Gonçalves</strong><span>Avaliação de cliente</span></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="method-preview section-space">
        <div className="shell">
          <div className="section-label section-label-light" data-reveal>03 · O MÉTODO</div>
          <div className="method-preview-grid">
            <div data-reveal>
              <p className="eyebrow eyebrow-light">Três momentos. Uma direção.</p>
              <h2>Ouvir. Planear. Acompanhar.</h2>
            </div>
            <ol className="compact-steps">
              <li data-reveal><span>01</span><div><h3>Avaliar</h3><p>Perceber a pessoa antes de definir o treino.</p></div></li>
              <li data-reveal><span>02</span><div><h3>Planear</h3><p>Construir uma estratégia ajustada à realidade.</p></div></li>
              <li data-reveal><span>03</span><div><h3>Evoluir</h3><p>Acompanhar, observar e ajustar com consistência.</p></div></li>
            </ol>
          </div>
          <Link className="inline-link inline-link-light method-more" href="/servicos">
            Explorar o acompanhamento <Arrow />
          </Link>
        </div>
      </section>

      <section className="space-preview shell section-space">
        <div className="space-preview-heading">
          <div className="section-label" data-reveal>04 · O ESPAÇO</div>
          <h2 data-reveal>Reservado, funcional<br /><em>e cuidado.</em></h2>
          <div data-reveal>
            <p>No centro de Vila Verde, um espaço pensado para treinar com foco e conforto.</p>
            <Link className="inline-link" href="/espaco">Explorar o espaço <Arrow /></Link>
          </div>
        </div>
        <div className="space-preview-gallery">
          <div className="preview-photo preview-photo-large" data-reveal>
            <Image src="/images/espaco-geral.jpg" alt="Vista geral do ginásio" fill sizes="55vw" />
          </div>
          <div className="preview-photo" data-reveal>
            <Image src="/images/espaco-recepcao.jpg" alt="Receção da VILLA Fitness Clinic" fill sizes="28vw" />
          </div>
          <div className="preview-photo" data-reveal>
            <Image src="/images/espaco-conforto.jpg" alt="Zona de apoio da VILLA Fitness Clinic" fill sizes="24vw" />
          </div>
        </div>
      </section>

      <section className="home-practical section-space" id="informacoes">
        <div className="shell">
          <div className="practical-heading">
            <div className="section-label section-label-light" data-reveal>INFORMAÇÕES ÚTEIS</div>
            <h2 data-reveal>Morada, horário e contactos.</h2>
          </div>
          <div className="practical-grid">
            <article className="practical-location" data-reveal>
              <span>Morada</span>
              <h3>Rua do Município, 122<br />4730-760 Vila Verde</h3>
              <a href={mapsUrl} target="_blank" rel="noreferrer">Abrir no Google Maps <Arrow /></a>
            </article>
            <article className="practical-hours" data-reveal>
              <span>Horário</span>
              <dl>
                <div><dt>Segunda–sexta</dt><dd>07:00–21:00</dd></div>
                <div><dt>Sábado</dt><dd>08:00–13:00</dd></div>
                <div><dt>Domingo</dt><dd>Fechado</dd></div>
              </dl>
            </article>
            <article className="practical-contact-panel" data-reveal>
              <div className="practical-contact-details">
                <span>Contactos</span>
                <a className="practical-contact" href="tel:+351917616847">+351 917 616 847</a>
                <a className="practical-contact" href="mailto:villafitnessclinic@gmail.com">villafitnessclinic@gmail.com</a>
              </div>
              <div className="practical-actions">
                <a className="practical-action" href={whatsappUrl} target="_blank" rel="noreferrer">
                  <span className="brand-mark" aria-hidden="true"><FaWhatsapp /></span>
                  <span>WhatsApp</span>
                  <Arrow />
                </a>
                <a className="practical-action" href={instagramUrl} target="_blank" rel="noreferrer">
                  <span className="brand-mark" aria-hidden="true"><FaInstagram /></span>
                  <span>Instagram</span>
                  <Arrow />
                </a>
                <a className="practical-action" href={facebookUrl} target="_blank" rel="noreferrer">
                  <span className="brand-mark" aria-hidden="true"><FaFacebookF /></span>
                  <span>Facebook</span>
                  <Arrow />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <EditorialCTA
        title="Quer saber como funciona?"
        text="Fale connosco para conhecer os serviços, planos e mensalidades disponíveis."
        secondaryHref="/servicos"
        secondaryLabel="Conhecer os serviços"
      />
    </>
  );
}
