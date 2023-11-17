import { WidgetsEnum } from "@/enums/widgets/widgets-enum";
import WidgetChats from "@/components/ui/home/widgets/for-all/chats/WidgetChats";
import WidgetGrade from "@/components/ui/home/widgets/for-student/grade/WidgetGrade";
import { TWidgetList } from "@/types/widget";

export const widgetList: TWidgetList = {
  [WidgetsEnum.CHATS]: WidgetChats,
  [WidgetsEnum.GRADE]: WidgetGrade,
  [WidgetsEnum.TEST]: WidgetGrade,
};

type TWidget = {
  id: number;
  title: string;
  text: string;
  notice: number;
  urls: Array<{
    id: number;
    url: string;
  }>;
};

export const widgetList1: TWidget[] = [
  {
    id: 1,
    title: "ДЗ на завтра",
    text: "Дивися домашки до всіх предметів на завтра",
    notice: 3,
    urls: [
      {
        id: 1,
        url: "img/subjects/law.png",
      },
      {
        id: 2,
        url: "img/subjects/math.png",
      },
      {
        id: 3,
        url: "img/subjects/history.png",
      },
    ],
  },
  {
    id: 2,
    title: "Информатика",
    text: "Чат по предмету “Інформатика",
    notice: 3,
    urls: [
      {
        id: 1,
        url: "img/avatars/avatar-1.png",
      },
      {
        id: 2,
        url: "img/avatars/avatar-2.png",
      },
      {
        id: 3,
        url: "img/avatars/avatar-3.png",
      },
      {
        id: 4,
        url: "img/avatars/avatar-4.png",
      },
      {
        id: 5,
        url: "img/avatars/avatar-5.png",
      },
    ],
  },
  {
    id: 3,
    title: "Наш чат",
    text: "Чат учнів, де можна обговорити, як провести вихідні весело!",
    notice: 22,
    urls: [
      {
        id: 1,
        url: "img/avatars/avatar-1.png",
      },
      {
        id: 2,
        url: "img/avatars/avatar-2.png",
      },
      {
        id: 3,
        url: "img/avatars/avatar-3.png",
      },
      {
        id: 4,
        url: "img/avatars/avatar-4.png",
      },
      {
        id: 5,
        url: "img/avatars/avatar-5.png",
      },
    ],
  },
];
