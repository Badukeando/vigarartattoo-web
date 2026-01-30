export type StudioCategory = "studio";

export type StudioItem = {
  id: string; // e.g. "st_001"
  category: StudioCategory;

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
  prefix: "st";
  from: number;
  to: number;
  ext?: "jpeg" | "jpg" | "png";
  altPrefix?: string;
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
  const base = file.replace(/\.(jpe?g|png)$/i, "");
  return `/images/Studio/thumbs/${base}.webp`;
}

/** Builds items like st_001..st_003 with consistent src paths + thumbs paths. */
function buildRange(options: BuildRangeOptions): StudioItem[] {
  const { prefix, from, to, ext = "jpeg", altPrefix = "Tattoo studio" } =
    options;

  const items: StudioItem[] = [];
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
      alt: `${altPrefix} ${id}`,
    });
  }

  return items;
}

export const studioItems: StudioItem[] = [
  ...buildRange({
    prefix: "st",
    from: 1,
    to: 3,
    ext: "jpeg",
    altPrefix: "Vigarartattoo studio",
  }),
];
