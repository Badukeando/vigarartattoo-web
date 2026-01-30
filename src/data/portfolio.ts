export type PortfolioCategory =
  | "blackwork"
  | "color"
  | "fine-line"
  | "varios"
  | "featured";

export type Lang = "es" | "en";

export type I18nText = {
  es: string;
  en: string;
};

export type PortfolioItem = {
  id: string; // e.g. "bw_001", "fe_009"
  category: PortfolioCategory;

  // Full-size asset (used for lightbox)
  fullSrc: string;

  // Lightweight thumbnail (used for grids)
  thumbSrc: string;

  // Backward compatibility: keep "src" so existing components don't break.
  // For now we keep it as fullSrc; the GalleryLightbox will be updated to use thumbSrc in the grid.
  src: string;

  // Accessible description (supports ES/EN without breaking older code)
  alt: string | I18nText;
};

type BuildRangeOptions = {
  category: Exclude<PortfolioCategory, "featured">;
  prefix: "bw" | "co" | "fl" | "va";
  from: number;
  to: number;
  ext?: "jpeg" | "jpg" | "png";

  // Optional custom base text (ES/EN). If not provided, we use a category-based default.
  altBase?: I18nText;
};

/** Pads a number to 3 digits (1 -> "001"). */
function pad3(n: number): string {
  return String(n).padStart(3, "0");
}

/** Derive /thumbs/...webp from a full image path in /images/portfolio/<category>/... */
function toThumbSrc(
  fullSrc: string,
  category: Exclude<PortfolioCategory, "featured"> | "featured"
): string {
  // Example:
  // full:  /images/portfolio/fine-line/fl_018.jpeg
  // thumb: /images/portfolio/fine-line/thumbs/fl_018.webp
  const file = fullSrc.split("/").pop() ?? "";
  const base = file.replace(/\.(jpe?g|png)$/i, "");
  return `/images/portfolio/${category}/thumbs/${base}.webp`;
}

/** Category-based inclusive alt fallbacks (ES/EN). */
function defaultAltBase(
  category: Exclude<PortfolioCategory, "featured">
): I18nText {
  switch (category) {
    case "blackwork":
      return {
        es: "Tatuaje estilo blackwork en tinta negra",
        en: "Blackwork tattoo in black ink",
      };
    case "color":
      return {
        es: "Tatuaje a color estilo ilustración",
        en: "Color illustrative tattoo",
      };
    case "fine-line":
      return {
        es: "Tatuaje de línea fina (fine line)",
        en: "Fine line tattoo",
      };
    case "varios":
    default:
      return {
        es: "Tatuaje de estilo mixto",
        en: "Mixed-style tattoo",
      };
  }
}

/** Builds items like bw_001..bw_041 with consistent src paths + thumbs paths. */
function buildRange(options: BuildRangeOptions): PortfolioItem[] {
  const { category, prefix, from, to, ext = "jpeg" } = options;

  const base = options.altBase ?? defaultAltBase(category);

  const items: PortfolioItem[] = [];
  for (let i = from; i <= to; i++) {
    const num = pad3(i);
    const id = `${prefix}_${num}`;

    const fullSrc = `/images/portfolio/${category}/${id}.${ext}`;
    const thumbSrc = toThumbSrc(fullSrc, category);

    items.push({
      id,
      category,
      fullSrc,
      thumbSrc,
      src: fullSrc, // backward compatibility
      alt: {
        es: `${base.es} (${id})`,
        en: `${base.en} (${id})`,
      },
    });
  }
  return items;
}

/** Featured files have their own folder. */
function featured(id: string, alt: I18nText): PortfolioItem {
  const category: PortfolioCategory = "featured";
  const fullSrc = `/images/portfolio/featured/${id}.jpeg`;
  const thumbSrc = toThumbSrc(fullSrc, "featured");

  return {
    id,
    category,
    fullSrc,
    thumbSrc,
    src: fullSrc, // backward compatibility
    alt,
  };
}

function blackwork(id: string, alt: I18nText): PortfolioItem {
  const category: PortfolioCategory = "blackwork";
  const fullSrc = `/images/portfolio/blackwork/${id}.jpeg`;
  const thumbSrc = toThumbSrc(fullSrc, "blackwork");

  return {
    id,
    category,
    fullSrc,
    thumbSrc,
    src: fullSrc, // backward compatibility
    alt,
  };
}


function color(id: string, alt: I18nText): PortfolioItem {
  const category: PortfolioCategory = "color";
  const fullSrc = `/images/portfolio/color/${id}.jpeg`;
  const thumbSrc = toThumbSrc(fullSrc, "color");

  return {
    id,
    category,
    fullSrc,
    thumbSrc,
    src: fullSrc, // backward compatibility
    alt,
  };
}

function fineLine(id: string, alt: I18nText): PortfolioItem {
  const category: PortfolioCategory = "fine-line";
  const fullSrc = `/images/portfolio/fine-line/${id}.jpeg`;
  const thumbSrc = toThumbSrc(fullSrc, "fine-line");

  return {
    id,
    category,
    fullSrc,
    thumbSrc,
    src: fullSrc, // backward compatibility
    alt,
  };
}

