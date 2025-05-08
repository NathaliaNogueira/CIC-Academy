import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Academia CIC - Plataforma Inteligente de Gestão e Aprendizagem Tributária",
  description:
    "Aprimore seu conhecimento tributário com trilhas de aprendizagem personalizadas, módulos interativos e experiências gamificadas.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-100`}>{children}</body>
    </html>
  )
}



import './globals.css'