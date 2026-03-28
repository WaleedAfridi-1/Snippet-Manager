'use server'
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath} from "next/cache";

export const AddSnippet = async (formData) => {
    "use server";

  const title = formData.get("title");
  const code = formData.get("code");

  if (!title.trim() || !code.trim()) return;
  const snippet = await prisma.snippet.create({
    data: {
      title,
      code,
    },
  });

  revalidatePath('/')
  redirect('/')
};


export const UpdateHandle = async (form) => {
  'use server'
  const idcol = form.get('id');
  const id = parseInt(idcol)
  const getTitle = form.get('title');
  const getCode = form.get('code');

  const title = String(getTitle)
  const code = String(getCode)
  if(!title.trim() || !code.trim()) return;
  
  await prisma.snippet.update({
    where:{id},
    data:{
      title,
      code,
    }
  })

  revalidatePath(`/snippet/${id}`)

  redirect(`/snippet/${id}`)
}


export const DeleteSnippet = async (form) => {
    'use server'
    const getId = form.get('id')
    const id = Number(getId); 

    await prisma.snippet.delete({
    where:{
        id,
    },
    
  })
  revalidatePath('/')
  redirect('/')
}

