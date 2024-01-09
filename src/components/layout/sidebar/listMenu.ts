export type TItemMenu = {
  id: number;
  title: string;
  url: string;
  href: string;
};

export const listMenu: TItemMenu[] = [
  {
    id: 1,
    title: "Головна",
    url: "educate.png",
    href: "/dashboard",
  },
  {
    id: 2,
    title: "Розклад",
    url: "schedule.png",
    href: "/dashboard/schedule",
  },
  {
    id: 3,
    title: "Домашнє завдання",
    url: "homework.png",
    href: "/dashboard/homework",
  },
  {
    id: 4,
    title: "Чати",
    url: "chats.png",
    href: "/dashboard/chats",
  },
  {
    id: 5,
    title: "Тести",
    url: "tests.png",
    href: "/dashboard/tests",
  },
  {
    id: 6,
    title: "Оцінки",
    url: "marks.png",
    href: "/dashboard/marks",
  },
  {
    id: 7,
    title: "Саморозвиток",
    url: "tally.png",
    href: "/dashboard/courses",
  },
];

export const listMenuAdmin: TItemMenu[] = [
  {
    id: 1,
    title: "Головна",
    url: "educate.png",
    href: "/dashboard",
  },
  {
    id: 2,
    title: "Розклад",
    url: "schedule.png",
    href: "/dashboard/schedule",
  },
  {
    id: 3,
    title: "Новини",
    url: "homework.png",
    href: "/dashboard/homework",
  },
  {
    id: 4,
    title: "Чати",
    url: "chats.png",
    href: "/dashboard/chats",
  },
  {
    id: 6,
    title: "Статистика",
    url: "marks.png",
    href: "/dashboard/marks",
  },
  {
    id: 7,
    title: "Саморозвиток",
    url: "tally.png",
    href: "/dashboard/courses",
  },
  {
    id: 8,
    title: "Списки",
    url: "tests.png",
    href: "/dashboard/lists",
  },
];
