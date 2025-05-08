import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-blue-600">
      <div className="w-full px-4 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-2xl text-white">CIC Academy</span>
        </Link>

        <nav className="flex-1 flex justify-center space-x-10 text-base font-medium">
          <Link href="#learning-paths" className="text-white hover:text-gray-300">
            Trilhas de Aprendizagem
          </Link>
          <Link href="#training-modules" className="text-white hover:text-gray-300">
            Módulos de Treinamento
          </Link>
          <Link href="#performance-center" className="text-white hover:text-gray-300">
            Centro de Desempenho
          </Link>
        </nav>

        <div className="flex items-center">
          <Image
            src="/assets/logo.svg" 
            alt="Logo da CIC"
            width={60} 
            height={60}
          />
        </div>
      </div>
    </header>
  )
}
