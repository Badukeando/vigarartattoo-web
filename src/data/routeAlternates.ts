import { faqPageContent } from "./faqPages";
import { tattooAftercareGuide } from "./guidePages";
import { servicePageContent, type ServicePageKey } from "./servicePages";
import type { SiteLang } from "./site";

export type RouteAlternates = Record<SiteLang, string>;

export const homeRouteAlternates: RouteAlternates = {
  es: "/",
  en: "/en/",
};

export const worksRouteAlternates: RouteAlternates = {
  es: "/works/",
  en: "/en/works/",
};

export const faqRouteAlternates: RouteAlternates = {
  es: faqPageContent.es.path,
  en: faqPageContent.en.path,
};

export const guideRouteAlternates: RouteAlternates = {
  es: tattooAftercareGuide.es.path,
  en: tattooAftercareGuide.en.path,
};

export const getServiceRouteAlternates = (
  pageKey: ServicePageKey,
): RouteAlternates => ({
  es: servicePageContent.es[pageKey].path,
  en: servicePageContent.en[pageKey].path,
});
