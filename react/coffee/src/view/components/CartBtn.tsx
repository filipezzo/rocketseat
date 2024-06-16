import { ShoppingCart } from "lucide-react";
import { cn } from "../../app/utils/cn";

interface Props extends React.ComponentProps<"button"> {
	variant?: boolean;
}

export default function CartBtn({ variant = false, ...rest }: Props) {
	return (
		<button
			className={cn(
				"flex h-10 w-12 items-center justify-center rounded-md transition-opacity hover:opacity-80",
				variant && "bg-yellow-light",
			)}
			{...rest}
		>
			<ShoppingCart
				size={22}
				className={cn("", variant && "text-yellow-dark")}
			/>
		</button>
	);
}
