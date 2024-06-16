import { Box, Coffee, ShoppingCart, Timer } from "lucide-react";
import brand from "../../../assets/hero.png";
import { ListItem } from "./ListItem";

export interface QualityItem {
	icon: React.ReactNode;
	text: string;
	bg: string;
}

const qualities: QualityItem[] = [
	{
		icon: <ShoppingCart size={16} className="text-white" />,
		text: "Compra simples e segura",
		bg: "bg-orange-500",
	},

	{
		icon: <Box size={16} className="text-white" />,
		text: "Embalagem mantém o café intacto",
		bg: "bg-gray-500",
	},

	{
		icon: <Timer size={16} className="text-white" />,
		text: "Entrega rápida e rastreada",
		bg: "bg-yellow-500",
	},

	{
		icon: <Coffee size={16} className="text-white" />,
		text: "O café chega fresquinho até você",
		bg: "bg-purple-dark",
	},
];

export function Hero() {
	return (
		<section className="flex flex-col md:flex-row md:justify-between md:gap-14">
			<div className="flex flex-col justify-between md:max-h-[320px]">
				<div className="flex flex-col gap-4 md:max-w-[588px]">
					<h1 className="title text-pretty text-4xl font-extrabold text-base-title md:text-5xl md:leading-[130%]">
						Encontre o café perfeito para qualquer hora do dia
					</h1>
					<p className="my-4 text-xl text-base-subtitle md:my-0">
						Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
						hora
					</p>
				</div>
				<ul className="space-y-4 md:grid md:max-h-[100px] md:grid-cols-2 md:gap-x-10 md:gap-y-5">
					{qualities.map((item) => (
						<ListItem key={item.text} item={item} />
					))}
				</ul>
			</div>
			<img className="mt-16 md:mt-0" src={brand} alt="coffee delivery logo" />
		</section>
	);
}
