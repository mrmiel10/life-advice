"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import { Section } from '@/components/Section'
import { ButtonQuote } from '@/components/ButtonQuote'
import { tabCategoryQuote } from '@/lib/ShuffleCategory'
import { TypeQuotesResponseSchema } from './CardQuote'
import { useSearchParams } from 'next/navigation'
import { useQueryState } from 'nuqs'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import getQuotes from '@/lib/QueryQuotes'
export const SelectCategoryCitation = ({setQuotes,isLoading}:
  {
    setQuotes:React.Dispatch<React.SetStateAction<TypeQuotesResponseSchema | undefined>>
    isLoading:boolean
    
  }
) => {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn:async (category:string) => await getQuotes(category),

    onSuccess:(data)=>{
      // setQuotes(data)
   queryClient.invalidateQueries({ queryKey: ['quotes'] })
    }
  })
  const [category,setCategory] = useQueryState("categoryQuote",{
    defaultValue:"",
    shallow:false,
    //  throttleMs:500,
    // clearOnDefault: true 

})
  const searchParams = useSearchParams()
  const handleChangeCategoryQuote = (category:string) =>{
    const params = new URLSearchParams(searchParams.toString());
    if(params.has('categoryQuote',category)){
      mutation.mutate(category)
      setCategory("")
    } 
      else{
        mutation.mutate(category)
        setCategory(category)
      } 
  }
    const [displayedBtnQuote,setDisplayBtnQuote] = React.useState(3)
    const [isFull ,setIsFull] = React.useState(false)
    const handleSeeMore = () =>{
        const test = displayedBtnQuote + 3
        if(test >= BUTTONS_QUOTES.length) setIsFull(true)
        
        if((BUTTONS_QUOTES.length - displayedBtnQuote) < 3 ){
            const res = BUTTONS_QUOTES.length - displayedBtnQuote
            setDisplayBtnQuote(displayedBtnQuote + res)
        }
        else  setDisplayBtnQuote(displayedBtnQuote + 3)
       
    }
    const handleSeeLess = () =>{
        const test = displayedBtnQuote - 3 

        if(test <= 3) setIsFull(false)
        if(displayedBtnQuote % 3 === 0)   setDisplayBtnQuote(displayedBtnQuote - 3)
            else {
        const rest = displayedBtnQuote % 3
        setDisplayBtnQuote(displayedBtnQuote - rest)
    }
       
    }
  return (
    // <Section className='max-w-3xl mt-4 '>
    
        <div>
        <div className='flex gap-4 flex-wrap'>
   {BUTTONS_QUOTES.slice(0,displayedBtnQuote).map((btnQuote,index)=>(
    <ButtonQuote
     disabled={isLoading || mutation.isPending}  
    handleChangeCategoryQuote={()=>handleChangeCategoryQuote(btnQuote.content)} key={index} content={btnQuote.content} keyword={btnQuote.keyword} />
   ))}
</div> 
<div className='mt-8'>
 { displayedBtnQuote < BUTTONS_QUOTES.length && !isFull ?(
            <Button 
          
            onClick={handleSeeMore}
           className='bg-primary/80 dark:bg-primpary w-full'
           
            >
                See more categories
            </Button>
 ):null}
   {
   isFull && (
        <Button 
 onClick={handleSeeLess}
className='bg-primary/80 dark:bg-primpary w-full'

 >
     See less categories
 </Button>
    )
   }
</div>
        </div>

   
   
  )
}
const BUTTONS_QUOTES = tabCategoryQuote.map((category,_)=>{ 
  return {
    content:category,
    keyword:category
  }
})
