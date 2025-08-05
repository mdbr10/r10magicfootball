import { IModalWrapperProps } from "./types";

function ModalWrapper({ children, isOpen }: IModalWrapperProps) {
  return (
    <div
      className={`bg-black/75 ${isOpen ? "flex" : "hidden"
        } w-full h-screen overflow-hidden z-50 fixed top-0 left-0 justify-center content-center items-center gap-12 flex-col`}
    >
      {children}
    </div>
  );
}

export default ModalWrapper;
