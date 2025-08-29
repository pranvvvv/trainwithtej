"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Clock, Heart, Target, Shield } from "lucide-react"

export function WhyChooseUsSection() {
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

    const section = document.getElementById("why-choose-us")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const reasons = [
    {
      icon: Trophy,
      title: "Proven Results",
      description: "Over 500+ successful transformations with documented progress and lasting lifestyle changes.",
      highlight: "500+ Transformations",
  color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Users,
      title: "Personalized Approach",
      description:
        "Every program is tailored to your unique goals, fitness level, and lifestyle for maximum effectiveness.",
      highlight: "100% Customized",
  color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Train on your schedule with flexible timing options including early morning and evening sessions.",
      highlight: "24/7 Support",
  color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Heart,
      title: "Holistic Wellness",
      description: "Focus on complete well-being including nutrition, mental health, and sustainable lifestyle habits.",
      highlight: "Mind & Body",
  color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description:
        "Clear milestone tracking and progress monitoring to ensure you stay on track to achieve your goals.",
      highlight: "Results Guaranteed",
  color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Shield,
      title: "Safe & Scientific",
      description:
        "Evidence-based training methods with proper form guidance to prevent injuries and maximize results.",
      highlight: "Injury Prevention",
  color: "from-emerald-500 to-emerald-600",
    },
  ]

  return (
    <section id="why-choose-us" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Why Choose <span className="text-primary">TrainWithTej</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Experience the difference with a trainer who truly cares about your success and is committed to helping you
            achieve lasting results.
          </p>
        </div>

  {/* Reasons Grid - make two columns on small screens for side-by-side cards */}
  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 sm:p-8">
                {/* Icon with Gradient Background */}
                <div className="relative mb-6">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <reason.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="absolute -top-2 -right-2 bg-primary/10 text-primary border-primary/20 font-semibold"
                  >
                    {reason.highlight}
                  </Badge>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-primary transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-black leading-relaxed">{reason.description}</p>

                {/* Hover Effect Border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg`}
                ></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "5+", label: "Years Experience" },
            { number: "98%", label: "Success Rate" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