function varios(id: string, alt: I18nText): PortfolioItem {
  const category: PortfolioCategory = "varios";
  const fullSrc = `/images/portfolio/varios/${id}.jpeg`;
  const thumbSrc = toThumbSrc(fullSrc, "varios");

  return {
    id,
    category,
    fullSrc,
    thumbSrc,
    src: fullSrc, // backward compatibility
    alt,
  };
}

/** Helper to get the correct alt by language (keeps backward compatibility). */
export function getPortfolioAlt(item: PortfolioItem, lang: Lang): string {
  return typeof item.alt === "string" ? item.alt : item.alt[lang];
}

export const featuredItems: PortfolioItem[] = [
  featured("fe_001", {
    es: "Tatuaje blackwork de mariposa con flores y hojas en antebrazo.",
    en: "Blackwork butterfly tattoo with flowers and leaves on a forearm.",
  }),
  featured("fe_002", {
    es: "Tatuaje blackwork de calavera con serpiente y flores en brazo.",
    en: "Blackwork skull tattoo with a snake and flowers on an upper arm.",
  }),
  featured("fe_003", {
    es: "Tatuaje estilo manga de personaje pirata gritando con bandera, tinta negra.",
    en: "Manga-style tattoo of a shouting pirate character with a flag, black ink.",
  }),
  featured("fe_004", {
    es: "Retrato blackwork de figura gótica con corona de rosas y cartas del tarot.",
    en: "Blackwork portrait of a gothic figure with a rose crown holding tarot cards.",
  }),
  featured("fe_005", {
    es: "Collage blackwork de arquitectura y postales de viaje en antebrazo.",
    en: "Blackwork travel collage tattoo with architecture and postcard-style frames on a forearm.",
  }),
  featured("fe_006", {
    es: "Retrato a color inspirado en Cleopatra con detalles turquesa en antebrazo.",
    en: "Color portrait inspired by Cleopatra with turquoise details on a forearm.",
  }),
  featured("fe_007", {
    es: "Tatuaje a color del Gato de Cheshire sonriendo, estilo cartoon.",
    en: "Color tattoo of the Cheshire Cat smiling, cartoon style.",
  }),
  featured("fe_008", {
    es: "Tatuaje a color de perro estilo alebrije con patrones y calaveras pequeñas.",
    en: "Color alebrije-style dog tattoo with patterned shapes and small skulls.",
  }),
  featured("fe_009", {
    es: "Tatuaje a color estilo anime con dos personajes y un ave amarilla, fondo rojo.",
    en: "Color anime-style tattoo with two characters and a yellow bird, red background.",
  }),
  featured("fe_010", {
    es: "Tatuaje de girasol a color con líneas geométricas, estilo fine line.",
    en: "Color sunflower tattoo with geometric lines, fine line style.",
  }),
  featured("fe_011", {
    es: "Composición fine line con ojo, geometría y aves en antebrazo.",
    en: "Fine line composition with an eye, geometric shapes, and birds on a forearm.",
  }),
  featured("fe_012", {
    es: "Tatuaje fine line de ancla con flores y dos colibríes, tinta negra.",
    en: "Fine line anchor tattoo with flowers and two hummingbirds, black ink.",
  }),
  featured("fe_013", {
    es: "Tatuaje a color de villanas de cuentos con cartas, estilo ilustración.",
    en: "Color illustrative tattoo of fairytale villains with playing cards.",
  }),
  featured("fe_014", {
    es: "Retrato realista a color de bulldog en la pierna.",
    en: "Realistic color bulldog portrait tattoo on a leg.",
  }),
  featured("fe_015", {
    es: "Tatuaje blackwork de personajes de Pesadilla antes de Navidad en brazo.",
    en: "Blackwork tattoo of characters from The Nightmare Before Christmas on an arm.",
  }),
];

