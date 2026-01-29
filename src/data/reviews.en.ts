export type Review = {
  id: string;
  author: string;
  rating: 5 | 4 | 3 | 2 | 1;
  text: string;
  source: "Google";
  date?: string;     // e.g. "7 months ago"
  service?: string;  // optional
};

export const googleMapsReviewsUrl =
  "https://www.google.com/search?sa=X&sca_esv=fc9cc7141bd3a5ec&sxsrf=ANbL-n7uGmEvlxmFbwFTgPBY7xnZ-gI8Gw:1769680290464&q=Vigarartattoo+Studio+Rese%C3%B1as&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDAzNDezNLK0MDYxMTAxAbLMNzAyvmKUDctMTyxKLCpJLCnJz1cILilNycxXCEotTj28MbF4ESt-eQCTkwZBWwAAAA&rldimm=10617692983440449297&tbm=lcl&hl=es-DE&ved=2ahUKEwie0dDovLCSAxVy_7sIHVH8MSEQ9fQKegQIVBAG&biw=1920&bih=911&dpr=1&aic=0#lkt=LocalPoiReviews";

export const reviews: Review[] = [
  {
    id: "g_001",
    author: "Claudia Pm",
    rating: 5,
    date: "7 months ago",
    service: "Color tattoos",
    source: "Google",
    text:
      "Rocío is not only a great professional, she’s also super friendly. This is already my third tattoo with her ☺️",
  },
  {
    id: "g_002",
    author: "Yolanda Fernández Eslava",
    rating: 5,
    date: "1 month ago",
    service: "Color tattoos and fine line tattoos",
    source: "Google",
    text:
      "The four best tattoos of my life, for how well they’re done and what they represent. Two of them are of my soul-dog. She captured him so perfectly that it feels like I carry him with me always. A friend from abroad saw them and is going to come to get her dog tattooed by her too, haha.",
  },
  {
    id: "g_003",
    author: "Paco Cobos",
    rating: 5,
    date: "1 month ago",
    source: "Google",
    text:
      "I started with her by chance and now I wouldn’t change Rocío for anyone. She’s the best tattoo artist you can find in Málaga and anywhere else. Her work is spectacular in everything she does—professional like very few. You won’t find her prices in any other studio. And no one can beat her customer care: friendly, fun, and genuinely kind. Any question you have, she always helps. She’s the best 👏🏼👏🏼",
  },
  {
    id: "g_004",
    author: "Marivi Collante",
    rating: 5,
    date: "1 month ago",
    source: "Google",
    text:
      "Very professional, friendly, and incredibly patient. For fine line tattoos, she’s among the best. This isn’t my first tattoo with this amazing artist and it won’t be the last. I’ll definitely be back.",
  },
  {
    id: "g_005",
    author: "Lorena Herran Navarro",
    rating: 5,
    date: "1 month ago",
    source: "Google",
    text:
      "She’s super friendly—I felt at home the whole time. She’s a great professional and I left really happy with both the experience and my tattoo 🥰",
  },
  {
    id: "g_006",
    author: "Paula Ariza",
    rating: 5,
    date: "1 month ago",
    source: "Google",
    text:
      "Excellent work and such a nice person. My first time with her, but definitely not the last. Thank you so much for putting so much love into your work 😊",
  },
];
