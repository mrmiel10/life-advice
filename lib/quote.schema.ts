import * as z from "zod";

export const QuotesResponseSchema = z.array(
    z.object({
        quote:z.string(),
        author:z.string(),
        category:z.string()
    })
)
// export const QuotesResponseSchema= z.object({
//  quotes:QuotesSchema
// })