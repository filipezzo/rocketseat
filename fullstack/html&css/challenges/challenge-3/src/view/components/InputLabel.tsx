import { Building, Video } from "lucide-react";
import React, { forwardRef } from "react";
import { cn } from "../../app/lib/utils/cn";

interface InputLabelProps extends React.ComponentProps<"input"> {
  label: string;
  className?: string;
  option?: string;
}

export const InputLabel = forwardRef<HTMLInputElement, InputLabelProps>(
  ({ label, className, option = "col-span-full", ...props }, ref) => {
    if (props.type === "radio") {
      return (
        <div className={cn("flex flex-col gap-3", option)}>
          <h3 className="col-span-full block text-gray-500">{label}</h3>
          <div className="col-span-full flex h-12 w-full justify-between gap-1 rounded-lg border border-stroke p-1">
            <div className="h-10 flex-1">
              <input
                id="presencial"
                value="presencial"
                type="radio"
                name="type"
                className="peer hidden flex-1 border"
                ref={ref}
                {...props}
              />
              <label
                htmlFor="presencial"
                className="flex flex-1 cursor-pointer items-center gap-2 rounded-lg bg-base p-2 peer-checked:text-blue-500"
              >
                <Building size={16} />
                <h3 className="text-[14px] font-semibold">Presencial</h3>
              </label>
            </div>
            <div className="h-10 flex-1">
              <input
                id="online"
                name="type"
                type="radio"
                value="online"
                className="peer hidden border"
                ref={ref}
                {...props}
              />
              <label
                htmlFor="online"
                className="flex flex-1 cursor-pointer items-center gap-2 rounded-lg bg-base p-2 peer-checked:text-blue-500"
              >
                <Video size={16} />
                <h3 className="text-[14px] font-semibold">Online</h3>
              </label>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={cn("flex flex-col gap-3", option)}>
        <label htmlFor={label} className="col-span-full block text-gray-500">
          {label}
        </label>
        <input
          id={label}
          className={cn(
            "col-span-full h-12 w-full rounded-lg border border-stroke bg-base px-4 outline-none placeholder:text-placeholder focus-within:border-brandLight",
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
