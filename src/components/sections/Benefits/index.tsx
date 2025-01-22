'use client'

import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Shield, Brain, FileCheck, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';

const benefits = [
  {
    icon: Shield,
    title: 'Institutional Security',
    problem: 'Research Data Protection',
    solution: 'Enterprise-grade encryption keeps your data safe',
    impact: [
      'Simple Setup',
      'Secure file transfer',
      'Access controls'
    ],
    gradient: 'from-blue-500/10 to-indigo-500/10'
  },
  {
    icon: Brain,
    title: '99% Accuracy',
    problem: 'Human Transcription',
    solution: 'Humans create and review every transcript',
    impact: [
      'Zero hallucinations',
      'Context understanding',
      'Field-specific terminology'
    ],
    gradient: 'from-purple-500/10 to-pink-500/10'
  },
  {
    icon: FileCheck,
    title: 'Research-Ready Format',
    problem: 'Manual Formatting',
    solution: 'Perfectly structured for analysis',
    impact: [
      'United States Based/Native Transcriptionists',
      'Custom timestamps',
      'Various formatting options'
    ],
    gradient: 'from-emerald-500/10 to-teal-500/10'
  },
  {
    icon: Sparkles,
    title: 'Easy Setup',
    problem: 'Ready-to-use platform',
    solution: 'Get to code transcripts',
    impact: [
      'One-click import',
      'Multiple formats',
      'No technical setup'
    ],
    gradient: 'from-amber-500/10 to-orange-500/10'
  }
];

export const BenefitsSection = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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
        threshold: 0.2,
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-br from-[#1a1150]/[0.02] via-[#312b94]/[0.02] to-[#1a1150]/[0.02]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <Container>
        <div className="relative">
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-48 w-48 bg-gradient-to-br from-[#1a1150] to-[#312b94] blur-[120px] opacity-40" />
          </div>
        </div>

        <div className="relative mb-16 text-center">
          <div className="max-w-[800px] mx-auto">
            <Typography 
              variant="h2" 
              className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center"
            >
              <span className="text-[#1a1150]">
                Transform Your Recordings into
              </span>{' '}
              <span className="text-[#312b94]">
                Research-Ready Transcripts
              </span>
            </Typography>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="group relative rounded-xl transition-all duration-700 overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-xl hover:shadow-[#1a1150]/10 border border-white/20 opacity-0 translate-y-8 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-100 group-hover:opacity-80 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-white shadow-md rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 h-6 text-[#1a1150]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#1a1150]/70 mb-1">
                      {benefit.problem}
                    </p>
                    <h3 className="text-xl font-bold text-[#1a1150]">
                      {benefit.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-[#1a1150]/80 mb-6">
                  {benefit.solution}
                </p>
                
                <ul className="space-y-2">
                  {benefit.impact.map((item, i) => (
                    <li key={i} className="text-sm text-[#1a1150]/70 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1a1150]/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
