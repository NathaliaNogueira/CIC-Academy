"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import AnimatedSection from "./AnimatedSection"

const paths = [
  {
    title: "Fundamentos Tributários",
    description: "Domine os conceitos básicos de tributação e construa uma base sólida.",
    level: "Iniciante",
  },
  {
    title: "Estratégias Tributárias Avançadas",
    description: "Aprenda técnicas sofisticadas de planejamento tributário para cenários complexos.",
    level: "Intermediário",
  },
  {
    title: "Integração de Tecnologia Tributária",
    description: "Explore como aproveitar a tecnologia para uma gestão tributária eficiente.",
    level: "Avançado",
  },
]

export default function LearningPaths() {
  const beginner = paths.find((p) => p.level === "Iniciante")
  const others = paths.filter((p) => p.level !== "Iniciante")

  return (
    <AnimatedSection>
      <section id="learning-paths" className="py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
            Trilhas de Aprendizagem
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beginner && (
              <Card key={beginner.title} className="bg-white flex flex-col h-full">
                <CardHeader>
                  <CardTitle>{beginner.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow justify-between">
                  <div className="mb-4 h-[96px] flex items-start pt-8">
                    <p className="text-gray-600">{beginner.description}</p>
                  </div>
                  <p className="text-sm text-blue-600 font-semibold mb-4">
                    Nível: {beginner.level}
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-auto">
                    Iniciar Trilha
                  </Button>
                </CardContent>
              </Card>
            )}

            {others.map((path) => (
              <Card key={path.title} className="bg-white flex flex-col h-full">
                <CardHeader>
                  <CardTitle>{path.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow justify-between">
                  <div className="mb-4 h-[80px] flex items-start">
                    <p className="text-gray-600">{path.description}</p>
                  </div>
                  <p className="text-sm text-blue-600 font-semibold mb-4">
                    Nível: {path.level}
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-auto">
                    Iniciar Trilha
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}
