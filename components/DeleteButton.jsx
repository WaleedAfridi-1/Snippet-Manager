'use client'
import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import { DeleteSnippet } from '../app/snippets/actions';
import { DeletionToast } from './ToasterHandle';
const DeleteButton = ({id}) => {
  return (
    <form action={DeleteSnippet} onSubmit={DeletionToast}>
        <input type="hidden" name='id' value={id} />
        <button type='submit'>
        
        <RiDeleteBinLine  
        className='h-9 w-9 hover:scale-105 ml-5  hover:bg-red-700 hover:text-slate-100 transition-all ease-in-out duration-200 active:scale-95 cursor-pointer  bg-red-500 px-2 py-2 rounded-full text-white'/>
        </button>
    </form>

  )
}

export default DeleteButton
