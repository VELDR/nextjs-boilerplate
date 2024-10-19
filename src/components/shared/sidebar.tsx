import { Brand, Button } from "@/components/ui";
import clsx from "clsx";
import { X } from "lucide-react";

import { NavLinks } from "@/shared";

interface SidebarProps {
	isOpen: boolean;
	onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
	return (
		<div
			className={clsx("fixed inset-0 z-[1000]", isOpen ? "block" : "hidden")}
		>
			<div
				className="bg-background/80 absolute inset-0 backdrop-blur-sm"
				onClick={onClose}
			/>
			<div className="absolute inset-y-0 left-0 w-64 bg-background shadow-lg">
				<div className="flex h-full flex-col p-4">
					<div className="flex items-center justify-between pb-4">
						<Brand />
						<Button variant="ghost" size="icon" onClick={onClose}>
							<X className="h-6 w-6" />
						</Button>
					</div>
					<div className="flex flex-col gap-4">
						<NavLinks showVertical onLinkClick={onClose} />
					</div>
				</div>
			</div>
		</div>
	);
};
