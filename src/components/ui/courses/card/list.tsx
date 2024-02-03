import React from "react";
import { EnumCourses } from "@/enums/courses/courseType-enum";
import {
  IconCourseActually,
  IconCourseCareer,
  IconCourseDesign,
  IconCourseEffective,
  IconCourseInterested,
  IconCourseLanguage,
  IconCourseManagement,
  IconCourseMarketing,
  IconCoursePrograming,
  IconCourseReach,
  IconCourseScience,
  IconCourseTesting, IconHtml, IconJavaScript, IconReact,
} from "@/components/reused/Icon/Icon";

export type TCoursesProps = {
  id: number | string;
  images: React.JSX.Element;
  bg?: string;
  types?: string;
  urlCheck?: string;
  description?: string;
};
export interface ITestList extends TCoursesProps {
  title: string;
}
export interface IFrontCourses {
  id: number | string;
  images?: string;
  icon?: React.JSX.Element;
  bg?:string;
  company: string;
  urlCheck: string;
  description: string;
  types: string;
  titlePage: string;
  descriptionPage?: string;
  main: {
    mainTitle: string;
    mainDescription: string;
  };
  target: {
    targetTitle: string;
    targetList: string[];
  };
  aside: {
    asideList: string[];

    price: string;
  };
  mentors: TMentore[];
  coursesProgram: {
    coursesTitle: string;
    coursesImg: string;
  };
}
export type TMentore = {
  idMentor: number;
  imagesMentors: string;
  fullname: string;
  about: string;
};
export const listItem: TCoursesProps[] = [
  {
    id: 1,
    images: <IconCoursePrograming />,
    bg: "linear-gradient(138deg, #0029FF -8%, #FA00FF 106.69%)",
    types: "Програмування",
    urlCheck: "programming",
    description: "Курси Back-end, Front-end, Machine Learning та DevOps",
  },
  {
    id: 2,
    images: <IconCourseTesting />,
    bg: "linear-gradient(138deg, #4E6AFE -8%, #00F0FF 106.69%)",
    types: "Тестування",
    urlCheck: "testing",
    description:
      "Курси тестувальників: QA Manual та QA Automation на Java, Python та JavaScript, а також підготовка до сертифікації ISTQB",
  },
  {
    id: 3,
    images: <IconCourseMarketing />,
    bg: "linear-gradient(138deg, #EB6CF6 -8%, #1DE4FF 103.83%, #54D8EA 106.69%)",
    types: "Маркетинг",
    urlCheck: "marketing",
    description: "Курси інтернет маркетингу та SMM",
  },
];

export const TestList: ITestList[] = [
  {
    id: 1,
    images: <IconCourseActually />,
    title: "Актуальність знань",
    description:
      "Навчальні курси, створені експертами, забезпечують актуальність інформації, що критично в галузях, які швидко розвиваються.",
  },
  {
    id: 2,
    images: <IconCourseEffective />,
    title: "Ефективність навчання",
    description:
      "Курсы структуровані логічно, щоб допомагати учням ефективно засвоювати матеріал і швидко досягати цілей.",
  },
  {
    id: 3,
    images: <IconCourseReach />,
    title: "Доступність для всіх",
    description:
      "Онлайн-курси роблять освіту доступною всюди, де є Інтернет, забезпечуючи глобальну доступність навчання.",
  },
  {
    id: 4,
    images: <IconCourseCareer />,
    title: `Підтримка кар'єрного зростання`,
    description: `Навчання новим навичкам підвищує конкурентоспроможність на ринку праці і відкриває можливості для кар'єрного зростання.`,
  },
];
export const OtherCurses: TCoursesProps[] = [
  {
    id: 1,
    images: <IconCourseDesign />,
    bg: "linear-gradient(138deg, #FF56D0 -8%, #FF7A00 106.69%)",
    types: "Дизайн",
    description:
      "Курси веб та графічного дизайну для починаючих та вже прокачаних юзерів.",
  },
  {
    id: 2,
    images: <IconCourseManagement />,
    bg: "linear-gradient(138deg, #F9AF58 -8%, #FF542F 106.69%)",
    types: "Менеджмент",
    description: "Курси менеджменту, апргейт навичок управління командою.",
  },
  {
    id: 3,
    images: <IconCourseLanguage />,
    bg: "linear-gradient(138deg, #FFA24C -8%, #FB238B 106.69%)",
    types: "Іноземні мови",
    description:
      "Курси та приватні уроки з української, англійської,  німецької, французьскої, іспанської, італьянської та інших мов.",
  },
  {
    id: 4,
    images: <IconCourseScience />,
    bg: "linear-gradient(138deg, #FFCE20 -8%, #7FFF00 106.69%)",
    types: "Науки",
    description:
      "Курс та приватні уроки із математики, хімії, фізики та інших наук.",
  },
  {
    id: 5,
    images: <IconCourseInterested />,
    bg: "linear-gradient(138deg, #2BFE09 -8%, #508F10 106.69%)",
    types: "Цікаве",
    description:
      "Курси та приватні уроки із різних напрямків, наприклад: роботетхника, розробка ігр...",
  },
];

