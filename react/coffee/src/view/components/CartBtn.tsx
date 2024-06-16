import { ShoppingCart } from "lucide-react";
import { useCoffee } from "../../app/hooks/useCoffee";
import { cn } from "../../app/utils/cn";

interface Props extends React.ComponentProps<"button"> {
	variant?: boolean;
	numberOfCoffees?: boolean;
	className?: string;
}

export default function CartBtn({
	variant = false,
	numberOfCoffees,
	className,
	...rest
}: Props) {
	const { selectedLength } = useCoffee();
	return (
		<button
			className={cn(
				"relative flex h-[38px] min-w-10 items-center justify-center rounded-md bg-purple-dark transition-opacity hover:opacity-80",
				className,
				variant && "h-10 w-12 bg-yellow-light",
			)}
			{...rest}
		>
			<ShoppingCart
				className={cn(
					"size-5 font-bold text-white",
					variant && "size-6 text-yellow-dark",
				)}
			/>

			{numberOfCoffees && (
				<div className="absolute -right-2 top-0 z-50 -mt-2 size-6 rounded-full bg-purple-light">
					{selectedLength}
				</div>
			)}
		</button>
	);
}
