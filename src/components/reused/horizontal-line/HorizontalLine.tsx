import { Color } from "@/types/color";
import styles from "./horizontalLine.module.scss";

export function HorizontalLine({
  color,
  size,
  rounded,
  className,
}: {
  color: Color;
  size?: number;
  rounded?: boolean;
  className?: string;
}) {
  if (!size) size = 1;
  if (!rounded) rounded = false;
  return (
    <div
      className={styles.horizontalLine + " " + className}
      style={{
        background: color,
        height: size + "px",
        borderRadius: rounded ? size + "px" : "",
      }}
    />
  );
}
