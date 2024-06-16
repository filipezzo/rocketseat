import { cn } from "../../../../app/utils/cn";
import { QualityItem } from "./Hero";

interface ItemProps {
	item: QualityItem;
}

export function ListItem({ item }: ItemProps) {
	return (
		<li className="flex w-full items-center gap-1.5">
			<Badge bgColor={item.bg} icon={item.icon} />
			<span>{item.text}</span>
		</li>
	);
}

export const Badge = ({
	bgColor,
	icon,
}: {
	bgColor: string;
	icon: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"flex size-8 items-center justify-center rounded-full",
				bgColor,
			)}
		>
			{icon}
		</div>
	);
};
