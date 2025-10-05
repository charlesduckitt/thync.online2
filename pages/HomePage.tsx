import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSpheres from '../components/AnimatedSpheres';

const HomePage: React.FC = () => {
  const features = [
    { name: 'Bespoke Digital Ecosystems', description: 'Custom ERPs to intelligent workflow automations.' },
    { name: 'Web & App Platforms', description: 'Secure, high-performance applications for impeccable usability.' },
    { name: 'Performance & Infrastructure', description: 'Speed, security, and SEO sharpened for user expectations.' },
    { name: 'Strategic Advisory', description: 'Clarity in direction and insight in choice to chart your digital curve.' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 py-24">
        <AnimatedSpheres />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-block bg-blue-900/50 text-blue-300 rounded-full px-4 py-1 text-sm mb-6 border border-blue-700">
            Latest Integration: AI Agents for Workflow Automation
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
            Strategic Digital Engineering for Those who{' '}
            <span className="text-[#F88F26]">Refuse Mediocrity</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
            Your digital presence isn't just another URL. It's a system of influence, capacity, and trust. At Thync, we don't chase trends. We build frameworks that endure.
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
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">What We Deliver</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              From complex platforms to workflow automations, we engineer solutions that are precise, resilient, and built with purpose. We move your operations forward—streamlining, scaling, and differentiating.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {features.map((feature, index) => (
                <article
                  key={feature.name}
                  className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 border border-blue-900/50 hover:border-blue-700 transition-all duration-300"
                >
                  <img src={`https://picsum.photos/seed/feature${index + 1}/800/600`} alt={feature.name} className="absolute inset-0 -z-10 h-full w-full object-cover" />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/60" />
                  <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                      {feature.name}
                  </h3>
                  <p className="text-gray-300 mt-2 text-sm">{feature.description}</p>
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
            If you value rigour, craftsmanship, and long-term thinking, we're ready to partner with you.
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