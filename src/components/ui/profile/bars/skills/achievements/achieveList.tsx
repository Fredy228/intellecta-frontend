import React from "react";
import {
  IconProfileCalendar,
  IconProfileInventation,
  IconProfileMentor,
  IconProfilePro,
  IconProfileQa,
  IconProfileVerify
} from "@/components/reused/Icon/Icon";

export type TAchievivList = {
  id: number;
  icon: React.JSX.Element;
  named: string;
  bg:string;
  borderRad:string;
  border:string;
};

export const Achieve: TAchievivList[] = [
  {
    id: 1,
    icon: <IconProfileMentor/>,
    bg:'linear-gradient(73deg, rgba(185,77,223,1) 0%, rgba(52,222,212,1) 100%)',
    borderRad:'',
    border:'',
    named: "Ментор",
  },
  {
    id: 2,
    icon: <IconProfileInventation/>,
    bg:'linear-gradient(140deg, rgba(233,8,253,1) 0%, rgba(233,8,253,1) 34%, rgba(55,28,225,1) 91%)',
    borderRad:'',
    border:'',
    named: "Відмінник",
  },
  {
    id: 3,
    icon: <IconProfileQa/>,
    bg:'linear-gradient(140deg, rgba(8,238,253,1) 5%, rgba(28,59,225,1) 91%)',
    borderRad:'',
    border:'',
    named: "Тестувальник",
  },
  {
    id: 4,
    icon: <IconProfilePro/>,
    bg:'linear-gradient(140deg, rgba(233,8,253,1) 0%, rgba(233,8,253,1) 34%, rgba(55,28,225,1) 91%)',
    borderRad:'',
    border:'',
    named: "PRO-юзер",
  },
  {
    id: 5,
    icon: <IconProfileVerify/>,
    bg:'linear-gradient(140deg, rgba(8,238,253,1) 5%, rgba(28,59,225,1) 91%)',
    borderRad:'',
    border:'',
    named: "Верифікований",
  },
  {
    id: 6,
    icon: <IconProfileCalendar/>,
    bg:'linear-gradient(73deg, rgba(185,77,223,1) 0%, rgba(52,222,212,1) 100%)',
    borderRad:'',
    border:'',
    named: "Відвідувач",
  },
];
