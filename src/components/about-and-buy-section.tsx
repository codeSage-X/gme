export default function AboutAndBuySection() {
  const buySteps = [
    {
      number: "1",
      title: "SET UP A CRYPTO WALLET",
      description:
        "Download a crypto wallet like Phantom. Securely store your recovery phrase to manage GMESTOP 2.0 tokens.",
    },
    {
      number: "2",
      title: "PURCHASE SOLANA (SOL)",
      description:
        "Buy Solana from exchanges like Binance. Transfer it to your wallet to buy GMESTOP 2.0 and cover fees.",
    },
    {
      number: "3",
      title: "CONNECT WALLET TO DEX",
      description:
        "Go to Jupiter, Raydium, or your preferred DEX. Connect your wallet to the platform by following the prompts.",
    },
    {
      number: "4",
      title: "SWAP SOL FOR GMESTOP 2.0",
      description: "Paste the contract address on the DEX. Enter the amount of SOL and confirm the swap transaction.",
    },
    {
      number: "5",
      title: "CONFIRM THE TRANSACTION",
      description: "Wait for blockchain confirmation. GMESTOP 2.0 tokens will then appear in your connected wallet.",
    },
    {
      number: "6",
      title: "SECURE YOUR TOKENS",
      description:
        "Double-check wallet security settings. Store your recovery phrase and private keys securely to protect your tokens.",
    },
  ]

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Custom Textured Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_top,_#400000,_#000000)] ">
        {/* Texture overlay */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>

        {/* Gradient shapes */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-red-600/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-l from-orange-500/15 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-10 w-64 h-64 bg-red-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* ABOUT Section */}
        <div id="about" className="mb-32">
          <div className="text-center md:text-left mb-16">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#F60000] via-[#D66400] to-[#F60000] bg-clip-text text-transparent mb-8 furore">
              ABOUT
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6">
              <p className="text-white text-lg sm:text-xl leading-relaxed font-medium">
                GMESTOP 2.0 is more than just a continuation; it&apos;s a reawakening of the movement that started with the
                legendary GME saga. Born from the chaos and triumph of the original GameStop revolution, GMESTOP 2.0
                reignites the passion, energy, and determination that fueled the fight for financial fairness and
                transparency.
              </p>

              <p className="text-white text-lg sm:text-xl leading-relaxed font-medium">
                This coin represents the next chapter in a story that captivated the world—a story of ordinary people
                standing up against a rigged system and demanding change. GMESTOP 2.0 carries forward the mission to
                decentralize finance, empower individuals, and challenge the status quo that has long favored the few
                over the many.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-white text-lg sm:text-xl leading-relaxed font-medium">
                Our community of Degens, gamers, and retail investors is stronger than ever, united by a shared belief
                in the power of collective action. We&apos;re here to continue the work that was started, to build a future
                where finance is transparent, accessible, and ultimately in the hands of the people.
              </p>

              <p className="text-white text-lg sm:text-xl leading-relaxed font-medium">
                Whether you&apos;re a veteran of the original movement or new to the cause, GMESTOP 2.0 invites you to join
                us in making history. This isn&apos;t just a coin—it&apos;s the reawakening of a revolution, and together, we can
                push the boundaries, break barriers, and shape the future of decentralized finance.
              </p>
            </div>
          </div>
        </div>

        {/* HOW TO BUY Section */}
        <div id="how-to-buy">
          <div className="text-center md:text-left mb-16">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#F60000] via-orange-500 to-red-600 bg-clip-text text-transparent mb-8 furore">
              HOW TO BUY
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buySteps.map((step) => (
              <div key={step.number} className="relative group">
                <div className="bg-gradient-to-br rounded-2xl p-8  hover:border-red-500/50 transition-all duration-300 h-full">
                  {/* Step Number */}
                 <div className="flex items-center mb-6">
                    <div
                        className="step-number-class"
                        data-text={`#${step.number}`}
                    >
                        #{step.number}
                    </div>
                    </div>

                  {/* Step Title */}
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight furore">{step.title}</h3>

                  {/* Step Description */}
                  <p className="text-white text-lg sm:text-xl leading-relaxed font-medium">{step.description}</p>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
