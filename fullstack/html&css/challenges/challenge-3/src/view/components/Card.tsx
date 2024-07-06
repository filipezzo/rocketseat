import { forwardRef } from "react";

interface Item {
  label: string;
  src: string;
  id: number;
}

interface Props {
  e: Item;
}

export const Card = forwardRef<HTMLInputElement, Props>(
  ({ e, ...props }, ref) => {
    return (
      <figure
        className="group relative col-span-3 flex cursor-pointer flex-col gap-1 rounded-lg border border-stroke bg-base p-1 group-hover:cursor-pointer has-[:checked]:border-2 has-[:checked]:border-brandLight"
        key={e.id}
      >
        <input
          type="radio"
          value={e.label}
          className="absolute inset-0 opacity-0 group-hover:cursor-pointer"
          ref={ref}
          {...props}
        />
        <img src={e.src} alt={`imagem de ${e.label}`} />
        <small className="text-center text-textHeading group-hover:cursor-pointer">
          {e.label}
        </small>
      </figure>
    );
  },
);
