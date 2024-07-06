import { ComponentProps, ReactNode } from "react";
import { cn } from "../../app/lib/utils/cn";

interface IFielset extends ComponentProps<"fieldset"> {
  label?: string;
  icon?: ReactNode;
  className?: string;
}

export function Fieldset({
  label,
  children,
  className,
  icon,
  ...props
}: IFielset) {
  return (
    <fieldset
      className={cn("col-span-full mb-12 flex flex-col gap-4", className)}
      {...props}
    >
      {label && (
        <legend className="col-span-full mb-6 flex items-center gap-2">
          {icon}
          <strong className="text-lg font-semibold text-textHeading">
            {label}
          </strong>
        </legend>
      )}
      {children}
    </fieldset>
  );
}
