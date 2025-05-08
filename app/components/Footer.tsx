import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">CIC Academy</h3>
            <p className="text-gray-600">
              Capacitando profissionais tributários com soluções de aprendizagem inteligentes.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#learning-paths" className="text-gray-600 hover:text-blue-600">
                  Trilhas de Aprendizagem
                </Link>
              </li>
              <li>
                <Link href="#training-modules" className="text-gray-600 hover:text-blue-600">
                  Módulos de Treinamento
                </Link>
              </li>
              <li>
                <Link href="#performance-center" className="text-gray-600 hover:text-blue-600">
                  Centro de Desempenho
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contate-nos</h3>
            <p className="text-gray-600">Email: suporte@cicacademy.com</p>
            <p className="text-gray-600">Telefone: (11) 1234-5678</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-2 md:mb-0">
              <Link href="/politica-de-privacidade" className="hover:text-blue-600">
                Política de Privacidade CIC
              </Link>
            </p>
            <p className="text-gray-600 text-sm text-center md:text-right">
              © 2025 CIC Controle Inteligente de Compensações. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

