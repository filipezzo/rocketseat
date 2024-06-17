import { Locate } from "lucide-react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Input } from "../../../components/Input";
import { FormData } from "../Checkout";

interface Props {
	register: UseFormRegister<FormData>;
	errors: FieldErrors<FormData>;
}

export function LeftSide({ register, errors }: Props) {
	return (
		<section className="flex-1">
			<h2 className="mb-4 text-2xl font-semibold text-base-title">
				Complete seu pedido
			</h2>
			<form className="w-full rounded-md bg-base-card shadow-md">
				<div className="flex items-start gap-4 border p-10">
					<Locate className="text-yellow-dark" />
					<div className="flex w-full flex-col gap-1">
						<h3 className="font-medium text-base-subtitle">
							Endereço de Entrega
						</h3>
						<p className="mb-8">
							Informe o endereço onde deseja receber seu pedido
						</p>
						<Input
							hasError={!!errors?.cep?.message}
							placeholder="CEP"
							variant="lg"
							{...register("cep")}
						/>

						<Input
							hasError={!!errors?.rua?.message}
							placeholder="Rua"
							variant="xl"
							className="w-full"
							{...register("rua")}
						/>
						<div className="flex items-center gap-4">
							<Input
								hasError={!!errors?.numero?.message}
								placeholder="Número"
								variant="lg"
								{...register("numero")}
							/>
							<Input
								hasError={!!errors?.complemento?.message}
								placeholder="Complemento"
								variant="xl"
								{...register("complemento")}
							/>
						</div>
						<div className="flex flex-col gap-4 md:flex-row md:items-center">
							<Input
								hasError={!!errors?.bairro?.message}
								{...register("bairro")}
								placeholder="Bairro"
								variant="lg"
							/>
							<Input
								hasError={!!errors?.cidade?.message}
								{...register("cidade")}
								placeholder="Cidade"
								variant="xl"
							/>
							<Input
								hasError={!!errors?.uf?.message}
								{...register("uf")}
								placeholder="UF"
								variant="sm"
							/>
						</div>
						{errors && Object.keys(errors).length > 0 && (
							<small className="text-sm text-rose-500">
								{" "}
								*preencha todos os campos
							</small>
						)}
					</div>
				</div>
			</form>
		</section>
	);
}
