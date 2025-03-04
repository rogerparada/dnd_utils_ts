import React from "react";

type ListItemProps = {
	children: React.ReactNode;
};

export default function ListItem({ children }: ListItemProps) {
	if (Array.isArray(children)) {
		const [title, data] = children;
		return (
			<li className="mb-2">
				<details className="group">
					<summary className="cursor-pointer font-bold pl-6 relative flex items-center list-none appearance-none">
						<span className="icon-[uiw--plus-square-o] absolute left-0 transition-transform group-open:hidden" />
						<span className="icon-[uiw--minus-square-o] absolute left-0 transition-transform hidden group-open:inline" />
						{title}
					</summary>
					<p className="mt-2">{data}</p>
				</details>
			</li>
		);
	}
	return <li>{children}</li>;
}
