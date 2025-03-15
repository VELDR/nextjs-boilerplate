"use client";

import React, { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { CloseButton } from "@/components/molecules";

interface BottomSheetProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
	title?: string;
	className?: string;
}

export const BottomSheet = ({
	isOpen,
	onClose,
	children,
	title = "",
	className = "",
}: BottomSheetProps) => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			const isMobileView = window.innerWidth < 768;
			if (isMobileView !== isMobile) {
				setIsMobile(isMobileView);
			}
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, [isMobile]);

	const mobileVariants = {
		hidden: { y: "100%" },
		visible: { y: 0 },
	};

	const desktopVariants = {
		hidden: {
			opacity: 0,
			x: "-50%",
			y: "-50%",
			scale: 0.95,
		},
		visible: {
			opacity: 1,
			x: "-50%",
			y: "-50%",
			scale: 1,
		},
	};

	const key = `bottom-sheet-${isMobile ? "mobile" : "desktop"}`;

	return (
		<AnimatePresence>
			{isOpen && (
				<div className="relative">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
						className="bg-background/80 fixed inset-0 z-50 backdrop-blur-sm"
					/>

					<motion.div
						key={key}
						initial="hidden"
						animate="visible"
						exit="hidden"
						variants={isMobile ? mobileVariants : desktopVariants}
						transition={{ type: "spring", damping: 25, stiffness: 300 }}
						drag={isMobile ? "y" : false}
						dragConstraints={{ top: 0 }}
						dragElastic={0.2}
						onDragEnd={(_, info) => {
							if (info.offset.y > 100) onClose();
						}}
						className={`fixed z-50 ${
							isMobile
								? "bottom-0 left-0 right-0"
								: "left-1/2 top-1/2 w-full max-w-md"
						}`}
					>
						<div
							className={`relative bg-secondary ${
								isMobile ? "rounded-t-3xl" : "rounded-lg"
							} ${className}`}
						>
							{isMobile && (
								<div
									className="absolute bottom-0 left-0 right-0 h-screen bg-secondary"
									style={{ transform: "translateY(99%)" }}
								/>
							)}

							<div className="relative pt-2">
								{isMobile ? (
									<div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-background" />
								) : (
									<CloseButton
										onClick={onClose}
										className="absolute right-2 top-2"
									/>
								)}
								<div className="px-4 pb-4">
									<div className="mb-4 flex items-center justify-between">
										<h2 className="text-lg font-semibold text-foreground">
											{title}
										</h2>
									</div>

									<div className="max-h-[calc(80vh-100px)] overflow-y-auto">
										{children}
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
};
