export type TSubject = {
  id: number;
  title: string;
  teacher: string;
  url: string;
  startTime: string;
  endTime: string;
  linkLesson: string;
  homework: string;
  linkChat: string;
};

export const subjectList: TSubject[] = [
  {
    id: 1,
    title: "Генеральна репетиція",
    teacher: "Кармазін Олексій",
    url: "sport.png",
    startTime: "10:30",
    endTime: "11:00",
    linkLesson:
      "/dashboard/conference/e23cf3b4-116c-4e94-85a8-e0fbc602d9b9?name=Генеральна репетиція",
    homework: "Підготуватися до генеральної репетиції",
    linkChat: "",
  },
  {
    id: 2,
    title: "Зустріч з ментором",
    teacher: "Максименко Гліб",
    url: "history.png",
    startTime: "11:30",
    endTime: "12:00",
    linkLesson:
      "/dashboard/conference/00b40671-5c60-4d02-927f-8ec1c682c89a?name=Зустріч з ментором",
    homework: "Провести фінальну репетицію призентації перед ментором",
    linkChat: "",
  },
  {
    id: 3,
    title: "StartupInvestPitchday",
    teacher: "G*Incubator",
    url: "law.png",
    startTime: "19:00",
    endTime: "21:00",
    linkLesson:
      "/dashboard/conference/229a9a1c-66b8-4b3b-a052-00e09b8ad8bb?name=StartupInvestPitchday",
    homework: "Якіско підготуватися та виступити перед інвесторами",
    linkChat: "",
  },
  {
    id: 4,
    title: "Командна зустріч",
    teacher: "Кармазін Олексій",
    url: "math.png",
    startTime: "22:00",
    endTime: "22:30",
    linkLesson:
      "/dashboard/conference/54494f8e-178d-45c7-a5f7-de84f4b418e5?name=Командна зустріч",
    homework: "Розслабитися та зібрати враження від пітчу",
    linkChat: "",
  },
];

export const subjectList1: TSubject[] = [
  {
    id: 9,
    title: "Incubator",
    teacher: "Кармазін Олексій",
    url: "law.png",
    startTime: "19:00",
    endTime: "21:00",
    linkLesson:
      "/dashboard/conference/e23cf3b4-116c-4e94-85a8-e0fbc602d9b9?name=Incubator",
    homework: "Презентувати проект 'Intellecta'",
    linkChat: "/",
  },
  {
    id: 1,
    title: "Алгебра",
    teacher: "Васильєва Алла",
    url: "math.png",
    startTime: "13:30",
    endTime: "14:15",
    linkLesson: "/",
    homework:
      "підготовитися до контрольної роботи;\n \n стр. 123 упр. 21, 22;\n стр. 133 упр. 43, 44.",
    linkChat: "",
  },
  {
    id: 2,
    title: "Істоія",
    teacher: "Петрович Олексій",
    url: "history.png",
    startTime: "13:30",
    endTime: "14:15",
    linkLesson: "/",
    homework:
      "підготовитися до контрольної роботи;\n \n стр. 123 упр. 21, 22;\n стр. 133 упр. 43, 44.",
    linkChat: "",
  },
  {
    id: 3,
    title: "Георграфія",
    teacher: "Білоніжко Семен",
    url: "geography.png",
    startTime: "13:30",
    endTime: "14:15",
    linkLesson: "/",
    homework:
      "підготовитися до контрольної роботи;\n \n стр. 123 упр. 21, 22;\n стр. 133 упр. 43, 44.",
    linkChat: "",
  },
  {
    id: 4,
    title: "Фізкультура",
    teacher: "Пономарев Святослав",
    url: "sport.png",
    startTime: "13:30",
    endTime: "14:15",
    linkLesson: "/",
    homework:
      "підготовитися до контрольної роботи;\n \n стр. 123 упр. 21, 22;\n стр. 133 упр. 43, 44.",
    linkChat: "",
  },
  {
    id: 5,
    title: "Право",
    teacher: "Пугачова Алла",
    url: "law.png",
    startTime: "13:30",
    endTime: "14:15",
    linkLesson: "/",
    homework:
      "підготовитися до контрольної роботи;\n \n стр. 123 упр. 21, 22;\n стр. 133 упр. 43, 44.",
    linkChat: "",
  },
  {
    id: 6,
    title: "Георграфія",
    teacher: "Білоніжко Семен",
    url: "geography.png",
    startTime: "13:30",
    endTime: "14:15",
    linkLesson: "/",
    homework:
      "підготовитися до контрольної роботи;\n \n стр. 123 упр. 21, 22;\n стр. 133 упр. 43, 44.",
    linkChat: "",
  },
  {
    id: 7,
    title: "Геометрія",
    teacher: "Васильєва Алла",
    url: "math.png",
    startTime: "13:30",
    endTime: "14:15",
    linkLesson: "/",
    homework:
      "підготовитися до контрольної роботи;\n \n стр. 123 упр. 21, 22;\n стр. 133 упр. 43, 44.",
    linkChat: "",
  },
  {
    id: 8,
    title: "Істоія",
    teacher: "Петрович Олексій",
    url: "history.png",
    startTime: "13:30",
    endTime: "14:15",
    linkLesson: "/",
    homework:
      "підготовитися до контрольної роботи;\n \n стр. 123 упр. 21, 22;\n стр. 133 упр. 43, 44.",
    linkChat: "",
  },
];
