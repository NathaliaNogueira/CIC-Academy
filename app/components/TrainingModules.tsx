"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, TrendingUp, ShieldCheck } from "lucide-react"
import AnimatedSection from "./AnimatedSection"

const modules = [
  {
    title: "Fundamentos Tributários",
    description: "Construa uma base sólida em conceitos de tributação, apuração de impostos e relatórios financeiros. ",
    icon: BookOpen,
  },
  {
    title: "Gestão Tributária Inteligente",
    description: "Domine estratégias para planejamento tributário eficiente e minimização de impostos.",
    icon: TrendingUp,
  },
  {
    title: "Compliance",
    description: "Mantenha-se atualizado com as leis tributárias e garanta a conformidade regulatória.",
    icon: ShieldCheck,
  },
]

export default function TrainingModules() {
  return (
    <AnimatedSection>
      <section id="training-modules" className="pt-12 py-24 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DgpFlV4DR8RDkU9PTZ66HYU8cv9jwb.png)",
            backgroundPosition: "center 10%",
            backgroundSize: "70%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Módulos de Treinamento</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modules.map((module) => (
              <Card key={module.title} className="bg-gray-50/95">
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <module.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{module.description}</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Explorar Módulo</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}

