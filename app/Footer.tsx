"use client";
import React from "react";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/Section";
export const Footer = () => {
  return (
    <footer>
      <Section className="mt-4 text-sm py-2 flex flex-col gap-2">
        <div className="text-center">
          Copyright &copy; 2024{" "}
          <span className="font-bold text-primary">Life Advice</span>. All
          rights reserved
        </div>

        <div className="flex justify-center">
          <p className="flex gap-1 text-lg ">
            Crafted with ❤️ by
            <Link
              href="https://github.com/mrmiel10"
              className="underline flex group border-none gap-2 transition-colors"
            >
              <span className="font-bold"> Mr miel</span>
              <ArrowUpRight
                size={16}
                className=" group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </Link>
          </p>
        </div>
      </Section>
    </footer>
  );
};
