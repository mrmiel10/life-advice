"use client";
import React from "react";
import { Section } from "./Section";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";

import { ModeToggle } from "@/Theme/ThemeToggleDropDown";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ToggleTheme } from "@/Theme/ThemeToggle";
export const Header = () => {
  const pathname = usePathname();
  const navLinks = [
    {
      content: "Home",
      href: "/",
    },
    {
      content: "About",
      href: "/about",
    },
  ];
  return (
    <header className="">
      <Section className="flex items-center">
        <Image src={logo} className="mt-4 size-14 object-contain" alt="logo" />

        <div className="flex-1" />
        <nav>
          <ul className="flex items-center gap-2">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={clsx("hover:text-accent", {
                  "text-accent": pathname === link.href,
                })}
              >
                {link.content}
              </Link>
            ))}
          </ul>
        </nav>
        <div className="ml-4">
          <ToggleTheme />
          {/* 
      <SunIcon size={20} className='scale-100 dark:scale-0' />
      <MoonIcon size={20} className='scale-0 dark:scale-100'  /> */}
        </div>
      </Section>
    </header>
  );
};
