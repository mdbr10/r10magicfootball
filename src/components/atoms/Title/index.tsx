import { ITitleProps } from "./types";

function Title({ color, children, size, customClassName }: ITitleProps) {
  return (
    <h1
      className={`font-bold ${size ? size : "text-lg"} ${
        color ? color : "text-black"
      } font-title ${customClassName}`}
    >
      {children}
    </h1>
  );
}

export default Title;
