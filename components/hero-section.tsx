"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Phone } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/navtej2.jpg" alt="Fitness gym interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Welcome Text */}
          <p className="text-accent font-medium text-sm sm:text-lg mb-3 sm:mb-4 animate-fade-in-up">
            Hello, Welcome to TrainWithTej!
          </p>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-fade-in-up animate-delay-200">
            Take The First Step
            <br />
            Towards A<br />
            <span className="text-accent">Healthier You!</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-lg text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-300 px-2">
            Join us today and unlock the path to a fitter, healthier, and happier lifestyle with{" "}
            <span className="text-accent font-semibold">TrainWithTej</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center animate-fade-in-up animate-delay-400 px-4">
            <Button
              onClick={() => scrollToSection("#contact")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Request a call back
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-black hover:bg-white hover:text-foreground w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105"
            >
              <a href="tel:+919030005024">
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Get Fit Now
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
