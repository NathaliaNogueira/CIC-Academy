import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function PerformanceCenter() {
  return (
    <section id="performance-center" className="pt-10 pb-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">Centro de Desempenho</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Seu Progresso</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Fundamentos Tributários</span>
                    <span className="text-sm font-medium text-gray-700">75%</span>
                  </div>
                  <Progress value={75} className="w-full [&>div]:bg-blue-600" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Gestão Tributária Inteligente</span>
                    <span className="text-sm font-medium text-gray-700">50%</span>
                  </div>
                  <Progress value={50} className="w-full [&>div]:bg-blue-600" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Compliance</span>
                    <span className="text-sm font-medium text-gray-700">90%</span>
                  </div>
                  <Progress value={90} className="w-full [&>div]:bg-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Painel de Evolução</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Suas habilidades estão melhorando! Continue o bom trabalho.</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Completou 3 módulos este mês</li>
                <li>Melhorou a precisão nos cálculos tributários em 15%</li>
                <li>Reduziu o tempo gasto em tarefas de conformidade em 20%</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
