import { CoffeeProvider } from "./app/contexts/CoffeeProvider";
import { Router } from "./app/router/Router";

function App() {
	return (
		<CoffeeProvider>
			<Router />
		</CoffeeProvider>
	);
}

export default App;
