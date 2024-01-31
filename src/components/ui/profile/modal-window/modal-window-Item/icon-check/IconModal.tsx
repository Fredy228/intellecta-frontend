import { default as IconMarketing } from "@/components/reused/Icon/courses/marketing.svg";
import { FC, JSX } from "react";

type TCoursesIcons = {
  [name: string]: JSX.Element;
};
export const coursesIcons: TCoursesIcons = {
  marketing: <IconMarketing />,
  programming: <IconMarketing />,
};
type TypeOptionSelectImg = {
  name: string;
  img: string;
  bg: string;
  width: string;
  height: string;
  borderRadius: string;
};

export const listOptionsImg: TypeOptionSelectImg[] = [
  {
    name: "marketing",
    img: "marketing",
    bg: "linear-gradient(138deg, #EB6CF6 -8%, #1DE4FF 103.83%, #54D8EA 106.69%)",
    width: "109px",
    height: "108px",
    borderRadius: "19px",
  },
];
export const IconsMoadl: FC<TypeOptionSelectImg> = ({ img }) => {
  return <>{coursesIcons[img]}</>;
};
