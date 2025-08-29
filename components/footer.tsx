"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Twitter, ArrowUp } from "lucide-react"

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("")

  const handleSubscribe = () => {
    const email = newsletterEmail.trim()
    const emailRegex = /^\S+@\S+\.\S+$/
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address")
      return
    }

    const subject = "Newsletter Subscription"
    const body = `Please subscribe me to the TrainWithTej newsletter.\nEmail: ${email}`
    const mailto = `mailto:trainwithtej04@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      body,
    )}`

    // Try to open user's mail client
    window.location.href = mailto

    // Offer WhatsApp fallback if mail client didn't open (user can choose)
    setTimeout(() => {
      const useWhatsApp = confirm(
        "If your mail client didn't open, click OK to send the subscription via WhatsApp instead.",
      )
      if (useWhatsApp) {
        const waUrl = `https://wa.me/919030005024?text=${encodeURIComponent(
          `Please subscribe me to the newsletter. Email: ${email}`,
        )}`
        window.open(waUrl, "_blank")
      }
    }, 700)
  }
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-secondary/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Train<span className="text-primary">WithTej</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transform your life with personalized fitness programs designed to help you achieve lasting results and
              build healthy habits.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground bg-transparent"
                onClick={() => window.open('https://instagram.com/trainwithtej_', '_blank')}
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Youtube className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Why Choose Us", href: "#why-choose-us" },
                { label: "Process", href: "#process" },
                { label: "Transformations", href: "#transformations" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Weight Loss Program",
                "Muscle Building",
                "Personal Training",
                "Nutrition Guidance",
                "Fitness Assessment",
                "Online Coaching",
              ].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Contact Info</h4>
            <div className="space-y-4"> 
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground text-sm">Hyderabad, Telangana</p>
                  <p className="text-muted-foreground text-sm">India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm">+91 9030005024</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm">trainwithtej04@gmail.com</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-semibold text-foreground mb-3">Stay Updated</h5>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter your email"
                  className="text-sm border-muted-foreground/20 focus:border-primary"
                />
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground px-4">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-muted-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © 2024 TrainWithTej. All rights reserved. | Designed By PRANAV.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollToSection("#contact")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => scrollToSection("#contact")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Terms of Service
            </button>
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
