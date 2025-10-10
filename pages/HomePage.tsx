import React from "react";
import { Link } from "react-router-dom";
import AnimatedSpheres from "../components/AnimatedSpheres";
import homeHeroImage from "../assets/home-hero.webp";
import featureImage1 from "../assets/home1.webp";
import featureImage2 from "../assets/home2.webp";
import featureImage3 from "../assets/home3.webp";
import featureImage4 from "../assets/home4.webp";
import siteLogo from "../assets/logo.png"; // <-- Make sure path is correct

const HomePage: React.FC = () => {
  const features = [
    {
      name: "Bespoke Digital Ecosystems",
      description: "Custom ERPs to intelligent workflow automations.",
      image: featureImage1,
    },
    {
      name: "Web & App Platforms",
      description:
        "Secure, high-performance applications for impeccable usability.",
      image: featureImage2,
    },
    {
      name: "Performance & Infrastructure",
      description: "Speed, security, and SEO sharpened for user expectations.",
      image: featureImage3,
    },
    {
      name: "Strategic Advisory",
      description:
        "Clarity in direction and insight in choice to chart your digital curve.",
      image: featureImage4,
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 py-24">
        <img
          src={homeHeroImage}
          alt="Abstract digital art"
          className="absolute inset-0 w-full h-full object-cover object-left md:object-center z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <AnimatedSpheres />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          {" "}
          {/* Added flex and items-center */}
          {/* LOGO: Moved and styled for crisp display above text */}
          <img
            src={siteLogo}
            alt="Thync logo"
            // Adjusted classes: no opacity, auto margins for horizontal centering, margin-bottom for spacing
            className="mb-8 w-32 md:w-48 lg:w-64 z-20" // <-- Adjusted styling here
          />
          <div className="inline-block bg-blue-900/50 text-blue-300 rounded-full px-4 py-1 text-sm mb-6 border border-blue-700">
            Latest Integration: AI Agents for Workflow Automation
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
            Strategic Digital Engineering for Those who{" "}
            <span className="text-[#F88F26]">Refuse Mediocrity</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
            Your digital presence isn't just another URL. It's a system of
            influence, capacity, and trust. At Thync, we don't chase trends. We
            build frameworks that endure.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="px-8 py-4 text-lg font-semibold text-white bg-[#F88F26] rounded-full hover:bg-[#D97706] transition-colors duration-300 shadow-lg shadow-[#F88F26]/30"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* What We Deliver Section */}
      <section className="py-20 sm:py-32 bg-[#02050E]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              What We Deliver
            </h2>
            <p className="mt-6 text-xl md:text-2xl leading-9 text-gray-300">
              From complex platforms to workflow automations, we engineer
              solutions that are precise, resilient, and built with purpose. We
              move your operations forward—streamlining, scaling, and
              differentiating.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {features.map((feature, index) => (
              <article
                key={feature.name}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-6 pb-6 pt-56 sm:pt-40 lg:pt-56 border border-blue-900/50 hover:border-blue-700 transition-all duration-300"
              >
                <img
                  src={feature.image}
                  alt={feature.name}
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />

                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/60" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="absolute inset-x-6 top-1/2 z-10">
                  <h3 className="text-xl md:text-2xl font-semibold leading-7 text-white">
                    {feature.name}
                  </h3>
                  <p className="text-gray-300 mt-2 text-base md:text-lg leading-7">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let's build something that lasts.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-300">
            If you value rigour, craftsmanship, and long-term thinking, we're
            ready to partner with you.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="px-8 py-4 text-lg font-semibold text-white bg-[#F88F26] rounded-full hover:bg-[#D97706] transition-colors duration-300 shadow-lg shadow-[#F88F26]/30"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
