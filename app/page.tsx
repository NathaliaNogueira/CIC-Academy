import Header from "./components/Header"
import Hero from "./components/Hero"
import LearningPaths from "./components/LearningPaths"
import TrainingModules from "./components/TrainingModules"
import ExpectedResults from "./components/ExpectedResults"
import PerformanceCenter from "./components/PerformanceCenter"
import RecognitionProgram from "./components/RecognitionProgram"
import PricingPlans from "./components/PricingPlans"
import CicSolutions from "./components/CicSolutions"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <link href="https://perdcomp.com.br/favicon.ico" rel="shortcut icon"></link>
      <main>
        <Hero />
        <LearningPaths />
        <TrainingModules />
        <ExpectedResults />
        <PerformanceCenter />
        <RecognitionProgram />
        <PricingPlans />
        <CicSolutions />
      </main>
      <Footer />
    </div>
  )
}

