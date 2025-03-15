import {
	ChangeEvent,
	forwardRef,
	KeyboardEvent,
	useRef,
	useState,
} from "react";

import { Search, X } from "lucide-react";

import { Input } from "@/components/atoms";
import { InputProps } from "@/components/atoms/input";
import { useCombinedRefs } from "@/hooks";
import { cn } from "@/utils/general";

export interface SearchInputProps extends Omit<InputProps, "onChange"> {
	onSearch?: (value: string) => void;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	clearable?: boolean;
	value?: string;
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
	(
		{
			className,
			onSearch,
			onChange,
			clearable = true,
			value: controlledValue,
			...props
		},
		ref
	) => {
		const [internalValue, setInternalValue] = useState<string>(
			props.defaultValue?.toString() || ""
		);
		const innerRef = useRef<HTMLInputElement>(null);
		const combinedRef = useCombinedRefs(ref, innerRef);

		// Determine if component is controlled or uncontrolled
		const isControlled = controlledValue !== undefined;
		const value = isControlled ? controlledValue : internalValue;

		const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
			if (!isControlled) {
				setInternalValue(e.target.value);
			}

			// Pass the original event to maintain compatibility with existing code
			onChange?.(e);
		};

		const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
			if (e.key === "Enter" && onSearch) {
				onSearch(value);
			}
		};

		const handleClear = () => {
			// Create a synthetic event for the onChange handler
			const syntheticEvent = {
				target: { value: "" },
				currentTarget: { value: "" },
			} as ChangeEvent<HTMLInputElement>;

			if (!isControlled) {
				setInternalValue("");
			}

			onChange?.(syntheticEvent);
			innerRef.current?.focus();
		};

		return (
			<div className="relative flex items-center">
				<Search
					className="pointer-events-none absolute left-2 h-4 w-4 text-muted-foreground"
					aria-hidden="true"
				/>
				<Input
					{...props}
					ref={combinedRef}
					value={value}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					className={cn(
						"pl-8 pr-8", // Add padding for the search icon
						className
					)}
				/>
				{value && clearable && (
					<button
						type="button"
						onClick={handleClear}
						className="absolute right-2 h-4 w-4 text-muted-foreground hover:text-foreground focus:outline-none"
						aria-label="Clear search"
					>
						<X className="h-4 w-4" />
					</button>
				)}
			</div>
		);
	}
);

SearchInput.displayName = "SearchInput";
