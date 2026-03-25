'use client'

import { toast } from "sonner";

export const ToasterHandle = (e) => {
    const form = e.target;
    const title = form.title.value;
    const code = form.code.value;

    if(!title.trim() || !code.trim()){
        e.preventDefault();
        toast.error("All fields required!.")
        return;
    }
    toast.promise(
        new Promise((resolve) => setTimeout(resolve, 1000)),
        {
            loading :'Saving...',
            success :'Snippet Saved!.',
            error : 'Something went wrong!.'
        }
    )
}

export const SnippetUpdateToast = (e) => {
    const form = e.target;
    const title = form.title.value;
    const code = form.code.value;

    if(!title.trim() || !code.trim()){
        e.preventDefault();
        toast.error('All Field Required!.');
        return;
    }
    toast.promise(
        new Promise((resolve) => setTimeout(resolve, 1000)),
        {
            loading : 'Updating...',
            success : 'Updated.',
            error : 'Something went wrong!.',
        }
    )
}

export const DeletionToast = () => {
    toast.promise(
        new Promise((_, rejected) => setTimeout(rejected, 1000)),
        {
            loading : 'Deleting...',
            error : 'Snippet Deleted!.',
        }
    )
}  

