import { useMemo, useState } from "react";

import pricingMatrix, { currencyRates } from "../data/pricing";

export default function Pricing() {
  const [currency, setCurrency] = useState("USD");
  const [billing, setBilling] = useState("Monthly");

  const plans = useMemo(() => {
    return Object.entries(pricingMatrix).map(([name, plan]) => {
      let price = plan.base;

      if (billing === "Annual") {
        price = price * 12 * 0.8;
      }

      price *= currencyRates[currency].rate;

      return {
        name,
        features: plan.features,
        price: Math.round(price),
      };
    });
  }, [currency, billing]);

  return (
    <section id="pricing" className="bg-[#F1F6F4] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-[#114C5A]">Pricing</p>

          <h2 className="text-5xl mt-4 font-bold">
            Choose a plan that scales with your business. Upgrade or downgrade
            anytime.
          </h2>
        </div>

        {/* Controls */}

        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="px-5 py-3 rounded-xl border"
          >
            <option>USD</option>

            <option>EUR</option>

            <option>INR</option>
          </select>

          <div className="flex bg-gray-200 rounded-full p-1">
            <button
              onClick={() => setBilling("Monthly")}
              className={`px-6 py-2 rounded-full transition-all ${
                billing === "Monthly"
                  ? "bg-[#114C5A] text-white"
                  : "text-gray-600"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling("Annual")}
              className={`px-6 py-2 rounded-full transition-all ${
                billing === "Annual"
                  ? "bg-[#114C5A] text-white"
                  : "text-gray-600"
              }`}
            >
              Annual
            </button>
          </div>
          {billing === "Annual" && (
            <div className="flex justify-center mt-4 w-full">
              <span className="bg-[#FFC801] text-black px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                🎉 Save 20% with Annual Billing
              </span>
            </div>
          )}
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
rounded-3xl p-8 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:rotate-[1deg]
${
  plan.name === "Pro"
    ? "bg-[#114C5A] text-white border-4 border-[#FFC801] scale-105"
    : "bg-white"
}
`}
            >
              {plan.name === "Pro" && (
                <div className="mb-4">
                  <span className="bg-[#FFC801] text-black px-4 py-2 rounded-full font-bold text-sm">
                    ⭐ Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-3xl font-bold">{plan.name}</h3>

              <div className="flex items-end gap-2 mt-6">
                <span className="text-3xl">
                  {currencyRates[currency].symbol}
                </span>

                <span className="text-6xl font-bold transition-all duration-300">
                  {plan.price}
                </span>
              </div>

              <p
                className={`mt-2 ${
                  plan.name === "Pro" ? "text-gray-200" : "text-gray-500"
                }`}
              >
                {billing === "Monthly" ? "/month" : "/year"}
              </p>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs
  ${
    plan.name === "Pro" ? "bg-[#FFC801] text-black" : "bg-green-500 text-white"
  }`}
                    >
                      ✓
                    </div>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className="mt-10 w-full
rounded-xl
py-4
font-bold
bg-[#FFC801]
text-black
hover:scale-105
transition-all
duration-300
"
              >
                Start Free Trial
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
