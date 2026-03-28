import { prisma } from "@/lib/prisma";

export const GET = async (req, { params }) => {
    try {
        const id = Number((await params).id);

        const snippet = await prisma.snippet.findUnique({
            where: { id },
        });


        const all = await prisma.snippet.findMany();

        return Response.json(snippet || null);
        
    } catch (error) {
        console.log("API ERROR:", error);

        return new Response(
            JSON.stringify({ error: "Something went wrong" }),
            { status: 500 }
        );
    }
};
