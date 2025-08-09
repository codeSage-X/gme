"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import revolution from '../assets/revolution.png'
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function HeroSection() {
  const line1Ref = useRef<HTMLSpanElement>(null)
  const line2Ref = useRef<HTMLSpanElement>(null)
  const line3Ref = useRef<HTMLSpanElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()
    
    const fullText = "Join the fight against the system. Together, we're challenging the status quo and taking our power back. Be part of the revolution that's changing the game and sending GMESTOP 2.0 to the moon. Every Degen counts— your voice matters, and your actions make a difference in this epic journey!"

    // Set initial state - hidden with opacity 0 and positioned off screen
    gsap.set([line1Ref.current, line2Ref.current, line3Ref.current], {
      opacity: 0,
      x: (index) => {
        // Line 1: from left (-50%), Line 2: from right (50%), Line 3: from left (-50%)
        return index === 1 ? "50%" : "-50%"
      }
    })

    // Set description initial state
    if (descriptionRef.current) {
      descriptionRef.current.textContent = ""
      gsap.set(descriptionRef.current, { opacity: 1 })
    }

    // Timeline animation
  
    tl.to(line1Ref.current, {
      opacity: 1,
      x: "0%",
      duration: 1,
      ease: "power2.out"
    })
    .to(line2Ref.current, {
      opacity: 1,
      x: "0%",
      duration: 1,
      ease: "power2.out"
    }, "-=0.2")
    .to(line3Ref.current, {
      opacity: 1,
      x: "0%",
      duration: 1,
      ease: "power2.out"
    })
    // Add typing animation after title completes
    .call(() => {
      if (descriptionRef.current) {
        let index = 0
        const typeInterval = setInterval(() => {
          if (descriptionRef.current && index < fullText.length) {
            descriptionRef.current.textContent = fullText.slice(0, index + 1)
            index++
          } else {
            clearInterval(typeInterval)
          }
        }, 30) // Adjust speed (lower = faster typing)
      }
    }, [], "+=0.5") // Start 0.5s after title animations complete

  }, [])

  return (
    <section className="relative min-h-screen bg-[radial-gradient(circle_at_left_top,_#400000,_#000000)] overflow-hidden">
      {/* Background pattern/texture */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>

      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight furore">
                <span ref={line1Ref} className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent inline-block">
                  POWER TO THE
                </span>
                <br />
                <span ref={line2Ref} className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent inline-block">
                  PLAYERS, POWER
                </span>
                <br />
                <span ref={line3Ref} className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent inline-block">
                  TO THE HOLDERS!
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="max-w-2xl mx-auto lg:mx-0">
              <p ref={descriptionRef} className="text-white text-lg sm:text-xl leading-relaxed font-medium">
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-lg px-8 py-6"
                asChild
              >
                <Link href="#how-to-buy">
                  Buy GMESTOP
                </Link>
              </Button>

              <Button
                size="lg"
                className="bg-red-600 border-2 border-[#F60000] hover:bg-red-700 text-white transition-all duration-300 text-lg px-8 py-6"
                asChild
              >
                <Link href="#telegram">
                  Join our Telegram
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative order-first lg:order-last">
            <div className="relative rounded-2xl overflow-hidden  p-1">
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src={revolution}
                  alt="Revolutionary community holding GameStop 2.0 signs"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />

                {/* Overlay gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Floating elements for extra visual appeal */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#000000] to-transparent"></div>
    </section>
  )
}
