export type PortfolioCategory = "blackwork" | "color" | "fine-line" | "varios" | "featured";

export type PortfolioItem = {
  id: string;                 // e.g. "bw_001", "fe_009"
  category: PortfolioCategory;
  src: string;                // public path e.g. "/images/portfolio/blackwork/bw_001.jpeg"
  alt: string;                // accessible description
};

type BuildRangeOptions = {
  category: Exclude<PortfolioCategory, "featured">;
  prefix: "bw" | "co" | "fl" | "va";
  from: number;
  to: number;
  ext?: "jpeg" | "jpg" | "png" | "webp";
  altPrefix?: string;
};

/** Pads a number to 3 digits (1 -> "001"). */
function pad3(n: number): string {
  return String(n).padStart(3, "0");
}

/** Builds items like bw_001..bw_041 with consistent src paths. */
function buildRange(options: BuildRangeOptions): PortfolioItem[] {
  const { category, prefix, from, to, ext = "jpeg", altPrefix = "Tattoo" } = options;

  const items: PortfolioItem[] = [];
  for (let i = from; i <= to; i++) {
    const num = pad3(i);
    const id = `${prefix}_${num}`;
    items.push({
      id,
      category,
      src: `/images/portfolio/${category}/${id}.${ext}`,
      alt: `${altPrefix} (${category}) ${id}`,
    });
  }
  return items;
}

/** Featured files have their own folder and can mix extensions. */
export const featuredItems: PortfolioItem[] = [
  { id: "fe_001", category: "featured", src: "/images/portfolio/featured/fe_001.jpeg", alt: "Tattoo blackwork mariposa" },
  { id: "fe_002", category: "featured", src: "/images/portfolio/featured/fe_002.jpeg", alt: "Tattoo blackwork serpiente" },
  { id: "fe_003", category: "featured", src: "/images/portfolio/featured/fe_003.jpeg", alt: "Tattoo blackwork manga Roger" },
  { id: "fe_004", category: "featured", src: "/images/portfolio/featured/fe_004.jpeg", alt: "Tattoo blackwork tarot" },
  { id: "fe_005", category: "featured", src: "/images/portfolio/featured/fe_005.jpeg", alt: "Tattoo blackwork viajes" },
  { id: "fe_006", category: "featured", src: "/images/portfolio/featured/fe_006.jpeg", alt: "Tattoo color Cleopatra" },
  { id: "fe_007", category: "featured", src: "/images/portfolio/featured/fe_007.jpeg", alt: "Tattoo color gato Cheshire" },
  { id: "fe_008", category: "featured", src: "/images/portfolio/featured/fe_008.jpeg", alt: "Tattoo color perro Coco" },
  { id: "fe_009", category: "featured", src: "/images/portfolio/featured/fe_009.jpeg", alt: "Tattoo color manga Kimetsu" },
  { id: "fe_010", category: "featured", src: "/images/portfolio/featured/fe_010.jpeg", alt: "Tattoo fine line girasol" },
  { id: "fe_011", category: "featured", src: "/images/portfolio/featured/fe_011.jpeg", alt: "Tattoo fine line ojo" },
  { id: "fe_012", category: "featured", src: "/images/portfolio/featured/fe_012.jpeg", alt: "Tattoo fine line ancla" },
  { id: "fe_013", category: "featured", src: "/images/portfolio/featured/fe_013.jpeg", alt: "Tattoo color villanas Disney" },
  { id: "fe_014", category: "featured", src: "/images/portfolio/featured/fe_014.jpeg", alt: "Tattoo color perro" },
  { id: "fe_015", category: "featured", src: "/images/portfolio/featured/fe_015.jpeg", alt: "Tattoo blackwork Pesadilla antes de Navidad" },
];

/** Full catalog (non-featured). */
export const portfolioItems: PortfolioItem[] = [
  ...buildRange({ category: "blackwork", prefix: "bw", from: 1, to: 41, ext: "jpeg", altPrefix: "Tattoo" }),
  ...buildRange({ category: "color",     prefix: "co", from: 1, to: 38, ext: "jpeg", altPrefix: "Tattoo" }),
  ...buildRange({ category: "fine-line", prefix: "fl", from: 1,  to: 25, ext: "jpeg", altPrefix: "Tattoo" }),
  ...buildRange({ category: "varios",    prefix: "va", from: 1, to: 21, ext: "jpeg", altPrefix: "Tattoo" }),
];

/** Convenience grouping if you want to build galleries by category. */
export const portfolioByCategory: Record<Exclude<PortfolioCategory, "featured">, PortfolioItem[]> = {
  "blackwork": portfolioItems.filter((x) => x.category === "blackwork"),
  "color": portfolioItems.filter((x) => x.category === "color"),
  "fine-line": portfolioItems.filter((x) => x.category === "fine-line"),
  "varios": portfolioItems.filter((x) => x.category === "varios"),
};

/** If you want a single list including featured (for search, etc.). */
export const allPortfolioItems: PortfolioItem[] = [
  ...featuredItems,
  ...portfolioItems,
];
