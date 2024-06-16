import { useContext } from "react";
import { CoffeeContext } from "../contexts/CoffeeProvider";

export function useCoffee() {
	return useContext(CoffeeContext);
}
