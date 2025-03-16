import {
	ChangeEvent,
	forwardRef,
	KeyboardEvent,
	useRef,
	useState,
} from "react";

import { Search, X } from "lucide-react";

import { Button, Input } from "@/components/atoms";
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
					className="text-muted-foreground pointer-events-none absolute left-2 h-4 w-4"
					aria-hidden="true"
				/>
				<Input
					{...props}
					ref={combinedRef}
					value={value}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					className={cn(
						"pr-8 pl-8", // Add padding for the search icon
						className
					)}
				/>
				{value && clearable && (
					<Button
						type="button"
						onClick={handleClear}
						className="text-muted-foreground hover:text-foreground absolute right-2 h-4 w-4 focus:outline-hidden"
						aria-label="Clear search"
					>
						<X className="h-4 w-4" />
					</Button>
				)}
			</div>
		);
	}
);

SearchInput.displayName = "SearchInput";
