import { createContext, useCallback, useEffect, useState } from "react";

export interface CoffeeData {
	type: string[];
	title: string;
	description: string;
	price: number;
	img: string;
	quantity?: number;
	total?: number;
}

interface ContextProps {
	coffees: CoffeeData[];
	selectedCoffees: CoffeeData[];
	onAddSelectedCoffee(newCoffee: CoffeeData): void;
	onDeleteCoffee(title: string): void;
	onUpdateQuantity(title: string, newCoffee: number): void;
	selectedLength: number;
	totalCoffeesCost: number;
}

export const CoffeeContext = createContext({} as ContextProps);

export function CoffeeProvider({ children }: { children: React.ReactNode }) {
	const [coffees, setCoffees] = useState<CoffeeData[]>([]);
	const [selectedCoffees, setSelectedCoffees] = useState<CoffeeData[]>([]);
	const selectedLength = selectedCoffees.length;
	const totalCoffeesCost = selectedCoffees?.reduce((sum, item) => {
		return sum + (item.total ? item.total : 0);
	}, 0);

	const onAddSelectedCoffee = useCallback((newCoffee: CoffeeData) => {
		setSelectedCoffees((state) => [...state, newCoffee]);
	}, []);

	const onUpdateQuantity = useCallback(
		(title: string, value: number) => {
			const updatedQuantity = selectedCoffees.map((coffee) =>
				coffee.title === title
					? { ...coffee, quantity: value, total: value * coffee.price }
					: coffee,
			);
			setSelectedCoffees(updatedQuantity);
		},
		[selectedCoffees],
	);

	const onDeleteCoffee = useCallback(
		(title: string) => {
			const filteredCoffee = selectedCoffees.filter(
				(coffee) => coffee.title !== title,
			);
			setSelectedCoffees(filteredCoffee);
		},
		[selectedCoffees],
	);

	useEffect(() => {
		let ignore = false;

		if (ignore) return;
		const fetchCoffees = async () => {
			try {
				const response = await fetch("/coffees.json");
				const data = await response.json();
				setCoffees(data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchCoffees();

		return () => {
			ignore = true;
		};
	}, []);

	return (
		<CoffeeContext.Provider
			value={{
				coffees,
				onAddSelectedCoffee,
				selectedCoffees,
				selectedLength,
				onUpdateQuantity,
				totalCoffeesCost,
				onDeleteCoffee,
			}}
		>
			{children}
		</CoffeeContext.Provider>
	);
}
