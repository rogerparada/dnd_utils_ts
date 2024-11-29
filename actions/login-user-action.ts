"use server";

// import { UserLoginFormSchema } from "@/src/schema";

export async function login(data: unknown) {
	try {
		// const response = UserLoginFormSchema.safeParse(data);
		// if (!response.success) {
		// 	return {
		// 		errors: response.error.issues,
		// 	};
		// }
		// const { email, password } = response.data;
		// await signIn("credentials", {
		// 	email,
		// 	password,
		// 	redirect: false,
		// });
		console.log(data);
		return {
			success: true,
		};
	} catch (error) {
		console.log(typeof error);
		return { error: "Error 500" };
	}
}
