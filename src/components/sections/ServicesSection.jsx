import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionHeader from '../ui/SectionHeader';
import FeatureCard from '../ui/FeatureCard';

const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Software Consulting",
      description: "Full-stack development, cloud architecture, and scalable solutions. We build enterprise-grade applications that drive business growth.",
      features: ["Cloud Architecture", "Full-Stack Development", "API Design", "DevOps & CI/CD"],
      lead: "Israel Bain"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "AI & Machine Learning",
      description: "Cutting-edge AI solutions from predictive models to computer vision. Specializing in geospatial ML and mineral exploration technology.",
      features: ["Custom ML Models", "Geospatial AI", "Data Pipeline Engineering", "Model Deployment"],
      lead: "Israel Bain"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Mechanical Engineering",
      description: "Expert mechanical design, analysis, and optimization. From CAD modeling to thermal analysis and system integration.",
      features: ["CAD Design", "Thermal Analysis", "System Integration", "Prototyping"],
      lead: "Noah Bain"
    }
  ];

  return (
    <Section id="services">
      <Container>
        <SectionHeader
          title="Our Services"
          subtitle="Comprehensive consulting services backed by deep technical expertise and industry experience"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative">
              <FeatureCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                delay={index * 100}
              />
              {index === 0 && (
                <div className="mt-4 pt-4 border-t border-white border-opacity-10">
                  <p className="text-sm text-gray-400">Lead Consultant</p>
                  <p className="text-northern-green-light font-semibold">{service.lead}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ServicesSection;
