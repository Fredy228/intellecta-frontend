import { FC } from "react";
import dynamic from "next/dynamic";
const ModalWindow = dynamic(
  () => import("@/components/reused/modal-window/ModalWindow"),
  {
    ssr: false,
  },
);

type TAbout = {
  id: number;
  title: string;
  placeholder: string;
};
interface IAbout extends TAbout {
  id: 1;
  title: "about me";
  placeholder: "some text ...";
}

export const ModalWindowAbout: FC<IAbout> = ({ id, title, placeholder }) => {
  return (
    <ModalWindow>
      {id}
      <h1>{title}</h1>
      <textarea placeholder={placeholder}></textarea>
    </ModalWindow>
  );
};
