import type { SiteLang } from "./site";

export type ServicePageKey = "studio" | "fine-line" | "blackwork" | "color" | "pets";

type FaqItem = {
  question: string;
  answer: string;
};

type LinkItem = {
  label: string;
  href: string;
};

type ServicePageContent = {
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
  intro: {
    title: string;
    paragraphs: string[];
  };
  highlights: {
    title: string;
    items: string[];
  };
  process: {
    title: string;
    steps: Array<{ title: string; text: string }>;
  };
  gallery: {
    title: string;
    description: string;
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
  related: {
    title: string;
    links: LinkItem[];
  };
  cta: {
    title: string;
    text: string;
    primary: string;
    secondary: string;
  };
};

export const servicePageContent: Record<SiteLang, Record<ServicePageKey, ServicePageContent>> = {
  es: {
    studio: {
      path: "/estudio-tatuajes-malaga/",
      seo: {
        title: "Estudio de Tatuajes en Málaga | Vigarartattoo",
        description:
          "Descubre el estudio de tatuajes Vigarartattoo en Málaga: espacio cuidado, atención cercana, diseños personalizados y reserva directa por WhatsApp.",
        ogImage: "/images/Studio/st_002.jpeg",
      },
      hero: {
        eyebrow: "Estudio de tatuajes en Málaga",
        title: "Un espacio tranquilo, cuidado y pensado para tatuarte con confianza.",
        description:
          "Vigarartattoo es el estudio en Málaga donde Rocío desarrolla tatuajes personalizados con un trato cercano, una experiencia cómoda y una atención muy cuidada en cada sesión.",
      },
      intro: {
        title: "Qué puedes esperar del estudio Vigarartattoo",
        paragraphs: [
          "Si buscas un estudio de tatuajes en Málaga donde el proceso sea tan importante como el resultado, aquí encontrarás un espacio diseñado para trabajar con calma, buena comunicación y una experiencia muy personal.",
          "La idea es que puedas compartir tu referencia, resolver dudas, ajustar el diseño y sentirte cómoda durante toda la sesión. Tanto si es tu primer tatuaje como si ya llevas varios, el enfoque es siempre claro, profesional y cercano.",
        ],
      },
      highlights: {
        title: "Por qué muchas clientas repiten",
        items: [
          "Diseños personalizados y orientación previa antes de reservar.",
          "Ambiente cómodo, limpio y cuidado dentro del estudio.",
          "Especialidad en fine line, blackwork y tatuajes a color.",
          "Acompañamiento antes, durante y después de la sesión.",
        ],
      },
      process: {
        title: "Cómo es el proceso",
        steps: [
          {
            title: "Cuéntame tu idea",
            text: "Puedes escribir por WhatsApp o Instagram con referencias, tamaño aproximado y zona del cuerpo.",
          },
          {
            title: "Definimos el diseño",
            text: "Se valora el estilo, la composición y cómo adaptar la idea para que funcione bien en piel.",
          },
          {
            title: "Sesión en el estudio",
            text: "La cita se realiza en un entorno tranquilo, con atención cercana y un ritmo cómodo.",
          },
          {
            title: "Cuidados posteriores",
            text: "Recibes pautas claras para que el tatuaje cicatrice bien y mantenga el resultado.",
          },
        ],
      },
      gallery: {
        title: "Fotos reales del estudio",
        description: "Así es el espacio donde se realizan las citas en Málaga.",
      },
      faq: {
        title: "FAQ sobre el estudio",
        items: [
          {
            question: "¿Dónde está el estudio de tatuajes?",
            answer: "Vigarartattoo está en Calle Miguel Moreno Masson, 11, 29007 Málaga, España.",
          },
          {
            question: "¿Se puede reservar directamente por WhatsApp?",
            answer: "Sí. Es la forma más directa para enviar tu idea, resolver dudas y pedir disponibilidad.",
          },
          {
            question: "¿Hacéis diseños personalizados?",
            answer: "Sí. Cada proyecto se trabaja de forma personalizada para adaptarlo a la persona y a la zona del cuerpo.",
          },
        ],
      },
      related: {
        title: "Servicios relacionados",
        links: [
          { label: "Tatuajes fine line en Málaga", href: "/tatuajes-fine-line-malaga/" },
          { label: "Tatuajes blackwork en Málaga", href: "/tatuajes-blackwork-malaga/" },
          { label: "Portfolio completo", href: "/works/" },
        ],
      },
      cta: {
        title: "¿Quieres reservar tu tatuaje en Málaga?",
        text: "Escríbeme con tu idea y te ayudo a valorar estilo, tamaño, zona y disponibilidad.",
        primary: "Reservar por WhatsApp",
        secondary: "Ver Instagram",
      },
    },
    "fine-line": {
      path: "/tatuajes-fine-line-malaga/",
      seo: {
        title: "Tatuajes Fine Line en Málaga | Vigarartattoo",
        description:
          "Tatuajes fine line en Málaga con diseño cuidado, línea limpia y atención personalizada. Descubre trabajos reales de Rocío y reserva tu cita.",
        ogImage: "/images/portfolio/fine-line/fl_010.jpeg",
      },
      hero: {
        eyebrow: "Fine line en Málaga",
        title: "Tatuajes fine line con delicadeza, composición y detalle.",
        description:
          "Si buscas tatuajes fine line en Málaga, aquí encontrarás un enfoque centrado en líneas limpias, piezas equilibradas y un diseño que se adapte bien a tu piel y a la zona elegida.",
      },
      intro: {
        title: "El fine line requiere intención, no solo trazos finos",
        paragraphs: [
          "Un tatuaje fine line funciona cuando el diseño, la escala y la zona del cuerpo están bien pensados. No se trata solo de hacer líneas finas, sino de construir una pieza que se lea bien y mantenga armonía con el paso del tiempo.",
          "Rocío trabaja este estilo con una mirada muy cuidada hacia la composición, la elegancia visual y la adaptación del diseño a cada persona, buscando un resultado delicado pero con presencia.",
        ],
      },
      highlights: {
        title: "Qué define este estilo en el estudio",
        items: [
          "Composición ligera y bien distribuida sobre la piel.",
          "Líneas finas con lectura clara y sin sobrecargar la pieza.",
          "Diseños florales, simbólicos, ilustrativos o personalizados.",
          "Acompañamiento para escoger tamaño y ubicación adecuados.",
        ],
      },
      process: {
        title: "Cómo se prepara un fine line",
        steps: [
          {
            title: "Idea y referencias",
            text: "Se revisa qué te gusta, qué quieres transmitir y qué elementos son importantes para ti.",
          },
          {
            title: "Diseño adaptado",
            text: "Se ajusta el nivel de detalle para que la pieza mantenga limpieza y equilibrio visual.",
          },
          {
            title: "Elección de zona",
            text: "Se valora cómo se verá el tatuaje según el movimiento y la forma del cuerpo.",
          },
          {
            title: "Sesión y cuidados",
            text: "Se realiza la sesión con una pauta clara de cuidados para proteger el resultado final.",
          },
        ],
      },
      gallery: {
        title: "Trabajos fine line realizados",
        description: "Una muestra de tatuajes fine line hechos en el estudio de Málaga.",
      },
      faq: {
        title: "FAQ sobre tatuajes fine line",
        items: [
          {
            question: "¿Qué tipo de diseños encajan mejor con el fine line?",
            answer: "Suelen funcionar muy bien flores, símbolos, piezas botánicas, composiciones delicadas y diseños con una estética limpia y elegante.",
          },
          {
            question: "¿Me podéis ayudar a elegir tamaño y zona?",
            answer: "Sí. Es una parte importante del proceso, porque en fine line la escala y la colocación influyen mucho en el resultado.",
          },
          {
            question: "¿Se hacen diseños personalizados en este estilo?",
            answer: "Sí. El diseño se adapta a tu idea y a tu cuerpo para que la pieza funcione de forma equilibrada.",
          },
        ],
      },
      related: {
        title: "También te puede interesar",
        links: [
          { label: "Estudio de tatuajes en Málaga", href: "/estudio-tatuajes-malaga/" },
          { label: "Tatuajes blackwork en Málaga", href: "/tatuajes-blackwork-malaga/" },
          { label: "Portfolio completo", href: "/works/#fine-line" },
        ],
      },
      cta: {
        title: "¿Quieres un tatuaje fine line en Málaga?",
        text: "Mándame tu idea y revisamos referencias, composición, tamaño y disponibilidad.",
        primary: "Pedir cita por WhatsApp",
        secondary: "Ver más trabajos",
      },
    },
    blackwork: {
      path: "/tatuajes-blackwork-malaga/",
      seo: {
        title: "Tatuajes Blackwork en Málaga | Vigarartattoo",
        description:
          "Tatuajes blackwork en Málaga con composiciones potentes, contraste y diseño personalizado. Mira trabajos reales y reserva tu cita con Rocío.",
        ogImage: "/images/portfolio/blackwork/bw_006.jpeg",
      },
      hero: {
        eyebrow: "Blackwork en Málaga",
        title: "Tatuajes blackwork con contraste, estructura y carácter.",
        description:
          "El blackwork permite desarrollar piezas con mucha fuerza visual, presencia y composición. En el estudio se trabaja buscando equilibrio, intención y una lectura potente sobre la piel.",
      },
      intro: {
        title: "Blackwork pensado para impactar y encajar bien contigo",
        paragraphs: [
          "No todas las piezas blackwork funcionan igual en cualquier tamaño o zona del cuerpo. Aquí se trabaja cada diseño valorando masas negras, contraste, respiración visual y cómo se integrará con tu anatomía.",
          "El objetivo es que el tatuaje tenga carácter y personalidad, pero también un diseño sólido y bien resuelto, tanto si buscas algo ornamental como ilustrativo o más contundente.",
        ],
      },
      highlights: {
        title: "Qué se cuida en cada pieza blackwork",
        items: [
          "Contraste fuerte sin perder lectura.",
          "Composiciones limpias y con buena estructura.",
          "Diseños personalizados según idea, zona y tamaño.",
          "Asesoramiento previo para orientar estética y planteamiento.",
        ],
      },
      process: {
        title: "Cómo se desarrolla el proyecto",
        steps: [
          {
            title: "Primera idea",
            text: "Compartes referencias y se valora el tipo de pieza blackwork que mejor encaja contigo.",
          },
          {
            title: "Composición",
            text: "Se organiza el peso visual, las zonas de contraste y el tamaño para que el resultado tenga fuerza.",
          },
          {
            title: "Aplicación",
            text: "La sesión se realiza buscando un ritmo cómodo y una ejecución limpia dentro del estudio.",
          },
          {
            title: "Cuidado posterior",
            text: "Se indican cuidados claros para ayudar a conservar el acabado y la intensidad visual de la pieza.",
          },
        ],
      },
      gallery: {
        title: "Trabajos blackwork realizados",
        description: "Una selección de tatuajes blackwork hechos por Rocío en Málaga.",
      },
      faq: {
        title: "FAQ sobre blackwork",
        items: [
          {
            question: "¿Qué tipo de ideas funcionan bien en blackwork?",
            answer: "Funciona muy bien en piezas con contraste, formas sólidas, composición ornamental, ilustración con fuerza o conceptos más gráficos.",
          },
          {
            question: "¿Se adapta el diseño a la zona del cuerpo?",
            answer: "Sí. El planteamiento cambia mucho según la zona, así que se estudia para que el tatuaje tenga buena presencia y lectura.",
          },
          {
            question: "¿Puedo combinar blackwork con otros enfoques?",
            answer: "Sí, siempre que la idea tenga coherencia visual. Se puede orientar el diseño para encontrar un equilibrio entre estilos.",
          },
        ],
      },
      related: {
        title: "También te puede interesar",
        links: [
          { label: "Estudio de tatuajes en Málaga", href: "/estudio-tatuajes-malaga/" },
          { label: "Tatuajes fine line en Málaga", href: "/tatuajes-fine-line-malaga/" },
          { label: "Portfolio completo", href: "/works/#blackwork" },
        ],
      },
      cta: {
        title: "¿Buscas blackwork en Málaga?",
        text: "Cuéntame tu idea y vemos juntas cómo convertirla en una pieza con fuerza, composición y personalidad.",
        primary: "Reservar consulta por WhatsApp",
        secondary: "Ver más trabajos",
      },
    },
    color: {
      path: "/tatuajes-color-malaga/",
      seo: {
        title: "Tatuajes a Color en Málaga | Vigarartattoo",
        description:
          "Tatuajes a color en Málaga con diseño personalizado, contraste y composición cuidada. Descubre trabajos reales y reserva tu cita con Rocío.",
        ogImage: "/images/portfolio/color/co_010.jpeg",
      },
      hero: {
        eyebrow: "Tatuajes a color en Málaga",
        title: "Color, contraste y diseño pensado para que la pieza tenga vida propia.",
        description:
          "Los tatuajes a color permiten construir piezas vibrantes, expresivas y llenas de detalle. El enfoque del estudio busca equilibrio visual, una buena elección cromática y un diseño adaptado a tu idea.",
      },
      intro: {
        title: "Tatuajes a color con intención, no solo impacto visual",
        paragraphs: [
          "Una buena pieza a color no se apoya solo en tonos llamativos. También necesita composición, lectura clara, contraste y una planificación coherente para que el resultado tenga fuerza desde cerca y desde lejos.",
          "Rocío trabaja los tatuajes a color en Málaga con una mirada muy visual y artística, valorando el tipo de ilustración, el movimiento de la pieza y cómo encajará sobre la piel y la zona elegida.",
        ],
      },
      highlights: {
        title: "Qué se cuida en este tipo de tatuaje",
        items: [
          "Paleta cromática coherente con la idea y el estilo de la pieza.",
          "Contraste suficiente para que el tatuaje tenga lectura y presencia.",
          "Composición adaptada a la anatomía y al tamaño elegido.",
          "Diseño personalizado con orientación previa antes de la cita.",
        ],
      },
      process: {
        title: "Cómo se plantea un tatuaje a color",
        steps: [
          {
            title: "Idea y referencias",
            text: "Se revisa el estilo que te atrae, el tipo de color que buscas y las referencias visuales que mejor explican tu idea.",
          },
          {
            title: "Diseño y color",
            text: "Se estudian paletas, contraste y composición para que la pieza funcione con armonía sobre la piel.",
          },
          {
            title: "Sesión en estudio",
            text: "La ejecución se realiza con una planificación clara para mantener limpieza visual y comodidad durante la cita.",
          },
          {
            title: "Cicatrización y cuidados",
            text: "Se indican pautas sencillas para proteger el color y favorecer un buen proceso de curación.",
          },
        ],
      },
      gallery: {
        title: "Trabajos a color realizados",
        description: "Una selección de tatuajes a color creados por Rocío en Málaga.",
      },
      faq: {
        title: "FAQ sobre tatuajes a color",
        items: [
          {
            question: "¿Qué tipo de ideas funcionan bien en tatuajes a color?",
            answer: "Funcionan muy bien conceptos ilustrativos, personajes, composiciones florales, piezas simbólicas o proyectos que necesiten una presencia visual más marcada.",
          },
          {
            question: "¿Se puede orientar la paleta de color?",
            answer: "Sí. La elección cromática forma parte del diseño y se puede ajustar para que encaje con tu idea y el estilo que quieres conseguir.",
          },
          {
            question: "¿Los diseños son personalizados?",
            answer: "Sí. Cada pieza se adapta a tu referencia, al tipo de tatuaje y a la zona del cuerpo para que el resultado tenga coherencia.",
          },
        ],
      },
      related: {
        title: "También te puede interesar",
        links: [
          { label: "Estudio de tatuajes en Málaga", href: "/estudio-tatuajes-malaga/" },
          { label: "Tatuajes fine line en Málaga", href: "/tatuajes-fine-line-malaga/" },
          { label: "Portfolio completo", href: "/works/#color" },
        ],
      },
      cta: {
        title: "¿Quieres un tatuaje a color en Málaga?",
        text: "Compárteme tu idea y vemos juntas referencias, paleta, composición y disponibilidad para tu cita.",
        primary: "Reservar por WhatsApp",
        secondary: "Ver más trabajos",
      },
    },
    pets: {
      path: "/tatuajes-mascotas-malaga/",
      seo: {
        title: "Tatuajes de Mascotas en Málaga | Vigarartattoo",
        description:
          "Tatuajes de mascotas en Málaga con un enfoque emotivo y personalizado. Descubre trabajos reales y reserva tu cita con Rocío.",
        ogImage: "/images/portfolio/pets/pt_004.jpeg",
      },
      hero: {
        eyebrow: "Tatuajes de mascotas en Málaga",
        title: "Piezas con valor emocional, pensadas para recordar y llevar cerca a quien forma parte de ti.",
        description:
          "Los tatuajes de mascotas requieren sensibilidad, observación y una forma de diseñar que respete tanto la referencia como el significado personal que hay detrás de la pieza.",
      },
      intro: {
        title: "Un tatuaje de mascota no es solo una imagen",
        paragraphs: [
          "Muchas de estas piezas nacen de un vínculo importante, así que el proceso se trabaja con cuidado, buscando que el resultado tenga valor estético pero también emocional. La referencia, la expresión y la composición cuentan mucho.",
          "En el estudio se adapta cada proyecto de mascotas a tu idea, ya sea más delicado, más ilustrativo o con un enfoque más personal y simbólico.",
        ],
      },
      highlights: {
        title: "Qué se cuida en este tipo de proyectos",
        items: [
          "Interpretación sensible de la referencia y del significado de la pieza.",
          "Diseños personalizados con enfoque delicado, ilustrativo o conmemorativo.",
          "Composición equilibrada para retratos o piezas simbólicas.",
          "Acompañamiento cercano para dar forma a una idea muy personal.",
        ],
      },
      process: {
        title: "Cómo se desarrolla un tatuaje de mascota",
        steps: [
          {
            title: "Referencia e historia",
            text: "Se revisan fotos, recuerdos y el tipo de enfoque que quieres para la pieza: retrato, símbolo, detalle o composición más libre.",
          },
          {
            title: "Diseño adaptado",
            text: "Se busca una solución visual que mantenga la esencia de tu mascota y funcione bien como tatuaje.",
          },
          {
            title: "Sesión cuidada",
            text: "La cita se realiza con un trato cercano y una planificación pensada para que te sientas cómoda durante todo el proceso.",
          },
          {
            title: "Cuidados posteriores",
            text: "Recibes recomendaciones claras para proteger el resultado y la curación del tatuaje.",
          },
        ],
      },
      gallery: {
        title: "Tatuajes de mascotas realizados",
        description: "Una selección de trabajos con perros, recuerdos y piezas de valor emocional hechas en Málaga.",
      },
      faq: {
        title: "FAQ sobre tatuajes de mascotas",
        items: [
          {
            question: "¿Puedo llevar fotos de mi mascota para diseñar el tatuaje?",
            answer: "Sí. Las fotos y referencias son la base para construir una pieza más fiel y personal, tanto si quieres un retrato como algo más simbólico.",
          },
          {
            question: "¿Se puede hacer un diseño más emocional o conmemorativo?",
            answer: "Sí. Muchas de estas piezas tienen un valor muy íntimo y se pueden enfocar de forma más delicada, con detalles, flores, lettering o símbolos si encajan contigo.",
          },
          {
            question: "¿Es un diseño totalmente personalizado?",
            answer: "Sí. Se plantea específicamente a partir de tu mascota, tu referencia y el tipo de recuerdo o estética que quieras llevar en la piel.",
          },
        ],
      },
      related: {
        title: "También te puede interesar",
        links: [
          { label: "Estudio de tatuajes en Málaga", href: "/estudio-tatuajes-malaga/" },
          { label: "Tatuajes fine line en Málaga", href: "/tatuajes-fine-line-malaga/" },
          { label: "Portfolio completo", href: "/works/#pets" },
        ],
      },
      cta: {
        title: "¿Quieres tatuarte a tu mascota en Málaga?",
        text: "Envíame tus referencias y vemos cómo convertir ese recuerdo en una pieza bonita, personal y bien planteada.",
        primary: "Hablar por WhatsApp",
        secondary: "Ver más trabajos",
      },
    },
  },
  en: {
    studio: {
      path: "/en/tattoo-studio-malaga/",
      seo: {
        title: "Tattoo Studio in Malaga | Vigarartattoo",
        description:
          "Discover Vigarartattoo, a tattoo studio in Malaga with a calm atmosphere, custom work and direct booking through WhatsApp.",
        ogImage: "/images/Studio/st_002.jpeg",
      },
      hero: {
        eyebrow: "Tattoo studio in Malaga",
        title: "A calm, carefully designed space to get tattooed with confidence.",
        description:
          "Vigarartattoo is a tattoo studio in Malaga where Rocio creates custom pieces with a friendly approach, a comfortable experience and thoughtful guidance throughout the session.",
      },
      intro: {
        title: "What to expect from the studio",
        paragraphs: [
          "If you are looking for a tattoo studio in Malaga where the process matters as much as the final result, this is a space built around comfort, clear communication and personal attention.",
          "You can share your idea, ask questions, refine the design and feel looked after during the whole session. Whether it is your first tattoo or not, the approach stays clear, careful and professional.",
        ],
      },
      highlights: {
        title: "Why people come back",
        items: [
          "Custom tattoo designs and guidance before booking.",
          "A comfortable, clean and carefully maintained studio.",
          "Focused work in fine line, blackwork and color tattoos.",
          "Support before, during and after the session.",
        ],
      },
      process: {
        title: "How the process works",
        steps: [
          {
            title: "Tell me your idea",
            text: "You can send references, approximate size and body placement through WhatsApp or Instagram.",
          },
          {
            title: "We shape the design",
            text: "The style, composition and how the idea should work on skin are reviewed carefully.",
          },
          {
            title: "Session at the studio",
            text: "The appointment takes place in a calm environment with a friendly rhythm and clear communication.",
          },
          {
            title: "Aftercare guidance",
            text: "You receive clear instructions to help the tattoo heal well and preserve the result.",
          },
        ],
      },
      gallery: {
        title: "Real photos of the studio",
        description: "A look at the Malaga studio where appointments take place.",
      },
      faq: {
        title: "Studio FAQ",
        items: [
          {
            question: "Where is the tattoo studio located?",
            answer: "Vigarartattoo is located at Calle Miguel Moreno Masson, 11, 29007 Malaga, Spain.",
          },
          {
            question: "Can I book directly through WhatsApp?",
            answer: "Yes. It is the fastest way to share your idea, ask questions and check availability.",
          },
          {
            question: "Do you create custom tattoo designs?",
            answer: "Yes. Every project is developed as a custom piece adapted to the person and the body area.",
          },
        ],
      },
      related: {
        title: "Related services",
        links: [
          { label: "Fine line tattoos in Malaga", href: "/en/fine-line-tattoos-malaga/" },
          { label: "Blackwork tattoos in Malaga", href: "/en/blackwork-tattoos-malaga/" },
          { label: "Full portfolio", href: "/en/works/" },
        ],
      },
      cta: {
        title: "Thinking about booking a tattoo in Malaga?",
        text: "Send me your idea and I will help you evaluate style, placement, size and availability.",
        primary: "Book via WhatsApp",
        secondary: "View Instagram",
      },
    },
    "fine-line": {
      path: "/en/fine-line-tattoos-malaga/",
      seo: {
        title: "Fine Line Tattoos in Malaga | Vigarartattoo",
        description:
          "Fine line tattoos in Malaga with clean lines, balanced design and a personal approach. Browse real work by Rocio and book your appointment.",
        ogImage: "/images/portfolio/fine-line/fl_010.jpeg",
      },
      hero: {
        eyebrow: "Fine line in Malaga",
        title: "Fine line tattoos built with delicacy, balance and detail.",
        description:
          "If you are looking for fine line tattoos in Malaga, this approach focuses on clean lines, elegant composition and designs that fit the body area naturally.",
      },
      intro: {
        title: "Fine line needs intention, not just thin lines",
        paragraphs: [
          "A fine line tattoo works best when the design, the scale and the placement are all carefully considered. It is not only about making thin lines, but about building a piece that reads clearly and feels balanced over time.",
          "Rocio approaches this style with close attention to composition, visual elegance and the way each design adapts to the person, aiming for a delicate result that still has presence.",
        ],
      },
      highlights: {
        title: "What defines this style in the studio",
        items: [
          "Balanced compositions that sit lightly on the skin.",
          "Clean, delicate lines without visually overcrowding the piece.",
          "Floral, symbolic, illustrative and custom concepts.",
          "Guidance on sizing and placement before the session.",
        ],
      },
      process: {
        title: "How a fine line tattoo is prepared",
        steps: [
          {
            title: "Idea and references",
            text: "The concept is reviewed to understand what you like and what the tattoo should communicate.",
          },
          {
            title: "Adapted design",
            text: "The level of detail is adjusted so the piece stays clean and visually balanced.",
          },
          {
            title: "Placement choice",
            text: "The body area is considered carefully to support the composition and final look.",
          },
          {
            title: "Session and aftercare",
            text: "The tattoo is done with clear aftercare guidance to protect the final result.",
          },
        ],
      },
      gallery: {
        title: "Fine line work by Rocio",
        description: "A selection of fine line tattoos created in the Malaga studio.",
      },
      faq: {
        title: "Fine line FAQ",
        items: [
          {
            question: "What kinds of ideas work well in fine line?",
            answer: "Flowers, symbols, botanical pieces, delicate compositions and clean illustrative ideas often work especially well in this style.",
          },
          {
            question: "Can you help me choose size and placement?",
            answer: "Yes. In fine line, size and placement are very important, so that part is discussed carefully before the design is finalized.",
          },
          {
            question: "Are the designs custom?",
            answer: "Yes. Each design is adapted to your idea and your body so the result feels balanced and personal.",
          },
        ],
      },
      related: {
        title: "You may also like",
        links: [
          { label: "Tattoo studio in Malaga", href: "/en/tattoo-studio-malaga/" },
          { label: "Blackwork tattoos in Malaga", href: "/en/blackwork-tattoos-malaga/" },
          { label: "Full portfolio", href: "/en/works/#fine-line" },
        ],
      },
      cta: {
        title: "Looking for a fine line tattoo in Malaga?",
        text: "Send your idea and we can review references, composition, size and availability together.",
        primary: "Book through WhatsApp",
        secondary: "View more work",
      },
    },
    blackwork: {
      path: "/en/blackwork-tattoos-malaga/",
      seo: {
        title: "Blackwork Tattoos in Malaga | Vigarartattoo",
        description:
          "Blackwork tattoos in Malaga with strong contrast, structure and custom composition. Browse real work by Rocio and book your appointment.",
        ogImage: "/images/portfolio/blackwork/bw_006.jpeg",
      },
      hero: {
        eyebrow: "Blackwork in Malaga",
        title: "Blackwork tattoos with contrast, structure and personality.",
        description:
          "Blackwork makes room for powerful visual compositions. The focus in the studio is on balance, intention and a tattoo that feels strong on the body.",
      },
      intro: {
        title: "Blackwork designed to make an impact and suit you well",
        paragraphs: [
          "Not every blackwork piece works the same way on every body area or at every scale. Each design is developed by considering black masses, contrast, visual breathing room and how the piece will sit on the body.",
          "The aim is a tattoo with character and presence, but also a design that feels solid and well resolved, whether the idea is ornamental, illustrative or more graphic.",
        ],
      },
      highlights: {
        title: "What is considered in each blackwork piece",
        items: [
          "Strong contrast without losing readability.",
          "Clean compositions with clear visual structure.",
          "Custom designs adapted to idea, placement and size.",
          "Guidance before booking to shape the concept properly.",
        ],
      },
      process: {
        title: "How the project is developed",
        steps: [
          {
            title: "Initial concept",
            text: "You share references and the blackwork direction that best fits your idea is reviewed.",
          },
          {
            title: "Composition",
            text: "Visual weight, contrast and scale are shaped so the tattoo feels powerful and coherent.",
          },
          {
            title: "Application",
            text: "The session is carried out in a calm rhythm with a clean and careful execution in the studio.",
          },
          {
            title: "Aftercare",
            text: "Clear instructions are provided to help preserve the finish and visual strength of the piece.",
          },
        ],
      },
      gallery: {
        title: "Blackwork tattoos by Rocio",
        description: "A selection of blackwork pieces created in Malaga.",
      },
      faq: {
        title: "Blackwork FAQ",
        items: [
          {
            question: "What kinds of ideas work well in blackwork?",
            answer: "Blackwork often suits concepts with contrast, solid shapes, ornamental structure, strong illustration or graphic visual weight.",
          },
          {
            question: "Is the design adapted to the body area?",
            answer: "Yes. The composition changes a lot depending on placement, so that is studied carefully before the tattoo is finalized.",
          },
          {
            question: "Can blackwork be combined with other approaches?",
            answer: "Yes, as long as the concept remains visually coherent. The design can be guided to find the right balance between influences.",
          },
        ],
      },
      related: {
        title: "You may also like",
        links: [
          { label: "Tattoo studio in Malaga", href: "/en/tattoo-studio-malaga/" },
          { label: "Fine line tattoos in Malaga", href: "/en/fine-line-tattoos-malaga/" },
          { label: "Full portfolio", href: "/en/works/#blackwork" },
        ],
      },
      cta: {
        title: "Looking for blackwork in Malaga?",
        text: "Send your idea and we can shape it into a tattoo with contrast, structure and character.",
        primary: "Book a WhatsApp consult",
        secondary: "View more work",
      },
    },
    color: {
      path: "/en/color-tattoos-malaga/",
      seo: {
        title: "Color Tattoos in Malaga | Vigarartattoo",
        description:
          "Color tattoos in Malaga with custom composition, contrast and strong visual impact. Browse real work by Rocio and book your appointment.",
        ogImage: "/images/portfolio/color/co_010.jpeg",
      },
      hero: {
        eyebrow: "Color tattoos in Malaga",
        title: "Color, contrast and composition built to give the piece real presence.",
        description:
          "Color tattoos allow for expressive, vibrant and highly visual work. The studio approach focuses on balance, thoughtful color choices and a design that fits your idea naturally.",
      },
      intro: {
        title: "Color tattoos need more than bright tones",
        paragraphs: [
          "A strong color tattoo is not only about using vivid hues. It also needs clear composition, readable contrast and a good visual plan so the piece feels powerful both up close and from a distance.",
          "Rocio approaches color tattoos in Malaga with a visual and artistic mindset, considering the kind of illustration, movement and structure that will suit the body best.",
        ],
      },
      highlights: {
        title: "What is considered in this style",
        items: [
          "A color palette that supports the concept and style of the piece.",
          "Enough contrast for strong readability and visual presence.",
          "Composition adapted to anatomy and chosen size.",
          "Custom design planning before the appointment.",
        ],
      },
      process: {
        title: "How a color tattoo is planned",
        steps: [
          {
            title: "Idea and references",
            text: "The overall style, preferred color direction and visual references are reviewed together.",
          },
          {
            title: "Design and palette",
            text: "Colors, contrast and composition are shaped so the piece feels coherent and visually alive on skin.",
          },
          {
            title: "Studio session",
            text: "The appointment is carried out with a clear plan to keep the tattoo readable and the experience comfortable.",
          },
          {
            title: "Healing guidance",
            text: "Simple aftercare instructions are provided to help protect the result and support a good healing process.",
          },
        ],
      },
      gallery: {
        title: "Color tattoos by Rocio",
        description: "A selection of color tattoo work created in the Malaga studio.",
      },
      faq: {
        title: "Color tattoo FAQ",
        items: [
          {
            question: "What kinds of ideas work well as color tattoos?",
            answer: "Illustrative concepts, characters, floral compositions, symbolic pieces and projects that need stronger visual energy often work especially well in color.",
          },
          {
            question: "Can the palette be guided to fit my idea?",
            answer: "Yes. Color choices are part of the design process and can be shaped to suit the mood and style you want.",
          },
          {
            question: "Are the designs custom?",
            answer: "Yes. Each piece is built around your reference, your concept and the body area so the result feels coherent and personal.",
          },
        ],
      },
      related: {
        title: "You may also like",
        links: [
          { label: "Tattoo studio in Malaga", href: "/en/tattoo-studio-malaga/" },
          { label: "Fine line tattoos in Malaga", href: "/en/fine-line-tattoos-malaga/" },
          { label: "Full portfolio", href: "/en/works/#color" },
        ],
      },
      cta: {
        title: "Thinking about a color tattoo in Malaga?",
        text: "Send your idea and we can review palette, composition, references and availability together.",
        primary: "Book via WhatsApp",
        secondary: "View more work",
      },
    },
    pets: {
      path: "/en/pet-tattoos-malaga/",
      seo: {
        title: "Pet Tattoos in Malaga | Vigarartattoo",
        description:
          "Pet tattoos in Malaga with a personal, emotional and custom approach. Browse real work and book your appointment with Rocio.",
        ogImage: "/images/portfolio/pets/pt_004.jpeg",
      },
      hero: {
        eyebrow: "Pet tattoos in Malaga",
        title: "Meaningful pieces designed to keep someone important close to you.",
        description:
          "Pet tattoos need sensitivity, observation and a design approach that respects both the reference and the personal meaning behind the piece.",
      },
      intro: {
        title: "A pet tattoo is more than an image",
        paragraphs: [
          "Many of these tattoos come from a very important bond, so the process is handled with care. The goal is a result with visual quality, but also emotional value. Reference, expression and composition all matter.",
          "Each pet tattoo is adapted to your idea, whether you want something delicate, illustrative, symbolic or more commemorative.",
        ],
      },
      highlights: {
        title: "What is considered in this type of project",
        items: [
          "A sensitive interpretation of the reference and the emotional meaning behind it.",
          "Custom designs with delicate, illustrative or commemorative direction.",
          "Balanced composition for portraits or symbolic pieces.",
          "Close guidance for shaping a very personal idea.",
        ],
      },
      process: {
        title: "How a pet tattoo is developed",
        steps: [
          {
            title: "Reference and story",
            text: "Photos, memories and the desired direction are reviewed, whether you want a portrait, symbol or more interpretive piece.",
          },
          {
            title: "Adapted design",
            text: "A visual solution is shaped to keep the essence of your pet while working well as a tattoo.",
          },
          {
            title: "Careful session",
            text: "The appointment is handled with a close, calm approach so you feel comfortable during the whole process.",
          },
          {
            title: "Aftercare",
            text: "You receive clear care advice to protect the result and support healing.",
          },
        ],
      },
      gallery: {
        title: "Pet tattoos by Rocio",
        description: "A selection of dog tattoos, memory pieces and emotionally meaningful work created in Malaga.",
      },
      faq: {
        title: "Pet tattoo FAQ",
        items: [
          {
            question: "Can I bring photos of my pet for the design?",
            answer: "Yes. Photos and references are the foundation for creating a more personal and accurate piece, whether you want a portrait or something more symbolic.",
          },
          {
            question: "Can the design feel more emotional or commemorative?",
            answer: "Yes. Many of these tattoos carry deep meaning and can be approached in a softer, more personal way with symbols, flowers or lettering if it suits the concept.",
          },
          {
            question: "Is the design fully custom?",
            answer: "Yes. It is developed specifically around your pet, your references and the feeling or aesthetic you want to carry with you.",
          },
        ],
      },
      related: {
        title: "You may also like",
        links: [
          { label: "Tattoo studio in Malaga", href: "/en/tattoo-studio-malaga/" },
          { label: "Fine line tattoos in Malaga", href: "/en/fine-line-tattoos-malaga/" },
          { label: "Full portfolio", href: "/en/works/#pets" },
        ],
      },
      cta: {
        title: "Would you like a pet tattoo in Malaga?",
        text: "Send your references and we can turn that memory into a beautiful, personal and well-composed tattoo.",
        primary: "Message on WhatsApp",
        secondary: "View more work",
      },
    },
  },
};
