import type React from "react";
import {
  IconMonicInet,
  IconProfileAboutMe,
  IconProfileCertificates,
  IconProfileDocuments,
  IconProfileEducation,
  IconProfileExperience,
} from "@/components/reused/Icon/Icon";

export type TBlockInfo = {
  id: number;
  named: string;
  icon: React.JSX.Element;
};

export const blockInfo: TBlockInfo[] = [
  {
    id: 1,
    named: "Досвід",
    icon: <IconProfileExperience />,
  },
  {
    id: 2,
    named: "Освіта",
    icon: <IconProfileEducation />,
  },
  {
    id: 3,
    named: "Сертифікати",
    icon: <IconProfileCertificates />,
  },
  {
    id: 4,
    named: "Про себе",
    icon: <IconProfileAboutMe />,
  },
  {
    id: 5,
    named: "Портфоліо/файли",
    icon: <IconProfileDocuments />,
  },
  {
    id: 6,
    named: "Додати курс",
    icon: <IconMonicInet />,
  },
];
