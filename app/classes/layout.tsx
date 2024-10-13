import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
	return <div className="mt-10">{children}</div>;
}
