import { Locate } from "lucide-react";
import { Outlet } from "react-router-dom";
import CartBtn from "../components/CartBtn";
import { Logo } from "../components/Logo";

export function Layout() {
	return (
		<div className="h-full bg-bg-base">
			<div className="container mx-auto h-full p-5 py-10">
				<header className="flex items-center justify-between">
					<Logo />
					<nav className="flex items-center gap-4">
						<button className="invisible flex max-w-40 items-center gap-2 rounded-md bg-purple-light p-2 text-purple-dark transition-opacity hover:opacity-80 md:visible">
							<Locate />
							São Paulo, SP
						</button>
						<CartBtn variant />
					</nav>
				</header>
				<Outlet />
			</div>
		</div>
	);
}
