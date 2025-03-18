import { prisma } from "@/src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

const baseUrl = process.env.BASE_URL;

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;

	const offset = searchParams.get("offset");
	const limit = searchParams.get("limit");

	const count = await prisma.spell.count();

	const spellsWithClasses = await prisma.spell.findMany({
		skip: offset ? +offset : 0,
		take: limit ? +limit : 20,
		include: {
			classes: {
				include: {
					class: true,
				},
			},
		},
	});

	const spells = spellsWithClasses.map((spell) => ({
		...spell,
		classes: spell.classes.map((sc) => sc.class.name),
	}));

	const offsetUrl: number = offset ? Number(offset) + (limit ? Number(limit) : 20) : limit ? Number(limit) + 20 : 20;

	const nextUrl = offsetUrl < count ? `${baseUrl}/api/spells/?offset=${offsetUrl}&${limit ? "limit=" + limit : "limit=20"}` : null;

	const previous = offset ? `${baseUrl}/api/spells/?offset=${offsetUrl - 40}&${limit ? "limit=" + limit : "limit=20"}` : null;

	return NextResponse.json({ count, next: nextUrl, previous, results: spells });
}
