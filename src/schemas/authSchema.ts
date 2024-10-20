import { z } from "zod";

export const registerFormSchema = z
	.object({
		username: z
			.string()
			.trim()
			.min(1, { message: "This field has to be filled." })
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
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*[^\s]).{8,}$/,
				{
					message:
						"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
				}
			),
		confirmPassword: z
			.string()
			.min(1, { message: "This field has to be filled." }),
		gender: z.enum(["male", "female", "other"], {
			message: "Please select a gender",
		}),
		country: z.string().min(1, { message: "Please select a country." }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ["confirmPassword"],
	});
