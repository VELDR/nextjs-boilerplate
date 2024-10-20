import { Brand } from "@/components/ui";
import { AnimatePresence, motion } from "framer-motion";

import { NavLinks } from "@/shared";
import { CloseButton } from "@/widgets";

interface SidebarProps {
	isOpen: boolean;
	onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<div className="fixed inset-0 z-[1000]">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="bg-background/80 absolute inset-0 backdrop-blur-sm"
						onClick={onClose}
					/>

					<motion.div
						initial={{ x: "-100%" }}
						animate={{ x: 0 }}
						exit={{ x: "-100%" }}
						transition={{
							type: "spring",
							stiffness: 400,
							damping: 40,
						}}
						className="absolute inset-y-0 left-0 w-64 bg-background shadow-lg"
					>
						<div className="flex h-full flex-col p-4">
							<div className="flex items-center justify-between pb-4">
								<Brand />
								<CloseButton onClick={onClose} />
							</div>
							<div className="flex flex-col gap-4">
								<NavLinks showVertical onLinkClick={onClose} />
							</div>
						</div>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
};
