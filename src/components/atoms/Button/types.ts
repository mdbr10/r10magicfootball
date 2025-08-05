export interface IButtonProps {
  variant: "primary" | "secondary" | "tertiary" | "quarternary";
  onClick?: () => void;
  width?: string;
  children: React.ReactNode;
  customClassName?: string;
  disabled?: boolean;
  isLoading?: boolean;
}
