export function shuffleCategoryQuote<T>(array: T[]): T[] {
    let shuffledArray = array.slice(); // Copie du tableau pour ne pas modifier l'original
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Échange des éléments
    }
    return shuffledArray;
  }
export const tabCategoryQuote =[
"life",
"happiness",
"hope",
"success"
]  