export const blackworkItems: PortfolioItem[] = [
  blackwork("bw_001", {
    es: "Retrato de perro con flores y lettering en el antebrazo, estilo blackwork.",
    en: "Dog portrait with flowers and lettering on the forearm, blackwork style.",
  }),
  blackwork("bw_002", {
    es: "Composición ilustrada con rostros, corazón anatómico y mariposas en tinta negra.",
    en: "Illustrated composition with faces, an anatomical heart, and butterflies in black ink.",
  }),
  blackwork("bw_003", {
    es: "Esfera alada tipo amuleto con el texto “open at the close”, blackwork.",
    en: "Winged amulet-style sphere with the text “open at the close”, blackwork.",
  }),
  blackwork("bw_004", {
    es: "Escena de esgrima con dos figuras luchando con espadas, tinta negra.",
    en: "Fencing scene with two figures fighting with swords, black ink.",
  }),
  blackwork("bw_005", {
    es: "Retrato realista de perro pequeño en el antebrazo, blackwork.",
    en: "Realistic small dog portrait on the forearm, blackwork.",
  }),
  blackwork("bw_006", {
    es: "Mariposa con luna creciente y detalles astrales, estilo blackwork.",
    en: "Butterfly with a crescent moon and astral details, blackwork style.",
  }),
  blackwork("bw_007", {
    es: "Cráneo de dinosaurio en estilo realista, tatuaje blackwork.",
    en: "Realistic dinosaur skull tattoo, blackwork style.",
  }),
  blackwork("bw_008", {
    es: "Cabeza de jirafa con formas geométricas y hojas, blackwork.",
    en: "Giraffe head with geometric shapes and leaves, blackwork.",
  }),
  blackwork("bw_009", {
    es: "León con cachorro y flores en composición realista, tinta negra.",
    en: "Lion with cub and flowers in a realistic composition, black ink.",
  }),
  blackwork("bw_010", {
    es: "Sol con rostro humano y corona de flores en el hombro, blackwork.",
    en: "Sun with a human face and a floral crown on the shoulder, blackwork.",
  }),
  blackwork("bw_011", {
    es: "Mariposa con hojas y rostro de tigre integrado, estilo blackwork.",
    en: "Butterfly with leaves and an integrated tiger face, blackwork style.",
  }),
  blackwork("bw_012", {
    es: "Personaje estilo Pokémon en tatuaje pequeño, tinta negra.",
    en: "Small Pokémon-style character tattoo, black ink.",
  }),
  blackwork("bw_013", {
    es: "Retrato estilo anime con emblema y detalles sutiles, blackwork.",
    en: "Anime-style portrait with an emblem and subtle details, blackwork.",
  }),
  blackwork("bw_014", {
    es: "Personaje estilo Pokémon Togepi en tatuaje pequeño, blackwork.",
    en: "Small Pokémon-style character Togepi tattoo, blackwork.",
  }),
  blackwork("bw_015", {
    es: "Retrato realista de gato en tatuaje pequeño, tinta negra.",
    en: "Realistic cat portrait in a small tattoo, black ink.",
  }),
  blackwork("bw_016", {
    es: "Retrato de perro con lettering superior, estilo blackwork.",
    en: "Dog portrait with lettering above, blackwork style.",
  }),
  blackwork("bw_017", {
    es: "Cabeza de caballo en estilo realista, tatuaje blackwork.",
    en: "Realistic horse head tattoo, blackwork style.",
  }),
  blackwork("bw_018", {
    es: "Calavera con serpiente y flores en el brazo, tinta negra.",
    en: "Skull with a snake and flowers on the arm, black ink.",
  }),
  blackwork("bw_019", {
    es: "Rana tocando la guitarra sentada sobre hojas, blackwork.",
    en: "Frog playing a guitar while sitting on leaves, blackwork.",
  }),
  blackwork("bw_020", {
    es: "Ave fénix en vuelo con alas abiertas, estilo blackwork.",
    en: "Phoenix in flight with open wings, blackwork style.",
  }),
  blackwork("bw_021", {
    es: "Retrato realista de gato con nombre debajo, tinta negra.",
    en: "Realistic cat portrait with a name underneath, black ink.",
  }),
  blackwork("bw_022", {
    es: "Conjunto de tatuajes pequeños: mariposas, texto y símbolos en ambos brazos.",
    en: "Set of small tattoos with butterflies, text, and symbols on both arms.",
  }),
  blackwork("bw_023", {
    es: "Composición marina con tortuga, pingüino, buceador, tiburón y coral en antebrazo.",
    en: "Marine forearm composition with a turtle, penguin, diver, shark, and coral.",
  }),
  blackwork("bw_024", {
    es: "Dos tatuajes cartoon: rana con gafas y grillo con sombrero, blackwork.",
    en: "Two cartoon tattoos: a frog with glasses and a cricket with a top hat, blackwork.",
  }),
  blackwork("bw_025", {
    es: "Retrato de perro pequeño de cuerpo completo, estilo realista.",
    en: "Full-body small dog portrait in a realistic style.",
  }),
  blackwork("bw_026", {
    es: "Retrato inspirado en el antiguo Egipto con collage y caracteres japoneses.",
    en: "Egyptian-inspired portrait with collage elements and Japanese characters.",
  }),
  blackwork("bw_027", {
    es: "Personaje estilo manga con sombrero y sonrisa exagerada, blackwork.",
    en: "Manga-style character with a hat and an exaggerated smile, blackwork.",
  }),
  blackwork("bw_028", {
    es: "Composición doble con dos retratos de perro, tinta negra.",
    en: "Double composition with two dog portraits, black ink.",
  }),
  blackwork("bw_029", {
    es: "Composición simbólica con manos, ojo, aves y el texto “memento mori”.",
    en: "Symbolic composition with hands, an eye, birds, and the text “memento mori”.",
  }),
  blackwork("bw_030", {
    es: "Murciélago en vuelo con alas extendidas, estilo ilustración.",
    en: "Flying bat with outstretched wings, illustration style.",
  }),
  blackwork("bw_031", {
    es: "Personajes inspirados en Tim Burton con mariposas, blackwork.",
    en: "Tim Burton–inspired characters with butterflies, blackwork.",
  }),
  blackwork("bw_032", {
    es: "Personajes cartoon abrazando un peluche, tinta negra.",
    en: "Cartoon characters hugging a plush toy, black ink.",
  }),
  blackwork("bw_033", {
    es: "Retrato gótico con corona de rosas y maquillaje dramático.",
    en: "Gothic portrait with a rose crown and dramatic makeup.",
  }),
  blackwork("bw_034", {
    es: "Retrato realista de persona sonriendo con una cámara en las manos.",
    en: "Realistic portrait of a smiling person holding a camera.",
  }),
  blackwork("bw_035", {
    es: "Retrato realista de perro en primer plano, blackwork.",
    en: "Realistic close-up dog portrait, blackwork.",
  }),
  blackwork("bw_036", {
    es: "Ancla con flores dentro de un corazón, tinta negra.",
    en: "Anchor with flowers inside a heart shape, black ink.",
  }),
  blackwork("bw_037", {
    es: "Pez betta con aletas largas y movimiento fluido, blackwork.",
    en: "Betta fish with long flowing fins, blackwork.",
  }),
  blackwork("bw_038", {
    es: "Composición mágica con castillo, símbolo geométrico, lechuza y ciervo.",
    en: "Magical composition with a castle, geometric symbol, owl, and deer.",
  }),
  blackwork("bw_039", {
    es: "Collage de viaje con arquitectura, postales y texto manuscrito.",
    en: "Travel collage with architecture, postcards, and handwritten text.",
  }),
  blackwork("bw_040", {
    es: "Retrato pequeño de perro tipo terrier en el antebrazo.",
    en: "Small terrier-like dog portrait on the forearm.",
  }),
  blackwork("bw_041", {
    es: "Flor grande tipo peonía con hojas en la pierna, blackwork.",
    en: "Large peony-like flower with leaves on the leg, blackwork.",
  }),
];

