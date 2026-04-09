import * as React from "react";
import { cn } from "./utils";
import styles from "./Input.module.css";

export interface InputProps extends React.ComponentProps<"input"> {
  /** Marks the field as invalid (sets aria-invalid). */
  error?: boolean;
}

export function Input({ className, type, error, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      aria-invalid={error || undefined}
      className={cn(styles.root, className)}
      {...props}
    />
  );
}
