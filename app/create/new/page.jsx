import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { AddSnippet, HandleSubmit } from '../../snippets/actions'
import { ToasterHandle } from '../../../components/ToasterHandle'

const CreateSnippetPage =  () => {


  return (
    <div className='lg:px-10 px-5  flex flex-col gap-10'>

        <div className='flex justify-between'>
            <h1 className='text-3xl lg:text-5xl md:text-5xl  font-bold '>Create</h1>
            <Link href={'/'} className='lg:h-1/2'>
            <Button variant={'destructive'} className='lg:h-full cursor-pointer lg:px-6 md:px-5 md:py-2 py-2 ring-1 text-xl font-bold'>Cancel</Button>
            </Link>
        </div>

      <form action={AddSnippet} onSubmit={ToasterHandle}
        className='lg:px-20 flex flex-col gap-3 '>
        <div className='flex flex-col gap-5 '>
            <h1 className='text-2xl lg:text-3xl font-bold tracking-wider '>Title</h1>
            <input type="text" placeholder='Title..' name='title'
            className='ring py-2 px-5 rounded font-mono '/>
        </div>
        
        <div className='flex flex-col gap-5 mt-10'>
            <h1 className='text-2xl lg:text-3xl font-bold tracking-wider '>Code</h1>
            <textarea type="text" placeholder='Code..' rows={8} name='code'
            className='ring py-2 px-5 rounded font-mono '/>
        </div>
        <Button type="submit" className='mt-2 w-full md:py-5 md:text-xl cursor-pointer lg:py-5  lg:text-2xl font-bold tracking-wider'>Create</Button>
      </form>
    </div>
  )
}

export default CreateSnippetPage
