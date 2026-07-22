import Link from "next/link";
import { Arrow, whatsappUrl } from "../lib/site";

type EditorialCTAProps = {
  eyebrow?: string;
  title: string;
  text: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  primaryLabel?: string;
};

export function EditorialCTA({
  eyebrow = "VILLA Fitness Clinic",
  title,
  text,
  secondaryHref,
  secondaryLabel,
  primaryLabel = "Pedir informações",
}: EditorialCTAProps) {
  return (
    <section className="editorial-cta">
      <div data-reveal>
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <div className="editorial-cta-action" data-reveal>
        <p>{text}</p>
        <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">
          {primaryLabel} <Arrow />
        </a>
        {secondaryHref && secondaryLabel ? (
          <Link className="inline-link inline-link-light" href={secondaryHref}>
            {secondaryLabel} <Arrow />
          </Link>
        ) : null}
      </div>
    </section>
  );
}
