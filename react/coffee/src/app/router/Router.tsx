import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../../view/layouts/Layout";
import { Home } from "../../view/pages/home/Home";

export function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
