import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

// STEP 1: Import your images (adjust the path to your images)
// Images live in `public/assets/`. Reference them by absolute URL paths (served from `/`) instead

const services = [
  {
    category: "Platform & CMS Development",
    items: [
      {
        name: "Custom Platforms",
        description:
          "Bespoke WordPress sites, custom plugins, and unique modules.",
      },
      {
        name: "API & Integration",
        description:
          "Complex APIs connecting online platforms with payment gateways.",
      },
      {
        name: "E-Commerce & Marketplaces",
        description:
          "Robust e-commerce with custom payment and multi-vendor capabilities.",
      },
      {
        name: "Core Technologies",
        description:
          "Mastery of PHP, JavaScript, HTML, CSS, SQL, and JSON scripting.",
      },
    ],
  },
  {
    category: "Modern Web & Application Development",
    items: [
      {
        name: "Frontend Frameworks",
        description:
          "Dynamic, lightning-fast interfaces with React, Next.js, Angular, and Vite.",
      },
      {
        name: "Backend & Full-Stack",
        description:
          "Robust, scalable server-side logic and custom APIs with Node.js and Express.",
      },
      {
        name: "Headless & API-Driven Architecture",
        description:
          "Flexible and future-proof systems using RESTful APIs and GraphQL.",
      },
      {
        name: "Database Solutions",
        description:
          "Optimized data storage with SQL (MySQL, PostgreSQL) and NoSQL (MongoDB).",
      },
    ],
  },
  {
    category: "Performance, Infrastructure & Security",
    items: [
      {
        name: "Speed & Core Web Vitals",
        description:
          "A+ scores via advanced caching, CDNs, and image optimization.",
      },
      {
        name: "Server Architecture & Hosting",
        description:
          "99.9% uptime with strategic migrations to Nginx or OpenLiteSpeed.",
      },
      {
        name: "Security & Compliance",
        description:
          "Robust protocols, SSL, firewalls, and regular security audits.",
      },
    ],
  },
  {
    category: "AI Agent & Automation Development",
    items: [
      {
        name: "Intelligent Customer Support",
        description: "Sophisticated chatbots trained on your knowledge bases.",
      },
      {
        name: "Automated Workflow Agents",
        description:
          "Custom agents for repetitive tasks like reading emails and updating CRMs.",
      },
      {
        name: "Internal Knowledge Systems",
        description:
          "Secure, internal AI agents that act as an institutional memory.",
      },
    ],
  },
];

const tiers = [
  {
    name: "Consulting & Strategy",
    id: "tier-consulting",
    href: "#",
    price: "Project-Based",
    description: "For strategic guidance and architectural planning.",
    features: [
      "Discovery & Strategic Alignment",
      "Technical Architecture Design",
      "Performance & Security Audits",
      "Technology Stack Advisory",
    ],
    mostPopular: false,
  },
  {
    name: "Platform Development",
    id: "tier-development",
    href: "#",
    price: "Retainer",
    description: "For ongoing development and platform builds.",
    features: [
      "Full-Stack Development",
      "CMS & E-Commerce Solutions",
      "API Integration",
      "Regular Progress Reports",
      "Dedicated Project Management",
    ],
    mostPopular: true,
  },
  {
    name: "AI & Automation",
    id: "tier-ai",
    href: "#",
    price: "Custom",
    description: "For bespoke AI agents and automation workflows.",
    features: [
      "Custom AI Agent Development",
      "Workflow Integration (Zapier, etc.)",
      "Automated Ticketing Systems",
      "Internal Knowledge Systems",
      "Post-Launch Support & Training",
    ],
    mostPopular: false,
  },
];

const ServicesPage: React.FC = () => {
  // STEP 2: Create an array of image URLs pointing to `public/assets/`
  const serviceImages = [
    "/assets/serv1.webp",
    "/assets/serv2.webp",
    "/assets/serv3.webp",
    "/assets/serv4.webp",
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-24 sm:py-32 text-center bg-[#02050E]">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Engineering with Intention
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
            We don't just "offer services." We deliver systems with cause. Every
            project is an opportunity to eliminate friction, improve capacity,
            and sharpen decisions.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-6 space-y-24">
          {services.map((serviceCat, index) => (
            <div
              key={serviceCat.category}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                <img
                  // STEP 3: Use the image from the array
                  src={serviceImages[index]}
                  alt={serviceCat.category}
                  className="rounded-2xl object-cover w-full aspect-square shadow-2xl shadow-blue-600/20 border-2 border-blue-900/50"
                />
              </div>
              <div className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
                  {serviceCat.category}
                </h2>
                <dl className="space-y-8">
                  {serviceCat.items.map((item) => (
                    <div key={item.name} className="relative pl-9">
                      <dt className="font-semibold text-white">
                        <CheckIcon
                          className="absolute left-0 top-1 h-6 w-6 text-[#F88F26]"
                          aria-hidden="true"
                        />
                        {item.name}
                      </dt>
                      <dd className="mt-2 text-gray-400">{item.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 sm:py-24 bg-[#02050E]">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-400">
              Engagements
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Flexible Models for Lasting Partnerships
            </p>
          </div>
          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`rounded-3xl p-8 ring-1 xl:p-10 ${
                  tier.mostPopular
                    ? "ring-2 ring-[#F88F26] bg-gray-900/50"
                    : "ring-1 ring-white/10"
                }`}
              >
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className="text-lg font-semibold leading-8 text-white"
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-[#F88F26]/50 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-300">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-white">
                    {tier.price}
                  </span>
                </p>
                <a
                  href="/#/contact"
                  aria-describedby={tier.id}
                  className={`mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    tier.mostPopular
                      ? "bg-[#F88F26] text-white shadow-sm hover:bg-[#D97706] focus-visible:outline-[#F88F26]"
                      : "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white"
                  }`}
                >
                  Enquire
                </a>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-[#F88F26]"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
