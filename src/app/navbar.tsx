"use client"

import { Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import logo from "../assets/logo.png"
import { gsap } from "gsap"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const mobileLogoRef = useRef<HTMLImageElement>(null)
  const desktopLogoRef = useRef<HTMLImageElement>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (mobileLogoRef.current) {
      gsap.set(mobileLogoRef.current, { scale: 1.2 })
    }
    if (desktopLogoRef.current) {
      gsap.to(desktopLogoRef.current, { scale: 1.3, duration: 1 })
    }
    // Set initial sidebar position to be hidden
    if (sidebarRef.current) {
      gsap.set(sidebarRef.current, { x: '-100%' })
    }
    if (overlayRef.current) {
      gsap.set(overlayRef.current, { display: 'none' })
    }
  }, [])

  useEffect(() => {
    if (sidebarRef.current && overlayRef.current) {
      if (isOpen) {
        gsap.set(overlayRef.current, { display: 'block' })
        gsap.to(sidebarRef.current, { 
          x: '0%', 
          duration: 1, 
          opacity: 1,
          ease: 'power2.out' 
        })
        gsap.to(overlayRef.current, { 
          backdropFilter: 'blur(4px)', 
          duration: 0.5 
        })
        if (closeButtonRef.current) {
          gsap.to(closeButtonRef.current, {
            rotation: 360,
            duration: 1,
            ease: 'power2.out'
          })
        }
      } else {
        gsap.to(sidebarRef.current, { 
          x: '-100%', 
          duration: 1, 
          ease: 'power2.in',
          opacity: 0,
        })
        gsap.to(overlayRef.current, { 
          backdropFilter: 'blur(0px)', 
          duration: 0.5,
          onComplete: () => {
            if (overlayRef.current) {
              gsap.set(overlayRef.current, { display: 'none' })
            }
          }
        })
        if (closeButtonRef.current) {
          gsap.to(closeButtonRef.current, {
            rotation: 0,
            duration: 1,
            ease: 'power2.in'
          })
        }
      }
    }
  }, [isOpen])

  const navigationLinks = [
    { name: "About", href: "#about" },
    { name: "How to buy", href: "#how-to-buy" },
    { name: "Our story", href: "#our-story" },
  ]

  return (
  <nav className="sticky top-0 z-30 w-full bg-[radial-gradient(circle_at_center,_#400000,_#000000)] px-4 py-2">
      <div className="mx-auto max-w-7xl">
        {/* Mobile Layout */}
        <div className="flex items-center justify-between md:hidden">
          {/* Mobile Menu Button */}
          <Button size="icon" className="text-white" onClick={() => setIsOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>

          {/* Custom Sidebar Overlay */}
          <div 
            ref={overlayRef}
            className="fixed inset-0 z-40 hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Custom Sidebar */}
          <div 
            ref={sidebarRef}
            className="fixed sidebar top-0 left-0 h-full w-3/4 max-w-sm bg-[radial-gradient(circle_at_center,_#400000,_#000000)] z-50 p-6 shadow-lg"
          >
            {/* Close Button */}
            <button 
              ref={closeButtonRef}
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 text-white focus:outline-none"
            >
              <X className="h-8 w-8 stroke-[3]" />
              <span className="sr-only">Close</span>
            </button>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-6 pt-12">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-white hover:text-red-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Logo - Centered */}
          <div className="flex flex-col items-center">
            <Link href="/" className="flex items-center">
              <Image ref={mobileLogoRef} src={logo} alt="GameStop 2.0" width={120} height={60} className="h-12 w-auto" />
                 {/* <Image src={logo} alt={''} fill className="object-cover" priority /> */}
            </Link>
          </div>

          {/* Spacer to balance mobile layout */}
          <div className="w-10"></div>
        </div>

        {/* Desktop Layout - Three Column Grid */}
        <div className="hidden md:grid md:grid-cols-3 md:items-center">
          {/* Left Column - Navigation Links */}
          <div className="flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-red-500 transition-colors duration-200 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Center Column - Logo */}
          <div className="flex justify-center">
            <Link href="/" className="flex items-center">
              <Image ref={desktopLogoRef} src={logo} alt="GameStop 2.0" width={400} height={200} className="h-16 w-auto" />
            </Link>
          </div>

          {/* Right Column - Empty for now, but maintains grid balance */}
          <div className="flex justify-end">{/* Future content like user menu, search, etc. can go here */}</div>
        </div>
      </div>
    </nav>
  )
}
