import { LeftSide } from "./components/LeftSide";
import { RightSide } from "./components/RightSide";

export function Checkout() {
	return (
		<main className="mt-20 flex w-full flex-col justify-between gap-8 md:flex-row">
			<LeftSide />
			<RightSide />
		</main>
	);
}
