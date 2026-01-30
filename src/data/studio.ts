// studio.ts
// Data model + helpers for the "Studio" gallery items.

export type StudioCategory = "studio";

export type Lang = "es" | "en";

export type StudioItemI18n = {
  id: string; // e.g. "st_001"
  category: StudioCategory;

  // Full-size asset (used for lightbox)
  fullSrc: string;

  // Lightweight thumbnail (used for grids)
  thumbSrc: string;

  // Backward compatibility: keep "src" so existing components don't break.
  // For now we keep it as fullSrc; the GalleryLightbox can use thumbSrc in the grid.
  src: string;

  // i18n alt (source of truth)
  alt: {
    es: string;
    en: string;
  };
};

// This is the shape your GalleryLightbox most likely expects today (alt: string).
// We'll generate this from StudioItemI18n depending on the language.
export type StudioItem = Omit<StudioItemI18n, "alt"> & {
  alt: string;
};

type BuildRangeOptions = {
  prefix: "st";
  from: number;
  to: number;
  ext?: "jpeg" | "jpg" | "png" | "webp" | "avif";
};

/** Pads a number to 3 digits (1 -> "001"). */
function pad3(n: number): string {
  return String(n).padStart(3, "0");
}

/** Derive /thumbs/...webp from a full image path in /images/Studio/... */
function toThumbSrc(fullSrc: string): string {
  // Example:
  // full:  /images/Studio/st_001.jpeg
  // thumb: /images/Studio/thumbs/st_001.webp
  const file = fullSrc.split("/").pop() ?? "";
  const base = file.replace(/\.(jpe?g|png|webp|avif)$/i, "");
  return `/images/Studio/thumbs/${base}.webp`;
}

/** Builds base items st_001..st_00N with consistent src paths + thumbs paths. */
function buildRange(options: BuildRangeOptions): Omit<
  StudioItemI18n,
  "alt"
>[] {
  const { prefix, from, to, ext = "jpeg" } = options;

  const items: Omit<StudioItemI18n, "alt">[] = [];
  for (let i = from; i <= to; i++) {
    const num = pad3(i);
    const id = `${prefix}_${num}`;

    const category: StudioCategory = "studio";
    const fullSrc = `/images/Studio/${id}.${ext}`;
    const thumbSrc = toThumbSrc(fullSrc);

    items.push({
      id,
      category,
      fullSrc,
      thumbSrc,
      src: fullSrc, // backward compatibility
    });
  }

  return items;
}

/**
 * Real, hand-written alt texts per image.
 * st_002 and st_003 are based on the two photos you shared.
 * st_001 is a safe fallback until you send the missing photo.
 */
const STUDIO_ALT: Record<string, { es: string; en: string }> = {
  st_001: {
    es: "Interior del estudio de tatuajes Vigarartattoo, espacio luminoso y decorado con arte y plantas.",
    en: "Vigarartattoo tattoo studio interior, bright space decorated with art and plants.",
  },
  st_002: {
    es: "Entrada del estudio Vigarartattoo con el rótulo grande en la pared, plantas colgantes, letrero de neón rosa y una mesa bajo el logo.",
    en: "Vigarartattoo studio entrance with a large wall logo, hanging plants, a pink neon sign, and a table beneath the lettering.",
  },
  st_003: {
    es: "Zona de trabajo del estudio con camilla de tatuaje negra, paredes blancas con cuadros, estanterías y vitrinas con figuras decorativas y plantas.",
    en: "Studio workstation with a black tattoo bed, white walls with framed art, shelves, display cabinets with collectibles, and plants.",
  },
};

/** Build the i18n items (alt as {es,en}). */
export const studioItemsI18n: StudioItemI18n[] = buildRange({
  prefix: "st",
  from: 1,
  to: 3,
  // IMPORTANT: set the extension that matches your real full-size assets.
  // If your full images are .jpeg, keep "jpeg".
  // If they are .webp/.avif, change it here (or switch to per-item below).
  ext: "jpeg",
}).map((item) => ({
  ...item,
  alt: STUDIO_ALT[item.id] ?? {
    es: `Estudio de tatuajes Vigarartattoo ${item.id}`,
    en: `Vigarartattoo tattoo studio ${item.id}`,
  },
}));

/**
 * Returns StudioItem[] for the current language (alt: string),
 * keeping GalleryLightbox compatibility.
 */
export function getStudioItems(lang: Lang): StudioItem[] {
  return studioItemsI18n.map((it) => ({
    ...it,
    alt: (it.alt[lang] ?? it.alt.es) as string,
  }));
}
