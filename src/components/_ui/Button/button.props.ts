import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "animate";
  counter?: number;
}
