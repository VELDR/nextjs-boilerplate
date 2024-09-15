import React from "react";
import Image, { StaticImageData } from "next/image";

import clsx from "clsx";

interface ThemedImageProps {
	lightSrc: string | StaticImageData;
	darkSrc: string | StaticImageData;
	alt: string;
	fill?: boolean;
	width?: number;
	height?: number;
	className?: string;
	priority?: boolean;
}

export const ThemedImage = ({
	lightSrc,
	darkSrc,
	alt,
	fill,
	width,
	height,
	className,
	priority = false,
}: ThemedImageProps) => {
	return (
		<React.Fragment>
			<Image
				src={lightSrc}
				alt={alt}
				fill={fill}
				width={width}
				height={height}
				className={clsx(className, "block dark:hidden")}
				priority={priority}
			/>
			<Image
				src={darkSrc}
				alt={alt}
				fill={fill}
				width={width}
				height={height}
				className={clsx(className, "hidden dark:block")}
				priority={priority}
			/>
		</React.Fragment>
	);
};
