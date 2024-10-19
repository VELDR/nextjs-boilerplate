"use client";

import React, { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

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
			setIsMobile(window.innerWidth < 768);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const variants = {
		hidden: isMobile ? { y: "100%" } : { scale: 0.95, opacity: 0 },
		visible: isMobile ? { y: 0 } : { scale: 1, opacity: 1 },
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
						className="bg-background/80 fixed inset-0 z-50 backdrop-blur-sm"
					/>

					<motion.div
						initial="hidden"
						animate="visible"
						exit="hidden"
						variants={variants}
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
								: "left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg"
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

							{/* Actual content */}
							<div className="relative pt-2">
								{isMobile && (
									<div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-background" />
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
				</>
			)}
		</AnimatePresence>
	);
};
