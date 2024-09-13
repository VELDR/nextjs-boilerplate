import Link from "next/link";

import { Flower } from "lucide-react";

export const Brand = () => {
	return (
		<>
			<Link href="/">
				<Flower aria-label="Flower icon" />
			</Link>
		</>
	);
};
