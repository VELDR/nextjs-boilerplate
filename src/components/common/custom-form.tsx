"use client";

import React, { useState } from "react";
import {
	Control,
	Controller,
	DefaultValues,
	FieldPath,
	FieldValues,
	SubmitHandler,
	useForm,
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import * as z from "zod";

import {
	Button,
	Input,
	Label,
	RadioGroup,
	RadioGroupItem,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/ui";

type BaseFieldConfig = {
	name: string;
	label: string;
};

type InputFieldConfig = BaseFieldConfig & {
	type: "text" | "email" | "password" | "number";
};

type RadioFieldConfig = BaseFieldConfig & {
	type: "radio";
	options: { value: string; label: string }[];
};

type SelectFieldConfig = BaseFieldConfig & {
	type: "select";
	options: { value: string; label: string }[];
};

export type FieldConfig =
	| InputFieldConfig
	| RadioFieldConfig
	| SelectFieldConfig;

export function CustomForm<T extends FieldValues>({
	fields,
	onSubmit,
	zodSchema,
}: {
	fields: FieldConfig[];
	onSubmit: (data: T) => void;
	zodSchema: z.ZodType<T>;
}) {
	const defaultValues = fields.reduce((acc, field) => {
		return { ...acc, [field.name]: field.type === "number" ? null : "" };
	}, {} as DefaultValues<T>);

	const {
		handleSubmit,
		formState: { errors },
		control,
	} = useForm<T>({
		resolver: zodResolver(zodSchema),
		defaultValues,
	});

	const handleFormSubmit: SubmitHandler<T> = (data) => {
		onSubmit(data);
	};

	const renderField = (field: FieldConfig) => {
		switch (field.type) {
			case "radio":
				return (
					<Controller
						name={field.name as FieldPath<T>}
						control={control}
						render={({ field: { onChange, value } }) => (
							<RadioGroup
								onValueChange={onChange}
								value={value as string | undefined}
							>
								{field.options.map((option) => (
									<div
										key={option.value}
										className="flex items-center space-x-2"
									>
										<RadioGroupItem
											value={option.value}
											id={`${field.name}-${option.value}`}
										/>
										<Label htmlFor={`${field.name}-${option.value}`}>
											{option.label}
										</Label>
									</div>
								))}
							</RadioGroup>
						)}
					/>
				);
			case "select":
				return (
					<Controller
						name={field.name as FieldPath<T>}
						control={control}
						render={({ field: { onChange, value } }) => (
							<Select
								onValueChange={onChange}
								value={value as string | undefined}
							>
								<SelectTrigger>
									<SelectValue placeholder="Select an option" />
								</SelectTrigger>
								<SelectContent>
									{field.options.map((option) => (
										<SelectItem key={option.value} value={option.value}>
											{option.label}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						)}
					/>
				);
			case "password":
				return (
					<PasswordInput name={field.name as FieldPath<T>} control={control} />
				);
			case "number":
				return (
					<Controller
						name={field.name as FieldPath<T>}
						control={control}
						render={({ field: inputProps }) => (
							<Input
								{...inputProps}
								type="number"
								id={field.name}
								onChange={(e) => {
									inputProps.onChange(Number(e.target.value));
								}}
							/>
						)}
					/>
				);
			default:
				return (
					<Controller
						name={field.name as FieldPath<T>}
						control={control}
						render={({ field: inputProps }) => (
							<Input
								{...inputProps}
								type={field.type}
								id={field.name}
								onChange={(e) => {
									inputProps.onChange(e);
								}}
							/>
						)}
					/>
				);
		}
	};

	return (
		<form
			onSubmit={handleSubmit(handleFormSubmit)}
			className="flex w-full max-w-sm flex-col gap-4"
		>
			{fields.map((field) => (
				<div key={field.name} className="grid w-full items-center gap-1.5">
					<Label htmlFor={field.name}>{field.label}</Label>
					{renderField(field)}
					{errors[field.name] && (
						<span className="text-sm text-red-500">
							{errors[field.name]?.message as string}
						</span>
					)}
				</div>
			))}

			<Button type="submit">Submit</Button>
		</form>
	);
}

interface PasswordInputProps<T extends FieldValues> {
	name: FieldPath<T>;
	control: Control<T>;
}

function PasswordInput<T extends FieldValues>({
	name,
	control,
}: PasswordInputProps<T>) {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<div className="relative">
					<Input
						{...field}
						type={showPassword ? "text" : "password"}
						id={name}
					/>
					<button
						type="button"
						className="absolute right-2 top-1/2 -translate-y-1/2"
						onClick={() => setShowPassword(!showPassword)}
					>
						{showPassword ? (
							<EyeOff className="h-4 w-4 text-gray-500" />
						) : (
							<Eye className="h-4 w-4 text-gray-500" />
						)}
					</button>
				</div>
			)}
		/>
	);
}
