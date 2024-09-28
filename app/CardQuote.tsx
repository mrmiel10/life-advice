"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight, InfoIcon } from "lucide-react";
import { Quote } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/Section";
import { Spacing } from "@/components/Spacing";

import { useMutation, useQuery } from "@tanstack/react-query";
import * as z from "zod";
import { QuotesResponseSchema } from "@/lib/quote.schema";
import getQuotes from "@/lib/QueryQuotes";
import { searchParamsCache } from "@/lib/utils";
import { useQueryClient } from "@tanstack/react-query";
import { SelectCategoryCitation } from "./SelectCategoryCitation";

import { Skeleton } from "@/components/ui/skeleton";
import CopyPasteButton from "@/components/CopyPasteButton";
import { useCopyToClipboard, useDarkMode } from "usehooks-ts";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";
export type TypeQuotesResponseSchema = z.infer<typeof QuotesResponseSchema>;

export const CardQuote = ({ categoryQuote }: { categoryQuote: string }) => {
  const [quotes, setQuotes] = React.useState<
    TypeQuotesResponseSchema | undefined
  >();
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => {
      const resp = await getQuotes(categoryQuote);
      setQuotes(resp);
      return resp;
    },
    // setQuotes(result)
    queryKey: ["quotes"],
  });
  const router = useRouter();
  console.log(categoryQuote);

  // const queryClient = useQueryClient();
  // const { isDarkMode, toggle, enable, disable} = useDarkMode()
  //console.log(data);
  const mutation = useMutation({
    mutationFn: async () => await getQuotes(categoryQuote),

    onSuccess: async (data) => {
      setQuotes(data);
      // queryClient.invalidateQueries({ queryKey: ['quotes'] })
      /// await new Promise((resolve) => setTimeout(resolve, 900))
    },
  });
  console.log(mutation.data);
  // if(isError || mutation.error) return <p>sssssssss</p>

  return (
    <Section className="max-sm:mt-16 max-w-3xl flex flex-col gap-4 items-center justify-center h-auto ">
      <Button
        disabled={isLoading || mutation.isPending}
        className="bg-primary/80 dark:bg-primary"
        onClick={() => mutation.mutate()}
      >
        Generate quote
      </Button>
      <Card className="w-full bg-card border-accent border dark:bg-card-foreground">
        <CardContent className="pt-4 px-7 pr-3 ">
          {/* {
  isLoading ||
  mutation.isPending ? (
 null
    ):
     isError ||
     mutation.isError ? (
    null
    ):(
      
      <CopyQuote  quote={quotes![0].quote} />
    )} */}

          {/* {quotes && (
  <CopyQuote  quote={quotes![0].quote} />
)} */}

          <div className="flex flex-col gap-4 items-center text-primary ">
            <Quote className="size-12 flex-shrink-0" />
            {isLoading || mutation.isPending ? (
              <SkeletonCardQuote />
            ) : isError || mutation.isError ? (
              <div className="flex gap-2 justify-center items-center">
                <InfoIcon className="size-5" />
                <div>Failed to load or generate quotes.</div>
              </div>
            ) : (
              quotes &&
              quotes.map((q, index) => (
                <>
                  <p className="border-primary border-l-2 pl-6 italic text-primary ">
                    {q.quote}
                  </p>

                  <div className=" font-semibold">
                    - {q.author} /{" "}
                    {q.category[0].toUpperCase() + q.category.slice(1)}
                  </div>
                </>
              ))
            )}
          </div>
        </CardContent>
        {/* <CardFooter className='p-3 pt-0'>
 
   <div className="w-full flex gap-1 ">
<div className='flex-1' />
    <ChangeQuoteBtn text='prev' />
    <ChangeQuoteBtn text='next' />
   
    
   </div>
 </CardFooter> */}
      </Card>
      <div>
        <SelectCategoryCitation
          isLoading={isLoading || mutation.isPending}
          setQuotes={setQuotes}
        />
      </div>
    </Section>
  );
};
export const SkeletonCardQuote = () => {
  return (
    <>
      <Skeleton className="h-24 pl-6 w-full md:h-12 bg-primary/40" />

      <Skeleton className="w-28 h-5 bg-primary/40" />
    </>
  );
};
const CopyQuote = ({ quote }: { quote: string }) => {
  const [copiedText, copy] = useCopyToClipboard();
  return (
    <div className="flex">
      <div className="flex-1" />
      <div
        onClick={() => {
          copy(quote)
            .then(() => {
              toast.success("copied to clipboard!");
            })
            .catch((error) => {
              toast.error("Failed to copy!");
            });
        }}
      >
        <CopyPasteButton className="border-accent bg-none flex items-center justify-center size-4 rounded-md  text-primary hover:text-primary" />
      </div>
    </div>
  );
};
