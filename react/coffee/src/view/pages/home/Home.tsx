import CoffeeList from "./components/CoffeeList";
import { Hero } from "./components/Hero";
export function Home() {
	return (
		<div className="mt-24 h-full">
			<Hero />
			<CoffeeList />
		</div>
	);
}
