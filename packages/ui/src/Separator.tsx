import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "./utils";
import styles from "./Separator.module.css";

export interface SeparatorProps extends React.ComponentProps<
  typeof SeparatorPrimitive.Root
> {}

export function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(styles.root, className)}
      {...props}
    />
  );
}
