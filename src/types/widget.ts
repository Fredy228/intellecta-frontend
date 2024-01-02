import type React from "react";
import { WidgetsEnum } from "@/enums/widgets/widgets-enum";
import { FC } from "react";

export type TWidget = {
  id: string;
  type: WidgetsEnum;
  value: string;
};

export type TWidgetList = { [name: string]: FC };
