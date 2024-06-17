import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { LeftSide } from "./components/LeftSide";
import { RightSide } from "./components/RightSide";

const schema = z.object({
	cep: z.string().min(1, "Preencha o seu CEP"),
	rua: z.string().min(1, "Preencha o nome da sua rua"),
	numero: z.string().min(1, "Preencha o número do seu endereço"),
	complemento: z.string().optional(),
	bairro: z.string().min(1, "Este campo é obrigatório"),
	cidade: z.string().min(1, "Este campo é obrigatório"),
	uf: z.string().min(1, "Este campo é obrigatório"),
});

export type FormData = z.infer<typeof schema>;
export function Checkout() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});
	const navigate = useNavigate();
	console.log(errors);
	const onSubmit = (data: FormData) => {
		navigate("/success", {
			state: data,
		});
	};
	return (
		<main className="mt-20 flex w-full flex-col justify-between gap-8 md:flex-row">
			<LeftSide register={register} errors={errors} />
			<RightSide onSubmit={handleSubmit(onSubmit)} />
		</main>
	);
}
