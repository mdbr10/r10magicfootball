import { StaticImageData } from "next/image";

export interface ICard3Props {
  image: StaticImageData;
  title: string;
  onClick: () => void;
} 