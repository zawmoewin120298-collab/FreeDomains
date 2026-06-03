import { Fragment } from "react";
import { Terminal, ShieldCheck, Eye, Users, Key, Server, Database, Globe } from "lucide-react";
import { Globe3D } from "./ui/3d-globe";

const sampleMarkers = [
  { lat: 40.7128, lng: -74.006, src: "https://assets.aceternity.com/avatars/1.webp", label: "New York" },
  { lat: 51.5074, lng: -0.1278, src: "https://assets.aceternity.com/avatars/2.webp", label: "London" },
  { lat: 35.6762, lng: 139.6503, src: "https://assets.aceternity.com/avatars/3.webp", label: "Tokyo" },
  { lat: -33.8688, lng: 151.2093, src: "https://assets.aceternity.com/avatars/4.webp", label: "Sydney" },
  { lat: 48.8566, lng: 2.3522, src: "https://assets.aceternity.com/avatars/5.webp", label: "Paris" },
  { lat: 28.6139, lng: 77.209, src: "https://assets.aceternity.com/avatars/6.webp", label: "New Delhi" },
  { lat: 55.7558, lng: 37.6173, src: "https://assets.aceternity.com/avatars/7.webp", label: "Moscow" },
  { lat: -22.9068, lng: -43.1729, src: "https://assets.aceternity.com/avatars/8.webp", label: "Rio de Janeiro" },
  { lat: 31.2304, lng: 121.4737, src: "https://assets.aceternity.com/avatars/9.webp", label: "Shanghai" },
  { lat: 25.2048, lng: 55.2708, src: "https://assets.aceternity.com/avatars/10.webp", label: "Dubai" },
  { lat: 1.3521, lng: 103.8198, src: "https://assets.aceternity.com/avatars/12.webp", label: "Singapore" }
];

const features = [
  {
    icon: Terminal,
    title: "Developer Friendly",
    subtitle: "Built for builders",
    description: "Manage records through our intuitive dashboard or automate workflows via API. Bring your own nameservers, integrate with your preferred hosting providers, and stay in complete control.",
    accent: "#3b82f6", // blue
  },
  {
    icon: ShieldCheck,
    title: "Abuse & Safety",
    subtitle: "Protecting the namespace",
    description: "Automated detection systems and a dedicated Abuse & Safety team actively investigate and remove phishing, malware, spam, and other malicious activity. Repeat offenders are permanently removed from the platform.",
    accent: "#ef4444", // red
  },
  {
    icon: Eye,
    title: "Transparency",
    subtitle: "Clear policies, fair decisions",
    description: "Abuse reports are handled through a transparent and documented process. Enforcement actions are guided by published policies, with fair appeal options available to legitimate users.",
    accent: "#10b981", // emerald
  },
  {
    icon: Users,
    title: "For Communities",
    subtitle: "Perfect for growing ideas",
    description: "Whether you're building an open-source project, student organization, non-profit initiative, community platform, or personal portfolio, Stackryze Domains provides a trusted foundation to get started.",
    accent: "#f59e0b", // amber
  },
  {
    icon: Key,
    title: "Ownership & Control",
    subtitle: "Your domain, your choice",
    description: "Use our native DNS platform or connect to external providers such as Cloudflare. No vendor lock-in, no forced services—just complete control over your domain and records.",
    accent: "#8b5cf6", // violet
  },
  {
    icon: Server,
    title: "Infrastructure",
    subtitle: "Reliable by design",
    description: "Powered by globally distributed infrastructure with continuous monitoring, redundancy, and high availability to ensure dependable DNS performance and rapid resolution worldwide.",
    accent: "#64748b", // slate
  },
  {
    icon: Database,
    title: "Data Protection",
    subtitle: "Privacy through resilience",
    description: "Your data is protected across self-hosted, geographically distributed systems designed for security, reliability, and long-term resilience. We minimize dependencies and prioritize user trust at every layer.",
    accent: "#06b6d4", // cyan
  },
  {
    icon: Globe,
    title: "Open Internet",
    subtitle: "Access without gatekeepers",
    description: "We believe everyone deserves access to a trustworthy online identity. By lowering barriers to entry while maintaining strong security standards, we help make the internet more open, accessible, and empowering for all.",
    accent: "#d946ef", // fuchsia
  }
];

export function MissionSection() {
  return (
    <section className="w-full bg-white border-b border-slate-100 [clip-path:inset(0)]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 pt-8 pb-10 md:pt-10 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start relative">

          {/* Left: Scrollable Stacked Content */}
          <div className="relative pb-0">

            {[ 
              { isIntro: true },
              ...features.map(f => ({ isIntro: false, ...f }))
            ].map((block, idx, arr) => (
              <Fragment key={idx}>
                <div
                  className="sticky w-full bg-white pt-8 pb-8 min-h-[65vh]"
                  style={{ 
                    zIndex: 10 + idx, 
                    top: "35vh"
                  }}
                >
                  <div className="relative z-10 bg-white pr-4">
                    {block.isIntro ? (
                      <>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
                          Who are we?
                        </h2>
                        <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                          <p>
                            We are a small team of passionate developers building an open, accessible, and community-driven namespace for the modern internet.
                          </p>
                          <p>
                            Providing completely free domain names for open-source projects, communities, and individuals to launch ideas without financial barriers.
                          </p>
                          <p>
                            Enjoy fast and simple domain management, robust built-in security with automated abuse prevention, and absolutely zero hidden fees or upsells.
                          </p>
                        </div>
                      </>
                    ) : (
                      <div className="flex gap-6 items-start">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ring-1 ring-slate-100 shadow-sm mt-1"
                          style={{ backgroundColor: `${block.accent}15`, color: block.accent }}
                        >
                          <block.icon className="w-8 h-8" strokeWidth={2} />
                        </div>
                        <div className="space-y-2 flex-1">
                          <div>
                            <h3 className="text-slate-900 font-extrabold text-2xl md:text-3xl tracking-tight">{block.title}</h3>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mt-1">{block.subtitle}</p>
                          </div>
                          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                            {block.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* White Tail to hide previous content */}
                  <div className="absolute top-full left-0 right-0 h-[150vh] bg-white pointer-events-none z-0"></div>
                </div>
                {idx < arr.length - 1 && (
                  <div className="h-[50vh] w-full pointer-events-none" />
                )}
              </Fragment>
            ))}

          </div>

          {/* Right: Floating Globe Illustration (Sticky) */}
          <div 
            className="flex items-center justify-center lg:justify-end w-full lg:sticky pb-32 lg:pb-0"
            style={{ 
              top: "35vh",
              height: "65vh"
            }}
          >
            <div className="relative w-full max-w-[600px] h-[600px] flex items-center justify-center">
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

              {/* The Globe */}
              <div className="relative z-10 w-full h-full">
                <Globe3D
                  className="h-full w-full"
                  markers={sampleMarkers}
                  config={{
                    textureUrl: "https://unpkg.com/three-globe@2.31.0/example/img/earth-blue-marble.jpg",
                    showAtmosphere: false,
                    bumpScale: 1.0,
                    autoRotateSpeed: 0.4,
                  }}
                  onMarkerClick={(marker) => console.log("Clicked:", marker.label)}
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute top-12 right-12 bg-white/90 backdrop-blur-md border border-slate-200 px-4 py-2 rounded-full shadow-lg z-40">
                <p className="font-semibold text-slate-700 text-xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  Connected World
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
