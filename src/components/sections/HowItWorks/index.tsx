'use client';

import { Container } from '@/components/ui/container';
import { Typography } from '@/components/ui/typography';
import { Upload, Headphones, FileText } from 'lucide-react';
import { useEffect, useRef } from 'react';

const steps = [
  {
    icon: Upload,
    title: 'Upload Your Audio',
    description: 'Upload your interviews in any format',
    details: [
      'Supports all media types',
      'Drag & drop interface',
      'Secure file transfer'
    ]
  },
  {
    icon: Headphones,
    title: 'We Process It',
    description: 'Our expert team transcribes your audio',
    details: [
      'Created by Humans',
      'Human expert review',
      'Quality assurance'
    ]
  },
  {
    icon: FileText,
    title: 'Get Your Transcript',
    description: 'Receive your formatted transcript',
    details: [
      'Coding-ready format',
      'Download in your preferred format',
      'Revisions included, no extra fees'
    ]
  }
];

export const HowItWorksSection = () => {
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
      
      <Container className="relative">
        <div className="text-center mb-12">
          <Typography 
            variant="h2" 
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-center"
          >
            <span className="text-[#1a1150] inline-block">
              Get Your Transcripts in{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a1150] via-[#312b94] to-[#1a1150] decoration-[#312b94] underline-offset-8 decoration-4">
                Three Simple Steps
              </span>
            </span>
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              ref={el => stepsRef.current[index] = el}
              className="relative flex flex-col items-center text-center opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1a1150]/20 via-[#312b94]/20 to-[#1a1150]/20" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1a1150] via-[#312b94] to-[#1a1150] animate-gradient" />
                </div>
              )}
              
              {/* Step Icon */}
              <div className="relative mb-4 transition-transform duration-300 hover:scale-110">
                <div className="absolute inset-0 bg-[#1a1150] blur-2xl opacity-20 animate-pulse" />
                <div className="relative z-10 flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#1a1150] to-[#312b94] rounded-2xl">
                  <step.icon className="w-12 h-12 text-white" />
                </div>
              </div>
              
              {/* Step Content */}
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold text-[#1a1150] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-base mb-4">
                  {step.description}
                </p>
                <div className="flex flex-col items-center gap-1.5">
                  {step.details.map((detail, i) => (
                    <span key={i} className="text-sm text-gray-500">
                      • {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