export const FrontEndCurses: IFrontCourses[] = [
  {
    id: "1",
    icon: <IconHtml/>,
    bg:'linear-gradient(90deg, rgba(255,0,0,1) 19%, rgba(255,229,0,1) 100%)',
    types: "Front-end Basic",
    company: "Hillel",
    urlCheck: "programming",
    description:
      "В рамках курсу Front-end Basic студенти без досвіду в розробці вивчають HTML і CSS та вчаться верстати сайти. Після успішного закінчення курсу студенти отримують достатньо знань і навичок для верстки сайту будь-якої складності.",
    titlePage: "Онлайн-курс",
    descriptionPage: "Front-end Basic",
    main: {
      mainTitle: "Навчися верстати сайти!",
      mainDescription:
        "Розробка видимої частини будь-якого сайту називається Front-end, і це область програмування, яка розвивається швидше за інші. Жоден сучасний веб-сайт і веб-додаток не обійдуться без Front-end розробника.\n" +
        "В рамках курсу Front-end Basic студенти без досвіду в розробці вивчають HTML і CSS та вчаться верстати сайти. Після успішного закінчення курсу студенти отримують достатньо знань і навичок для верстки сайту будь-якої складності.",
    },
    target: {
      targetTitle: "Цілі курсу:",
      targetList: [
        "Втілювати в верстку дизайн будь-якої складності",
        "Робити сайти, які однаково добре відображаються на будь-якому пристрої",
        "Помічати важливі дрібниці і писати код, який легко розширювати і підтримувати",
        "Навчитися розуміти структуру веб-сторінок",
      ],
    },
    aside: {
      asideList: [
        "Курс у форматі дистанційного навчання",
        "Записи усіх уроків у особистому кабінеті",
        "Домашні завдання та зворотній \n" + "звʼязок від менторів",
        "Опрацювання помилок",
      ],

      price: "12000 грн",
    },
    mentors: [
      {
        idMentor: 1,
        imagesMentors: `${process.env.NEXT_URL}/img/courses/Тетяна-Либідь.png`,
        fullname: "Тетяна Либідь",
        about: "Lead Front-end Developer в Macrosoft",
      },
      {
        idMentor: 2,
        imagesMentors: `${process.env.NEXT_URL}/img/courses/Іван-Коломієць.png`,
        fullname: "Іван Коломієць",
        about: "Lead Front-end Developer в Macrosoft",
      },
      {
        idMentor: 3,
        imagesMentors: `${process.env.NEXT_URL}/img/courses/Максим-Незабудко.png`,
        fullname: "Максим Незабудко",
        about: "Lead Front-end Developer в Macrosoft",
      },
      {
        idMentor: 4,
        imagesMentors: `${process.env.NEXT_URL}/img/courses/Тетяна-Либідь-1.png`,
        fullname: "Тетяна Либідь",
        about: "Lead Front-end Developer в Macrosoft",
      },
    ],
    coursesProgram: {
      coursesTitle: "Програма курсу:",
      coursesImg: `${process.env.NEXT_URL}/img/courses/theme-for-courses.png`,
    },
  },
  {
    id: "2",
    icon:<IconJavaScript/>,
    bg:'linear-gradient(90deg, rgba(255,0,0,1) 19%, rgba(255,229,0,1) 100%)',
    types: "Front-end Pro",
    company: "Hillel",
    urlCheck: "programming",
    description:
      "На курсі ви познайомитеся з принципами ООП, DOM, REST API і отримаєте практичні навички створення додатків з використанням «реакт-стека», що дозволить претендувати на посаду Junior Front-end Developer.",
    titlePage: "Онлайн-курс",
    descriptionPage: "Front-end Pro",
    main: {
      mainTitle: "Навчися верстати сайти!",
      mainDescription:
        "Розробка видимої частини будь-якого сайту називається Front-end, і це область програмування, яка розвивається швидше за інші. Жоден сучасний веб-сайт і веб-додаток не обійдуться без Front-end розробника.\n" +
        "В рамках курсу Front-end Basic студенти без досвіду в розробці вивчають HTML і CSS та вчаться верстати сайти. Після успішного закінчення курсу студенти отримують достатньо знань і навичок для верстки сайту будь-якої складності.",
    },
    target: {
      targetTitle: "Цілі курсу:",
      targetList: [
        "Втілювати в верстку дизайн будь-якої складності",
        "Робити сайти, які однаково добре відображаються на будь-якому пристрої",
        "Помічати важливі дрібниці і писати код, який легко розширювати і підтримувати",
        "Навчитися розуміти структуру веб-сторінок",
      ],
    },
    aside: {
      asideList: [
        "Курс у форматі дистанційного навчання",
        "Записи усіх уроків у особистому кабінеті",
        "Домашні завдання та зворотній \n" + "звʼязок від менторів",
        "Опрацювання помилок",
      ],

      price: "10000 грн",
    },
    mentors: [
      {
        idMentor: 1,
        imagesMentors: `${process.env.NEXT_URL}/img/courses/Тетяна-Либідь.png`,
        fullname: "Тетяна Либідь",
        about: "Lead Front-end Developer в Macrosoft",
      },
      {
        idMentor: 2,
        imagesMentors: `${process.env.NEXT_URL}/img/courses/Іван-Коломієць.png`,
        fullname: "Іван Коломієць",
        about: "Lead Front-end Developer в Macrosoft",
      },
      {
        idMentor: 3,
        imagesMentors: `${process.env.NEXT_URL}/img/courses/Максим-Незабудко.png`,
        fullname: "Максим Незабудко",
        about: "Lead Front-end Developer в Macrosoft",
      },
      {
        idMentor: 4,
        imagesMentors: `${process.env.NEXT_URL}/img/courses/Тетяна-Либідь-1.png`,
        fullname: "Тетяна Либідь",
        about: "Lead Front-end Developer в Macrosoft",
      },
    ],
    coursesProgram: {
      coursesTitle: "Програма курсу:",
      coursesImg: `${process.env.NEXT_URL}/img/courses/theme-for-courses.png.png`,
    },
  },
  {
    id: "3",
    icon: <IconReact/>,
    bg:'linear-gradient(90deg, rgba(255,0,0,1) 19%, rgba(255,229,0,1) 100%)',
    types: "React",
    company: "Hillel",
    urlCheck: "programming",
    description: "Курси присвячений бібліотеці React",
    titlePage: "Онлайн-курс",
    descriptionPage: "React",
    main: {
      mainTitle: "Навчися верстати сайти!",
      mainDescription:
        "Розробка видимої частини будь-якого сайту називається Front-end, і це область програмування, яка розвивається швидше за інші. Жоден сучасний веб-сайт і веб-додаток не обійдуться без Front-end розробника.\n" +
        "В рамках курсу Front-end Basic студенти без досвіду в розробці вивчають HTML і CSS та вчаться верстати сайти. Після успішного закінчення курсу студенти отримують достатньо знань і навичок для верстки сайту будь-якої складності.",
    },
    target: {
      targetTitle: "Цілі курсу:",
      targetList: [
        "Втілювати в верстку дизайн будь-якої складності",
        "Робити сайти, які однаково добре відображаються на будь-якому пристрої",
        "Помічати важливі дрібниці і писати код, який легко розширювати і підтримувати",
        "Навчитися розуміти структуру веб-сторінок",
      ],
    },
    aside: {
      asideList: [
        "Курс у форматі дистанційного навчання",
        "Записи усіх уроків у особистому кабінеті",
        "Домашні завдання та зворотній \n" + "звʼязок від менторів",
        "Опрацювання помилок",
      ],

      price: "15000 грн",
    },
    mentors: [
      {
        idMentor: 1,
        imagesMentors: `${process.env.NEXT_URL}/img/courses/Тетяна-Либідь.png`,
        fullname: "Тетяна Либідь",
        about: "Lead Front-end Developer в Macrosoft",
      },
      {
        idMentor: 2,
        imagesMentors: `${process.env.NEXT_URL}/img/courses/Іван-Коломієць.png`,
        fullname: "Іван Коломієць",
        about: "Lead Front-end Developer в Macrosoft",
      },
      {
        idMentor: 3,
        imagesMentors: `${process.env.NEXT_URL}/img/courses/Максим-Незабудко.png`,
        fullname: "Максим Незабудко",
        about: "Lead Front-end Developer в Macrosoft",
      },
      {
        idMentor: 4,
        imagesMentors: `${process.env.NEXT_URL}/img/courses/Тетяна-Либідь-1.png`,
        fullname: "Тетяна Либідь",
        about: "Lead Front-end Developer в Macrosoft",
      },
    ],
    coursesProgram: {
      coursesTitle: "Програма курсу:",
      coursesImg: `${process.env.NEXT_URL}/img/courses/theme-for-courses.png`,
    },
  },
];
export const TestingCurses: IFrontCourses[] = [
  {
    id: "1",
    images: `${process.env.NEXT_URL}/img/courses/design.png`,
    types: "TEST",
    company: "Hillel",
    urlCheck: "testing",
    description:
      "В рамках курсу Front-end Basic студенти без досвіду в розробці вивчають HTML і CSS та вчаться верстати сайти. Після успішного закінчення курсу студенти отримують достатньо знань і навичок для верстки сайту будь-якої складності.",
    titlePage: "Онлайн-курс",
    descriptionPage: "TEST",
    main: {
      mainTitle: "Навчися верстати сайти!",
      mainDescription:
        "Розробка видимої частини будь-якого сайту називається Front-end, і це область програмування, яка розвивається швидше за інші. Жоден сучасний веб-сайт і веб-додаток не обійдуться без Front-end розробника.\n" +
        "В рамках курсу Front-end Basic студенти без досвіду в розробці вивчають HTML і CSS та вчаться верстати сайти. Після успішного закінчення курсу студенти отримують достатньо знань і навичок для верстки сайту будь-якої складності.",
    },
    target: {
      targetTitle: "Цілі курсу:",
      targetList: [
        "Втілювати в верстку дизайн будь-якої складності",
        "Робити сайти, які однаково добре відображаються на будь-якому пристрої",
        "Помічати важливі дрібниці і писати код, який легко розширювати і підтримувати",
        "Навчитися розуміти структуру веб-сторінок",
      ],
    },
    aside: {
      asideList: [
        "Курс у форматі дистанційного навчання",
        "Записи усіх уроків у особистому кабінеті",
        "Домашні завдання та зворотній \n" + "звʼязок від менторів",
        "Опрацювання помилок",
      ],

      price: "10000 грн",
    },
    mentors: [
      {
        idMentor: 1,
        imagesMentors: `${process.env.NEXT_URL}/img/courses/Тетяна-Либідь.png`,
        fullname: "Тетяна Либідь",
        about: "Lead Front-end Developer в Macrosoft",
      },
      {
        idMentor: 2,
        imagesMentors: `${process.env.NEXT_URL}/img/courses/Іван-Коломієць.png`,
        fullname: "Іван Коломієць",
        about: "Lead Front-end Developer в Macrosoft",
      },
      {
        idMentor: 3,
        imagesMentors: `${process.env.NEXT_URL}/img/courses/Максим-Незабудко.png`,
        fullname: "Максим Незабудко",
        about: "Lead Front-end Developer в Macrosoft",
      },
      {
        idMentor: 4,
        imagesMentors: `${process.env.NEXT_URL}/img/courses/Тетяна-Либідь-1.png`,
        fullname: "Тетяна Либідь",
        about: "Lead Front-end Developer в Macrosoft",
      },
    ],
    coursesProgram: {
      coursesTitle: "Програма курсу:",
      coursesImg: `${process.env.NEXT_URL}/img/courses/theme-for-courses.png`,
    },
  },
];
export const MarketingCurses: IFrontCourses[] = [
  {
    id: "1",
    images: `${process.env.NEXT_URL}/img/courses/design.png`,
    types: "Marketing",
    company: "Hillel",
    urlCheck: "marketing",
    description:
      "В рамках курсу Front-end Basic студенти без досвіду в розробці вивчають HTML і CSS та вчаться верстати сайти. Після успішного закінчення курсу студенти отримують достатньо знань і навичок для верстки сайту будь-якої складності.",
    titlePage: "Онлайн-курс",
    descriptionPage: "Marketing",
    main: {
      mainTitle: "Навчися верстати сайти!",
      mainDescription:
        "Розробка видимої частини будь-якого сайту називається Front-end, і це область програмування, яка розвивається швидше за інші. Жоден сучасний веб-сайт і веб-додаток не обійдуться без Front-end розробника.\n" +
        "В рамках курсу Front-end Basic студенти без досвіду в розробці вивчають HTML і CSS та вчаться верстати сайти. Після успішного закінчення курсу студенти отримують достатньо знань і навичок для верстки сайту будь-якої складності.",
    },
    target: {
      targetTitle: "Цілі курсу:",
      targetList: [
        "Втілювати в верстку дизайн будь-якої складності",
        "Робити сайти, які однаково добре відображаються на будь-якому пристрої",
        "Помічати важливі дрібниці і писати код, який легко розширювати і підтримувати",
        "Навчитися розуміти структуру веб-сторінок",
      ],
    },
    aside: {
      asideList: [
        "Курс у форматі дистанційного навчання",
        "Записи усіх уроків у особистому кабінеті",
        "Домашні завдання та зворотній \n" + "звʼязок від менторів",
        "Опрацювання помилок",
      ],

      price: "10000 грн",
    },
    mentors: [
      {
        idMentor: 1,
        imagesMentors: `${process.env.NEXT_URL}/img/courses/Тетяна-Либідь.png`,
        fullname: "Тетяна Либідь",
        about: "Lead Front-end Developer в Macrosoft",
      },
      {
        idMentor: 2,
        imagesMentors: `${process.env.NEXT_URL}/img/courses/Іван-Коломієць.png`,
        fullname: "Іван Коломієць",
        about: "Lead Front-end Developer в Macrosoft",
      },
      {
        idMentor: 3,
        imagesMentors: `${process.env.NEXT_URL}/img/courses/Максим-Незабудко.png`,
        fullname: "Максим Незабудко",
        about: "Lead Front-end Developer в Macrosoft",
      },
      {
        idMentor: 4,
        imagesMentors: `${process.env.NEXT_URL}/img/courses/Тетяна-Либідь-1.png`,
        fullname: "Тетяна Либідь",
        about: "Lead Front-end Developer в Macrosoft",
      },
    ],
    coursesProgram: {
      coursesTitle: "Програма курсу:",
      coursesImg: `${process.env.NEXT_URL}/img/courses/theme-for-courses.png`,
    },
  },
  {
    id: "2",
    images: `${process.env.NEXT_URL}/img/courses/management.png`,
    types: "Front-end Pro",
    urlCheck: "marketing",
    company: "Hillel",
    description:
      "На курсі ви познайомитеся з принципами ООП, DOM, REST API і отримаєте практичні навички створення додатків з використанням «реакт-стека», що дозволить претендувати на посаду Junior Front-end Developer.",
    titlePage: "Онлайн-курс",
    descriptionPage: "Front-end Basic",
    main: {
      mainTitle: "Навчися верстати сайти!",
      mainDescription:
        "Розробка видимої частини будь-якого сайту називається Front-end, і це область програмування, яка розвивається швидше за інші. Жоден сучасний веб-сайт і веб-додаток не обійдуться без Front-end розробника.\n" +
        "В рамках курсу Front-end Basic студенти без досвіду в розробці вивчають HTML і CSS та вчаться верстати сайти. Після успішного закінчення курсу студенти отримують достатньо знань і навичок для верстки сайту будь-якої складності.",
    },
    target: {
      targetTitle: "Цілі курсу:",
      targetList: [
        "Втілювати в верстку дизайн будь-якої складності",
        "Робити сайти, які однаково добре відображаються на будь-якому пристрої",
        "Помічати важливі дрібниці і писати код, який легко розширювати і підтримувати",
        "Навчитися розуміти структуру веб-сторінок",
      ],
    },
    aside: {
      asideList: [
        "Курс у форматі дистанційного навчання",
        "Записи усіх уроків у особистому кабінеті",
        "Домашні завдання та зворотній \n" + "звʼязок від менторів",
        "Опрацювання помилок",
      ],

      price: "10000 грн",
    },
    mentors: [
      {
        idMentor: 1,
        imagesMentors: `${process.env.NEXT_URL}/img/courses/Тетяна-Либідь.png`,
        fullname: "Тетяна Либідь",
        about: "Lead Front-end Developer в Macrosoft",
      },
      {
        idMentor: 2,
        imagesMentors: `${process.env.NEXT_URL}/img/courses/Іван-Коломієць.png`,
        fullname: "Іван Коломієць",
        about: "Lead Front-end Developer в Macrosoft",
      },
      {
        idMentor: 3,
        imagesMentors: `${process.env.NEXT_URL}/img/courses/Максим-Незабудко.png`,
        fullname: "Максим Незабудко",
        about: "Lead Front-end Developer в Macrosoft",
      },
      {
        idMentor: 4,
        imagesMentors: `${process.env.NEXT_URL}/img/courses/Тетяна-Либідь-1.png`,
        fullname: "Тетяна Либідь",
        about: "Lead Front-end Developer в Macrosoft",
      },
    ],
    coursesProgram: {
      coursesTitle: "Програма курсу:",
      coursesImg: `${process.env.NEXT_URL}/img/courses/theme-for-courses.png`,
    },
  },
];

export const AllCoursesType: { [name: string]: IFrontCourses[] } = {
  [EnumCourses.PROGRAMMING]: FrontEndCurses,
  [EnumCourses.MARKETING]: MarketingCurses,
  [EnumCourses.TESTING]: TestingCurses,
};
