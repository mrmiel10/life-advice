
import { Section } from "@/components/Section";
import Link from "next/link";
import { Spacing } from "@/components/Spacing";
import TextRotate from "@/components/TextRotate";
import { CardQuote } from "./CardQuote";

import { PageProps } from "@/lib/utils";
import { searchParamsCache } from "@/lib/utils";
export default function Home(
  {
    params,
    searchParams,
  }:PageProps
) {
  const paramSearch = searchParamsCache.parse(searchParams);
  const categoryQuote = searchParamsCache.get("categoryQuote")
  const text = [
"Start your path to a better life today with personalized advice tailored just for you.",
"At Life Advice, we believe in small steps leading to big changes. Let us guide you on that path.",
"Looking for inspiration? Life Advice is here to provide the guidance you need to navigate life's challenges."

  ]
  return (
    <main className="min-h-screen h-full w-full" >
   
 <Spacing size="md" />
 <Section className="max-w-3xl  flex flex-col">
 <h3 className=" text-4xl font-extrabold tracking-tight md:text-5xl">
 Find the <span className="text-primary">Life Advice</span> who will change your <span className="dark:text-primary"> daily.</span>

    </h3>
  
    <div className="max-w-xl mt-2  h-fit relative justify-start flex text-primary/80 dark:text-primary-foreground">
      <TextRotate text={text} />
   
    </div>

 </Section>
 <div className="my-10">
 <Spacing size="sm"   />
 </div>

<CardQuote categoryQuote={categoryQuote} />


<Spacing size="md"   />

    </main>
  );
}



//https://img.freepik.com/vecteurs-libre/conception-modele-logo-communication_23-2149881433.jpg?ga=GA1.1.1406962067.1699765209&semt=ais_hybrid
//https://medium.com/@ecarina.gonzalez/react-query-integration-with-next-js-are-you-ready-7433568356f2