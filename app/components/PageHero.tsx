import Image from "next/image";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  image: string;
  imageAlt: string;
  index: string;
  position?: string;
};

export function PageHero({ eyebrow, title, intro, image, imageAlt, index, position = "center" }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-copy">
        <p className="eyebrow page-enter">{eyebrow}</p>
        <h1 className="page-enter page-enter-delay">{title}</h1>
        <p className="page-hero-intro page-enter page-enter-delay-2">{intro}</p>
        <span className="page-hero-index page-enter page-enter-delay-2">{index} / 04</span>
      </div>
      <div className="page-hero-media image-reveal">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="(max-width: 800px) 100vw, 52vw"
          style={{ objectPosition: position }}
        />
      </div>
    </section>
  );
}
