import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TrainingProgramsSection } from "@/components/training-programs-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { ProcessSection } from "@/components/process-section"
import { TransformationsSection } from "@/components/transformations-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TrainingProgramsSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <TransformationsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
