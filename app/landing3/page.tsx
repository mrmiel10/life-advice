"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

// This would typically come from an API or database
const sampleCitations = [
  { id: 1, text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { id: 2, text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { id: 3, text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
]

export default function CitationInterface() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : sampleCitations.length - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex < sampleCitations.length - 1 ? prevIndex + 1 : 0
    )
  }

  const currentCitation = sampleCitations[currentIndex]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white bg-opacity-90">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-orange-900">
          Inspiring Citations
        </h2>
        <Card className="max-w-3xl mx-auto">
          <CardContent className="pt-6">
            <div className="flex items-start mb-4">
              <Quote className="w-12 h-12 text-orange-600 mr-4 flex-shrink-0" />
              <p className="text-xl text-orange-800 italic">
                {currentCitation.text}
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <p className="text-orange-700 font-semibold">
              - {currentCitation.author}
            </p>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                aria-label="Previous citation"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                aria-label="Next citation"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}