export const colorItems: PortfolioItem[] = [
  color("co_001", {
    es: "Dos tatuajes pequeños estilo cartoon: un camaleón sobre fondo violeta tipo destello y un perrito con corona.",
    en: "Two small cartoon-style tattoos: a chameleon on a violet burst background and a little dog with a crown.",
  }),
  color("co_002", {
    es: "Tatuaje a color de criatura tipo gremlin adorable con lazo, sosteniendo una antorcha y un cuchillo.",
    en: "Color tattoo of a cute gremlin-like creature with a bow, holding a torch and a knife.",
  }),
  color("co_003", {
    es: "Retrato femenino estilo egipcio con tocado y joyería ornamental, detalles turquesa y sombreado puntillista.",
    en: "Egyptian-inspired female portrait with ornamental headpiece and jewelry, turquoise accents and dotwork shading.",
  }),
  color("co_004", {
    es: "Microrealismo a color de personajes de fantasía en la pierna: moto con sidecar y retrato de hombre con abrigo.",
    en: "Color micro-realism fantasy characters on the leg: a motorcycle with sidecar and a man in a long coat.",
  }),
  color("co_005", {
    es: "Tatuaje estilo parche bordado del logotipo “M” con franjas tricolor, efecto hilo y relieve.",
    en: "Embroidered patch-style tattoo of the “M” logo with tricolor stripes, thread and stitched texture effect.",
  }),
  color("co_006", {
    es: "Tatuaje a color de pez azul estilo cartoon con ojos muy grandes y expresión tierna.",
    en: "Color cartoon-style blue fish tattoo with big eyes and a cute expression.",
  }),
  color("co_007", {
    es: "Retrato femenino estilo cartoon inspirado en estética mexicana, con flores en el cabello y fondo acuarela.",
    en: "Cartoon-style female portrait inspired by Mexican aesthetics, with flowers in the hair and a watercolor background.",
  }),
  color("co_008", {
    es: "Composición a color con personajes tipo dragón estilo animación y una rosa bajo campana de cristal.",
    en: "Color composition with animated dragon-like characters and a rose under a glass dome.",
  }),
  color("co_009", {
    es: "Murciélago realista en negro con fondo de acuarela naranja y detalle de personaje azul estilo animación.",
    en: "Realistic black bat with orange watercolor background and a small blue animated-character detail.",
  }),
  color("co_010", {
    es: "Tatuaje circular a color de guacamayo, mezcla de realismo suave y línea fina.",
    en: "Circular color macaw tattoo, blending soft realism and fine linework.",
  }),
  color("co_011", {
    es: "Tatuaje a color de monstruo peludo azul estilo animación saludando, con textura y volumen.",
    en: "Color tattoo of a blue furry animated monster waving, with texture and depth.",
  }),
  color("co_012", {
    es: "Corazón sagrado estilo parche bordado con llamas y corona de espinas, tonos turquesa y rojos.",
    en: "Sacred heart embroidered patch-style tattoo with flames and a crown of thorns, turquoise and red tones.",
  }),
  color("co_013", {
    es: "Personaje de pantera rosa jugando al baloncesto, estilo parche bordado con detalles de hilo.",
    en: "Pink panther character playing basketball, embroidered patch style with stitched details.",
  }),
  color("co_014", {
    es: "Gato sonriente estilo Cheshire en versión parche bordado, con textura de costuras marcada.",
    en: "Cheshire-style grinning cat as an embroidered patch tattoo, with strong stitched texture.",
  }),
  color("co_015", {
    es: "Calavera pirata con sombrero de paja estilo parche bordado, efecto hilo y contorno cosido.",
    en: "Pirate skull with a straw hat in embroidered patch style, with stitched outline and thread texture.",
  }),
  color("co_016", {
    es: "Perro rosa estilo cartoon (tipo “Courage”) en parche bordado, rodeado de bocetos de caritas y perritos.",
    en: "Pink cartoon dog (Courage-like) as an embroidered patch, surrounded by small sketchy faces and dogs.",
  }),
  color("co_017", {
    es: "Personaje rojo de emoción/ira estilo animación, realizado como parche bordado con textura de hilo.",
    en: "Red animated emotion character (anger) done as an embroidered patch tattoo with thread texture.",
  }),
  color("co_018", {
    es: "Escena tipo cuadro: personaje esquelético sobre colina con fondo inspirado en “Noche estrellada”, borde rasgado.",
    en: "Painting-like scene: skeletal character on a hill with a Starry Night-inspired background and torn-edge frame.",
  }),
  color("co_019", {
    es: "Microrealismo a color de escena romántica cinematográfica con pareja abrazándose y copos de nieve.",
    en: "Color micro-realism cinematic romantic scene with a couple embracing and falling snowflakes.",
  }),
  color("co_020", {
    es: "Criatura tipo alebrije a color con alas, patrones decorativos y pequeños motivos de calaveras y flores.",
    en: "Color alebrije-style creature with wings, decorative patterns, and small skull and floral motifs.",
  }),
  color("co_021", {
    es: "Pez japonés (goldfish) realista a color con efecto de “cinta adhesiva” transparente sobre la piel.",
    en: "Realistic color goldfish tattoo with a transparent “tape” illusion over the skin.",
  }),
  color("co_022", {
    es: "Jirafa a color en perspectiva tumbada, acompañada de constelaciones y puntos tipo mapa estelar.",
    en: "Color giraffe in a lying-down perspective, accompanied by constellations and star-map dotwork.",
  }),
  color("co_023", {
    es: "Tatuaje a color estilo anime con dos personajes y tipografía japonesa, composición geométrica dinámica.",
    en: "Color anime-style tattoo with two characters and Japanese lettering in a dynamic geometric composition.",
  }),
  color("co_024", {
    es: "Composición botánica a color con flores y setas, con efecto de “cinta” o parche pegado en un lateral.",
    en: "Color botanical composition with flowers and mushrooms, featuring a side “tape/patch” illusion.",
  }),
  color("co_025", {
    es: "Parodia a color inspirada en “El grito”: monstruo azul al fondo y galleta de jengibre en primer plano.",
    en: "Color parody inspired by “The Scream”: blue monster in the background and a gingerbread cookie in front.",
  }),
  color("co_026", {
    es: "Criatura azul peluda estilo cartoon con ojos enormes, sosteniendo un pequeño muñeco morado.",
    en: "Blue fluffy cartoon creature with huge eyes, holding a small purple doll.",
  }),
  color("co_027", {
    es: "Personaje caricaturesco con gran bigote naranja, ojos verdes y traje, estilo dibujo humorístico.",
    en: "Quirky cartoon character with a big orange mustache, green eyes and a suit, in a humorous style.",
  }),
  color("co_028", {
    es: "Composición ovalada a color con personaje esquelético y luna, atmósfera nocturna con tonos cálidos.",
    en: "Oval color composition with a skeletal character and moon, night mood with warm tones.",
  }),
  color("co_029", {
    es: "Dos tatuajes pequeños estilo parche bordado: personaje con gafas rosas y figura tipo “Groot” en versión mini.",
    en: "Two small embroidered patch-style tattoos: a character with pink glasses and a mini “Groot”-like figure.",
  }),
  color("co_030", {
    es: "Personaje estilo Beetlejuice en versión chibi, realizado como parche bordado con contorno cosido.",
    en: "Chibi Beetlejuice-style character done as an embroidered patch tattoo with stitched outline.",
  }),
  color("co_031", {
    es: "Composición a color estilo anime con dos personajes y un ave eléctrica amarilla, fondo acuarela rojo/rosa.",
    en: "Color anime composition with two characters and a yellow electric bird, red/pink watercolor background.",
  }),
  color("co_032", {
    es: "Escena inspirada en “Noche estrellada” con siluetas en una roca y símbolo triangular brillante.",
    en: "Starry Night-inspired scene with silhouettes on a rock and a glowing triangular symbol.",
  }),
  color("co_033", {
    es: "Escarabajo/coleóptero a color con alas abiertas y esfera roja central, composición simétrica detallada.",
    en: "Color scarab/beetle with open wings and a central red sphere, detailed symmetrical composition.",
  }),
  color("co_034", {
    es: "Girasol a color con hojas y ramas finas, integrado en un marco geométrico de triángulos.",
    en: "Color sunflower with leaves and delicate sprigs, integrated into a geometric triangle frame.",
  }),
  color("co_035", {
    es: "Cristal rosa facetado tipo mineral, estilo geométrico con líneas y pequeños fragmentos alrededor.",
    en: "Pink faceted crystal/mineral in a geometric style, with linework and small fragments around it.",
  }),
  color("co_036", {
    es: "Versión ovalada de la escena inspirada en “El grito”: monstruo azul al fondo y galleta de jengibre delante.",
    en: "Oval version of the “The Scream”-inspired scene: blue monster in the back and a gingerbread cookie in front.",
  }),
  color("co_037", {
    es: "Pez azul estilo animación con ojos grandes, con efecto realista de cinta adhesiva transparente.",
    en: "Blue animated-style fish with big eyes, featuring a realistic transparent tape illusion.",
  }),
  color("co_038", {
    es: "Escarabajo a color tipo amuleto con alas ornamentales y esfera roja, acabado brillante y detallado.",
    en: "Amulet-like color scarab with ornamental wings and a red sphere, glossy and highly detailed finish.",
  }),
];

