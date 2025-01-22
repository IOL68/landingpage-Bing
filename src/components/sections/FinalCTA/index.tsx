'use client';

import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Icon } from '@/components/ui/Icon';
import { useEffect, useRef } from 'react';

const benefits = [
  "Enterprise-Grade Platform",
  "3-5 Business Days",
  "99% Accuracy Guaranteed",
  "Expert Support",
  "Enterprise-Grade Platform",
  "3-5 Business Days",
  "99% Accuracy Guaranteed",
  "Expert Support",
  "Enterprise-Grade Platform",
  "3-5 Business Days",
  "99% Accuracy Guaranteed",
  "Expert Support"
];

const terms = [
  "No credit card required",
  "Pay as you go",
  "No committment",
  "No credit card required",
  "Pay as you go",
  "No committment",
  "No credit card required",
  "Pay as you go",
  "No committment"
];

const openTypeform = () => {
  // @ts-ignore
  const popup = window.typeformEmbed.makePopup('https://form.typeform.com/to/IZhtU0cB?utm_content=google', {
    mode: 'popup',
    hideHeaders: true,
    hideFooter: true,
    size: 50,
    borderRadius: 20
  });
  popup.open();
};

export const FinalCTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1150] via-[#241670] to-[#312b94]" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{ 
          backgroundImage: 'url("/noise.png")', 
          backgroundRepeat: 'repeat' 
        }} 
      />

      {/* Content */}
      <Container className="relative">
        <div 
          ref={sectionRef}
          className="max-w-4xl mx-auto opacity-0 translate-y-8 transition-all duration-1000 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
        >
          <div className="text-center">
            <Typography 
              variant="h2" 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight mx-auto text-center"
            >
              Join Thousands of Researchers
              <br />
              <span className="bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                Using Landmark
              </span>
            </Typography>
            
            <Typography variant="lead" className="text-gray-300 max-w-2xl mx-auto mb-6 text-lg text-center">
            Keep Your Research Team Moving With Professional Transcription Services
            </Typography>

            {/* Benefits marquee */}
            <div className="relative max-w-full mx-auto mb-8 overflow-hidden">
              <div className="flex items-center gap-8 animate-marquee">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 text-gray-300 whitespace-nowrap"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col items-center gap-4">
              <Button 
                size="lg"
                className="!text-[#1a1150] group relative overflow-hidden px-8 py-3 text-lg font-semibold rounded-full bg-white hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.8),0_0_30px_rgba(255,255,255,0.6),0_0_45px_rgba(255,255,255,0.4)] hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-1000 animate-pulse-glow hover:animate-none after:absolute after:inset-0 after:bg-gradient-to-r after:from-white/0 after:via-white/40 after:to-white/0 after:translate-x-[-200%] hover:after:translate-x-[200%] after:transition-transform after:duration-1000"
                onClick={openTypeform}
              >
                <span className="relative z-10 flex items-center">
                Get your 2-hour sample
                  <Icon 
                    icon={ArrowRight}
                    iconSize="lg"
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </Button>

              {/* Terms marquee - solo visible en móvil */}
              <div className="block sm:hidden relative max-w-full overflow-hidden">
                <div className="flex items-center gap-6 animate-marquee-slow">
                  {terms.map((term, index) => (
                    <span key={index} className="text-gray-400 whitespace-nowrap">
                      {term}
                    </span>
                  ))}
                </div>
              </div>

              {/* Términos para desktop */}
              <Typography variant="small" className="hidden sm:block text-gray-400">
                No credit card required • Pay as you go • No committment
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
