"use client"

import { Button } from "@/components/ui/button"

interface ResultsCardProps {
  score: number
  maxScore: number
  onReset: () => void
}

export default function ResultsCard({ score, maxScore, onReset }: ResultsCardProps) {
  const percentage = (score / maxScore) * 100

  const getMessLevel = (percentage: number) => {
    if (percentage < 20) {
      return {
        level: "✨ Golden Child ✨",
        description: "You have it together. Teach us your ways.",
        emoji: "😇",
        color: "#d2f1e4",
      }
    } else if (percentage < 40) {
      return {
        level: "🎯 Mostly Functional",
        description: "You're doing alright! Only minor chaos detected.",
        emoji: "😌",
        color: "#fbcaef",
      }
    } else if (percentage < 60) {
      return {
        level: "🌪️ Organized Chaos",
        description: "Things are getting spicy, but you're managing!",
        emoji: "😅",
        color: "#f865b0",
      }
    } else if (percentage < 80) {
      return {
        level: "🔥 Code Red",
        description: "We're in crisis mode, but you're still standing!",
        emoji: "😵",
        color: "#e637bf",
      }
    } else {
      return {
        level: "💥 TOTAL HOT MESS",
        description: "I don't even know where to start. But I respect the energy.",
        emoji: "🤪",
        color: "#48304d",
      }
    }
  }

  const messInfo = getMessLevel(percentage)

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#d2f1e4] via-[#fbcaef] to-[#e637bf] flex items-center justify-center p-4">
      {/* Decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#f865b0] opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#48304d] opacity-10 blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          {/* Score circle */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-[#f865b0] to-[#e637bf] flex items-center justify-center shadow-lg">
              <div className="text-center">
                <p className="text-5xl font-bold text-white mb-2">{Math.round(percentage)}%</p>
                <p className="text-sm font-semibold text-white opacity-90">
                  {score} / {maxScore}
                </p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-8">
            <p className="text-6xl mb-4">{messInfo.emoji}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#48304d] mb-4">{messInfo.level}</h1>
            <p className="text-xl text-[#48304d] opacity-80 mb-2">{messInfo.description}</p>
          </div>

          {/* Message based on score */}
          <div className="bg-[#fbcaef] rounded-2xl p-6 mb-8 border-2 border-[#f865b0]">
            {percentage < 20 && (
              <p className="text-lg text-[#48304d] font-medium">
                This quiz is optional. Please continue being perfect.
              </p>
            )}
            {percentage >= 20 && percentage < 40 && (
              <p className="text-lg text-[#48304d] font-medium">You're living the dream! Keep that energy going.</p>
            )}
            {percentage >= 40 && percentage < 60 && (
              <p className="text-lg text-[#48304d] font-medium">It's all part of the process. You're doing great! 💪</p>
            )}
            {percentage >= 60 && percentage < 80 && (
              <p className="text-lg text-[#48304d] font-medium">
                Maybe try deep breathing? Or just embrace it. Either way, you're valid.
              </p>
            )}
            {percentage >= 80 && (
              <p className="text-lg text-[#48304d] font-medium">This is a lifestyle at this point. Own it! 🔥</p>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={onReset}
              className="bg-gradient-to-r from-[#f865b0] to-[#e637bf] text-white font-semibold py-6 px-8 rounded-full hover:shadow-lg transition-all duration-200 text-lg"
            >
              Take Again
            </Button>
            <Button
              variant="outline"
              className="border-2 border-[#e637bf] text-[#48304d] font-semibold py-6 px-8 rounded-full hover:bg-[#fbcaef] transition-all duration-200 text-lg bg-transparent"
            >
              Share Results
            </Button>
          </div>

          {/* Footer */}
          <p className="text-sm text-[#48304d] opacity-60 mt-8">Come back tomorrow to check your hot mess level!</p>
        </div>
      </div>
    </div>
  )
}
