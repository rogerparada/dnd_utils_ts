import NewUserForm from "@/src/components/users/forms/NewUserForm";
import UserForm from "@/src/components/users/forms/UserForm";

export default function NewUserPage() {
	return (
		<div>
			<NewUserForm>
				<UserForm />
			</NewUserForm>
		</div>
	);
}
