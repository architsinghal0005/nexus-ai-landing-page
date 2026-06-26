import sync from "../assets/icons/arrow-path.svg";
import growth from "../assets/icons/arrow-trending-up.svg";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#172B36] text-white min-h-screen"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      {/* Background Blur */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-[#FFC801]/20 blur-3xl"></div>
      <div className="absolute bottom-10 right-20 h-72 w-72 rounded-full bg-[#114C5A]/30 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 lg:py-40 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium animate-pulse">
            <img src={sync} alt="" className="w-5 h-5" aria-hidden="true" />

            <span>AI Powered Automation</span>
          </div>

          <h1 className="mt-8 text-5xl lg:text-7xl font-bold leading-tight">
            Automate
            <br />
            Everything.
          </h1>

          <p className="mt-8 text-lg text-gray-300 max-w-xl">
            Build faster workflows, analyze data instantly, and scale your
            business with our next-generation AI automation platform.
          </p>

          <div className="mt-10 flex gap-5">
            <button className="bg-[#FFC801] text-black px-7 py-4 rounded-xl font-semibold hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              Get Started
            </button>

            <button className="border border-white/30 px-7 py-4 rounded-xl hover:bg-white/10 transition-all duration-300">
              Live Demo
            </button>
          </div>
        </div>

        {/* Right Dashboard */}
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-56 h-56 bg-[#FFC801]/20 rounded-full blur-3xl"></div>

          <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-8 shadow-2xl transition duration-300 hover:scale-[1.02]">
            <div className="flex justify-between mb-8">
              <div>
                <p className="text-sm text-gray-400">Monthly Growth</p>
                <h2 className="text-4xl font-bold mt-2">+284%</h2>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-[#FFC801] flex items-center justify-center">
                <img
                  src={growth}
                  alt=""
                  className="w-9 h-9"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-4 rounded bg-white/20"></div>

              <div className="h-4 rounded bg-white/10 w-5/6"></div>

              <div className="h-4 rounded bg-white/20 w-2/3"></div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-10">
              <div className="rounded-xl bg-[#114C5A] p-5 text-center">
                <h3 className="text-2xl font-bold">24K+</h3>
                <p className="text-xs mt-2 text-gray-300">Automations</p>
              </div>

              <div className="rounded-xl bg-[#FFC801] text-black p-5 text-center">
                <h3 className="text-2xl font-bold">98.7%</h3>
                <p className="text-xs mt-2">Accuracy</p>
              </div>

              <div className="rounded-xl bg-white/10 p-5 text-center">
                <h3 className="text-2xl font-bold">24/7</h3>
                <p className="text-xs mt-2 text-gray-300">Monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
