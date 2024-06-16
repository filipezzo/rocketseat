import { Minus, Plus, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { CoffeeData } from "../../../../app/contexts/CoffeeProvider";
import { useCoffee } from "../../../../app/hooks/useCoffee";

interface Props {
	item: CoffeeData;
}

export function SelectedItem({
	item: { img, total, title, quantity = 1 },
}: Props) {
	const [value, setValue] = useState(quantity);
	const { onUpdateQuantity, onDeleteCoffee } = useCoffee();

	const handleInc = () => {
		setValue((state) => state + 1);
	};

	useEffect(() => {
		console.log("executou");
		if (value !== quantity) {
			onUpdateQuantity(title, value);
		}
	}, [value, quantity, onUpdateQuantity, title]);

	return (
		<li className="items-initial flex w-full justify-between gap-2">
			<div className="flex w-full items-center gap-4">
				<img className="size-16" src={img} alt={`imagem do cafe ${title}`} />
				<div className="flex flex-1 flex-col gap-2">
					<h3 className="font-medium">{title}</h3>
					<div className="flex items-center gap-1">
						<div className="flex h-10 w-full max-w-20 flex-1 items-center justify-center gap-1 rounded-md bg-base-button p-2">
							<button
								disabled={value <= 0}
								onClick={() => setValue((state) => state - 1)}
							>
								<Minus className="text-purple-dark" size={14} />
							</button>
							<span className="select-none">{value}</span>

							<button onClick={handleInc}>
								<Plus className="text-purple-dark" size={14} />
							</button>
						</div>
						<button
							onClick={() => onDeleteCoffee(title)}
							className="ml-auto h-10"
						>
							<Trash size={14} className="text-purple-dark" />
						</button>
					</div>
				</div>
			</div>
			<strong className="">
				{total?.toLocaleString("pt-br", {
					currency: "brl",
					style: "currency",
				})}
			</strong>
		</li>
	);
}
