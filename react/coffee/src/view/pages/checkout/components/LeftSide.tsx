import { Locate } from "lucide-react";

export function LeftSide() {
	return (
		<section className="flex-1">
			<h2 className="mb-4 text-2xl font-semibold text-base-title">
				Complete seu pedido
			</h2>
			<form className="w-full rounded-md bg-base-card p-10 shadow-md">
				<div className="flex items-start gap-4">
					<Locate className="text-yellow-dark" />
					<div className="flex flex-col gap-1">
						<h3 className="font-medium text-base-subtitle">
							Endereço de Entrega
						</h3>
						<p>Informe o endereço onde deseja receber seu pedido</p>
					</div>
				</div>
			</form>
		</section>
	);
}
