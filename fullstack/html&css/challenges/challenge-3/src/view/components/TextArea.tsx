import { ComponentProps, forwardRef, useId } from "react";
import { cn } from "../../app/lib/utils/cn";

interface TextareaProps extends ComponentProps<"textarea"> {
  label: string;
}
export const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, ...props }, ref) => {
    const id = useId();
    return (
      <div className="col-span-full flex flex-col gap-3">
        <label htmlFor={id} className="col-span-full block text-gray-500">
          {label}
        </label>
        <textarea
          className={cn(
            "col-span-full h-full max-h-[200px] min-h-[136px] w-full rounded-lg border border-stroke bg-base px-4 py-1 outline-none placeholder:text-placeholder focus-within:border-brandLight",
          )}
          id={id}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
