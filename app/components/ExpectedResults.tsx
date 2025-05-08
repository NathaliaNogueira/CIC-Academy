"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, TrendingUp, ShieldCheck, DollarSign } from "lucide-react"
import AnimatedSection from "./AnimatedSection"

const results = [
  {
    title: "Capacitação e Desenvolvimento",
    description: "Aprimore as habilidades e conhecimentos da sua equipe em gestão tributária.",
    icon: CheckCircle,
  },
  {
    title: "Redução nas Divergências Fiscais",
    description: "Minimize erros e inconsistências em suas declarações fiscais.",
    icon: TrendingUp,
  },
  {
    title: "Elevação do Índice de Conformidade Fiscal",
    description: "Aumente a conformidade fiscal da sua empresa, reduzindo riscos.",
    icon: ShieldCheck,
  },
  {
    title: "Redução dos Custos Operacionais",
    description: "Otimize processos e reduza gastos relacionados à gestão tributária.",
    icon: DollarSign,
  },
]

export default function ExpectedResults() {
  return (
    <AnimatedSection>
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">Resultados Esperados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result) => (
              <Card key={result.title} className="bg-white">
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <result.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-center">{result.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{result.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}

