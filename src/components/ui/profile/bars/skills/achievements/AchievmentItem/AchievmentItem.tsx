import Image from "next/image";
import { Fragment } from "react";
import {
  Achieve,
  TAchievivList,
} from "@/components/ui/profile/bars/skills/achievements/achieveList";

export const AchievmentItem = () => {
  return (
    <>
      <ul>
        {Achieve.map((achievemet: TAchievivList) => (
          <Fragment key={achievemet.id}>
            <Image
              src={achievemet.images}
              alt={"card images"}
              width={75}
              height={75}
            />
            <li>{achievemet.named}</li>
          </Fragment>
        ))}
      </ul>
    </>
  );
};
