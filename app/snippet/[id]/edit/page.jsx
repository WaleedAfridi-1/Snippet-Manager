import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import UpdateSnippet from '../../../../components/UpdateSnippet'
import { UpdateHandle } from '../../../snippets/actions'
import { SnippetUpdateToast } from '../../../../components/ToasterHandle'


const SnippetEdit = async ({params}) => {
    const { id } =await params;
  const ids = Number(id)
  console.log(typeof id)
  const baseUrl =
  process.env.NEXT_PUBLIC_URL || "http://localhost:3000";
  const res = await fetch(
  `${baseUrl}/api/snippet/${id}`,
  { cache: "no-store" }
);
  const snippet = await res.json()

  return (
    <div>
      <div className='flex justify-between '>
        <h1 className='lg:text-5xl text-3xl font-bold tracking-wider'>Edit</h1>
        <Link href={`/snippet/${id}`}>
            <Button variant='destructive' className='h-10 px-3 cursor-pointer ring lg:py-6 lg:px-4 text-lg lg:text-2xl md:text-xl font-bold '>Cancel</Button>
        </Link>
      </div>

      <form action={UpdateHandle} onSubmit={SnippetUpdateToast} className='mt-5 lg:px-30 flex flex-col gap-5'>
        <input type="hidden" name='id' value={snippet.id} />
        <UpdateSnippet snippet={snippet}/>
        <Button type='submit' variant='destructive' className='ring ring-green-700 font-bold lg:text-xl cursor-pointer bg-green-200 text-green-800 hover:bg-green-300'>Save</Button>
      </form>
    </div>
  )
}

export default SnippetEdit
