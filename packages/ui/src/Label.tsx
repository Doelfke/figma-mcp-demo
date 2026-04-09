import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "./utils";
import styles from "./Label.module.css";

export interface LabelProps extends React.ComponentProps<
  typeof LabelPrimitive.Root
> {}

export function Label({ className, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(styles.root, className)}
      {...props}
    />
  );
}
