import { ForwardedRef, RefObject, useEffect, useRef } from "react";

// Helper to combine forwarded ref with internal ref
export const useCombinedRefs = <T>(
	...refs: (ForwardedRef<T> | RefObject<T> | null)[]
) => {
	const targetRef = useRef<T>(null);

	useEffect(() => {
		refs.forEach((ref) => {
			if (!ref) return;

			if (typeof ref === "function") {
				ref(targetRef.current);
			} else {
				(ref as RefObject<T | null>).current = targetRef.current;
			}
		});
	}, [...refs]);

	return targetRef;
};