export const fineLineItems: PortfolioItem[] = [
  fineLine("fl_001", {
    es: "Composición fine line de flores en la espalda, con pétalos al viento y frase vertical en caligrafía delicada.",
    en: "Fine line floral back piece with flowing petals and a delicate vertical script quote.",
  }),
  fineLine("fl_002", {
    es: "Libro abierto del que nacen flores y hojas, acompañado de una fecha y hora en formato numérico.",
    en: "An open book with flowers and leaves growing from it, paired with a numeric date and time.",
  }),
  fineLine("fl_003", {
    es: "Conjunto de mini tatuajes minimalistas: rosa con palabra en cursiva, pequeño motivo botánico y silueta arquitectónica.",
    en: "Set of minimalist mini tattoos: a rose with a cursive word, a small botanical motif, and an architectural silhouette.",
  }),
  fineLine("fl_004", {
    es: "Pareja de personajes dibujados con línea continua, estilo cartoon minimalista en el brazo.",
    en: "A pair of cartoon-style characters drawn in a continuous-line minimalist style on the arm.",
  }),
  fineLine("fl_005", {
    es: "Silueta minimalista tipo mapa/isla trazada a una sola línea, limpia y elegante.",
    en: "Minimal one-line map/island outline tattoo, clean and elegant.",
  }),
  fineLine("fl_006", {
    es: "Escena emotiva en fine line: dos figuras abrazadas frente a un castillo, con pequeños destellos tipo fuegos artificiales.",
    en: "Emotive fine line scene: two figures hugging in front of a castle, with small firework-like sparkles.",
  }),
  fineLine("fl_007", {
    es: "Corazón anatómico en tamaño mini, con sombreado suave y detalle de línea fina.",
    en: "Tiny anatomical heart with soft shading and fine line detail.",
  }),
  fineLine("fl_008", {
    es: "Colibrí en vuelo combinado con flores de línea fina, toques de estrellas y una mariposa pequeña.",
    en: "A flying hummingbird paired with fine line flowers, star accents, and a small butterfly.",
  }),
  fineLine("fl_009", {
    es: "Flor en línea fina roja, estilo delicado y ligero, con tallo alargado y brote.",
    en: "Delicate red fine line flower with a long stem and a small bud.",
  }),
  fineLine("fl_010", {
    es: "Dos siluetas tipo mapa unidas por una línea que forma un corazón, detalle minimalista a color suave.",
    en: "Two map-like outlines connected by a line forming a heart, in a soft minimal color detail.",
  }),
  fineLine("fl_011", {
    es: "Frase corta en caligrafía fina sobre el antebrazo, estilo escritura manuscrita muy sutil.",
    en: "A short fine script quote on the forearm, in a subtle handwritten style.",
  }),
  fineLine("fl_012", {
    es: "Retrato minimalista de perro en línea fina, acompañado de lettering en tipografía tipo máquina de escribir.",
    en: "Minimal fine line dog portrait paired with typewriter-style lettering.",
  }),
  fineLine("fl_013", {
    es: "Constelación de mini tatuajes en la espalda: símbolos, insecto, fruta, carita ilustrada y palabras en diferentes estilos.",
    en: "A constellation of mini back tattoos: symbols, an insect, a fruit, an illustrated face, and words in mixed lettering styles.",
  }),
  fineLine("fl_014", {
    es: "Composición con lettering en mayúsculas, colibrí en vuelo y manos formando un corazón con ramitas botánicas.",
    en: "Composition featuring uppercase lettering, a flying hummingbird, and hands forming a heart with botanical sprigs.",
  }),
  fineLine("fl_015", {
    es: "Dos mini tattoos estilo ilustración: personaje búho abrazando una bola de discoteca y un personaje pequeño con sombrero.",
    en: "Two illustrative mini tattoos: an owl character hugging a disco ball and a small character with a top hat.",
  }),
  fineLine("fl_016", {
    es: "Collage black & grey de alto detalle: ojo realista, geometría, manos esqueléticas, aves y elementos simbólicos.",
    en: "Highly detailed black & grey collage: realistic eye, geometry, skeletal hands, birds and symbolic elements.",
  }),
  fineLine("fl_017", {
    es: "Conjunto minimalista en el brazo: carita de perro en línea, palabra en cursiva y paisaje enmarcado en un recuadro.",
    en: "Minimal set on the arm: a linework dog face, a cursive word, and a framed landscape in a small square.",
  }),
  fineLine("fl_018", {
    es: "Flor con un ojo en el centro, mezcla de línea fina y sombreado suave; acompañada de nombres en vertical.",
    en: "Flower with an eye at the center, blending fine line and soft shading; paired with vertical names.",
  }),
  fineLine("fl_019", {
    es: "Ancla en fine line rellena de flores y dos colibríes, composición elegante con sombras suaves.",
    en: "Fine line anchor filled with flowers and two hummingbirds, an elegant composition with soft shading.",
  }),
  fineLine("fl_020", {
    es: "Colección temática de fantasía en el brazo: castillo detallado y objetos mágicos en línea fina, estilo ilustrativo.",
    en: "Fantasy-themed arm collection: a detailed castle and magical objects in fine line, illustrative style.",
  }),
  fineLine("fl_021", {
    es: "Castillo en fine line con criatura alada en primer plano, efecto de movimiento y profundidad con sombras suaves.",
    en: "Fine line castle with a winged creature in the foreground, creating motion and depth with soft shading.",
  }),
  fineLine("fl_022", {
    es: "Personaje de animación abrazando un unicornio, estilo black & grey suave con líneas limpias y expresión tierna.",
    en: "Animated character hugging a unicorn, in soft black & grey with clean lines and a sweet expression.",
  }),
  fineLine("fl_023", {
    es: "Rosa grande en black & grey con sombreado suave y hojas oscuras, colocada en el antebrazo.",
    en: "Large black & grey rose with soft shading and darker leaves, placed on the forearm.",
  }),
  fineLine("fl_024", {
    es: "Lettering con mensaje en español junto a un corazón anatómico, acompañado de mariposa y palabra adicional en minúsculas.",
    en: "Spanish lettering paired with an anatomical heart, plus a butterfly and an additional lowercase word.",
  }),
  fineLine("fl_025", {
    es: "Skyline minimalista a una sola línea con faro, aves y detalles de costa, estilo fino y limpio.",
    en: "One-line minimalist skyline with a lighthouse, birds, and coastal details, fine and clean style.",
  }),
];


