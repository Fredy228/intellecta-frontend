import { Color } from "@/types/color";
import styles from "./verticalLine.module.scss";

export function VerticalLine({
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
      className={styles.verticalLine + " " + className}
      style={{
        background: color,
        width: size + "px",
        minWidth: size + "px",
        borderRadius: rounded ? size + "px" : "",
      }}
    />
  );
}
