import React from "react";

export interface IDisclosureProps {
  title: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}
