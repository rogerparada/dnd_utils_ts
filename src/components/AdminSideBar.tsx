import Link from "next/link";
import LoginDice from "@/src/components/ui/LoginDice";

const menuItems = [{ title: "Conjuros", link: "/admin/spells", icon: "icon-[lucide--wand-sparkles]" }];

export default function AdminSideBar() {
	return (
		<div className="w-56 min-h-screen flex flex-col items-center text-white shadow-red-900 shadow-lg">
			<div className="p-10">
				<LoginDice width={200} height={200} />
			</div>

			{menuItems.map((menu, index) => (
				<nav className="w-full p-2 text-2xl font-bold border border-slate-100 shadow-sm" key={`menu-${index}`}>
					<Link href={menu.link} className="space-x-5 p-4 ">
						<span className={menu.icon} />
						<span>{menu.title}</span>
					</Link>
				</nav>
			))}
			<div className="w-full"></div>
		</div>
	);
}
