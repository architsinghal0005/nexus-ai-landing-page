import { useState } from "react";
import features from "../data/features";

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(1);

  return (
    <section id="features" className="bg-[#172B36] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-[#FFC801]">Features</p>

          <h2 className="text-5xl font-bold mt-4">Powerful AI Capabilities</h2>

          <p className="text-gray-300 mt-5 max-w-2xl mx-auto">
            Everything you need to automate, analyze and scale your business.
          </p>
        </div>

        {/* Desktop Bento */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={`
                cursor-pointer rounded-3xl p-8 transition-all duration-300
                ${feature.large ? "lg:col-span-2 lg:row-span-2" : ""}
                ${
                  activeFeature === feature.id
                    ? "border-2 border-[#FFC801] bg-[#114C5A]"
                    : "bg-white/10 border border-white/10"
                }
                hover:scale-[1.02]
              `}
            >
              <div className="mb-6">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12"
                  loading="lazy"
                />
              </div>

              <h3 className="text-3xl font-bold mt-6">{feature.title}</h3>

              <p className="text-gray-300 mt-4">{feature.description}</p>

              {activeFeature === feature.id && (
                <ul className="mt-6 space-y-2">
                  {feature.content.map((item) => (
                    <li key={item}>✔ {item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="rounded-2xl overflow-hidden bg-white/10"
            >
              <button
                onClick={() =>
                  setActiveFeature(
                    activeFeature === feature.id ? 0 : feature.id,
                  )
                }
                className="w-full flex justify-between items-center p-5"
              >
                <span className="font-bold text-lg">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-6 h-6 mr-2"
                    loading="lazy"
                  />
                  {feature.title}
                </span>

                <span>{activeFeature === feature.id ? "−" : "+"}</span>
              </button>

              {activeFeature === feature.id && (
                <div className="px-5 pb-5">
                  <p className="text-gray-300 mb-4">{feature.description}</p>

                  <ul className="space-y-2">
                    {feature.content.map((item) => (
                      <li key={item}>✔ {item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
