export function initActiveSectionHighlight(): void {
  const root = document.documentElement;
  if (root.dataset.vigarSectionHighlightInit === "true") return;
  root.dataset.vigarSectionHighlightInit = "true";

  const navs = Array.from(document.querySelectorAll("[data-section-nav]"));
  const scopeRoots: ParentNode[] = navs.length ? navs : [document];

  const links: HTMLAnchorElement[] = scopeRoots
    .flatMap((r) => Array.from(r.querySelectorAll("[data-section-link]")))
    .filter((a): a is HTMLAnchorElement => a instanceof HTMLAnchorElement);

  if (!links.length) return;

  const normalizeId = (v: string | null) => (v ?? "").replace(/^#/, "").trim();

  const ids = Array.from(
    new Set(
      links
        .map((a) => normalizeId(a.getAttribute("data-section-link")))
        .filter((v): v is string => v.length > 0)
    )
  );

  const sections: HTMLElement[] = ids
    .map((id) => document.getElementById(id))
    .filter((el): el is HTMLElement => el instanceof HTMLElement);

  if (!sections.length) return;

  const setActive = (id: string) => {
    links.forEach((a) => {
      const match = normalizeId(a.getAttribute("data-section-link")) === id;

      a.classList.toggle("text-white", match);
      a.classList.toggle("font-semibold", match);
      a.classList.toggle("border-white/30", match);
      a.classList.toggle("is-active", match);

      if (match) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  };

  const clearActive = () => {
    links.forEach((a) => {
      a.classList.remove("text-white", "font-semibold", "border-white/30", "is-active");
      a.removeAttribute("aria-current");
    });
  };

  const getTopOffset = (): number => {
    const sticky = document.querySelector("[data-sticky-header]");
    if (sticky instanceof HTMLElement && sticky.classList.contains("is-visible")) {
      return sticky.getBoundingClientRect().height + 16;
    }
    return 24;
  };

  let activeId = "";
  clearActive();

  let ticking = false;

  const update = () => {
    ticking = false;

    const y = window.scrollY || document.documentElement.scrollTop;
    if (y < 8) {
      if (activeId !== "") {
        activeId = "";
        clearActive();
      }
      return;
    }

    const offset = getTopOffset();
    let current = sections[0];

    for (const s of sections) {
      const top = s.getBoundingClientRect().top;
      if (top - offset <= 0) current = s;
      else break;
    }

    const nearBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (nearBottom) current = sections[sections.length - 1];

    if (current.id !== activeId) {
      activeId = current.id;
      setActive(activeId);
    }
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
}
