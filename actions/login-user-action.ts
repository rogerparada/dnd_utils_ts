import api from "@/src/lib/axios";
import { UserLoginFormSchema } from "@/src/schema";
import { isAxiosError } from "axios";

export async function login(data: unknown) {
	const response = UserLoginFormSchema.safeParse(data);
	if (!response.success) {
		return {
			errors: response.error.issues,
		};
	}
	const url = "/api/v1/login";

	try {
		await api.post(url, response.data);
	} catch (error) {
		if (isAxiosError(error)) {
			return {
				errors: [{ message: error.message }],
			};
		}
	}
}