export const variosItems: PortfolioItem[] = [
  varios("va_001", {
    es: "Retrato realista de un perro en tinta negra y sombras suaves, acompañado de una pequeña constelación y flores lineales en el antebrazo.",
    en: "Realistic dog portrait in black ink with soft shading, accompanied by a small constellation and fine line flowers on the forearm.",
  }),
  varios("va_002", {
    es: "Retrato realista de un perro de pelo rizado dentro de un marco circular, decorado con flores en tonos rosados.",
    en: "Realistic portrait of a curly-haired dog inside a circular frame, decorated with pink-toned flowers.",
  }),
  varios("va_003", {
    es: "Retrato realista de un perro con un juguete rojo en la boca, realizado a color con gran nivel de detalle.",
    en: "Realistic color portrait of a dog holding a red toy in its mouth, with high level of detail.",
  }),
  varios("va_004", {
    es: "Ilustración a color de villanos inspirados en personajes de fantasía y cartas de póker, con estilo cartoon y composición dinámica.",
    en: "Color illustration of fantasy-inspired villains and poker cards, in a cartoon style with a dynamic composition.",
  }),
  varios("va_005", {
    es: "Tatuaje a color de un ave estilizada con plumaje vibrante y diseño ilustrativo en la parte posterior del brazo.",
    en: "Color tattoo of a stylized bird with vibrant plumage and an illustrative design on the back of the arm.",
  }),
  varios("va_006", {
    es: "Tatuaje botánico a color de una flor ave del paraíso, con líneas definidas y sombreado suave.",
    en: "Botanical color tattoo of a bird of paradise flower, with defined lines and soft shading.",
  }),
  varios("va_007", {
    es: "Retrato realista de un bulldog en tonos cálidos, centrado en la expresión facial y el volumen.",
    en: "Realistic bulldog portrait in warm tones, focused on facial expression and volume.",
  }),
  varios("va_008", {
    es: "Microtatuaje a color de una mariquita junto a una moneda para mostrar la escala real del diseño.",
    en: "Color micro tattoo of a ladybug next to a coin to show the real scale of the design.",
  }),
  varios("va_009", {
    es: "Tatuaje en negro de un ángel o figura alada en movimiento, con estilo gráfico y alto contraste.",
    en: "Black ink tattoo of an angelic or winged figure in motion, with a graphic style and high contrast.",
  }),
  varios("va_010", {
    es: "Tatuaje de temática egipcia con un faraón, símbolos antiguos y composición detallada en blanco y negro.",
    en: "Egyptian-themed tattoo featuring a pharaoh, ancient symbols, and a detailed black and grey composition.",
  }),
  varios("va_011", {
    es: "Ilustración femenina con trenza y flores rojas, combinada con texto vertical en estilo delicado.",
    en: "Female illustration with a braid and red flowers, combined with vertical text in a delicate style.",
  }),
  varios("va_012", {
    es: "Composición conceptual en tinta negra con figuras clásicas, símbolos geométricos y la palabra 'Perspective'.",
    en: "Conceptual black ink composition featuring classical figures, geometric symbols, and the word 'Perspective'.",
  }),
  varios("va_013", {
    es: "Tatuaje geométrico a color compuesto por hexágonos, cada uno con ilustraciones detalladas y simbólicas.",
    en: "Color geometric tattoo composed of hexagons, each containing detailed and symbolic illustrations.",
  }),
  varios("va_014", {
    es: "Tatuaje botánico en línea fina de ramas y hojas, recorriendo el antebrazo de forma elegante.",
    en: "Fine line botanical tattoo of branches and leaves flowing elegantly along the forearm.",
  }),
  varios("va_015", {
    es: "Pequeño tatuaje a color del personaje Groot, con estilo tierno y detalles delicados.",
    en: "Small color tattoo of the character Groot, with a cute style and delicate details.",
  }),
  varios("va_016", {
    es: "Ilustración inspirada en fantasía oscura con una figura enmascarada de grandes ojos y personajes infantiles.",
    en: "Dark fantasy-inspired illustration featuring a masked figure with large eyes and childlike characters.",
  }),
  varios("va_017", {
    es: "Tatuaje conceptual con una mano robótica y el texto 'Continue? Yes / No', inspirado en estética retro.",
    en: "Conceptual tattoo with a robotic hand and the text 'Continue? Yes / No', inspired by retro aesthetics.",
  }),
  varios("va_018", {
    es: "Composición ilustrativa en negro de personajes fantásticos y elementos surrealistas en el brazo.",
    en: "Black ink illustrative composition of fantastical characters and surreal elements on the arm.",
  }),
  varios("va_019", {
    es: "Retrato dividido de un personaje masculino, combinando realismo y manchas de color expresivas.",
    en: "Split portrait of a male character, combining realism with expressive color splashes.",
  }),
  varios("va_020", {
    es: "Ilustración a color del Gato de Cheshire con sombrero, inspirada en Alicia en el País de las Maravillas.",
    en: "Color illustration of the Cheshire Cat wearing a hat, inspired by Alice in Wonderland.",
  }),
  varios("va_021", {
    es: "Retrato doble dividido de dos personajes, inspirado en figuras de fantasía, con referencias a figuras coleccionables.",
    en: "Split double portrait of two characters inspired by fantasy figures, with references to collectible figurines.",
  }),
];


