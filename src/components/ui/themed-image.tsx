import React from "react";
import Image, { ImageProps, StaticImageData } from "next/image";

import clsx from "clsx";

interface ThemedImageProps extends Omit<ImageProps, "src" | "alt"> {
	lightSrc: string | StaticImageData;
	darkSrc: string | StaticImageData;
	alt: string;
	className?: string;
}
export const ThemedImage = ({
	lightSrc,
	darkSrc,
	alt,
	className,
	...rest
}: ThemedImageProps) => {
	return (
		<React.Fragment>
			<Image
				src={lightSrc}
				alt={alt}
				className={clsx(className, "block dark:hidden")}
				{...rest}
			/>
			<Image
				src={darkSrc}
				alt={alt}
				className={clsx(className, "hidden dark:block")}
				{...rest}
			/>
		</React.Fragment>
	);
};
