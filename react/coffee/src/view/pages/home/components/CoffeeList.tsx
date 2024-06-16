import { useCoffee } from "../../../../app/hooks/useCoffee";
import { CoffeeItem } from "./CoffeeItem";

function CoffeeList() {
	const { coffees, onAddSelectedCoffee } = useCoffee();

	return (
		<>
			<h2 className="title mb-14 mt-8 text-2xl font-bold text-base-subtitle">
				Nossos Cafés
			</h2>
			<ul className="flex grid-cols-4 flex-col items-center gap-8 md:grid md:items-baseline md:justify-start">
				{coffees.map((coffee) => (
					<CoffeeItem
						key={coffee.title + Math.random()}
						coffee={coffee}
						onAddCoffee={onAddSelectedCoffee}
					/>
				))}
			</ul>
		</>
	);
}

export default CoffeeList;
