"use client"
import React from 'react'
import { Section } from '@/components/Section'
import { Spacing } from '@/components/Spacing'
const page = () => {
  return (
    <main className='min-h-screen'>
        <Spacing size='sm' />
         <Section className='max-w-3xl'>
 <h3 className=" max-md:text-4xl text-5xl font-extrabold tracking-tight md:text-5xl">
 About <span className='text-primary'>Life Advice</span>

    </h3>
   </Section>
   <Spacing size='sm' />
   <Section className='max-w-3xl max-md:text-base text-lg'>
    <div className='first-letter:max-md:text-3xl first-letter:text-4xl first-letter:font-bold'>
    Welcome to Life Advice, where we believe that good advice can transform your life. Our mission is to provide you with pratical advice to help you overcome life&apos;s challenges, achieve your goals, and live a fulfilling life.
    </div>
   
   </Section>
   <Spacing size='sm' />
   <Section className='max-w-3xl text-lg'>
    <div className='first-letter:max-md:text-3xl first-letter:text-4xl first-letter:font-bold'> This app is designed to have a real impact on your life. We&apos;ll help you:</div>

 <div className="font-caption px-8 flex-col flex max-md:gap-4 gap-2  mt-4">
  {HELPS_LISTINGS.map((help,index)=>(
    <p className='flex items-center gap-2' key={index}><span className='text-sm'>👉</span>{help}</p>
  ))}


 </div>
   </Section>
   <Spacing size="md"   />
    </main>
  
  )
}

export default page
const HELPS_LISTINGS = [
  "Find your path and achieve your goals",
  "Strengthen your relationships and build deeper connections",
  "Develop your confidence and self-esteem",
 
]