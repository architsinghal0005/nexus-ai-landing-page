import cog from "../assets/icons/cog-8-tooth.svg";
import chart from "../assets/icons/chart-pie.svg";
import search from "../assets/icons/search.svg";
import link from "../assets/icons/link.svg";
import growth from "../assets/icons/arrow-trending-up.svg";
import sync from "../assets/icons/arrow-path.svg";

const features = [
  {
    id: 1,
    title: "AI Automation",
    description: "Automate repetitive workflows with intelligent AI agents.",
    icon: cog,
    large: true,
    content: [
      "24/7 Automation",
      "Workflow Builder",
      "AI Suggestions",
      "No-Code Integration",
    ],
  },
  {
    id: 2,
    title: "Analytics",
    description: "Real-time dashboards with actionable insights.",
    icon: chart,
    content: ["Live Charts", "Revenue Reports", "Growth Tracking"],
  },
  {
    id: 3,
    title: "Semantic Search",
    description: "Find everything instantly using AI.",
    icon: search,
    content: ["Natural Language", "Fast Search", "Smart Ranking"],
  },
  {
    id: 4,
    title: "Security",
    description: "Enterprise-grade security and compliance.",
    icon: growth,
    content: ["AES-256", "SOC2", "GDPR"],
  },
  {
    id: 5,
    title: "Integrations",
    description: "Connect your favourite tools.",
    icon: link,
    content: ["Slack", "GitHub", "Notion", "Zapier"],
  },
  {
    id: 6,
    title: "Workflow",
    description: "Visual pipeline builder.",
    icon: sync,
    content: ["Trigger", "AI", "Database", "Email"],
  },
];

export default features;
