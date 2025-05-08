import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Star, Trophy, Shield } from "lucide-react"

const achievements = [
  { name: "Mestre em Fundamentos Tributários", icon: Star, color: "bg-yellow-100 text-yellow-600" },
  { name: "Campeão de Conformidade", icon: Shield, color: "bg-green-100 text-green-600" },
  { name: "Planejador Estratégico", icon: Trophy, color: "bg-purple-100 text-purple-600" },
]

export default function RecognitionProgram() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">Programa de Reconhecimento</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Suas Conquistas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                {achievements.map((achievement) => (
                  <Badge
                    key={achievement.name}
                    variant="outline"
                    className={`${achievement.color} flex items-center gap-2 px-3 py-1`}
                  >
                    <achievement.icon className="h-4 w-4" />
                    {achievement.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Certificados Digitais</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Demonstre sua expertise com nossos certificados digitais:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Certificação em Fundamentos Tributários</li>
                <li>Certificação em Estratégia Tributária Avançada</li>
                <li>Certificação de Especialista em Tecnologia Tributária</li>
              </ul>
              <div className="mt-6 flex justify-center">
                <Award className="h-24 w-24 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

