import Image from "next/image"
import Link from "next/link"
import logo from "../assets/logo.png" // Adjust the path if your logo is elsewhere

export default function Footer() {
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
    <footer className="py-16 px-4 bg-[radial-gradient(circle_at_left_top,_#000000,_#400000)] ">
      <div className="container mx-auto max-w-6xl">
        {/* Main Footer Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-r[ed-600] via-red-500 to-orange-500 p-8 md:p-12 overflow-hidden mb-8">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/90 via-red-500/90 to-orange-500/90"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Logo */}
              <div className="mb-6">
                <Link href="/" className="inline-block">
                  <Image src={logo} alt="GameStop 2.0" width={300} height={300} className="h-16 w-auto" />
                </Link>
              </div>

              {/* Description */}
              <p className="text-white text-lg sm:text-xl leading-relaxed font-medium max-w-2xl">
                Don&apos;t miss out on the future of finance. Invest in GMESTOP 2.0 now and join a movement that&apos;s rewriting
                the rules. HODL strong, buy more, and be part of the revolution.
              </p>
            </div>

            {/* Right Content - Social Icons */}
            <div className="flex items-center space-x-6">
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

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[#ffffff] font-[300] text-sm">© {new Date().getFullYear()} Copyright property of GMESTOP2.0</p>
        </div>
      </div>
    </footer>
  )
}
