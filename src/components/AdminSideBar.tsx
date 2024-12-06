"use client";
import Link from "next/link";
import LoginDice from "@/src/components/ui/LoginDice";
import { usePathname } from "next/navigation";

const menuItems = [
	{ title: "Conjuros", link: "/admin/spells", icon: "icon-[lucide--wand-sparkles]" },
	{ title: "Personajes", link: "/admin/players", icon: "icon-[game-icons--elf-helmet]" },
	{ title: "Usuarios", link: "/admin/users", icon: "icon-[heroicons--users-20-solid]" },
];

export default function AdminSideBar() {
	const pathname = usePathname();

	return (
		<div className="w-56 min-h-screen flex flex-col items-center text-white shadow-red-900 dark:shadow-slate-400 shadow-sm">
			<div className="p-10">
				<LoginDice width={200} height={200} />
			</div>

			{menuItems.map((menu, index) => {
				const isActive = pathname === menu.link;

				return (
					<nav
						className={`${
							isActive ? "bg-red-700 shadow-red-800 dark:text-black dark:bg-white" : "shadow-red-600"
						} dark:shadow-slate-900 w-full p-2 text-2xl font-bold shadow-sm pt-4`}
						key={`menu-${index}`}
					>
						<Link href={menu.link} className="space-x-5 p-4">
							<span className={menu.icon} />
							<span>{menu.title}</span>
						</Link>
					</nav>
				);
			})}
			<div className="w-full"></div>
		</div>
	);
}
