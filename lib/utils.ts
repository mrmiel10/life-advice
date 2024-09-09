import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import{createSearchParamsCache} from "nuqs/server"
import {parseAsInteger, parseAsString} from "nuqs/server"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export type PageProps<T = never> = {
  params:T,
  searchParams:Record<string,string | string[] | undefined>
}
export const searchParamsCache = createSearchParamsCache({
  categoryQuote:parseAsString.withDefault(""),

})