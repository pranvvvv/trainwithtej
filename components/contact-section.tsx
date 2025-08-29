"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("contact")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Build message and open WhatsApp chat to the provided number
    const phone = "+919030005024"
    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProgram: ${formData.program}\nMessage: ${formData.message}`
    const waUrl = `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`
    // Open WhatsApp in new tab (web or app)
    window.open(waUrl, "_blank")

    // brief feedback in UI
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", program: "", message: "" })
    }, 1500)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Hyderabad, Telangana", "India"],
      color: "from-blue-400 to-blue-500",
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 90300 05024", "Available 6 AM - 10 PM"],
  color: "from-emerald-400 to-emerald-500",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["trainwithtej04@gmail.com", "Quick response guaranteed"],
      color: "from-pink-400 to-violet-400",
    },
    {
      icon: Clock,
      title: "Training Hours",
      details: ["Mon-Sat: 6 AM - 10 PM", "Sunday: 7 AM - 8 PM"],
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="contact" className="py-12 sm:py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Ready to start your fitness journey? Contact me today for a free consultation and let's create a
            personalized plan that works for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8"></h3>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
      className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden w-full"
                >
      <CardContent className="p-3 sm:p-5 overflow-hidden">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-foreground mb-2 text-sm sm:text-base">{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p
                        key={detailIndex}
                        className="text-xs sm:text-sm text-muted-foreground whitespace-normal break-words max-w-full"
                      >
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Special Offers */}
            <div className="mt-6 sm:mt-8">
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground text-xs">
                      Special Offer
                    </Badge>
                  </div>
                  <h4 className="font-bold text-foreground mb-2 text-sm sm:text-base">Free Initial Consultation</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Book your first consultation absolutely free! We'll assess your goals, create a preliminary plan,
                    and answer all your questions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Send a Message</h3>

                {isSubmitted ? (
                  <div className="text-center py-6 sm:py-8">
                    <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-emerald-500 mx-auto mb-3 sm:mb-4" />
                    <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2">Message Sent!</h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Thank you for your interest. I'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
          className="border-muted-foreground/20 focus:border-primary text-sm py-2"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
          className="border-muted-foreground/20 focus:border-primary text-sm py-2"
                        />
                      </div>
                    </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
          className="border-muted-foreground/20 focus:border-primary text-sm py-2"
                        />
                      </div>
                      <div>
                        <label htmlFor="program" className="block text-sm font-medium text-foreground mb-2">
                          Interested Program
                        </label>
                        <select
                          id="program"
                          name="program"
                          value={formData.program}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 text-sm border border-muted-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground"
                        >
                          <option value="">Select a program</option>
                          <option value="weight-loss">Weight Loss Program</option>
                          <option value="muscle-building">Muscle Building</option>
                          <option value="personal-training">Personal Training</option>
                          <option value="consultation">Free Consultation</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your fitness goals and any questions you have..."
                        rows={3}
                        className="border-muted-foreground/20 focus:border-primary resize-none text-sm py-2 text-black"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold text-sm sm:text-sm transition-all duration-300 hover:scale-105 py-2"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
