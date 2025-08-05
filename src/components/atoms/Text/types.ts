export interface ITextProps {
  children: string | React.ReactNode | React.ReactNode[];
  color?:
    | "white"
    | "light-gray"
    | "mid-gray"
    | "dark-gray"
    | "primary-green"
    | string;
  size?: string;
  weight?: string;
  align?: string;
  lineHeight?: string;
  letterSpacing?: string;
  customClassName?: string;
  style?: React.CSSProperties;
}
