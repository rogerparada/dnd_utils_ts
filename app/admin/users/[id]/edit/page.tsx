import EditUserForm from "@/src/components/users/forms/EditUserForm";
import UserForm from "@/src/components/users/forms/UserForm";
import { prisma } from "@/src/lib/prisma";
import { redirect } from "next/navigation";

const getUser = async (id: string) => {
	return await prisma.user.findUnique({ where: { id } });
};

export default async function EditUserPage({ params }: { params: { id: string } }) {
	const id = params.id;
	const user = await getUser(id);

	if (!user) redirect("/admin/users");

	return (
		<div>
			<EditUserForm>
				<UserForm user={user} />
			</EditUserForm>
		</div>
	);
}
