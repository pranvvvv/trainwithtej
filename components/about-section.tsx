"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AnimatedCounter } from "@/components/animated-counter"
import { Award, Users, Target, Heart } from "lucide-react"

export function AboutSection() {
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

    const section = document.getElementById("about")
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

  return (
    <section id="about" className="py-12 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="relative">
              <img
                src="/navtej.jpg"
                alt="NAVTEJ - Professional Fitness Trainer"
                className="rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md mx-auto lg:mx-0"
              />

              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-primary text-primary-foreground rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-bold mb-1">
                    <AnimatedCounter end={5} suffix="+" />
                  </div>
                  <p className="text-xs sm:text-sm font-medium">Years of Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                  Hey, I'm <span className="text-primary">NAVTEJ</span>
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  
As a certified fitness coach, nutritionist , rehab & prehab specialist .I’m passionate about helping people transform their bodies and lives. With 5+ years of hands-on experience and multiple top certifications, I specialize in creating personalized workout programs and customized diet plans designed to achieve sustainable results.

My approach focuses on scientific methods combined with practical strategies to help you:

Lose fat and build muscle effectively

Improve overall health with balanced, high-protein diets

Achieve long-term transformations without extreme restrictions


Through Trainwithtej, I aim to guide you every step of the way with tailored plans, evidence-based strategies, and one-on-one support — ensuring you reach your fitness and health goals faster and smarter.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base text-muted-foreground">
                  <span className="font-semibold text-primary">TrainWithTej</span> is a platform where people can learn,
                  Are you ready to transform your body and lifestyle?
Join me today and start your journey toward becoming the strongest, healthiest, and most confident version of yourself.

                </p>
              </div>

              <Button
                onClick={() => scrollToSection("#contact")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Request a call back
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Stats Section */}
        <div className="mt-12 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {[
            { icon: Award, number: 5, suffix: "+", label: "Years Experience" },
            { icon: Users, number: 85, suffix: "+", label: "Clients Trained" },
            { icon: Target, number: 95, suffix: "%", label: "Success Rate" },
            { icon: Heart, number: 75, suffix: "+", label: "Lives Changed" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100 + 600}ms` }}
            >
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full mb-3 sm:mb-4 mx-auto">
                <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-foreground mb-1 sm:mb-2">
                <AnimatedCounter end={stat.number} suffix={stat.suffix} />
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
