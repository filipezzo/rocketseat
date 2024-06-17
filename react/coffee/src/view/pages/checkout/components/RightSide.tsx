import { useCoffee } from "../../../../app/hooks/useCoffee";
import { SelectedItem } from "./SelectedItem";

interface Props {
	onSubmit(): void;
}

export function RightSide({ onSubmit }: Props) {
	const { selectedCoffees, totalCoffeesCost } = useCoffee();
	const totalWithTaxes = totalCoffeesCost + 3.5;

	return (
		<section className="w-full max-w-[448px]">
			<h2 className="mb-4 text-2xl font-semibold text-base-title">
				Cafés selecionados
			</h2>
			<div className="w-full rounded-md rounded-bl-3xl rounded-tr-3xl bg-base-card p-10 shadow-md">
				<ul className="flex max-h-96 flex-col gap-16 overflow-scroll">
					{selectedCoffees.length > 0 ? (
						selectedCoffees.map((selected) => (
							<SelectedItem
								key={Math.random() + selected.title}
								item={selected}
							/>
						))
					) : (
						<p>Adicione cafés ao carrinho 😎</p>
					)}
				</ul>
				<div className="my-8 space-y-2">
					<div className="flex items-center justify-between">
						<span className="font-medium text-base-subtitle">
							Total de itens
						</span>
						<span className="font-medium text-base-subtitle">
							{totalCoffeesCost.toLocaleString("pt-br", {
								currency: "brl",
								style: "currency",
							})}
						</span>
					</div>

					<div className="flex items-center justify-between">
						<span className="font-medium text-base-subtitle">Entrega</span>
						<span className="font-medium text-base-subtitle">R$ 3,50</span>
					</div>

					<div className="flex items-center justify-between">
						<span className="text-xl font-bold text-base-subtitle">Total</span>
						<span className="font-medium text-base-subtitle">
							{totalWithTaxes.toLocaleString("pt-br", {
								currency: "brl",
								style: "currency",
							})}
						</span>
					</div>
				</div>
				<button
					onClick={onSubmit}
					className="h-[46px] w-full rounded-md bg-yellowv text-center font-medium uppercase text-white shadow-sm transition-opacity hover:opacity-80"
				>
					confirmar pedido
				</button>
			</div>
		</section>
	);
}
