import { forwardRef } from "react";
import { cn } from "../../app/utils/cn";

interface InputProps extends React.ComponentProps<"input"> {
	variant: "xl" | "lg" | "sm";
	className?: string;
	hasError?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { variant, hasError, className, ...rest } = props;

	return (
		<input
			ref={ref}
			className={cn(
				"mb-4 h-11 w-full rounded-md border-base-button bg-base-input p-2 outline-none",
				variant === "xl"
					? "md:w-full"
					: variant === "lg"
						? "md:w-[200px]"
						: "md:w-[60px]",
				className,
				hasError && "border border-rose-500",
			)}
			{...rest}
		/>
	);
});
