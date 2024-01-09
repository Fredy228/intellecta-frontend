import { FC } from "react";

import { ICourseByIdAndNamed } from "@/components/ui/courses/card/list";
export const CoursesByIdItem: FC<ICourseByIdAndNamed> = ({
  id,
  titlePage,
  descriptionPage,
}) => {
  return (
    <main>
      <div>{id}</div>
      <div>{titlePage}</div>
      <div>{descriptionPage}</div>
    </main>
  );
};
