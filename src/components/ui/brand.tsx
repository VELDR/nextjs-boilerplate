import Link from "next/link"

import { Flower } from "lucide-react"

const Brand = () => {
	return (
		<>
			<Link href="/">
				<Flower aria-label="Flower icon" />
			</Link>
		</>
	)
}

export { Brand }
