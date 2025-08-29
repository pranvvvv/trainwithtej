"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, ClipboardList, Dumbbell, TrendingUp, ArrowRight } from "lucide-react"

export function ProcessSection() {
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

    const section = document.getElementById("process")
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

  const steps = [
    {
      step: "01",
      title: "Free Consultation",
      description:
        "We start with a comprehensive consultation to understand your goals, fitness level, medical history, and lifestyle preferences.",
      icon: MessageCircle,
      details: ["Goal assessment", "Fitness evaluation", "Medical history review", "Lifestyle analysis"],
  color: "from-emerald-500 to-emerald-600",
    },
    {
      step: "02",
      title: "Custom Plan Creation",
      description:
        "Based on your consultation, I create a personalized workout and nutrition plan tailored specifically to your needs and goals.",
      icon: ClipboardList,
      details: ["Personalized workouts", "Nutrition guidelines", "Progress milestones", "Schedule planning"],
  color: "from-emerald-500 to-emerald-600",
    },
    {
      step: "03",
      title: "Training & Guidance",
      description:
        "Begin your transformation journey with regular training sessions, proper form guidance, and continuous support throughout your program.",
      icon: Dumbbell,
      details: ["Regular training sessions", "Form correction", "Technique guidance", "Motivation & support"],
  color: "from-emerald-500 to-emerald-600",
    },
    {
      step: "04",
      title: "Track & Achieve",
      description:
        "Monitor your progress with regular assessments, adjust your plan as needed, and celebrate your achievements along the way.",
      icon: TrendingUp,
      details: ["Progress tracking", "Plan adjustments", "Goal achievement", "Lifestyle maintenance"],
  color: "from-emerald-500 to-emerald-600",
    },
  ]

  return (
    <section id="process" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Your Fitness <span className="text-primary">Journey</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Follow our proven 4-step process designed to take you from where you are now to where you want to be, with
            personalized guidance every step of the way.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card
                  className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-5 sm:p-8 text-center">
                    {/* Step Number */}
                    <div className="relative mb-6">
                      <div
                        className={`w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <step.icon className="h-7 w-7 sm:h-10 sm:w-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-4 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-black mb-6 leading-relaxed text-sm">{step.description}</p>

                    {/* Details List */}
        <div className="space-y-2 mb-6">
                      {step.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
          className="flex items-center justify-center text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {detail}
                        </div>
                      ))}
                    </div>

                    {/* Hover Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg`}
                    ></div>
                  </CardContent>
                </Card>

                {/* Arrow for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 text-primary-foreground" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-card rounded-2xl p-8 shadow-lg border">
            <h3 className="text-xl font-bold text-foreground mb-4">Ready to Start Your Journey?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Take the first step towards your fitness goals today. Book your free consultation and let's create a
              personalized plan that works for you.
            </p>
            <Button
              onClick={() => scrollToSection("#contact")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
