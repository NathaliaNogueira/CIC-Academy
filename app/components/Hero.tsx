"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import AnimatedSection from "./AnimatedSection"
import Link from "next/link"


export default function Hero() {
  return (
    <AnimatedSection>
      <section className="pt-12 pb-20 px-6 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100">
        
        <h3 className="text-3xl font-bold tracking-tight text-blue-700 sm:text-5xl mb-6 text-center">
          Plataforma Inteligente de Gestão e Aprendizagem Tributária
        </h3>

        <p className="mt-12 text-lg leading-8 text-gray-600 max-w-4xl mx-auto text-justify">
        Aprimore o conhecimento tributário com trilhas de aprendizagem, módulos interativos e atividades práticas.
        Reduza discrepâncias, fortaleça a conformidade fiscal e desenvolva suas habilidades em gestão tributária de forma estratégica.
        </p>

        <div className="mt-10 flex items-center justify-center">
          <Link href="#pricing-plans">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Comece a Aprender
            </Button>
          </Link>
        </div>


        <div className="mt-16 flex justify-center">
  <div className="transition-all duration-700 ease-in-out hover:scale-105 shadow-2xl rounded-2xl overflow-hidden">
    <Image
      src="/assets/foto_site.png"
      alt="Ilustração da Plataforma de Aprendizagem da Academia CIC: notebook com interface de aprendizagem, livro com conceitos tributários."
      width={800}
      height={600}
      className="rounded-2xl"
    />
  </div>
</div>

      </section>
    </AnimatedSection>
  )
}
