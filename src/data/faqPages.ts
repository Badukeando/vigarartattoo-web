import type { SiteLang } from "./site";

type FaqPageContent = {
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
  items: Array<{ question: string; answer: string }>;
  relatedTitle: string;
  related: Array<{ label: string; href: string }>;
};

export const faqPageContent: Record<SiteLang, FaqPageContent> = {
  es: {
    path: "/faq",
    seo: {
      title: "FAQ Tatuajes en Málaga | Reservas, Diseños y Cuidados | Vigarartattoo",
      description:
        "Preguntas frecuentes sobre tatuajes en Málaga: reservas, diseños personalizados, estilos, estudio y cuidados posteriores.",
      ogImage: "/images/heroImg/rocio_001.jpeg",
    },
    hero: {
      eyebrow: "FAQ tatuajes Málaga",
      title: "Preguntas frecuentes sobre reservas, estilos y cuidados del tatuaje.",
      description:
        "Una guía rápida para resolver dudas habituales antes de reservar en el estudio de Málaga: cómo funciona el proceso, qué estilos se trabajan y cómo cuidar la pieza después.",
    },
    intro: [
      "Esta página reúne preguntas frecuentes reales de personas que están buscando tatuarse en Málaga y quieren entender mejor cómo funciona el proceso antes de reservar.",
      "Si después de leerla sigues con dudas, puedes escribir directamente por WhatsApp o Instagram para comentar tu caso y recibir orientación más concreta.",
    ],
    items: [
      {
        question: "¿Cómo puedo reservar cita para tatuarme en Málaga?",
        answer: "La forma más directa es escribir por WhatsApp o Instagram con tu idea, referencias, tamaño aproximado y zona del cuerpo. A partir de ahí se valora disponibilidad, enfoque y siguiente paso.",
      },
      {
        question: "¿Trabajáis diseños personalizados?",
        answer: "Sí. Cada tatuaje se plantea de forma personalizada para que encaje con tu idea, tu piel y el resultado visual que buscas.",
      },
      {
        question: "¿Qué estilos de tatuaje realiza Rocío?",
        answer: "Principalmente fine line, blackwork, color y proyectos personalizados. En la web puedes ver ejemplos reales de cada línea de trabajo.",
      },
      {
        question: "¿Dónde está el estudio de tatuajes?",
        answer: "Vigarartattoo está en Calle Miguel Moreno Masson, 11, 29007 Málaga, España. Puedes abrir la ubicación en Google Maps desde la web.",
      },
      {
        question: "¿Puedo llevar referencias o una idea inicial?",
        answer: "Sí, y es lo más recomendable. Las referencias ayudan a orientar estilo, composición y dirección visual antes de desarrollar el diseño.",
      },
      {
        question: "¿Cómo debo cuidar el tatuaje después de la cita?",
        answer: "Después de la sesión recibirás pautas claras de curación. Además, tienes una guía de cuidados del tatuaje en la web con recomendaciones básicas para los primeros días.",
      },
    ],
    relatedTitle: "Más páginas útiles",
    related: [
      { label: "Estudio de tatuajes en Málaga", href: "/estudio-tatuajes-malaga" },
      { label: "Cuidados del tatuaje", href: "/cuidados-tatuaje" },
      { label: "Portfolio completo", href: "/works" },
    ],
  },
  en: {
    path: "/en/faq",
    seo: {
      title: "Tattoo FAQ in Malaga | Booking, Designs and Aftercare | Vigarartattoo",
      description:
        "Frequently asked questions about getting tattooed in Malaga: booking, custom designs, tattoo styles, studio details and aftercare.",
      ogImage: "/images/heroImg/rocio_001.jpeg",
    },
    hero: {
      eyebrow: "Tattoo FAQ Malaga",
      title: "Frequently asked questions about booking, styles and tattoo aftercare.",
      description:
        "A quick guide for common questions before booking at the Malaga studio: how the process works, which styles are offered and how to care for the tattoo afterwards.",
    },
    intro: [
      "This page gathers real questions from people looking to get tattooed in Malaga and wanting to understand the process more clearly before booking.",
      "If you still have questions after reading, you can message directly through WhatsApp or Instagram to talk through your specific idea.",
    ],
    items: [
      {
        question: "How can I book a tattoo appointment in Malaga?",
        answer: "The most direct option is to send a WhatsApp or Instagram message with your idea, references, approximate size and body placement. Availability and the best next step can then be reviewed.",
      },
      {
        question: "Do you create custom tattoo designs?",
        answer: "Yes. Every tattoo is approached as a custom project so it fits your idea, your skin and the kind of final result you want.",
      },
      {
        question: "Which tattoo styles does Rocio focus on?",
        answer: "Mainly fine line, blackwork, color and custom projects. The website shows real examples of each direction.",
      },
      {
        question: "Where is the tattoo studio located?",
        answer: "Vigarartattoo is located at Calle Miguel Moreno Masson, 11, 29007 Malaga, Spain. You can open the studio location directly from the website.",
      },
      {
        question: "Can I bring references or an initial idea?",
        answer: "Yes, and it is highly recommended. References help shape the style, composition and visual direction before the design is developed.",
      },
      {
        question: "How should I care for the tattoo after the appointment?",
        answer: "You will receive clear healing instructions after the session. There is also a tattoo aftercare guide on the website with basic advice for the first days.",
      },
    ],
    relatedTitle: "More useful pages",
    related: [
      { label: "Tattoo studio in Malaga", href: "/en/tattoo-studio-malaga" },
      { label: "Tattoo aftercare guide", href: "/en/tattoo-aftercare" },
      { label: "Full portfolio", href: "/en/works" },
    ],
  },
};
