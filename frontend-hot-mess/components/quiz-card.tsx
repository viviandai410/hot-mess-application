"use client"

import { Button } from "@/components/ui/button"

interface QuizCardProps {
  questionNumber: number
  totalQuestions: number
  question: string
  answers: string[]
  messPoints: number[]
  onAnswer: (points: number) => void
}

export default function QuizCard({
  questionNumber,
  totalQuestions,
  question,
  answers,
  messPoints,
  onAnswer,
}: QuizCardProps) {
  return (
    <div className="relative z-10 w-full max-w-2xl">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        {/* Progress indicator */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-[#48304d] mb-3">
            Question {questionNumber} of {totalQuestions}
          </p>
          <div className="w-full bg-[#d2f1e4] rounded-full h-2">
            <div
              className="bg-gradient-to-r from-[#f865b0] to-[#e637bf] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#48304d] mb-8 leading-tight">{question}</h2>

        {/* Answer buttons */}
        <div className="space-y-3">
          {answers.map((answer, index) => (
            <Button
              key={index}
              onClick={() => onAnswer(messPoints[index])}
              variant="outline"
              className="w-full justify-start text-left h-auto py-4 px-6 text-lg font-medium border-2 border-[#e637bf] text-[#48304d] hover:bg-[#fbcaef] hover:border-[#f865b0] transition-all duration-200 hover:scale-102"
            >
              <span className="truncate">{answer}</span>
            </Button>
          ))}
        </div>

        {/* Fun footer text */}
        <p className="text-center text-sm text-[#48304d] opacity-60 mt-8">✨ Be honest, we won't judge... much ✨</p>
      </div>
    </div>
  )
}
