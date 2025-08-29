"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scale, Dumbbell, User, ArrowRight } from "lucide-react"

export function TrainingProgramsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("services")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const programs = [
    {
      title: "Weight Loss Program",
      description:
        "Comprehensive weight loss program designed to help you shed pounds safely and effectively through personalized nutrition and workout plans.",
      icon: Scale,
      image: "/professional-fitness-trainer-in-gym-setting.png",
      features: ["Personalized meal plans", "Cardio workouts", "Progress tracking", "24/7 support"],
  color: "from-emerald-500 to-emerald-600",
    },
    {
      title: "Muscle Building",
      description:
        "Build lean muscle mass with our structured strength training program, designed for all fitness levels from beginners to advanced athletes.",
      icon: Dumbbell,
      image: "/muscle-building-program-image.png",
      features: ["Strength training", "Protein guidance", "Progressive overload", "Form correction"],
  color: "from-emerald-500 to-emerald-600",
    },
    {
      title: "Personal Training",
      description:
        "One-on-one personalized training sessions tailored to your specific goals, fitness level, and preferences for maximum results.",
      icon: User,
      image: "/personal-training-program-image.png",
    features: ["1-on-1 sessions", "Custom workouts", "Flexible scheduling", "Goal-focused approach"],
  color: "from-emerald-500 to-emerald-600",
    },
  ]

  return (
    <section id="services" className="py-12 sm:py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-black mb-4 sm:mb-6">
            Training Programs <span className="text-primary">Offered</span>
          </h2>
          <p className="text-base sm:text-xl text-black max-w-3xl mx-auto leading-relaxed px-2">
            Choose from our comprehensive range of fitness programs designed to help you achieve your specific health
            and wellness goals.
          </p>
        </div>

  {/* Programs Grid - two columns on small screens */}
  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Background Image */}
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <img
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-80`}></div>

                {/* Icon */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <program.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">{program.title}</h3>
                </div>
              </div>

              <CardContent className="p-4 sm:p-6">
                <p className="text-sm sm:text-base text-black mb-4 sm:mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4 sm:mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs sm:text-sm text-black">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold text-sm sm:text-base transition-all duration-300 group-hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 px-4">
            Not sure which program is right for you? Let's discuss your goals and find the perfect fit.
          </p>
          <Button
            onClick={() => scrollToSection("#contact")}
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105"
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
