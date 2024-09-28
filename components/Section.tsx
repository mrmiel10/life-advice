import React, { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import clsx from "clsx";
export const Section = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <section className={cn("max-w-5xl px-4 m-auto", props.className)}>
      {props.children}
    </section>
  );
};
