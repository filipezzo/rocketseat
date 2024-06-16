import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../../view/layouts/Layout";
import { Checkout } from "../../view/pages/checkout/Checkout";
import { Home } from "../../view/pages/home/Home";

export function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/checkout" element={<Checkout />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
