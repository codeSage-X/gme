
import Image from "next/image"
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"
import img6 from "../assets/img6.png"


export default function OurStorySection() {
  const storyCards = [
    // Row 1
    {
      id: "beginning",
      title: "THE BEGINNING",
      description:
        "It all began with a struggling video game retailer. GameStop. Retail investors saw an opportunity to challenge Wall Street, sparking a movement in January 2021.",
      image: img1,
      alt: "GameStop storefront with game displays",
    },
    {
      id: "short-squeeze",
      title: "THE SHORT SQUEEZE",
      description:
        "Retail investors united to drive up GME's stock price, triggering a massive short squeeze. Hedge funds that bet against GameStop lost billions overnight.",
      image: img2,
      alt: "Stock performance chart showing dramatic price increase",
    },
    // Row 2
    {
      id: "community-power",
      title: "THE POWER OF THE COMMUNITY",
      description:
        "The movement spread like wildfire on social media. Communities like r/WallStreetBets became the epicenter of retail revolution, joined by millions to fight back against financial giants.",
      image:img3,
      alt: "Social media community discussion interface",
    },
    {
      id: "fallout",
      title: "THE FALLOUT",
      description:
        "The GME saga exposed flaws in the financial system, leading to trading halts, congressional hearings, and even congressional hearings. The world took notice of the power of retail investors.",
      image: img4,
      alt: "News media coverage and financial reports",
    },
    // Row 3
    {
      id: "legacy",
      title: "THE LEGACY",
      description:
        "The GME story didn't end with the short squeeze. It inspired a new era of retail investor empowerment, challenging traditional financial systems and paving the way for the future of the game.",
      image: img5,
      alt: "Space scene with rockets and moon representing going to the moon",
    },
    {
      id: "gmestop-2",
      title: "ENTER GMESTOP 2.0",
      description:
        "GMESTOP 2.0 is the reawakening of this movement. It brings that same spirit, but the next chapter in the ongoing fight for financial fairness, decentralization, and the power of the people.",
      image: img6,
      alt: "Hands holding GMESTOP 2.0 logo in space setting",
    },
  ]

  return (
    <section id="our-story" className="  relative py-20 px-4 overflow-hidden bg-[radial-gradient(circle_at_right_bottom,_#000000,_#000000)]">
     {/* top gradient */}
       <div className=" absolute top-0 left-0 right-0 h-60 bg-gradient-to-t from-[#000000] to-transparent"></div>
         {/* bottom gradient */}
        <div className=" custom-texture1 absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-[#000000] to-transparent"></div>
      {/* Background */}
      <div className="absolute inset-0 ">
        {/* Texture overlay */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        {/* Gradient accent */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-red-600/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="text-center md:text-left mb-16 px-4 sm:px-6 md:px-8 lg:px-0">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#F60000] via-orange-500 to-[#F60000] bg-clip-text text-transparent mb-8 furore">
            OUR STORY SO FAR!
          </h2>
        </div>

        {/* Story Cards Grid */}
        <div className="space-y-12 ">
          {/* Row 1 - The Beginning */}
        <div className="bg-[#1c1a1a] md:p-4 lg:p-8 xl:p-8 2xl:p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8 lg:px-4 xl:px-4 2xl:px-4 items-stretch">
            {storyCards.slice(0, 2).map((card) => (
                <div key={card.id} className="group flex flex-col">
                <div
                    className="bg-[#151414] rounded-2xl overflow-hidden border border-14 border-[#151414] 
                            transition-all duration-300 shadow-lg shadow-black/40 flex flex-col flex-grow"
                >
                    {/* Image */}
                    <div className="relative h-90 overflow-hidden mb-3 md:mb-6">
                    <Image
                        src={card.image || "/placeholder.svg"}
                        alt={card.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-2xl"
                    />
                    <div className="absolute bg-[#151414] via-transparent to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="p-4 bg-[#2e3035] rounded-2xl flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">{card.title}</h3>
                    <p className="text-white text-lg sm:text-xl leading-relaxed font-medium flex-grow">
                        {card.description}
                    </p>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>

          {/* Row 2 - Community & Fallout */}
          <div className="bg-[#1c1a1a] md:p-4 lg:p-8 xl:p-8 2xl:p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8 lg:px-4 xl:px-4 2xl:px-4 items-stretch">
              {storyCards.slice(2, 4).map((card) => (
                <div key={card.id} className="group flex flex-col">
                  <div
                    className="bg-[#151414] rounded-2xl overflow-hidden border border-14 border-[#151414] 
                               transition-all duration-300 shadow-lg shadow-black/40 flex flex-col flex-grow"
                  >
                    {/* Image */}
                    <div className="relative h-90 overflow-hidden mb-3 md:mb-6">
                      <Image
                        src={card.image || "/placeholder.svg"}
                        alt={card.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-2xl"
                      />
                      <div className="absolute bg-[#151414] via-transparent to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="p-4 bg-[#2e3035] rounded-2xl flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">{card.title}</h3>
                      <p className="text-white text-lg sm:text-xl leading-relaxed font-medium flex-grow">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
         
         {/* Row 3 - Legacy & GMESTOP 2.0 */}     
            <div className="bg-[#1c1a1a] md:p-4 lg:p-8 xl:p-8 2xl:p-8 rounded-2xl">
    <div className="grid md:grid-cols-2 gap-8 lg:px-4 xl:px-4 2xl:px-4 items-stretch">
      {storyCards.slice(4, 6).map((card) => (
        <div key={card.id} className="group flex flex-col">
          <div
            className="bg-[#151414] rounded-2xl overflow-hidden border border-14 border-[#151414] 
                       transition-all duration-300 shadow-lg shadow-black/40 flex flex-col flex-grow"
          >
            {/* Image */}
            <div className="relative h-90 overflow-hidden mb-3 md:mb-6">
              <Image
                src={card.image || "/placeholder.svg"}
                alt={card.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-2xl"
              />
              <div className="absolute bg-[#151414] via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-4 bg-[#2e3035] rounded-2xl flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">{card.title}</h3>
              <p className="text-white text-lg sm:text-xl leading-relaxed font-medium flex-grow">
                {card.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

        </div>
      </div>
    </section>
  )
}
