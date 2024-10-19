import Image from "next/image";
import Link from "next/link";

const menuItems = [{ title: "Conjuros", link: "/admin/spells", icon: "icon-[lucide--wand-sparkles]" }];

export default function AdminSideBar() {
	return (
		<div className="w-56 min-h-screen flex flex-col items-center">
			<div className="w-32 h-56 relative p-10">
				<Image src={"/images/Dices/D20.svg"} alt="logo" fill />
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
