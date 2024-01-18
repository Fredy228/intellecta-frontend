import { FC } from "react";
import { TLang } from "@/components/ui/profile/bars/skills/languages/LanguagesItem/lang-list";
export const LanguagesItem: FC<TLang> = ({ lang }) => {
  return (
    <>
      <li> {lang} </li>
    </>
  );
};
