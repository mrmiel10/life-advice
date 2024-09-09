import { tabCategoryQuote } from "./ShuffleCategory";
import { shuffleCategoryQuote } from "./ShuffleCategory";
import { QuotesResponseSchema } from "./quote.schema";
async function getData(categoryQuote:string) {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
   
      'X-Api-Key':"XbdNnGg5niPufNgMKrFXTg==xX9TbqPaUhMnITa2",
  
      },
    };
  
    const response = await fetch(
   `https://api.api-ninjas.com/v1/quotes?category=${categoryQuote}`,
      options
    )
      .then((response) => response.json())
      .then(QuotesResponseSchema.parse)
      // .catch((err) => console.error(err));
  
    return response;
  }
  
  export default async function getQuotes(categoryQuote:string) {
    const choosenCategoryQuote = categoryQuote === "" ? shuffleCategoryQuote(tabCategoryQuote)[0] : categoryQuote
   
    const data = await getData(choosenCategoryQuote);
    return data;
  }