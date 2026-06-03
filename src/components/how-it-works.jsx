import { Globe2, Sparkles, Server, Zap } from "lucide-react";

export function HowItWorksSection() {
  const extensions = [
    {
      ext: ".indevs.in",
      description: "The classic choice. Perfect for portfolios, personal sites, and developer identities.",
      icon: Globe2,
      accent: "from-blue-500 to-indigo-500",
      iconColor: "text-blue-500",
      bgHover: "hover:bg-blue-50/50"
    },
    {
      ext: ".sryze.cc",
      description: "Short and memorable. Great for link shorteners, startups, and quick projects.",
      icon: Sparkles,
      accent: "from-orange-400 to-red-500",
      iconColor: "text-orange-500",
      bgHover: "hover:bg-orange-50/50"
    },
    {
      ext: ".ryzedns.org",
      description: "Built for infrastructure. Ideal for nameservers, APIs, and backend services.",
      icon: Server,
      accent: "from-emerald-400 to-teal-500",
      iconColor: "text-emerald-500",
      bgHover: "hover:bg-emerald-50/50"
    },
    {
      ext: ".nx.kg",
      description: "The ultimate short domain. Grab it before it's gone for your most unique ideas.",
      icon: Zap,
      accent: "from-purple-500 to-pink-500",
      iconColor: "text-purple-500",
      bgHover: "hover:bg-purple-50/50"
    }
  ];

  return (
    <section className="w-full py-10 md:py-16 bg-white relative overflow-hidden">
      {/* Background ambient blur */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-slate-100 blur-[100px] rounded-full pointer-events-none opacity-50"></div>

      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16 mb-12 max-w-[1600px] mx-auto relative z-10">

        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Available Namespaces
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-500 leading-relaxed font-medium">
            Four unique extensions. Infinite possibilities. Claim yours instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {extensions.map((item, idx) => (
            <div
              key={idx}
              className={`group relative h-full rounded-2xl bg-white border border-slate-200/60 p-8 ${item.bgHover} transition-all duration-500 overflow-hidden ring-1 ring-black/[0.02] hover:shadow-xl hover:shadow-slate-200/40 hover:-translate-y-1`}
            >
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-8 bg-white ring-1 ring-slate-200 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <item.icon className={`w-6 h-6 ${item.iconColor}`} strokeWidth={2} />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 tracking-tight">
                    {item.ext}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm md:text-base font-medium">
                    {item.description}
                  </p>
                </div>
                
                <div className="mt-8">
                  <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${item.accent} transition-all duration-500 group-hover:w-full`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
