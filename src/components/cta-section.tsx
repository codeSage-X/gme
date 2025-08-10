
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  const socialLinks = [
    {
      name: "Telegram",
      href: "https://t.me/GMESTOP2",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
    },
    {
      name: "X",
      href: "https://x.com/gme2onsol",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="relative py-16 px-4 bg-cta-section">
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#000000] to-transparent z-10"></div>
   
      <div className="container mx-auto max-w-6xl relative z-20">
        <div className="relative rounded-3xl bg-gradient-to-br from-red-600 via-red-500 to-orange-500 p-8 md:p-12 lg:p-12 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-[##BF0100] via-[#C3620D] to-[#FB0106]"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

          <div className="relative z-10 text-center space-y-8">
            {/* Main Heading */}
            <h2 className="text-3xl  sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight furore">
              DON&apos;T MISS OUT ON GMESTOP 2.0
            </h2>

            {/* Description */}
            <div className="max-w-4xl mx-auto">
              <p className="text-white text-lg sm:text-xl leading-relaxed font-medium">
                GMESTOP 2.0 is your chance to be part of the next wave of financial revolution. Don&apos;t let this
                opportunity slip away—join the movement, secure your stake, and ride the momentum. The future is being
                written now. Get in before it&apos;s too late!
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold text-xl px-12 py-4 h-auto shadow-lg hover:shadow-xl transition-all duration-300 pulse-button"
                asChild
              >
                <Link href="https://www.dextools.io/app/en/solana/pair-explorer/BgUoeCN1faaW9EfoZdzyGeiLndLg5oB2uzm2sLGW5s5Z?t=1754842937073">Buy GMESTOP 2.0</Link>
              </Button>
            </div>

            {/* Social Media Icons */}
            <div className="pt-8">
              <div className="flex justify-center items-center space-x-8">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-red-600 hover:bg-gray-100 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}
