"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Rocket, Trophy } from "lucide-react"
import AnimatedSection from "./AnimatedSection"

const plans = [
  {
    name: "Plano Avançado",
    description: "Capacitação Estratégica de Alto Nível",
    icon: Rocket,
    features: [
      "Trilhas de aprendizagem para cada nível de conhecimento e objetivo profissional.",
      "Conteúdo desenvolvido por especialistas reconhecidos em gestão tributária, com ampla experiência prática no mercado.",
      "Material multimídia completo: Conteúdo e materiais disponíveis em vídeos, eBooks e PDFs para acesso fácil e flexível.",
      "Painel de evolução inteligente, com indicadores de progresso e engajamento dos colaboradores.",
      "Acesso contínuo a módulos interativos e atualizados, garantindo aprendizado sempre alinhado com as últimas exigências fiscais e tendências da área.",
      "Certificados digitais ao final de cada trilha, reconhecendo o avanço e incentivando o desenvolvimento contínuo da equipe.",
      "",     ],
    buttonText: "Escolher este plano",
  },
  {
    name: "Plano Expert",
    description: "Capacitação Estratégica de Alto Nível",
    icon: Trophy,
    features: [
      "Trilhas de aprendizagem para cada nível de conhecimento e objetivo profissional.",
      "Conteúdo desenvolvido por especialistas reconhecidos em gestão tributária, com ampla experiência prática no mercado.",
      "Material multimídia completo: Conteúdo e materiais disponíveis em vídeos, eBooks e PDFs para acesso fácil e flexível.",
      "Painel de evolução inteligente, com indicadores de progresso e engajamento dos colaboradores.",
      "Acesso contínuo a módulos interativos e atualizados, garantindo aprendizado sempre alinhado com as últimas exigências fiscais e tendências da área.",
      "Certificados digitais ao final de cada trilha, reconhecendo o avanço e incentivando o desenvolvimento contínuo da equipe.",
      "Soluções CIC para você e sua empresa",
    ],
    buttonText: "Escolher este plano",
    highlighted: true,
  },
]

export default function PricingPlans() {
  return (
    <AnimatedSection>
      <section id="pricing-plans" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Planos</h2>
          <p className="text-lg text-justify text-gray-600 max-w-4xl mx-auto mb-12">
            Encontre o plano ideal para transformar a capacitação da sua equipe em gestão tributária. Com conteúdo
            estratégico, ferramentas práticas e acompanhamento contínuo, sua empresa ganha em conformidade, performance
            e segurança fiscal.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`border-2 ${plan.highlighted ? "border-blue-200" : "border-gray-200"}
                transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-blue-600 
                flex flex-col h-full bg-white`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center mb-4">
                    <div
                      className={`h-16 w-16 rounded-full flex items-center justify-center 
                    ${plan.highlighted ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-800"}`}
                    >
                      <plan.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 text-center">{plan.name}</CardTitle>
                  <CardDescription className="text-lg font-medium text-center mb-4 text-blue-600">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow flex flex-col justify-between">
                  <ul className="space-y-4 mt-6 flex-grow">
                    {plan.features.map((feature, index) =>
                      feature ? (
                        <li key={index} className="flex">
                          <Check className="h-6 w-6 flex-shrink-0 mr-2 text-green-600" />
                          <span
                            className={`text-gray-700 text-justify ${
                              feature === "Soluções CIC para você e sua empresa" ? "font-bold" : ""
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ) : (
                        <li key={index} className="invisible h-6" />
                      )
                    )}
                  </ul>

                  <div className="mt-8">
                    <Button
                      className={`w-full ${plan.highlighted ? "bg-blue-600 hover:bg-gray-900" : "bg-blue-600 hover:bg-gray-900"} 
                      text-white transition-colors duration-300`}
                    >
                      {plan.buttonText}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}
