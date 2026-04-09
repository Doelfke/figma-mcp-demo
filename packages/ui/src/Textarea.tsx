import * as React from "react";
import { cn } from "./utils";
import styles from "./Textarea.module.css";

export interface TextareaProps extends React.ComponentProps<"textarea"> {
  /** Marks the field as invalid (sets aria-invalid). */
  error?: boolean;
}

export function Textarea({ className, error, ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      aria-invalid={error || undefined}
      className={cn(styles.root, className)}
      {...props}
    />
  );
}
