"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, ArrowLeft, ArrowRight, Calendar, TrendingDown, Zap } from "lucide-react"

export function TransformationsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("transformations")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const transformations = [
    
    {
      name: "Dr.Naveen Kumar",
      age: 28,
      program: "Weight Loss",
      duration: "8 months",
      weightLoss: "15 kg muscle gain",
      afterImage: "/dr.naveen kumar.jpg",
      results: ["Gained 15kg muscle", "Increased strength", "Better posture", "Enhanced confidence"],
    },
   
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      age: 42,
      program: "Weight Loss",
      rating: 5,
      image: "/indian-man-headshot.png",
      quote:
        "tej completely transformed my approach to fitness. His personalized program helped me lose 30kg in 8 months. The best part is that I've maintained my weight for over a year now!",
      results: "Lost 30kg in 8 months",
    },
    {
      name: "Anita Reddy",
      age: 29,
      program: "Muscle Building",
      rating: 5,
      image: "/indian-woman-professional-headshot.png",
      quote:
        "I never thought I could build muscle as a woman, but tej's guidance proved me wrong. I'm stronger than ever and feel incredibly confident in my own skin.",
      results: "Gained 8kg lean muscle",
    },
    {
      name: "Vikram Singh",
      age: 38,
      program: "Personal Training",
      rating: 5,
      image: "/indian-man-fitness-enthusiast-headshot.png",
      quote:
        "Working with tej has been life-changing. Not only did I achieve my fitness goals, but I also learned sustainable habits that I'll carry for life.",
      results: "Complete lifestyle transformation",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="transformations" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Real <span className="text-primary">Transformations</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            See the incredible results our clients have achieved through dedication, proper guidance, and our proven
            fitness programs.
          </p>
        </div>

  {/* Transformations Grid - single column on extra-small screens, two on small, three on large */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {transformations.map((transformation, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                {/* Single Image (combined) */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={transformation.afterImage || "/dr.naveen kumar.jpg"}
                    alt={`${transformation.name} result`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 border-emerald-200">
                      Result
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-black">{transformation.name}</h3>
                      <p className="text-sm text-black">Age {transformation.age}</p>
                    </div>
                    <Badge variant="outline" className="border-primary text-primary">
                      {transformation.program}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-sm text-black">
                      <Calendar className="h-4 w-4 text-primary mr-2" />
                      {transformation.duration}
                    </div>
                    <div className="flex items-center text-sm text-black">
                      <TrendingDown className="h-4 w-4 text-primary mr-2" />
                      {transformation.weightLoss}
                    </div>
                  </div>

                  <div className="space-y-2">
                    {transformation.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-sm text-black">
                        <Zap className="h-3 w-3 text-primary mr-2" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Section */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            What Our <span className="text-primary">Clients Say</span>
          </h3>

          <div className="relative max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl bg-card">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Client Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                    />
                  </div>

                  {/* Testimonial Content */}
                  <div className="flex-1 text-center md:text-left">
                    <Quote className="h-8 w-8 text-primary mb-4 mx-auto md:mx-0" />
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed italic">
                      "{testimonials[currentTestimonial].quote}"
                    </p>

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h4 className="font-bold text-foreground text-lg">{testimonials[currentTestimonial].name}</h4>
                        <p className="text-sm text-muted-foreground">
                          Age {testimonials[currentTestimonial].age} • {testimonials[currentTestimonial].program}
                        </p>
                        <p className="text-sm text-primary font-semibold">{testimonials[currentTestimonial].results}</p>
                      </div>

                      <div className="flex items-center justify-center md:justify-start">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
