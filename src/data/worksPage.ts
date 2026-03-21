import type { SiteLang } from "./site";

type WorksCategory = {
  key: "fine-line" | "blackwork" | "color" | "pets" | "varios";
  title: string;
  desc: string;
  landingHref?: string;
  landingLabel?: string;
};

type WorksPageContent = {
  seo: {
    title: string;
    description: string;
    ogImage: string;
  };
  nav: {
    brandHref: string;
    menuButton: string;
    menuOpenLabel: string;
    menuClose: string;
    menuCloseLabel: string;
    cta: string;
    whatsappCta: string;
  };
  hero: {
    imageSrc: string;
    imageAlt: string;
    eyebrow: string;
    title: string;
    description: string;
  };
  categories: WorksCategory[];
  footerBrand: string;
};

export const worksPageContent: Record<SiteLang, WorksPageContent> = {
  es: {
    seo: {
      title: "Trabajos de tatuajes en Málaga | Vigarartattoo",
      description:
        "Portfolio completo de Vigarartattoo en Málaga. Explora trabajos por estilo: fine line, blackwork, color y varios.",
      ogImage: "/images/heroImg/rocio_002.jpeg",
    },
    nav: {
      brandHref: "/",
      menuButton: "Menú",
      menuOpenLabel: "Abrir menú",
      menuClose: "Cerrar",
      menuCloseLabel: "Cerrar menú",
      cta: "Reservar",
      whatsappCta: "Reservar por WhatsApp",
    },
    hero: {
      imageSrc: "/images/heroImg/rocio_002.jpeg",
      imageAlt: "Rocío tatuando en su estudio",
      eyebrow: "Portfolio completo",
      title: "Trabajos",
      description:
        "Explora los tatuajes por estilos. Cada pieza está pensada para encajar contigo, tu idea y tu piel.",
    },
    categories: [
      { key: "fine-line", title: "Fine line", desc: "Trazos finos, delicados y elegantes.", landingHref: "/tatuajes-fine-line-malaga", landingLabel: "Guía fine line →" },
      { key: "blackwork", title: "Blackwork", desc: "Negro sólido, contraste y piezas potentes.", landingHref: "/tatuajes-blackwork-malaga", landingLabel: "Guía blackwork →" },
      { key: "color", title: "Color", desc: "Piezas vibrantes con contraste y detalle.", landingHref: "/tatuajes-color-malaga", landingLabel: "Guía color →" },
      { key: "pets", title: "Mascotas", desc: "Trabajos de mascotas.", landingHref: "/tatuajes-mascotas-malaga", landingLabel: "Guía mascotas →" },
      { key: "varios", title: "Varios", desc: "Trabajos mixtos y estilos combinados." },
    ],
    footerBrand: "Vigarartattoo",
  },
  en: {
    seo: {
      title: "Tattoo Works in Málaga | Vigarartattoo",
      description:
        "Full tattoo portfolio by Vigarartattoo in Málaga. Browse works by style: fine line, blackwork, color and mixed.",
      ogImage: "/images/heroImg/rocio_002.jpeg",
    },
    nav: {
      brandHref: "/en/",
      menuButton: "Menu",
      menuOpenLabel: "Open menu",
      menuClose: "Close",
      menuCloseLabel: "Close menu",
      cta: "Book",
      whatsappCta: "Book via WhatsApp",
    },
    hero: {
      imageSrc: "/images/heroImg/rocio_002.jpeg",
      imageAlt: "Rocío tattooing in her studio",
      eyebrow: "Full portfolio",
      title: "Works",
      description:
        "Explore the tattoos by style. Each piece is designed to fit you, your idea and your skin.",
    },
    categories: [
      { key: "fine-line", title: "Fine line", desc: "Delicate, elegant thin lines.", landingHref: "/en/fine-line-tattoos-malaga", landingLabel: "Fine line guide →" },
      { key: "blackwork", title: "Blackwork", desc: "Bold black ink, strong contrast and powerful pieces.", landingHref: "/en/blackwork-tattoos-malaga", landingLabel: "Blackwork guide →" },
      { key: "color", title: "Color", desc: "Vibrant pieces with lively details.", landingHref: "/en/color-tattoos-malaga", landingLabel: "Color guide →" },
      { key: "pets", title: "Pets", desc: "Pet tattoos.", landingHref: "/en/pet-tattoos-malaga", landingLabel: "Pet tattoo guide →" },
      { key: "varios", title: "Mixed", desc: "A mix of styles and combined pieces." },
    ],
    footerBrand: "Vigarartattoo",
  },
};
