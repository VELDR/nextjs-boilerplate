import React from "react";
import Link from "next/link";

import { Flower } from "lucide-react";

export const Brand = () => {
	return (
		<React.Fragment>
			<Link href="/">
				<Flower aria-label="Flower icon" />
			</Link>
		</React.Fragment>
	);
};
