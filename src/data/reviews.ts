export type Review = {
  id: string;
  author: string;
  rating: 5 | 4 | 3 | 2 | 1;
  text: string;
  source: "Google";
  date?: string;        // e.g. "hace 1 mes"
  service?: string;     // optional
};

export const googleMapsReviewsUrl =
  "https://www.google.com/search?sca_esv=fc9cc7141bd3a5ec&sxsrf=ANbL-n51HCh9dSsMKPF45nM70xL4jm7NTQ:1769616791586&q=Vigarartattoo&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOcHG-aZidEvXOkiid70Q50A2jO_F544uN4iBNyUNdbMnBKv7dvdzPTeStpJGBd4YEDktzjE%3D&uds=ALYpb_kKdx-oX15sdjMUmdmJV1RhNkGvg4U52IY7-bY_BFf96cY5f75rqzoc53LSelrUBpYTB0OWiiEXWhcMYggk2ip54BoG8n2bOQSs7KrBhwSRVNir4rw&sa=X&ved=2ahUKEwjr4oCi0K6SAxUBRPEDHUY1O0cQ3PALegQIHBAE&biw=1920&bih=911&dpr=1&aic=0";

export const reviews: Review[] = [
  {
    id: "g_001",
    author: "Claudia Pm",
    rating: 5,
    date: "hace 7 meses",
    service: "Tatuajes a color",
    source: "Google",
    text:
      "Rocío aparte de ser una gran profesional, es una chica super simpática. Este es ya mi tercer tatuaje con ella ☺️",
  },
  {
    id: "g_002",
    author: "Yolanda Fernández Eslava",
    rating: 5,
    date: "hace 1 mes",
    service: "Tatuajes a color y Tatuajes con líneas finas",
    source: "Google",
    text:
      "Los cuatro mejores tatuajes de mi vida, por como estan hechos y lo que representan. Dos de ellos de mi perro del alma. Lo ha hecho tan igual a el que es como si lo llevara conmigo siempre. Una amiga de fuera al verlos va a venir a tatuarse su perro con ella jeje",
  },
  {
    id: "g_003",
    author: "Paco Cobos",
    rating: 5,
    date: "hace 1 mes",
    source: "Google",
    text:
      "Empecé con ella por casualidad y ahora no cambio a Rocio por nada del mundo. Es la mejor tatuadora que puedes encontrar en Malaga y en cualquier sitio. Su trabajo es espectacular en todo lo que hace, profesional como pocas. Sus precios no los vas a encontrar en ningun otro estudio. Y si trato no lo va a mejorar nadie. Simpática, divertida, buena gente. Cualquier duda que tengas te atiende siempre. Es la mejor 👏🏼👏🏼",
  },
  {
    id: "g_004",
    author: "Marivi Collante",
    rating: 5,
    date: "hace 1 mes",
    source: "Google",
    text:
      "Muy profesional, con un trato amigable y mucha paciencia. Como tatuadora de linea fina, de lo mejorcito. No es el primer tatuaje que me hago con esta artistaza y tampoco será el último. Sin duda volveré..",
  },
  {
    id: "g_005",
    author: "Lorena Herran Navarro",
    rating: 5,
    date: "hace 1 mes",
    source: "Google",
    text:
      "La chica es super simpática me sentí como en casa en todo instante. es una gran profesional y salí super contenta tanto con el trato como mi tattoo 🥰",
  },
  {
    id: "g_006",
    author: "Paula Ariza",
    rating: 5,
    date: "hace 1 mes",
    source: "Google",
    text:
      "Excelente como trabaja y lo simpática que es. Mi primera vez con ella pero se que no la última. Muchas gracias por poner tanto amor en tus trabajos 😊",
  },
];
