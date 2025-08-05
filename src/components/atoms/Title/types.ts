import React from "react";

export interface ITitleProps {
  size: string | React.ReactNode | React.ReactNode[];
  color?: "primary-green" | "black" | "white" | string;
  children: string;
  customClassName?: string;
}
