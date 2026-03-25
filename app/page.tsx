import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'

// export const dynamic = 'force-dynamic'

async function HomePage() {
  const snippet = await prisma.snippet.findMany()
  return (
    <div className='lg:px-10'>

      <div className='w-full flex justify-between '>

        <div className='flex flex-col '>
          <h1 className='text-3xl lg:text-5xl md:text-5xl font-bold'>Home</h1>
          <p className='text-lg md:text-xl'>Snippet</p>
        </div>

        <div>
          <Link href={'/create/new'}>
            <Button className='h-10 lg:h-1/2 lg:py-6 px-6 lg:px-8 ring ring-white shadow-2xl  cursor-pointer font-bold tracking-wider text-xl md:px-6 md:py-6 '>New</Button>
          </Link>
        </div>
      </div>

      <div className='flex flex-col gap-5 mt-10'>
        {snippet.map(snip => (
          <div key={snip.id} className='h-12 py-4 px-2 shadow ring-1 ring-white  lg:px-6 bg-gray-800 flex justify-between items-center rounded  '>
            <h1 className='lg:text-xl text-white line-clamp-1 font-mono'>{snip.title}</h1>
            <Link href={`/snippet/${snip.id}`}>
              <Button variant={'link'} className='text-white lg:text-xl tracking-wider  cursor-pointer'>View</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
