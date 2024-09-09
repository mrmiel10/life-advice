"use client"
import React from 'react'
import { Section } from '@/components/Section'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Info = () => {
  return (
    <Section className='font-caption mb-2 max-w-3xl flex justify-center items-center flex-col'>
    <div>
    <h3 className="font-caption text-2xl font-semibold tracking-tight">
     A <span className='dark:text-primary'>good advice</span> is all it takes to make a big change
</h3>

<p className="leading-5 text-primary/80 dark:text-primary-foreground ">
 Generate  Citation, select a category to receive personalized advice.
</p>
<div className='flex justify-center mt-4'>
<Button className='bg-primary/80 dark:bg-primary'>Generate quote</Button>
</div>
</div>

    </Section>
  )
}

export default Info