/** Full catalog (non-featured, generated). */
export const portfolioItems: PortfolioItem[] = [
  ...buildRange({
    category: "blackwork",
    prefix: "bw",
    from: 1,
    to: 41,
    ext: "jpeg",
  }),
  ...buildRange({
    category: "color",
    prefix: "co",
    from: 1,
    to: 38,
    ext: "jpeg",
  }),
  ...buildRange({
    category: "fine-line",
    prefix: "fl",
    from: 1,
    to: 25,
    ext: "jpeg",
  }),
  ...buildRange({
    category: "varios",
    prefix: "va",
    from: 1,
    to: 21,
    ext: "jpeg",
  }),
];

/** Convenience grouping (generated fallbacks). */
export const portfolioByCategory: Record<
  Exclude<PortfolioCategory, "featured">,
  PortfolioItem[]
> = {
  blackwork: portfolioItems.filter((x) => x.category === "blackwork"),
  color: portfolioItems.filter((x) => x.category === "color"),
  "fine-line": portfolioItems.filter((x) => x.category === "fine-line"),
  varios: portfolioItems.filter((x) => x.category === "varios"),
};

/** Single list including all curated items (preferred for search, etc.). */
export const allPortfolioItems: PortfolioItem[] = [
  ...featuredItems,
  ...blackworkItems,
  ...colorItems,
  ...fineLineItems,
  ...variosItems,
];
