import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={cn("w-[100%] lg:w-[80%] m-auto px-5", className)} {...props}>
      {children}
    </div>
  );
}