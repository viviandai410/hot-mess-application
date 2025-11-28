"use client"

import { useState } from "react"
import QuizCard from "./quiz-card"
import ResultsCard from "./results-card"

interface Question {
  id: number
  question: string
  answers: string[]
  messPoints: number[]
}

const questions: Question[] = [
  {
    id: 1,
    question: "How many coffee mugs are on your desk right now?",
    answers: ["None, I'm hydrated", "1-2 (normal)", "3-5 (getting there)", "More than I can count"],
    messPoints: [0, 2, 4, 5],
  },
  {
    id: 2,
    question: "When was the last time you did laundry?",
    answers: ["Yesterday", "This week", "Last week...ish", "I don't remember"],
    messPoints: [0, 2, 3, 5],
  },
  {
    id: 3,
    question: "Your email inbox status:",
    answers: ["Organized folders", "Under 100 emails", "100-1000 unread", "What inbox?"],
    messPoints: [0, 1, 3, 5],
  },
  {
    id: 4,
    question: "How many tabs do you have open right now?",
    answers: ["1-5 (neat)", "6-15 (reasonable)", "16-30 (getting spicy)", "My browser is screaming"],
    messPoints: [0, 2, 3, 5],
  },
  {
    id: 5,
    question: "Your hair situation today:",
    answers: ["Fresh & styled", "Acceptable", "Bun disguise mode", "Should probably shower"],
    messPoints: [0, 2, 3, 5],
  },
  {
    id: 6,
    question: "How organized is your workspace?",
    answers: ["Spotless", "Mostly clean", "Organized chaos", "Organized mess"],
    messPoints: [0, 1, 3, 5],
  },
  {
    id: 7,
    question: "Your to-do list looks like:",
    answers: ["On schedule", "Slightly behind", "Very behind", "A fever dream"],
    messPoints: [0, 2, 4, 5],
  },
]

export default function HotMessQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const handleAnswer = (messPoints: number) => {
    const newScore = totalScore + messPoints
    setTotalScore(newScore)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setFinished(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setTotalScore(0)
    setFinished(false)
  }

  if (finished) {
    return <ResultsCard score={totalScore} maxScore={questions.length * 5} onReset={resetQuiz} />
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#d2f1e4] via-[#fbcaef] to-[#e637bf] flex items-center justify-center p-4">
      {/* Decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#f865b0] opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#48304d] opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-[#fbcaef] opacity-30 blur-2xl"></div>
      </div>

      <QuizCard
        questionNumber={currentQuestion + 1}
        totalQuestions={questions.length}
        question={questions[currentQuestion].question}
        answers={questions[currentQuestion].answers}
        messPoints={questions[currentQuestion].messPoints}
        onAnswer={handleAnswer}
      />
    </div>
  )
}
