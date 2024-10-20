"use client";

import { CustomForm, FieldConfig } from "@/components/shared";
import { registerFormSchema } from "@/schemas";
import { z } from "zod";

const fields: FieldConfig[] = [
	{
		name: "username",
		label: "Username",
		type: "text",
	},
	{
		name: "email",
		label: "Email",
		type: "email",
	},
	{
		name: "password",
		label: "Password",
		type: "password",
	},
	{
		name: "confirmPassword",
		label: "Confirm Password",
		type: "password",
	},
	{
		name: "gender",
		label: "Gender",
		type: "radio",
		options: [
			{ value: "male", label: "Male" },
			{ value: "female", label: "Female" },
			{ value: "other", label: "Other" },
		],
	},
	{
		name: "country",
		label: "Country",
		type: "select",
		options: [
			{ value: "usa", label: "United States" },
			{ value: "uk", label: "United Kingdom" },
			{ value: "canada", label: "Canada" },
			{ value: "australia", label: "Australia" },
		],
	},
];

export default function Register() {
	const handleSubmit = (data: z.infer<typeof registerFormSchema>) => {
		alert(JSON.stringify(data, null, 2));
	};

	return (
		<div className="container flex min-h-screen max-w-2xl flex-col items-center gap-8 divide-y pb-96 pt-10">
			<CustomForm
				fields={fields}
				onSubmit={handleSubmit}
				zodSchema={registerFormSchema}
			/>
		</div>
	);
}
