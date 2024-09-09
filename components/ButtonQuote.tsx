"use client"
import React from 'react'
import { Button } from './ui/button'
import { ArrowUpRight } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useQueryState } from 'nuqs'
export const ButtonQuote = ({content
  ,
  keyword,
  handleChangeCategoryQuote
}:ButtonQuoteProps) => {
  const [category,setCategory] = useQueryState("categoryQuote",{
    defaultValue:"",
    shallow:false,
    //  throttleMs:500,
    // clearOnDefault: true 

})
  // const searchParams = useSearchParams()
  // const handleChangeCategoryQuote = (category:string) =>{
  //   const params = new URLSearchParams(searchParams.toString());
  //   if(params.has('categoryQuote',content)) setCategory("")
  //     else setCategory(category)
  // }
  return (
    <Button 
    className='bg-primary/80 dark:bg-primary group gap-2 transition-colors'
    onClick={()=>handleChangeCategoryQuote(content)}
    
    >
        <span>{content}</span>
      <ArrowUpRight
        size={16}
        className=" group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
      />
    </Button>
  )
}
export type ButtonQuoteProps = {
  content:string,
  keyword:string,
  handleChangeCategoryQuote:(category:string) =>void
}
