import React from "react";
import Link from "next/link";

import { Box } from "lucide-react";

export const Brand = () => {
	return (
		<React.Fragment>
			<Link href="/">
				<Box aria-label="Boilerplate icon" />
			</Link>
		</React.Fragment>
	);
};
