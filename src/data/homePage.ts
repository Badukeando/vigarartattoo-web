import type { SiteLang } from "./site";

type StyleCard = {
  title: string;
  description: string;
  href: string;
};

type SeoLinkCard = {
  title: string;
  description: string;
  href: string;
  cta: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type HomePageContent = {
  seo: {
    title: string;
    description: string;
    ogImage: string;
  };
  nav: {
    brandHref: string;
    sections: Array<{ href: string; label: string; id: string }>;
    worksHref: string;
    worksLabel: string;
    cta: string;
    menuButton: string;
    menuOpenLabel: string;
    menuClose: string;
    menuCloseLabel: string;
    whatsappCta: string;
  };
  hero: {
    imageSrc: string;
    imageAlt: string;
    eyebrow: string;
    title: string;
    description: string;
    supportingText: string;
    mapLabel: string;
  };
  seoIntro: {
    title: string;
    paragraphs: string[];
    cards: SeoLinkCard[];
  };
  portfolio: {
    title: string;
    description: string;
    topLinkLabel: string;
    ctaLabel: string;
    href: string;
  };
  styles: {
    title: string;
    viewAllLabel: string;
    cardCtaLabel: string;
    cards: StyleCard[];
  };
  studio: {
    title: string;
    description: string;
    locationLabel: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    expectationsTitle: string;
    expectations: string[];
  };
  reviews: {
    title: string;
    subtitle: string;
    ctaLabel: string;
  };
  contact: {
    title: string;
    bookingLabel: string;
    whatsappLabel: string;
    instagramLabel: string;
    addressLabel: string;
    addressLines: string[];
    mapTitle: string;
    localNote: string;
    resources: Array<{ label: string; href: string }>;
  };
  faq: {
    title: string;
    intro: string;
    items: FaqItem[];
  };
  footerBrand: string;
};

export const homePageContent: Record<SiteLang, HomePageContent> = {
  es: {
    seo: {
      title: "Tatuajes en Málaga | Vigarartattoo",
      description:
        "Estudio de tatuajes en Málaga por Rocío. Fine line, blackwork y color con diseño cuidado y trato cercano.",
      ogImage: "/images/heroImg/rocio_001.jpeg",
    },
    nav: {
      brandHref: "#",
      sections: [
        { href: "#portfolio", label: "Portfolio", id: "portfolio" },
        { href: "#estilos", label: "Estilos", id: "estilos" },
        { href: "#estudio", label: "Estudio", id: "estudio" },
        { href: "#sobre", label: "Rocío", id: "sobre" },
        { href: "#contacto", label: "Contacto", id: "contacto" },
      ],
      worksHref: "/works/",
      worksLabel: "Trabajos",
      cta: "Reservar",
      menuButton: "Menú",
      menuOpenLabel: "Abrir menú",
      menuClose: "Cerrar",
      menuCloseLabel: "Cerrar menú",
      whatsappCta: "Reservar por WhatsApp",
    },
    hero: {
      imageSrc: "/images/heroImg/rocio_001.jpeg",
      imageAlt: "Rocío tatuando en el estudio",
      eyebrow: "Estudio de tatuajes en Málaga",
      title: "Estudio de tatuajes en Málaga especializado en fine line, blackwork y color.",
      description:
        "Diseños personalizados, sesiones cuidadas y un enfoque artístico pensado para que cada tatuaje encaje contigo, tu idea y tu piel.",
      supportingText:
        "Reserva por WhatsApp, revisa trabajos reales y descubre el estudio en Málaga donde Rocío desarrolla piezas de línea fina, blackwork y tatuajes a color.",
      mapLabel: "Abrir en Google Maps",
    },
    seoIntro: {
      title: "Un estudio de tatuajes en Málaga pensado para una experiencia cuidada",
      paragraphs: [
        "Vigarartattoo es un estudio de tatuajes en Málaga donde cada proyecto se trabaja de forma personalizada, desde la idea inicial hasta los cuidados posteriores. La prioridad no es solo el resultado final, sino que el proceso sea claro, cómodo y adaptado a lo que buscas.",
        "Si estás buscando tatuajes fine line en Málaga, piezas blackwork con contraste o tatuajes a color con un planteamiento más artístico, aquí puedes explorar trabajos reales, conocer el estilo de Rocío y reservar tu cita directamente.",
      ],
      cards: [
        {
          title: "Estudio de tatuajes en Málaga",
          description: "Conoce el espacio, la forma de trabajo y por qué tantas clientas repiten.",
          href: "/estudio-tatuajes-malaga/",
          cta: "Ver estudio →",
        },
        {
          title: "Tatuajes fine line en Málaga",
          description: "Piezas delicadas, limpias y pensadas para envejecer con armonía.",
          href: "/tatuajes-fine-line-malaga/",
          cta: "Ver fine line →",
        },
        {
          title: "Tatuajes blackwork en Málaga",
          description: "Contraste, composición y fuerza visual en tinta negra.",
          href: "/tatuajes-blackwork-malaga/",
          cta: "Ver blackwork →",
        },
        {
          title: "Cuidados del tatuaje",
          description: "Guía básica para cuidar tu tatuaje y favorecer una buena curación.",
          href: "/cuidados-tatuaje/",
          cta: "Ver cuidados →",
        },
      ],
    },
    portfolio: {
      title: "Portfolio",
      description: "Una selección de trabajos destacados y tatuajes realizados en el estudio de Málaga.",
      topLinkLabel: "Ver portfolio completo →",
      ctaLabel: "Ver todos los trabajos →",
      href: "/works/",
    },
    styles: {
      title: "Estilos",
      viewAllLabel: "Ver todo →",
      cardCtaLabel: "Ver trabajos →",
      cards: [
        {
          title: "Fine line",
          description: "Trazos finos, delicados y elegantes.",
          href: "/tatuajes-fine-line-malaga/",
        },
        {
          title: "Blackwork",
          description: "Negro sólido, contraste y piezas potentes.",
          href: "/tatuajes-blackwork-malaga/",
        },
        {
          title: "Mascotas",
          description: "Tatuajes de mascotas.",
          href: "/tatuajes-mascotas-malaga/",
        },
        {
          title: "Color",
          description: "Piezas vibrantes con contraste y detalle.",
          href: "/tatuajes-color-malaga/",
        },
      ],
    },
    studio: {
      title: "El estudio",
      description: "Un espacio cuidado, cómodo y profesional.",
      locationLabel: "Ver ubicación →",
    },
    about: {
      eyebrow: "Sobre Rocío",
      title: "Tatuajes con detalle, cuidado y un trato cercano.",
      paragraphs: [
        "Nací con un lápiz en la mano y dibujar siempre ha sido mi hobby favorito. Mi enamoramiento con el mundo del tatuaje fue a primera vista: de pequeña siempre llevaba calcomanías y tatuajes temporales por el cuerpo.",
        "Estudié en la Escuela de Artes, aunque también he tenido pasión por el deporte y cuento con dos titulaciones de monitora deportiva y nutricionista. Pero el arte siempre ha sido mi motor, y al final me lo jugué todo a una.",
        "Tomé la decisión justo después del confinamiento: ¿por qué no dedicarme a lo que me apasiona? Sin duda, es lo mejor que pude hacer. Ahora tengo mi propio estudio en Málaga, aunque me muevo por diferentes ciudades dejando mi huellita de tinta por donde voy.",
      ],
      expectationsTitle: "Qué puedes esperar de mí",
      expectations: [
        "Diseños personalizados y asesoramiento previo",
        "Especialidad en fine line y color",
        "Trato cercano y ambiente cómodo",
        "Atención antes y después de la sesión",
      ],
    },
    reviews: {
      title: "Opiniones de clientes",
      subtitle: "Reseñas reales en Google Maps",
      ctaLabel: "Ver todas las reseñas en Google →",
    },
    contact: {
      title: "Contacto",
      bookingLabel: "Reserva directa:",
      whatsappLabel: "Abrir WhatsApp",
      instagramLabel: "Abrir Instagram",
      addressLabel: "Dirección:",
      addressLines: ["Calle Miguel Moreno Masson, 11", "29007 Málaga, España"],
      mapTitle: "Mapa del estudio Vigarartattoo",
      localNote:
        "Estudio en Málaga capital con atención personalizada y reserva previa por WhatsApp o Instagram.",
      resources: [
        { label: "FAQ tatuajes en Málaga", href: "/faq/" },
        { label: "Cuidados del tatuaje", href: "/cuidados-tatuaje/" },
      ],
    },
    faq: {
      title: "Preguntas frecuentes",
      intro: "Respuestas rápidas para quienes buscan reservar un tatuaje en Málaga con confianza.",
      items: [
        {
          question: "¿Cómo puedo reservar cita para tatuarme en Málaga?",
          answer: "La forma más rápida es escribir por WhatsApp o Instagram con tu idea, tamaño aproximado, zona del cuerpo y referencias. A partir de ahí Rocío te orienta sobre disponibilidad, diseño y siguiente paso.",
        },
        {
          question: "¿Qué estilos de tatuaje realiza Rocío?",
          answer: "Trabaja sobre todo fine line, blackwork, color y diseños personalizados. En la web puedes ver ejemplos reales de cada estilo y comprobar qué enfoque encaja mejor contigo.",
        },
        {
          question: "¿Se pueden pedir diseños personalizados?",
          answer: "Sí. Cada tatuaje se plantea de forma personalizada para adaptarlo a tu idea, tu piel y la zona del cuerpo, con asesoramiento previo antes de la cita.",
        },
        {
          question: "¿Dónde está el estudio de tatuajes?",
          answer: "El estudio Vigarartattoo está en Calle Miguel Moreno Masson, 11, 29007 Málaga, España. En la web puedes abrir la ubicación directamente en Google Maps.",
        },
      ],
    },
    footerBrand: "Vigarartattoo®",
  },
  en: {
    seo: {
      title: "Tattoo Studio in Malaga | Fine Line, Blackwork and Color | Vigarartattoo",
      description:
        "Tattoo studio in Malaga by Rocio. Fine line, blackwork and color tattoos with a personal approach. Book via Instagram or WhatsApp.",
      ogImage: "/images/heroImg/rocio_001.jpeg",
    },
    nav: {
      brandHref: "/en/",
      sections: [
        { href: "#portfolio", label: "Portfolio", id: "portfolio" },
        { href: "#estilos", label: "Styles", id: "estilos" },
        { href: "#estudio", label: "Studio", id: "estudio" },
        { href: "#sobre", label: "About", id: "sobre" },
        { href: "#contacto", label: "Contact", id: "contacto" },
      ],
      worksHref: "/en/works/",
      worksLabel: "Works",
      cta: "Book",
      menuButton: "Menu",
      menuOpenLabel: "Open menu",
      menuClose: "Close",
      menuCloseLabel: "Close menu",
      whatsappCta: "Book via WhatsApp",
    },
    hero: {
      imageSrc: "/images/heroImg/rocio_001.jpeg",
      imageAlt: "Rocío tattooing in the studio",
      eyebrow: "Tattoo Studio in Málaga",
      title: "Tattoo studio in Malaga focused on fine line, blackwork and color.",
      description:
        "Custom tattoo designs, a thoughtful process and a friendly experience built around your idea, your skin and your style.",
      supportingText:
        "Book through WhatsApp, browse real tattoo work and discover the Malaga studio where Rocio creates fine line, blackwork and color pieces.",
      mapLabel: "Open in Google Maps",
    },
    seoIntro: {
      title: "A tattoo studio in Malaga built around comfort, clarity and custom work",
      paragraphs: [
        "Vigarartattoo is a tattoo studio in Malaga where each project is developed with care, from the first message to the final healing advice. The goal is not just a good tattoo, but a comfortable process with clear guidance all the way through.",
        "If you are looking for fine line tattoos in Malaga, blackwork with strong contrast, or carefully planned color tattoos, this site gives you real examples, studio context and direct booking options.",
      ],
      cards: [
        {
          title: "Tattoo studio in Malaga",
          description: "See the studio, the workflow and what makes the experience feel personal.",
          href: "/en/tattoo-studio-malaga/",
          cta: "View studio →",
        },
        {
          title: "Fine line tattoos in Malaga",
          description: "Delicate, clean pieces designed with balance and longevity in mind.",
          href: "/en/fine-line-tattoos-malaga/",
          cta: "View fine line →",
        },
        {
          title: "Blackwork tattoos in Malaga",
          description: "Black ink pieces with structure, contrast and visual impact.",
          href: "/en/blackwork-tattoos-malaga/",
          cta: "View blackwork →",
        },
        {
          title: "Tattoo aftercare guide",
          description: "A simple guide to caring for your tattoo and supporting a smooth healing process.",
          href: "/en/tattoo-aftercare/",
          cta: "View aftercare →",
        },
      ],
    },
    portfolio: {
      title: "Portfolio",
      description: "A selection of featured tattoos created in the Malaga studio.",
      topLinkLabel: "View full portfolio →",
      ctaLabel: "View all works",
      href: "/en/works/",
    },
    styles: {
      title: "Styles",
      viewAllLabel: "View all styles →",
      cardCtaLabel: "View works →",
      cards: [
        {
          title: "Fine line",
          description: "Delicate, elegant thin lines.",
          href: "/en/fine-line-tattoos-malaga/",
        },
        {
          title: "Blackwork",
          description: "Black ink, strong contrast and powerful pieces.",
          href: "/en/blackwork-tattoos-malaga/",
        },
        {
          title: "Pets",
          description: "Tattoos of pets.",
          href: "/en/pet-tattoos-malaga/",
        },
        {
          title: "Color",
          description: "Vibrant pieces with vivid details.",
          href: "/en/color-tattoos-malaga/",
        },
      ],
    },
    studio: {
      title: "The studio",
      description: "A clean, comfortable, and professional space.",
      locationLabel: "See location →",
    },
    about: {
      eyebrow: "About Rocío",
      title: "Tattoos with detail, care and a friendly approach.",
      paragraphs: [
        "I’ve always had a pencil in my hand—drawing has been my favorite hobby for as long as I can remember. Falling in love with tattooing happened instantly: as a kid I was always covered in temporary tattoos.",
        "I studied at Art School, and I’ve also been passionate about sports, earning two certificates as a sports instructor and nutritionist. But art has always been my driving force, and in the end I went all in.",
        "Right after the lockdown I made the decision: why not dedicate myself to what truly excites me? It’s the best choice I could have made. Today I have my own studio in Málaga, and I also travel to different cities, leaving a small ink “signature” wherever I go.",
      ],
      expectationsTitle: "What you can expect",
      expectations: [
        "Custom designs and pre-session guidance",
        "Specialized in fine line and color",
        "Friendly approach and comfortable atmosphere",
        "Support before and after the session",
      ],
    },
    reviews: {
      title: "Client reviews",
      subtitle: "Real reviews on Google Maps",
      ctaLabel: "See all Google reviews →",
    },
    contact: {
      title: "Contact",
      bookingLabel: "Direct booking:",
      whatsappLabel: "Open WhatsApp",
      instagramLabel: "Open Instagram",
      addressLabel: "Address:",
      addressLines: ["Calle Miguel Moreno Masson, 11", "29007 Málaga, Spain"],
      mapTitle: "Vigarartattoo studio map",
      localNote:
        "Malaga studio with a personal approach and booking handled in advance through WhatsApp or Instagram.",
      resources: [
        { label: "Tattoo FAQ in Malaga", href: "/en/faq/" },
        { label: "Tattoo aftercare guide", href: "/en/tattoo-aftercare/" },
      ],
    },
    faq: {
      title: "Frequently asked questions",
      intro: "Quick answers for anyone looking to book a tattoo in Malaga with confidence.",
      items: [
        {
          question: "How can I book a tattoo appointment in Malaga?",
          answer: "The quickest option is to send a message via WhatsApp or Instagram with your idea, approximate size, body placement and references. Rocio then guides you through availability, design and the next step.",
        },
        {
          question: "Which tattoo styles does Rocio focus on?",
          answer: "Her work mainly focuses on fine line, blackwork, color tattoos and custom concepts. The website shows real examples so you can understand the style and level of detail more clearly.",
        },
        {
          question: "Do you create custom tattoo designs?",
          answer: "Yes. Every project is approached as a custom piece, adapted to your idea, the body area and the visual result you want to achieve.",
        },
        {
          question: "Where is the tattoo studio located?",
          answer: "Vigarartattoo is located at Calle Miguel Moreno Masson, 11, 29007 Malaga, Spain. You can open the studio location directly from the website via Google Maps.",
        },
      ],
    },
    footerBrand: "Vigarartattoo®",
  },
};
