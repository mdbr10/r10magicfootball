import { ITextProps } from "./types";

function Text({
  children,
  size,
  color,
  weight,
  lineHeight,
  customClassName,
  style,
}: ITextProps) {
  return (
    <p
      className={`${customClassName ? customClassName : ""} text-${color ? color : "black"} font-${weight ? weight : "medium"
        } ${size ? size : "text-lg"} ${lineHeight && `leading-${lineHeight}`
        } font-body`}
      style={style}
    >
      {children}
    </p>
  );
}

export default Text;
