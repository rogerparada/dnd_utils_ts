import AdminSideBar from "@/src/components/AdminSideBar";

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex">
			<AdminSideBar />
			<div className="flex-1 p-5">{children}</div>
		</div>
	);
}
