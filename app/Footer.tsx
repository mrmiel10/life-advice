"use client"
import React from 'react'
import Image from 'next/image'
import logo from "../public/logo.png"
import { FooterToggleTheme } from '@/Theme/ThemeToggle'

import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
export const Footer = () => {
  return (
    <footer>
      <div className='px-4 flex flex-col max-md:gap-4'>
      <div className='flex-1 flex justify-center'>
           
           <p className='flex gap-1 text-xl '> Crafted with ❤️ by
            <Link href="#"  className='flex group border-none gap-2 transition-colors'>
            <span className='font-bold'> Mr miel</span>
            <ArrowUpRight
        size={16}
        className=" group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
      />
            </Link>
            {/* <span className='font-bold'> Mr miel</span>  */}
            </p>
        </div>
       <div className=' flex   text-sm items-center justify-center'>
        <div>  &copy; 2024  <span className="font-bold text-primary">Life Advice</span>. All rights reserved</div>
        <div className='flex-1'/>          
         
      
        <div className='flex items-center'>
          <FooterToggleTheme />
            {/* <ul className='flex justify-center'>
                <Link className='hover:text-primary/90' href={"#"}>Faqs</Link>
            </ul> */}
       
           <Image
           width={50}
           height={50}
         
      
          src={logo} className="mt-4 object-contain" alt="logo" />
          
       
        </div>
       </div>
      </div>
 

    </footer>
  )
}
