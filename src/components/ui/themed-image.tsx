import React from "react";
import Image, { StaticImageData } from "next/image";

interface ThemedImageProps {
	lightSrc: string | StaticImageData;
	darkSrc: string | StaticImageData;
	alt: string;
	fill?: boolean;
	width?: number;
	height?: number;
	className?: string;
}

export const ThemedImage = ({
	lightSrc,
	darkSrc,
	alt,
	fill,
	width,
	height,
	className,
}: ThemedImageProps) => {
	return (
		<React.Fragment>
			<Image
				src={lightSrc}
				alt={alt}
				fill={fill}
				width={width}
				height={height}
				className={`${className} block dark:hidden`}
			/>
			<Image
				src={darkSrc}
				alt={alt}
				fill={fill}
				width={width}
				height={height}
				className={`${className} hidden dark:block`}
			/>
		</React.Fragment>
	);
};