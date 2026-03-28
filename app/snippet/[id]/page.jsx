import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoIosHome } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import DeleteButton from "../../../components/DeleteButton";

export const dynamic = "force-dynamic";

const SnippetView = async ({ params }) => {
  const { id } =await params;
  const ids = parseInt(id)
  console.log(typeof ids)
  const baseUrl =
  process.env.NEXT_PUBLIC_URL || "https://snippet-manager-kfuwrgr3i-waleedafridi-1s-projects.vercel.app";
  const res = await fetch(
  `${baseUrl}/api/snippet/${ids}`,
  { cache: "no-store" }
);
  
  const snippet = await res.json()  
  console.log(snippet)
  if (!snippet ) {
  return <div>Snippet not found</div>;
}
  return (
    <div className="flex flex-col gap-10 relative">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold line-clamp-1 md:text-3xl  lg:text-5xl">
          {snippet.title}
        </h1>
        <div className="lg:flex  grid grid-cols-1 gap-4 lg:gap-5 items-center justify-center">
          <div className="flex gap-3 items-center ">
            <DeleteButton id={ids} />

            <Link href={"/"} className="">
              <IoHome className="h-9 w-9 px-2 rounded-full cursor-pointer hover:scale-105 active:scale-95 hover:bg-slate-600 hover:text-gray-100 transition-all ease-in-out duration-200  text-white  bg-gray-800   " />
            </Link>
          </div>

          <Link href={`/snippet/${snippet.id}/edit`}>
            <Button className="px-6 py-4 tracking-wider font-bold cursor-pointer lg:text-xl lg:py-5 ml-5 lg:ml-0">
              Edit
            </Button>
          </Link>
        </div>
      </div>

      <div className="px-3 py-2 lg:px-6 lg:py-4 bg-gray-800 ring-1 ring-white font-mono text-slate-50">
        <pre>{snippet.code}</pre>
      </div>
    </div>
  );
};

export default SnippetView;

