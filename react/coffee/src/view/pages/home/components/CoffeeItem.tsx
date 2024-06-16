import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { CoffeeData } from "../../../../app/contexts/CoffeeProvider";
import CartBtn from "../../../components/CartBtn";

interface Props {
	coffee: CoffeeData;
	onAddCoffee(coffee: CoffeeData): void;
}

export function CoffeeItem({
	coffee: { description, img, price, title, type },
	onAddCoffee,
}: Props) {
	const [quantity, setQuantity] = useState(0);
	const handleAddToCart = () => {
		const newCoffee = {
			id: Math.ceil(Math.random() + 100 * 10),
			title,
			type,
			description,
			price,
			img,
			quantity,
			total: quantity * price,
		};
		onAddCoffee(newCoffee);
		setQuantity(0);
	};

	return (
		<li className="flex w-full max-w-[256px] flex-col items-center rounded-tr-3xl bg-base-card p-6">
			<img
				className="-mt-12 size-28 object-cover"
				src={img}
				alt={`imagem do cafe ${title}`}
			/>
			<div className="flex items-center gap-1">
				{type.map((item) => (
					<span
						key={item + Math.random()}
						className="mb-4 mt-3 flex h-6 items-center justify-center rounded-xl bg-yellow-light px-2.5 py-2 text-sm font-bold uppercase text-yellow-dark"
					>
						{item}
					</span>
				))}
			</div>

			<strong className="title text-xl font-bold text-base-subtitle">
				{title}
			</strong>
			<p className="mb-8 text-center text-sm text-base-label">{description}</p>
			<div className="flex w-full items-center justify-between self-start">
				<span className="title text-xl font-extrabold">
					{" "}
					{price.toLocaleString("pt-br", {
						currency: "brl",
						style: "currency",
					})}
				</span>
				<div className="flex items-center gap-2">
					<div className="flex h-10 w-full max-w-20 items-center justify-center gap-1 rounded-md bg-base-button p-2">
						<button
							disabled={quantity <= 0}
							onClick={() => setQuantity((state) => state - 1)}
						>
							<Minus className="text-purple-dark" size={14} />
						</button>
						<span className="select-none">{quantity}</span>

						<button onClick={() => setQuantity((state) => state + 1)}>
							<Plus className="text-purple-dark" size={14} />
						</button>
					</div>
					<CartBtn
						onClick={handleAddToCart}
						className="disabled:bg-gray-500"
						disabled={quantity === 0}
					/>
				</div>
			</div>
		</li>
	);
}
