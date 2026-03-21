import type { SiteLang } from "./site";

type GuideContent = {
  path: string;
  seo: {
    title: string;
    description: string;
    ogImage: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  intro: string[];
  stepsTitle: string;
  steps: Array<{ title: string; text: string }>;
  tipsTitle: string;
  tips: string[];
  faqTitle: string;
  faq: Array<{ question: string; answer: string }>;
  relatedTitle: string;
  related: Array<{ label: string; href: string }>;
};

export const tattooAftercareGuide: Record<SiteLang, GuideContent> = {
  es: {
    path: "/cuidados-tatuaje",
    seo: {
      title: "Cuidados del Tatuaje | Guía de Curación en Málaga | Vigarartattoo",
      description:
        "Guía de cuidados del tatuaje: cómo lavar, hidratar y proteger tu tatuaje recién hecho para favorecer una buena curación y mantener el resultado.",
      ogImage: "/images/heroImg/rocio_001.jpeg",
    },
    hero: {
      eyebrow: "Guía de cuidados",
      title: "Cómo cuidar tu tatuaje para que cure bien y mantenga un buen resultado.",
      description:
        "Los primeros días son clave para la curación. Aquí tienes una guía sencilla de cuidados del tatuaje para proteger la piel, evitar errores frecuentes y ayudar a que la pieza cicatrice correctamente.",
    },
    intro: [
      "Un tatuaje recién hecho necesita limpieza, hidratación moderada y protección frente a roces, sudor excesivo y exposición solar. Seguir unas pautas claras durante la curación ayuda a mantener el color, la definición y el confort de la piel.",
      "Esta guía no sustituye las indicaciones específicas que puedas recibir en tu cita, pero sí te sirve como base para entender cómo cuidar el tatuaje durante los primeros días y semanas.",
    ],
    stepsTitle: "Pasos básicos de curación",
    steps: [
      {
        title: "Lava el tatuaje con suavidad",
        text: "Límpialo con agua tibia y un jabón neutro suave, sin frotar. Sécalo a toques con papel limpio o una toalla muy suave.",
      },
      {
        title: "Aplica una capa fina de crema",
        text: "Usa solo la cantidad necesaria para mantener la piel confortable. Demasiado producto puede saturar la zona.",
      },
      {
        title: "Evita roces y humedad prolongada",
        text: "No lo mantengas sumergido, evita piscinas y no lleves prendas muy ajustadas sobre la zona recién tatuada.",
      },
      {
        title: "No arranques costras ni piel",
        text: "Durante la curación es normal que la piel se pele. Deja que el proceso siga su ritmo natural.",
      },
    ],
    tipsTitle: "Consejos importantes",
    tips: [
      "Evita el sol directo sobre el tatuaje reciente.",
      "No rasques la zona aunque pique durante la curación.",
      "Usa ropa cómoda y transpirable si la zona lo permite.",
      "Si tienes dudas sobre la evolución, consulta directamente con tu tatuadora.",
    ],
    faqTitle: "Preguntas frecuentes sobre cuidados",
    faq: [
      {
        question: "¿Cuántas veces al día debo lavar el tatuaje?",
        answer: "Depende del caso y de las indicaciones concretas de tu cita, pero normalmente se limpia de forma suave y controlada, sin excederse ni manipularlo constantemente.",
      },
      {
        question: "¿Es normal que pique o se pele?",
        answer: "Sí. Durante la curación es habitual notar picor o descamación ligera. Lo importante es no rascar ni arrancar piel.",
      },
      {
        question: "¿Cuándo puedo volver a tomar el sol o ir a la piscina?",
        answer: "Conviene esperar a que la curación avance correctamente y seguir siempre las recomendaciones dadas en tu cita para evitar irritaciones o problemas en el resultado.",
      },
    ],
    relatedTitle: "Más páginas útiles",
    related: [
      { label: "Estudio de tatuajes en Málaga", href: "/estudio-tatuajes-malaga" },
      { label: "Tatuajes fine line en Málaga", href: "/tatuajes-fine-line-malaga" },
      { label: "Portfolio completo", href: "/works" },
    ],
  },
  en: {
    path: "/en/tattoo-aftercare",
    seo: {
      title: "Tattoo Aftercare Guide | Healing Advice | Vigarartattoo",
      description:
        "Tattoo aftercare guide: how to clean, moisturize and protect a fresh tattoo so it heals properly and keeps a strong final result.",
      ogImage: "/images/heroImg/rocio_001.jpeg",
    },
    hero: {
      eyebrow: "Aftercare guide",
      title: "How to care for your tattoo so it heals well and keeps a strong result.",
      description:
        "The first days are key to the healing process. This simple tattoo aftercare guide helps you protect the skin, avoid common mistakes and support a smoother recovery.",
    },
    intro: [
      "A fresh tattoo needs gentle cleaning, moderate moisturizing and protection from friction, heavy sweating and direct sun. Following clear healing steps helps preserve color, line definition and general skin comfort.",
      "This guide does not replace the specific instructions given at your appointment, but it offers a practical overview of how to look after the tattoo during the first days and weeks.",
    ],
    stepsTitle: "Basic healing steps",
    steps: [
      {
        title: "Wash the tattoo gently",
        text: "Clean it with lukewarm water and a mild neutral soap without scrubbing. Pat dry with clean paper or a very soft towel.",
      },
      {
        title: "Apply a thin layer of cream",
        text: "Use only the amount needed to keep the skin comfortable. Too much product can overload the area.",
      },
      {
        title: "Avoid friction and prolonged moisture",
        text: "Do not keep it submerged, avoid pools and avoid very tight clothing over the freshly tattooed area.",
      },
      {
        title: "Do not pick scabs or peeling skin",
        text: "Mild peeling is normal during healing. Let the process follow its natural rhythm.",
      },
    ],
    tipsTitle: "Important tips",
    tips: [
      "Avoid direct sunlight on a fresh tattoo.",
      "Do not scratch the area even if it becomes itchy.",
      "Wear comfortable, breathable clothing when possible.",
      "If you are unsure about healing, ask your tattoo artist directly.",
    ],
    faqTitle: "Aftercare FAQ",
    faq: [
      {
        question: "How many times a day should I wash the tattoo?",
        answer: "That depends on the case and the guidance given during your appointment, but it is usually cleaned gently and with control, without over-handling the area.",
      },
      {
        question: "Is it normal for the tattoo to itch or peel?",
        answer: "Yes. Mild itching and peeling are common during healing. The important part is not scratching or picking the skin.",
      },
      {
        question: "When can I go back to sun exposure or swimming?",
        answer: "It is best to wait until healing is progressing properly and always follow the advice given at your appointment to avoid irritation or damage to the result.",
      },
    ],
    relatedTitle: "More useful pages",
    related: [
      { label: "Tattoo studio in Malaga", href: "/en/tattoo-studio-malaga" },
      { label: "Fine line tattoos in Malaga", href: "/en/fine-line-tattoos-malaga" },
      { label: "Full portfolio", href: "/en/works" },
    ],
  },
};
