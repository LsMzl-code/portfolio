import { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Button } from "./button";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  content,
  title,
  openDialog
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href?: string;
  cta?: string;
  content?: ReactNode;
  title?: string;
  openDialog?: ReactNode;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-gray-950/[.01] [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-gray-50/[.10] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
  >
    <div>{background}</div>

    <div className="absolute top-3 sm:top-6 left-3 sm:left-6 text-neutral-600 w-[80%]">{content}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-3 sm:p-6 transition-all duration-300 group-hover:-translate-y-10">
      {/* Icône */}
      <Icon className="h-8 w-8 sm:h-12 sm:w-12 origin-left transform-gpu text-foreground/80 transition-all duration-300 ease-in-out group-hover:scale-75" />
      {/* Titre */}
      <h2 className="text-lg sm:text-xl font-semibold text-neutral-700 dark:text-neutral-300">
        {name}
      </h2>
      {/* Description */}
      <p className="max-w-lg text-neutral-500 max-sm:text-sm mb-2">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      {cta && (
        <Button asChild size="sm" className="pointer-events-auto bg-indigo-400 hover:bg-indigo-500 transition-colors">
          <a href={href} target="_blank" title={title}>
            {cta}
          </a>
        </Button>
      )}
      {openDialog && (
        <Button asChild size="sm" className="pointer-events-auto bg-indigo-400 hover:bg-indigo-500 transition-colors">
          {openDialog}
        </Button>
      )}
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
