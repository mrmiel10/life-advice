"use client"
import React from 'react'
import { useTheme } from 'next-themes'

import { MoonIcon,SunIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
export const FooterToggleTheme = () => {
    const {setTheme,theme} = useTheme()
  return (
   <Button
   className='px-2 py-2 w-10 h-10 rounded-full'
   variant={"ghost"}
//    size={"sm"}
   onClick={()=>{
    setTheme(theme === "light" ? "dark" : "light")
   }}
   >
<SunIcon 
    size={40}
    className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
/>
<MoonIcon 
    size={20}
    className='absolute rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100 '
/>
<span className='sr-only'>Toggle Theme</span>
   </Button>
  )
}
export function HeaderToggleTheme() {
    const { setTheme } = useTheme()
  
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-red-500 border-none bg-none" variant="ghost" size="icon">
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0  scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90  scale-0 transition-all dark:rotate-0  dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  