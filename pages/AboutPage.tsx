import React from "react";
import FloatingCubes from "../components/FloatingCubes";

const AboutPage: React.FC = () => {
  const processSteps = [
    {
      name: "1. Discovery & Strategic Alignment",
      description:
        "We immerse ourselves in your business—operations, goals, constraints—to define what success looks like with clear metrics and milestones.",
    },
    {
      name: "2. Design & Technical Architecture",
      description:
        "Once the problem is clear, we plan the solution, including system layouts, data flows, technology stacks, and UI/UX wireframes.",
    },
    {
      name: "3. Build & Integration",
      description:
        "Code, integrations, and APIs are developed with testable steps, rigorous version control, and security checks from day one.",
    },
    {
      name: "4. Refinement, Testing & Optimization",
      description:
        "We audit, analyse, and engineer, testing for real-world scenarios to fine-tune performance, harden security, and optimize usability.",
    },
    {
      name: "5. Launch & Post-Launch Support",
      description:
        "We manage deployment carefully and offer support, maintenance, and performance monitoring to ensure your solution remains effective.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center px-6 py-24">
        <FloatingCubes />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            The Thync Philosophy
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300">
            Looking beneath the surface until the root of a problem is clear,
            then designing a solution that stays sound as the organisation
            changes.
          </p>
        </div>
      </section>

      {/* Personal Section */}
      <section className="py-20 sm:py-24 bg-[#02050E]">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1 flex justify-center">
            <img
              src="/assets/charlesduckitt.webp"
              alt="Charles (Thync Founder)"
              className="rounded-full w-64 h-64 lg:w-80 lg:h-80 object-cover border-4 border-blue-800 shadow-2xl shadow-blue-600/20"
            />
            {/* Replace with your image: <img src="/your-image.jpg" ... /> */}
          </div>
          <div className="lg:col-span-2 text-gray-300 text-lg space-y-6">
            <p>
              I've spent decades working with technology and organisations,
              learning to see patterns in how digital systems succeed—or fail.
              Too often, good intentions collapse under their own weight because
              the necessary follow-through is missing.
            </p>
            <p>
              My work is the opposite of that cycle. With broad technical
              knowledge across full-stack development, server management, and
              security architecture, I build the structures, schedules, and
              documentation so that what we create together doesn't just
              survive, but grows stronger with use.
            </p>
            <p>
              The problem is rarely a lack of technical skill. It's a matter of
              philosophy. This is why most of my projects are intimate and
              hands-on. When a challenge requires extra expertise, I bring in
              trusted collaborators whose standards match mine. The outcome is
              always the same: Clear, usable, and built to endure.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Deliberate Process
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Our workflow is transparent and designed so you always know where
              things stand, how decisions were made, and what comes next.
            </p>
          </div>

          <div className="mt-16">
            <img
              src="/assets/about1.webp"
              alt="Our process workflow"
              className="rounded-2xl mx-auto shadow-2xl shadow-blue-600/20 border-2 border-blue-900/50"
            />
          </div>

          <div className="mt-20 max-w-3xl mx-auto space-y-12">
            {processSteps.map((step, index) => (
              <div key={step.name} className="relative pl-12">
                <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#F88F26] text-white font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {step.name}
                  </h3>
                  <p className="mt-2 text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
