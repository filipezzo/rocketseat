import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../../view/layouts/Layout";
import { Checkout } from "../../view/pages/checkout/Checkout";
import { Home } from "../../view/pages/home/Home";
import { Success } from "../../view/pages/success/Success";

export function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/success" element={<Success />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
