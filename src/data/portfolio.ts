export type PortfolioCategory =
  | "blackwork"
  | "color"
  | "fine-line"
  | "varios"
  | "featured";

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

  alt: string; // accessible description
};

type BuildRangeOptions = {
  category: Exclude<PortfolioCategory, "featured">;
  prefix: "bw" | "co" | "fl" | "va";
  from: number;
  to: number;
  ext?: "jpeg" | "jpg" | "png";
  altPrefix?: string;
};

/** Pads a number to 3 digits (1 -> "001"). */
function pad3(n: number): string {
  return String(n).padStart(3, "0");
}

/** Derive /thumbs/...webp from a full image path in /images/portfolio/<category>/... */
function toThumbSrc(fullSrc: string, category: string): string {
  // Example:
  // full:  /images/portfolio/fine-line/fl_018.jpeg
  // thumb: /images/portfolio/fine-line/thumbs/fl_018.webp
  const file = fullSrc.split("/").pop() ?? "";
  const base = file.replace(/\.(jpe?g|png)$/i, "");
  return `/images/portfolio/${category}/thumbs/${base}.webp`;
}

/** Builds items like bw_001..bw_041 with consistent src paths + thumbs paths. */
function buildRange(options: BuildRangeOptions): PortfolioItem[] {
  const { category, prefix, from, to, ext = "jpeg", altPrefix = "Tattoo" } =
    options;

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
      alt: `${altPrefix} (${category}) ${id}`,
    });
  }
  return items;
}

/** Featured files have their own folder. */
function featured(id: string, alt: string): PortfolioItem {
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

export const featuredItems: PortfolioItem[] = [
  featured("fe_001", "Tattoo blackwork mariposa"),
  featured("fe_002", "Tattoo blackwork serpiente"),
  featured("fe_003", "Tattoo blackwork manga Roger"),
  featured("fe_004", "Tattoo blackwork tarot"),
  featured("fe_005", "Tattoo blackwork viajes"),
  featured("fe_006", "Tattoo color Cleopatra"),
  featured("fe_007", "Tattoo color gato Cheshire"),
  featured("fe_008", "Tattoo color perro Coco"),
  featured("fe_009", "Tattoo color manga Kimetsu"),
  featured("fe_010", "Tattoo fine line girasol"),
  featured("fe_011", "Tattoo fine line ojo"),
  featured("fe_012", "Tattoo fine line ancla"),
  featured("fe_013", "Tattoo color villanas Disney"),
  featured("fe_014", "Tattoo color perro"),
  featured("fe_015", "Tattoo blackwork Pesadilla antes de Navidad"),
];

/** Full catalog (non-featured). */
export const portfolioItems: PortfolioItem[] = [
  ...buildRange({
    category: "blackwork",
    prefix: "bw",
    from: 1,
    to: 41,
    ext: "jpeg",
    altPrefix: "Tattoo",
  }),
  ...buildRange({
    category: "color",
    prefix: "co",
    from: 1,
    to: 38,
    ext: "jpeg",
    altPrefix: "Tattoo",
  }),
  ...buildRange({
    category: "fine-line",
    prefix: "fl",
    from: 1,
    to: 25,
    ext: "jpeg",
    altPrefix: "Tattoo",
  }),
  ...buildRange({
    category: "varios",
    prefix: "va",
    from: 1,
    to: 21,
    ext: "jpeg",
    altPrefix: "Tattoo",
  }),
];

/** Convenience grouping if you want to build galleries by category. */
export const portfolioByCategory: Record<
  Exclude<PortfolioCategory, "featured">,
  PortfolioItem[]
> = {
  blackwork: portfolioItems.filter((x) => x.category === "blackwork"),
  color: portfolioItems.filter((x) => x.category === "color"),
  "fine-line": portfolioItems.filter((x) => x.category === "fine-line"),
  varios: portfolioItems.filter((x) => x.category === "varios"),
};

/** If you want a single list including featured (for search, etc.). */
export const allPortfolioItems: PortfolioItem[] = [...featuredItems, ...portfolioItems];
