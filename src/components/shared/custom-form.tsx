"use client";

import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button, Input, Label } from "@/ui";

type FieldConfig = {
	name: string;
	label: string;
	type: string;
};

interface CustomFormProps {
	fields: FieldConfig[];
	onSubmit: (data: any) => void;
	zodSchema: z.ZodType<any, any, any>;
}

const CustomForm = ({ fields, onSubmit, zodSchema }: CustomFormProps) => {
	const {
		handleSubmit,
		formState: { errors },
		control,
	} = useForm({
		resolver: zodResolver(zodSchema),
	});

	const handleFormSubmit: SubmitHandler<any> = (data) => {
		onSubmit(data);
	};

	return (
		<form
			onSubmit={handleSubmit(handleFormSubmit)}
			className="flex w-full max-w-sm flex-col gap-4"
		>
			{fields.map((field) => (
				<div key={field.name} className="grid w-full items-center gap-1.5">
					<Label htmlFor={field.name}>{field.label}</Label>
					<Controller
						name={field.name}
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
};

export default CustomForm;
