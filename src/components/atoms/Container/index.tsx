import { IContainerProps } from "./types";

function Container({ children, className }: IContainerProps) {
  return (
    <div className={`w-full max-w-screen-xl mx-auto ${className ? className : ""}`}>
      {children}
    </div>
  );
}

export default Container;

