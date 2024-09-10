import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Anek_Telugu } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "./Footer";
import { Spotlight } from "@/components/Spotlight";
import { ThemeProvider } from "@/Theme/ThemeProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { Toaster as Sonner } from "sonner";
import { CircleX } from "lucide-react";
import { CircleCheckIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Life Advice",
  description: "Find the Life Advice who will change your daily.",
  
};
const AnekTelugu = Anek_Telugu({ subsets: ["latin"],
  variable:"--font-caption"
 });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en"  >
      
      <body 
      className={cn(
         GeistSans.variable,
         GeistMono.variable,
         AnekTelugu.variable,
        "flex flex-col font-sans min-h-screen "
      )}
      
      >
           <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill=""
      />
       <ThemeProvider
        attribute="class"
         defaultTheme="dark" 
         enableSystem
         disableTransitionOnChange
         >
            <ReactQueryProvider >
            <Header />
        {children}
        <Footer />
    </ReactQueryProvider>
     
        </ThemeProvider>
        
        <Sonner
            toastOptions={{
              classNames: {
                closeButton: "",
                title: "text-sm",
                content: "border-[1.5] border-green-500",
                default: "text-blue-500",
                icon: "size-4",

                success:
                  "bg-success text-success-foreground border border-success text-green-500 ",
                error: " bg-destructive text-destructive",
              },
            }}
            closeButton

            className=""
            icons={{
              info: <CircleX className="" />,
              error: <CircleX className="" />,
              success: <CircleCheckIcon className="" />,
            }}
          />
        </body>
      
    </html>
  );
}
