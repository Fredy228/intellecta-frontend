import { RoleEnum } from "@/enums/user/role-enum";

type TItemMenu = {
  id: number;
  title: string;
  url: string;
  href: string;
};

const listMenuStudy: TItemMenu[] = [
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
];

const listMenuAdmin: TItemMenu[] = [
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
    id: 8,
    title: "Списки",
    url: "tests.png",
    href: "/dashboard/lists",
  },
];

const listMenuMaker: TItemMenu[] = [
  {
    id: 1,
    title: "Головна",
    url: "educate.png",
    href: "/dashboard",
  },
  {
    id: 2,
    title: "Статистика",
    url: "schedule.png",
    href: "/dashboard/statistics",
  },
  {
    id: 3,
    title: "Списки",
    url: "homework.png",
    href: "/dashboard/list",
  },
];

export const listMenuDefault: TItemMenu[] = [
  {
    id: 1,
    title: "Головна",
    url: "educate.png",
    href: "/dashboard",
  },
  {
    id: 999,
    title: "Курси",
    url: "tally.png",
    href: "/dashboard/courses",
  },
];

export const listsMenu = {
  [RoleEnum.STUDENT]: listMenuStudy,
  [RoleEnum.TEACHER]: listMenuStudy,
  [RoleEnum.OWNER_UNIVERSITY]: listMenuAdmin,
  [RoleEnum.MODER_UNIVERSITY]: listMenuAdmin,
  [RoleEnum.MAKER]: listMenuMaker,
};
