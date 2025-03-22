import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={cn("w-[90%] m-auto", className)} {...props}>
      {children}
    </div>
  );
}
