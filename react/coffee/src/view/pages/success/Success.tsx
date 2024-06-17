import { Navigate, useLocation } from "react-router-dom";
import illustration from "../../assets/illustration.png";

export function Success() {
	const { state } = useLocation();

	if (!state) {
		return <Navigate to="/" />;
	}

	return (
		<main className="flex h-full w-full flex-col items-center md:mt-10 md:flex-row md:items-start md:justify-center md:gap-40">
			<div className="flex flex-col gap-4">
				<h2 className="mt-36 text-3xl font-bold text-yellow-dark">
					Uhu! Pedido confirmado
				</h2>
				<p>Agora é só aguardar que logo o café chegará até você</p>
				<div className="h-28 rounded-md rounded-tr-3xl bg-base-card p-10">
					<p>
						Entrega em{" "}
						<strong>
							{state.rua} {state.numero} {state.cidade}
						</strong>
					</p>
					<p>Previsão de entrega 20min</p>
				</div>
			</div>
			<img
				className="size-1/2 object-cover"
				src={illustration}
				alt="imagem ilustrativa de um entregador"
			/>
		</main>
	);
}
