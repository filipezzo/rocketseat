import { Locate } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import { useCoffee } from "../../app/hooks/useCoffee";
import CartBtn from "../components/CartBtn";
import { Logo } from "../components/Logo";

export function Layout() {
	const { selectedLength } = useCoffee();
	return (
		<div className="h-full bg-bg-base">
			<div className="container mx-auto h-full p-5 py-10">
				<header className="flex items-center justify-between">
					<Link to="/">
						<Logo />
					</Link>

					<nav className="flex items-center gap-4">
						<button className="invisible flex max-w-40 items-center gap-2 rounded-md bg-purple-light p-2 text-purple-dark transition-opacity hover:opacity-80 md:visible">
							<Locate />
							São Paulo, SP
						</button>
						<Link to="/checkout">
							<CartBtn numberOfCoffees={selectedLength > 0} variant />
						</Link>
					</nav>
				</header>
				<Outlet />
			</div>
		</div>
	);
}
