import { StaticImageData } from "next/image";

export interface ICardProps {
  title?: string;
  text: string;
  subTitle?: string;
  image?: StaticImageData;
  customClassName?: string;
}
