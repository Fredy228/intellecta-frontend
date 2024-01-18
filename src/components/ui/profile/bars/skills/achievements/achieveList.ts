export type TAchievivList = {
  id: number;
  images: string;
  named: string;
};

export const Achieve: TAchievivList[] = [
  {
    id: 1,
    images: `${process.env.NEXT_URL}/img/profile/mentore-img.png`,
    named: "Ментор",
  },
  {
    id: 2,
    images: `${process.env.NEXT_URL}/img/profile/inventation.png`,
    named: "Відмінник",
  },
  {
    id: 3,
    images: `${process.env.NEXT_URL}/img/profile/QA.png`,
    named: "Тестувальник",
  },
  {
    id: 4,
    images: `${process.env.NEXT_URL}/img/profile/pro.png`,
    named: "PRO-юзер",
  },
  {
    id: 5,
    images: `${process.env.NEXT_URL}/img/profile/verify-img.png`,
    named: "Верифікований",
  },
  {
    id: 6,
    images: `${process.env.NEXT_URL}/img/profile/pro.png`,
    named: "Відвідувач",
  },
];
