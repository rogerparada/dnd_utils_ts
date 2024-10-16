import React from "react";

type ListItemProps = {
	children: React.ReactNode;
};

export default function ListItem({ children }: ListItemProps) {
	if (Array.isArray(children)) {
		const [title, data] = children;
		return (
			<li className="mb-2">
				<details>
					<summary>{title}</summary>
					<p className="mt-2">{data}</p>
				</details>
			</li>
		);
	}
	return <li>{children}</li>;
}
