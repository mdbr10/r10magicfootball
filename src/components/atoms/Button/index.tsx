"use client";
import { IButtonProps } from "./types";

const variants = {
  primary:
    "bg-gradient-to-r from-primary-green via-secondary-green via-70% to-yellow-green rounded-2xl mx-auto",
  secondary: "bg-primary-green rounded-full",
  tertiary: "bg-primary-green rounded-2xl",
  quarternary: "bg-white rounded-2xl text-purple-950",
};

function Button({
  variant,
  onClick,
  width,
  children,
  customClassName,
  disabled,
  isLoading,
}: IButtonProps) {
  const classVariant = variants[variant];

  return (
    <button
      className={`p-4 ${width ? width : "w-36"} 
        ${classVariant} 
        ${customClassName}
        ${disabled || isLoading ? 'opacity-70 cursor-not-allowed' : ''}
        relative`}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
        </div>
      )}
      <div className={isLoading ? 'opacity-0' : ''}>{children}</div>
    </button>
  );
}

export default Button;
