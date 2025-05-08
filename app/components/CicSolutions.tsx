"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart, ShieldCheck, TrendingUp, Trophy } from "lucide-react"
import AnimatedSection from "./AnimatedSection"
import Link from "next/link"


const benefits = [
  {
    title: "Oportunidades Fiscais",
    description:
      "Monitora e atualiza automaticamente saldos credores de tributos federais, alertando sobre créditos disponíveis, ainda não utilizados e próximos da prescrição.",
    icon: TrendingUp,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Exposição ao Risco",
    description:
      "Identifica divergências fiscais, classifica por nível de risco e quantifica impactos, auxiliando na elaboração de planos de ação efetivos.",
    icon: ShieldCheck,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Compliance dos Créditos",
    description:
      "Acompanha se as declarações convergem com os créditos pleiteados, emitindo alertas sobre inconsistências ou oportunidades fiscais.",
    icon: LineChart,
    color: "bg-blue-100 text-blue-600",
  },
]

export default function CicSolutions() {
  return (
    <AnimatedSection>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-full mb-4">
                <Trophy className="h-6 w-6 text-blue-600 mr-2" />
                <span className="text-blue-600 font-medium">Plano Expert Recomendado</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-14">Soluções CIC para você e sua empresa</h2>
            </div>

            <div className="space-y-4 text-gray-600 text-justify mt-8">
              <p>
                Ao contratar o Plano Expert – Capacitação Estratégica em Alto Nível, você garante não apenas trilhas de
                aprendizado aprofundadas, certificações relevantes e desenvolvimento técnico na área de gestão
                tributária, mas também acesso à expertise e tecnologia da CIC Controle.
              </p>
              <p>
                A plataforma da CIC oferece soluções que otimizam o fluxo de caixa, automatizam o controle de tributos
                federais e proporcionam inteligência fiscal em tempo real. Ao integrar aprendizado com prática, sua
                empresa ganha eficiência, conformidade e visão estratégica.
              </p>
              <p>
                Para saber mais sobre os serviços da CIC Controle disponíveis para a sua empresa, acesse:{" "}
                <a
                  href="https://ciccontrole.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  CIC Controle
                </a>
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-center text-gray-800 mb-10">
            Conheça alguns diferenciais que a CIC Controle oferece ao seu negócio:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit) => (
              <Card
                key={benefit.title}
                className="bg-gray-50 border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className={`${benefit.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 p-8 rounded-xl max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Potencialize seus resultados</h4>
                <p className="text-gray-700">
                  Combine aprendizado estratégico com ferramentas de ponta para transformar a gestão tributária da sua
                  empresa.
                </p>
              </div>
              <Link href="#pricing-plans">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    Escolher Plano Expert
                </Button>
            </Link>

            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}
