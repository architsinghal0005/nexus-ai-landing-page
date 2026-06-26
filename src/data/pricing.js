const pricingMatrix = {
  Starter: {
    base: 29,
    features: ["5 AI Workflows", "Analytics Dashboard", "Email Support"],
  },

  Pro: {
    base: 79,
    features: ["Unlimited Workflows", "Advanced Analytics", "Priority Support"],
  },

  Enterprise: {
    base: 199,
    features: ["Unlimited Everything", "Dedicated AI", "24/7 Support"],
  },
};

export const currencyRates = {
  USD: {
    symbol: "$",
    rate: 1,
  },

  INR: {
    symbol: "₹",
    rate: 83,
  },

  EUR: {
    symbol: "€",
    rate: 0.92,
  },
};

export default pricingMatrix;
