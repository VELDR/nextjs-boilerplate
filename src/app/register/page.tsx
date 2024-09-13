"use client";

import CustomForm from "@/components/shared/custom-form";
import * as z from "zod";

const formSchema = z
	.object({
		username: z
			.string()
			.trim()
			.min(1, { message: "Required" })
			.min(2, { message: "Must be 2 or more characters long" }),
		email: z
			.string()
			.min(1, { message: "This field has to be filled." })
			.email("This is not a valid email."),
		password: z
			.string()
			.min(1, { message: "This field has to be filled." })
			.min(8, { message: "Must be 8 or more characters long" })
			.regex(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
				{
					message:
						"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
				}
			),
		confirmPassword: z
			.string()
			.min(1, { message: "This field has to be filled." }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ["confirmPassword"],
	});

const fields = [
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
];

export default function Register() {
	const handleSubmit = (data: z.infer<typeof formSchema>) => {
		alert(JSON.stringify(data, null, 2));
	};

	return (
		<div className="container flex min-h-screen max-w-2xl flex-col items-center gap-8 divide-y pb-96 pt-10">
			<CustomForm
				fields={fields}
				onSubmit={handleSubmit}
				zodSchema={formSchema}
			/>
		</div>
	);
}
