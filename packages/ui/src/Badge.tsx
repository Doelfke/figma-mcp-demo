import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "./utils";
import styles from "./Badge.module.css";

export type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

export interface BadgeProps extends React.ComponentProps<"span"> {
  variant?: BadgeVariant;
  /** Render as a child element while keeping badge styles. */
  asChild?: boolean;
}

const variantClass: Record<BadgeVariant, string> = {
  default: styles.variantDefault,
  secondary: styles.variantSecondary,
  destructive: styles.variantDestructive,
  outline: styles.variantOutline,
};

export function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : "span";
  return (
    <Comp
      data-slot="badge"
      className={cn(styles.root, variantClass[variant], className)}
      {...props}
    />
  );
}
