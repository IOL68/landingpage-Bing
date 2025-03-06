'use client';

import { Container } from '@/components/ui/container';
import { Typography } from '@/components/ui/typography';
import { Quote } from 'lucide-react';
import { useEffect, useRef } from 'react';

const testimonials = [
  {
    content: "Thanks so much to Landmark for the wonderful transcriptions-my colleague and I are very pleased with them! Your work has greatly assisted us in moving forward with data analysis and completion of our research project.",
    role: "Professor at a California State University / Verified Researcher"
  },
  {
    content: "The transcript looks great! I'll definitely keep Landmark in mind for future transcription needs.",
    role: "Researcher at University of Arkansas for Medical Sciences / Verified Researcher"                                                                               
  },
  {
    content: "As a researcher engaged in qualitative research, I needed to find a professional transcription service capable of handling level 3 security data. I have been impressed with the quality of the transcripts and the quick turnaround and responses.",
    role: "Landmark's Customer Satisfaction Survey / Verified Researcher"
  }
];

export const TestimonialsSection = () => {
  const titleRef = useRef<HTMLDivElement>(null);
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
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 relative overflow-hidden bg-gradient-to-br from-[#1a1150] via-[#241670] to-[#312b94]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* Noise Effect */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1150] via-transparent to-transparent opacity-80" />
      
      {/* Glow Effects */}
      <div className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <Container className="relative">
        <div 
          ref={titleRef}
          className="text-center mb-8 opacity-0 translate-y-8 transition-all duration-1000 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
        >
          <Typography 
            variant="h2" 
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3 text-center mx-auto"
          >
            Trusted by Leading Researchers
          </Typography>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join thousands of researchers using Landmark for their research transcription needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="relative rounded-xl p-5 bg-white/5 backdrop-blur-sm border border-white/10 opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 hover:bg-white/10 group"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Quote className="w-8 h-8 text-white/20 mb-3 group-hover:text-white/30 transition-colors duration-300" />
              <blockquote className="text-lg font-medium text-white mb-3">
                "{testimonial.content}"
              </blockquote>
              <div>
                <p className="text-sm text-gray-400 mt-0.5">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
